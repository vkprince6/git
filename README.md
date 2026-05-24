# GitQuest — Interactive Git & GitHub Learning Platform

> A fully gamified, cyberpunk-themed Git & GitHub bootcamp for absolute beginners.  
> Based on the **Codeboosters Tech** Lab Manual.

---

## 🚀 Quick Start

### Option 1 — VS Code Live Server (Recommended)
1. Open the `gitquest-master/` folder in VS Code
2. Install the **Live Server** extension (ritwickdey.LiveServer)
3. Right-click `index.html` → **"Open with Live Server"**
4. Browser opens at `http://127.0.0.1:5500`

### Option 2 — Python HTTP Server
```bash
cd gitquest-master
python -m http.server 8080
# Open http://localhost:8080
```

### Option 3 — Node.js (npx serve)
```bash
cd gitquest-master
npx serve .
# Open the URL shown in terminal
```

> ⚠️ **Must be served from a web server** — ES modules (`import`/`export`) require HTTP/HTTPS, not `file://` directly. Double-clicking `index.html` will NOT work.

---

## 📁 Project Structure

```
gitquest-master/
├── index.html          ← App shell (sidebar, HUD, layout)
├── style.css           ← Full cyberpunk dark theme (1200+ lines)
├── script.js           ← Main app controller (routing, XP, render)
│
├── modules/
│   ├── state.js        ← XP, progress, localStorage persistence
│   ├── achievements.js ← 12 achievements with toast notifications
│   ├── quizzes.js      ← Quiz engine (MCQ, feedback, XP rewards)
│   ├── terminal-simulator.js  ← Interactive Git terminal simulator
│   └── challenges.js   ← Practice challenge system
│
├── data/
│   └── lessons.js      ← All 31 lessons (content, quizzes, metadata)
│
├── assets/             ← Static assets (images, icons, etc.)
└── README.md           ← This file
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 📚 31 Lessons | Full curriculum from zero to GitHub Pages deployment |
| 🎮 XP System | Earn XP per lesson, level up from Beginner → Git Master |
| 🏆 12 Achievements | Unlock badges as you master concepts |
| 💻 Live Terminal | Type real Git commands in an interactive simulator |
| ❓ Quizzes | Multiple-choice knowledge checks with instant feedback |
| 🌿 Branch Visualizer | SVG diagram showing Git branching & merging |
| 🎉 Confetti | Celebration animation on course completion |
| 💾 localStorage | Progress saved automatically, survives page refresh |
| 🌙 Dark Theme | Cyberpunk neon aesthetic (cyan/purple/green) |

---

## 📖 Curriculum

| Group | Lessons |
|---|---|
| 🚀 Getting Started | Welcome, Version Control, Install Git, Install VS Code, GitHub Account |
| 💻 Terminal Basics | Terminal intro, Git Bash vs CMD, VS Code Terminal |
| ⚡ Git Fundamentals | Git vs GitHub, 4-Zone Architecture, init, status, add, commit, log, diff |
| 🌐 GitHub Workflow | GitHub overview, remote add, push (+ PAT), pull, clone, main/master/origin |
| 🌿 Branching & Collab | Branching, Merge Conflicts, Pull Requests |
| 🚢 Deploy & CI/CD | GitHub Pages, CI/CD Pipeline |
| 🏆 Challenges & Exam | Practice Challenges, Command Cheatsheet, Final Assessment (8 Qs), Graduation |

---

## 🛠️ Tech Stack

- **Vanilla HTML5** — no frameworks
- **Vanilla CSS3** — custom properties, grid, flexbox, animations
- **Vanilla ES Modules** — native `import`/`export`, no bundler needed
- **localStorage** — persistent progress storage
- **Canvas API** — confetti celebration animation
- **Google Fonts** — Inter + JetBrains Mono

---

## 📝 License

MIT — Free to use, modify, and distribute.  
Built for educational purposes by **Codeboosters Tech**.
