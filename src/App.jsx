import React, { useEffect, useRef, useState } from "react";

import fish1 from "./assets/fish1.png";
import fish2 from "./assets/fish2.png";
import fish3 from "./assets/fish3.png";
import fish4 from "./assets/fish4.png";
import fish5 from "./assets/fish5.png";
import fish6 from "./assets/fish6.png";
import fish7 from "./assets/fish7.png";
import fish8 from "./assets/fish8.png";
import fish9 from "./assets/fish9.png";
import fish10 from "./assets/fish10.png";

const FISHES = [
  fish1, fish2, fish3, fish4, fish5,
  fish6, fish7, fish8, fish9, fish10,
];

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [currentFish, setCurrentFish] = useState(FISHES[0]);
  const [playedStr, setPlayedStr] = useState("0d 0h 0m 0s");
  const [autoClicker, setAutoClicker] = useState(false);
  const [confettis, setConfettis] = useState([]);
  const rippleRef = useRef(null);
  const startAtRef = useRef(Date.now());
  const intervalsRef = useRef([]);
  const lastClickAtRef = useRef(0);
  const fishRef = useRef(null);
  const confettiTimerRef = useRef(null);
  useEffect(() => {
    const t = setInterval(() => {
      const diff = Date.now() - startAtRef.current;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setPlayedStr(`${d} hari, ${h} jam, ${m} menit, ${s} detik`);
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const evaluateAutoClicker = () => {
    const arr = intervalsRef.current;
    if (arr.length < 8) return false;
    const recent = arr.slice(-8);
    const mean = recent.reduce((a,b)=>a+b,0)/recent.length;
    const variance = recent.reduce((a,b)=>a + Math.pow(b-mean,2),0)/recent.length;
    const std = Math.sqrt(variance);
    if (mean < 60) return true;
    if (mean < 160 && std < 22) return true;
    return false;
  };
  const handleClick = (e) => {
    const now = Date.now();
    const last = lastClickAtRef.current;
    if (last !== 0) {
      const diff = now - last;
      intervalsRef.current.push(diff);
      if (intervalsRef.current.length > 40) intervalsRef.current.shift();
      const detected = evaluateAutoClicker();
      if (detected) setAutoClicker(true);
    }
    lastClickAtRef.current = now;
    spawnRipple(e.clientX, e.clientY);
    const newCount = clicks + 1;
    setClicks(newCount);
    if (newCount % 5 === 0) {
      changeRandomFish();
    }
    if (newCount % 10 === 0) {
      burstEffect();
    }
  };
  const changeRandomFish = () => {
    if (FISHES.length <= 1) return;
    let i;
    let tries = 0;
    do {
      i = Math.floor(Math.random() * FISHES.length);
      tries++;
    } while (FISHES[i] === currentFish && tries < 10);
    setCurrentFish(FISHES[i]);
  };
  const spawnRipple = (x,y) => {
    const node = document.createElement("div");
    node.className = "ripple";
    node.style.left = x + "px";
    node.style.top = y + "px";
    node.style.background = "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.55), rgba(0,200,255,0.08))";
    document.body.appendChild(node);
    setTimeout(()=> node.remove(), 700);
  };
  const burstEffect = () => {
    if (fishRef.current) {
      fishRef.current.classList.remove("effect");
      void fishRef.current.offsetWidth;
      fishRef.current.classList.add("effect");
    }
    const n = 28;
    const pieces = [];
    for (let i=0;i<n;i++){
      const left = Math.floor(30 + Math.random()*40); 
      const size = 6 + Math.random()*14;
      const delay = Math.random() * 400;
      const rotation = Math.random()*360;
      const colors = ["#ff4d6d","#ffd166","#4dd0e1","#a29bfe","#6ee7b7","#ff7ab6"];
      const color = colors[Math.floor(Math.random()*colors.length)];
      pieces.push({ id: `${Date.now()}-${i}`, left, size, delay, color, rotation });
    }
    setConfettis(pieces);
    if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
    confettiTimerRef.current = setTimeout(()=> setConfettis([]), 2200);
  };
  useEffect(()=> {
    return ()=> {
      if (confettiTimerRef.current) clearTimeout(confettiTimerRef.current);
    };
  },[]);

  return (
    <div className="app" onClick={handleClick}>
      {}
      <div className="hud">
        <div style={{fontWeight:700}}>Played</div>
        <div style={{marginTop:6, fontSize:13}}>{playedStr}</div>
        <hr style={{margin:"8px 0", border:"none", borderTop:"1px solid rgba(255,255,255,0.08)"}}/>
        <div style={{display:"flex",justifyContent:"space-between", alignItems:"center"}}>
          <div style={{fontSize:13}}>Auto Clicker</div>
          <div style={{fontWeight:800}}>{autoClicker ? "TRUE" : "FALSE"}</div>
        </div>
      </div>

      {}
      <div className="center-col" aria-hidden>
        <div className="counter" title="total clicks">{clicks}</div>

        <img
          ref={fishRef}
          id="fish"
          className="fish"
          src={currentFish}
          alt="fish"
          draggable={false}
          onDragStart={(e)=> e.preventDefault()}
        />

        <div className="subtext"></div>
      </div>

      {}
      <div className="confetti-wrap" aria-hidden>
        {confettis.map((c, idx) => {
          const style = {
            left: `${c.left}%`,
            top: `${-5 - Math.random()*6}vh`,
            width: `${c.size}px`,
            height: `${c.size*1.3}px`,
            background: c.color,
            transform: `rotate(${c.rotation}deg)`,
            animationDuration: `${1600 + Math.random()*900}ms`,
            animationDelay: `${c.delay}ms`,
            zIndex: 9999
          };
          return <div key={c.id} className="confetti" style={style} />;
        })}
      </div>
    </div>
  );
}
