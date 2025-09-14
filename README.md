# <div align='center'>CKPTW – Web Gabut Game</div>

<div align='center'>

![CKPTW Game](https://files.cloudkuimages.guru/images/vYx4YwS.png)

<!-- Project Badge -->
<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-v18%2B-61dafb?logo=react" alt="React"/>
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Bundler-Vite-ffdd33?logo=vite" alt="Vite"/>
  </a>
</p>
</div>

---

## 📋 Table of Contents

- [📖 Description](#-description)
- [🎮 Key Features](#-key-features)
- [✨ Special Mechanics](#-special-mechanics)
- [⚙️ Technical Details](#-technical-details)
- [📂 Project Structure](#-project-structure)
- [📦 Installation](#-installation)
- [🚀 Deployment](#-deployment)
- [💝 Credits](#-credits)
- [📜 License](#-license)
- [💖 Support](#-support)

---

## 📖 Description

**CKPTW** is a fun little *gabut* (idle boredom) game built with **React.js + Vite**.  
The concept is simple: click the fish, watch the counter go up, and enjoy random fish swaps with some cool effects.

> Made just for fun, but also as a showcase of using React for small browser-based games.

---

## 🎮 Key Features

- 🐟 **Clickable Fish** – Tap/click to increase your counter.  
- 🎲 **Random Fish** – Every 5 clicks, the fish changes randomly from the asset pool.  
- 🎆 **Cool Effects** – Every 10 clicks triggers a visual effect (confetti / splash).  
- ⏱️ **Playtime Tracker** – Shows total time spent in the game (days, hours, minutes, seconds).  
- 🤖 **Auto-clicker Detection** – Detects suspicious clicking patterns and displays `true/false`.  
- 🎨 **Custom Background** – Blue water scribble background from assets folder.  

---

## ✨ Special Mechanics

- **5 Click Rule:** Fish swaps randomly after 5 clicks.  
- **10 Click Rule:** Special animation/effect is triggered.  
- **HUD:** Top-left corner shows total playtime and auto-clicker status.  

---

## ⚙️ Technical Details

| Info          | Value                 |
|---------------|-----------------------|
| Game Name     | `CKPTW`              |
| Framework     | `React + Vite`       |
| Language      | `JavaScript (ES6+)`  |
| License       | MIT                   |

---

## 📂 Project Structure

```bash
CKPTW/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/
│  │  ├─ bg.png
│  │  ├─ fish1.png ... fish10.png
│  ├─ App.js
│  ├─ index.js
│  └─ index.css
├─ package.json
└─ README.md
```

---

## 📦 Installation

Clone repository ini:

```bash
git clone https://github.com/SiuuEditZ/CKPTW.git
cd CKPTW
```

Install dependencies:

```bash
npm install
```

Jalankan di local:

```bash
npm run dev
```

Build untuk production:

```bash
npm run build
```

---

## 🚀 Deployment

Kamu bisa deploy dengan beberapa cara:  

- **Vercel** → connect GitHub repo, auto-deploy.  
- **Netlify / Cloudflare Pages** → drag `dist/` hasil build.  
- **VPS** → build dulu `npm run build` lalu serve dengan **nginx/pm2**.  

👉 Setelah live, masukin link web ke [PWABuilder](https://www.pwabuilder.com/) untuk generate **APK / PWA App**.  

---

## 💝 Credits

- 👑 Project by: **SiuuEditZ**  
- 🎨 Asset: Fish + Background dari free resources.  
- ⚡ Tech Stack: **React + Vite**  

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 SiuuEditZ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💖 Support

Kalau suka project ini & mau support:  

☕ [Buy Me a Coffee](https://www.buymeacoffee.com/)  
💸 [Saweria](https://saweria.co/siuueditz)  

---

✨ Powered by **SiuuEditZ** 
