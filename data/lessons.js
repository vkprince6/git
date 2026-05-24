export const GROUPS = [
  { id: 'start',    label: '🚀 Getting Started' },
  { id: 'terminal', label: '💻 Terminal Basics' },
  { id: 'git',      label: '⚡ Git Fundamentals' },
  { id: 'github',   label: '🌐 GitHub Workflow' },
  { id: 'branch',   label: '🌿 Branching & Collab' },
  { id: 'deploy',   label: '🚢 Deploy & CI/CD' },
  { id: 'finish',   label: '🏆 Challenges & Exam' },
];

export const LESSONS = [
  // ─── GETTING STARTED ───────────────────────────────────────────────────────
  {
    id: 'welcome', group: 'start', icon: '👋', title: 'Welcome to GitQuest', xp: 10, time: '3 min',
    hasTrial: false,
    content: `<div class="welcome-screen">
      <span class="welcome-hex">⬡</span>
      <h1 class="welcome-title">Welcome to <span>GitQuest</span></h1>
      <p class="welcome-sub">The gamified Git &amp; GitHub bootcamp. Learn like a developer. Think like a professional. Build like an engineer.</p>
      <div class="welcome-stats">
        <div class="welcome-stat"><div class="welcome-stat-num">31</div><div class="welcome-stat-label">Lessons</div></div>
        <div class="welcome-stat"><div class="welcome-stat-num">285</div><div class="welcome-stat-label">Total XP</div></div>
        <div class="welcome-stat"><div class="welcome-stat-num">2.5h</div><div class="welcome-stat-label">Duration</div></div>
      </div>
      <div class="welcome-features">
        <div class="welcome-feature"><div class="welcome-feature-icon">💻</div><div class="welcome-feature-title">Live Terminal</div><div class="welcome-feature-desc">Type real Git commands in an interactive simulator</div></div>
        <div class="welcome-feature"><div class="welcome-feature-icon">🎮</div><div class="welcome-feature-title">XP System</div><div class="welcome-feature-desc">Earn XP, level up, and unlock achievements</div></div>
        <div class="welcome-feature"><div class="welcome-feature-icon">🌿</div><div class="welcome-feature-title">Branch Visualizer</div><div class="welcome-feature-desc">See branches come alive with animated diagrams</div></div>
        <div class="welcome-feature"><div class="welcome-feature-icon">❓</div><div class="welcome-feature-title">Quizzes</div><div class="welcome-feature-desc">Test your knowledge after every module</div></div>
        <div class="welcome-feature"><div class="welcome-feature-icon">🏆</div><div class="welcome-feature-title">Achievements</div><div class="welcome-feature-desc">Collect badges as you master each concept</div></div>
        <div class="welcome-feature"><div class="welcome-feature-icon">📜</div><div class="welcome-feature-title">Certificate</div><div class="welcome-feature-desc">Earn your Git Ninja certificate on completion</div></div>
      </div>
      <p style="color:var(--text-muted);font-size:13px;margin-top:8px;">This bootcamp is based on the <strong style="color:var(--text)">Codeboosters Tech</strong> Git &amp; GitHub Workshop curriculum.</p>
    </div>`,
    quiz: [],
  },
  {
    id: 'version-control', group: 'start', icon: '🗂️', title: 'What is Version Control?', xp: 10, time: '5 min',
    hasTrial: false,
    content: `
      <h2>🤯 The Chaos Before Git</h2>
      <p>Before version control, developers managed files like this:</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Your Desktop Folder</span></div><pre>
<span class="comment">project.zip</span>
<span class="comment">project_v2.zip</span>
<span class="comment">project_final.zip</span>
<span class="error-line">project_FINAL_USE_THIS.zip  ← Which one is latest??</span>
<span class="comment">project_FINAL_v2_ACTUALLY_USE_THIS.zip</span></pre></div>
      <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><div class="callout-title">Real Problems This Caused</div><div class="callout-text"><strong>Accidental overwrites</strong> — teammate saves file, destroys your work<br/><strong>No history</strong> — impossible to see what changed<br/><strong>Conflicts</strong> — two people editing the same file<br/><strong>No backup</strong> — laptop dies = project gone</div></div></div>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Relatable Analogy</div><div class="callout-text">Think about your last group assignment. Who sent which version? Did anyone overwrite someone else's work? <strong>Git solves ALL of this.</strong></div></div></div>
      <h2>✅ What Version Control Does</h2>
      <p>A <strong>Version Control System (VCS)</strong> tracks every change to your files over time. It lets you:</p>
      <ul>
        <li>📋 See <strong>what changed</strong>, when, and who changed it</li>
        <li>⏪ <strong>Go back</strong> to any previous version at any time</li>
        <li>👥 Work with a <strong>team without conflicts</strong></li>
        <li>🧪 <strong>Experiment safely</strong> in branches without breaking anything</li>
      </ul>
      <h2>📊 Types of Version Control</h2>
      <table class="compare-table"><thead><tr><th>Type</th><th>Where History Lives</th><th>Examples</th></tr></thead>
      <tbody>
        <tr><td>Local VCS</td><td>Only on your machine</td><td>RCS (very old)</td></tr>
        <tr><td>Centralized VCS</td><td>One central server</td><td>SVN, Perforce</td></tr>
        <tr><td><strong>Distributed VCS ✓</strong></td><td>Every machine has full copy</td><td><strong>Git</strong>, Mercurial</td></tr>
      </tbody></table>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Pro Tip</div><div class="callout-text">Git is a <strong>Distributed VCS</strong>. Every developer has the COMPLETE project history on their machine. Even if GitHub goes down, you still have everything locally.</div></div></div>`,
    quiz: [
      { q: 'What does a Version Control System do?', options: ['Compresses files to save space', 'Tracks every change to your files over time', 'Uploads files to the internet', 'Makes copies of files automatically'], correct: 1, exp: 'A VCS tracks every change so you can see history, revert, collaborate, and experiment safely.' },
      { q: 'What type of VCS is Git?', options: ['Local VCS', 'Centralized VCS', 'Distributed VCS', 'Cloud VCS'], correct: 2, exp: 'Git is a Distributed VCS — every developer has the complete project history on their machine.' },
    ],
  },
  {
    id: 'install-git', group: 'start', icon: '⚙️', title: 'Installing Git', xp: 5, time: '4 min',
    hasTrial: false,
    content: `
      <h2>⚙️ Installing Git on Your Machine</h2>
      <p>Git is a program you install on your computer. Let's get it set up on every operating system.</p>
      <div class="install-grid">
        <div class="install-card">
          <div class="install-os">🪟 Windows</div>
          <ul class="install-steps">
            <li class="install-step">Go to <strong>git-scm.com</strong></li>
            <li class="install-step">Click <strong>"Download for Windows"</strong></li>
            <li class="install-step">Run the installer (.exe file)</li>
            <li class="install-step">Keep all defaults, click Next</li>
            <li class="install-step">On "Adjusting PATH", choose <strong>"Git from command line and also from 3rd-party software"</strong></li>
            <li class="install-step">Click Install, then Finish</li>
          </ul>
        </div>
        <div class="install-card">
          <div class="install-os">🍎 macOS</div>
          <ul class="install-steps">
            <li class="install-step">Open <strong>Terminal</strong> (Cmd+Space → type "Terminal")</li>
            <li class="install-step">Type: <code style="font-family:var(--font-mono);color:var(--green)">git --version</code></li>
            <li class="install-step">If not installed, macOS prompts you to install Xcode Command Line Tools</li>
            <li class="install-step">Click <strong>Install</strong> and wait</li>
            <li class="install-step"><em>OR:</em> Install via Homebrew: <code style="font-family:var(--font-mono);color:var(--green)">brew install git</code></li>
          </ul>
        </div>
        <div class="install-card">
          <div class="install-os">🐧 Linux (Ubuntu)</div>
          <ul class="install-steps">
            <li class="install-step">Open Terminal</li>
            <li class="install-step">Run: <code style="font-family:var(--font-mono);color:var(--green)">sudo apt-get update</code></li>
            <li class="install-step">Run: <code style="font-family:var(--font-mono);color:var(--green)">sudo apt-get install git</code></li>
            <li class="install-step">Type your password when prompted</li>
          </ul>
        </div>
        <div class="install-card">
          <div class="install-os">✅ Verify Installation</div>
          <ul class="install-steps">
            <li class="install-step">Open Git Bash (Windows) or Terminal (Mac/Linux)</li>
            <li class="install-step">Type: <code style="font-family:var(--font-mono);color:var(--green)">git --version</code></li>
            <li class="install-step">You should see something like: <code style="font-family:var(--font-mono);color:var(--cyan)">git version 2.47.0</code></li>
            <li class="install-step">Any version above 2.0 is fine!</li>
          </ul>
        </div>
      </div>
      <div class="callout danger"><span class="callout-icon">❌</span><div class="callout-body"><div class="callout-title">Common Error: "git is not recognized"</div><div class="callout-text">On Windows, this means Git isn't in your PATH. Fix: Reinstall Git and on the PATH step, choose <strong>"Git from command line and also from 3rd-party software"</strong>. Then restart your terminal.</div></div></div>`,
    quiz: [],
  },
  {
    id: 'install-vscode', group: 'start', icon: '🖥️', title: 'Installing VS Code', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>🖥️ Visual Studio Code — Your Code Editor</h2>
      <p>VS Code is a free, powerful code editor made by Microsoft. It has built-in Git support, a terminal, and extensions for everything.</p>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Go to <strong>code.visualstudio.com</strong></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Click the big blue <strong>"Download"</strong> button for your OS</p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Run the installer — accept all defaults</p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p>On Windows: check <strong>"Add to PATH"</strong> and <strong>"Open with Code"</strong> options</p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Open VS Code. You'll see the Welcome tab.</p></div></li>
      </ol>
      <h2>🔧 Essential VS Code Panels</h2>
      <table class="compare-table"><thead><tr><th>Panel</th><th>Shortcut</th><th>What it does</th></tr></thead>
      <tbody>
        <tr><td>Explorer</td><td>Ctrl+Shift+E</td><td>Shows your project files</td></tr>
        <tr><td>Source Control</td><td>Ctrl+Shift+G</td><td>Git integration — see changes, stage, commit</td></tr>
        <tr><td>Terminal</td><td>Ctrl+\`</td><td>Bash/PowerShell inside VS Code</td></tr>
        <tr><td>Extensions</td><td>Ctrl+Shift+X</td><td>Install add-ons like GitLens</td></tr>
      </tbody></table>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Open a folder in VS Code from terminal</div><div class="callout-text">Navigate to your project folder in the terminal, then type <code style="font-family:var(--font-mono);color:var(--green)">code .</code> — VS Code opens automatically in that folder!</div></div></div>
      <div class="callout info"><span class="callout-icon">🔌</span><div class="callout-body"><div class="callout-title">Recommended Extensions</div><div class="callout-text"><strong>GitLens</strong> — Supercharges Git inside VS Code (see who changed every line)<br/><strong>Git Graph</strong> — Visual branch explorer<br/><strong>GitHub Copilot</strong> — AI code assistant</div></div></div>`,
    quiz: [],
  },
  {
    id: 'github-account', group: 'start', icon: '🐙', title: 'Creating a GitHub Account', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>🐙 GitHub — The World's Largest Code Host</h2>
      <p>GitHub is a website that hosts Git repositories online. It's where 100 million+ developers share code, collaborate, and build software together.</p>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Go to <strong>github.com</strong></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Click <strong>"Sign Up"</strong></p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Enter your email, create a password, choose a username</p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p><strong>Choose your username carefully</strong> — it becomes your developer identity (github.com/yourusername)</p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Verify your email, complete the puzzle</p></div></li>
        <li class="step-item"><div class="step-num">6</div><div class="step-body"><p>Choose the free plan</p></div></li>
      </ol>
      <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><div class="callout-title">Username Tips</div><div class="callout-text">Use your real name or a professional handle. Employers will see this. Avoid random numbers (john123) — try firstname-lastname or firstnamelastname.</div></div></div>
      <h2>🔑 Setting Up Your Profile</h2>
      <ul>
        <li>Add a <strong>profile photo</strong> — makes you look professional</li>
        <li>Fill in your <strong>bio</strong> (e.g., "CS student at XYZ University")</li>
        <li>Add your <strong>location</strong> and <strong>website</strong></li>
        <li>Pin your best repositories to your profile</li>
      </ul>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Your GitHub Profile = Your Developer Resume</div><div class="callout-text">Recruiters at Google, Microsoft, and startups will look at your GitHub profile. Keep it active, organized, and professional.</div></div></div>`,
    quiz: [],
  },

  // ─── TERMINAL BASICS ───────────────────────────────────────────────────────
  {
    id: 'terminal-intro', group: 'terminal', icon: '🖤', title: 'Understanding the Terminal', xp: 5, time: '4 min',
    hasTrial: false,
    content: `
      <h2>🖤 What is the Terminal?</h2>
      <p>The <strong>terminal</strong> (also called command line, shell, or console) is a text-based interface to your computer. Instead of clicking icons, you type commands.</p>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Analogy</div><div class="callout-text">Think of the terminal as texting your computer. Instead of clicking, you type what you want it to do. Your computer reads the text and does it — instantly.</div></div></div>
      <h2>📟 Essential Terminal Commands</h2>
      <table class="compare-table"><thead><tr><th>Command</th><th>What it does</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>pwd</td><td>Print Working Directory — show where you are</td><td>pwd → /home/user/projects</td></tr>
        <tr><td>ls</td><td>List files in current folder</td><td>ls → index.html style.css</td></tr>
        <tr><td>ls -la</td><td>List all files including hidden ones</td><td>ls -la → shows .git folder</td></tr>
        <tr><td>cd foldername</td><td>Change Directory — navigate into a folder</td><td>cd my-project</td></tr>
        <tr><td>cd ..</td><td>Go up one folder level</td><td>cd .. → back to parent</td></tr>
        <tr><td>mkdir name</td><td>Make a new directory/folder</td><td>mkdir my-portfolio</td></tr>
        <tr><td>touch file</td><td>Create a new empty file (Mac/Linux)</td><td>touch index.html</td></tr>
        <tr><td>clear</td><td>Clear the terminal screen</td><td>clear</td></tr>
      </tbody></table>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Pro Tips</div><div class="callout-text">Press <strong>Tab</strong> to auto-complete file/folder names<br/>Press <strong>↑ Arrow</strong> to repeat the last command<br/>Press <strong>Ctrl+C</strong> to cancel a running command</div></div></div>`,
    quiz: [
      { q: 'What does the `pwd` command do?', options: ['Prints all files', 'Shows your current directory path', 'Creates a new directory', 'Deletes files'], correct: 1, exp: 'pwd = Print Working Directory. It shows you the full path of the folder you are currently in.' },
    ],
  },
  {
    id: 'git-bash', group: 'terminal', icon: '⚡', title: 'Git Bash vs CMD vs PowerShell', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>⚡ Which Terminal Should You Use?</h2>
      <p>On Windows, you have multiple terminal options. Here's what they are and which to use:</p>
      <table class="compare-table"><thead><tr><th>Terminal</th><th>Best For</th><th>Recommendation</th></tr></thead>
      <tbody>
        <tr><td>Git Bash</td><td>Git commands, Unix-style commands</td><td class="good">✅ Use this for Git!</td></tr>
        <tr><td>Command Prompt (cmd)</td><td>Basic Windows commands</td><td>OK for basic stuff</td></tr>
        <tr><td>PowerShell</td><td>Advanced Windows scripting</td><td>Good, but different syntax</td></tr>
        <tr><td>VS Code Terminal</td><td>Everything while coding</td><td class="good">✅ Most convenient</td></tr>
        <tr><td>Windows Terminal</td><td>Multiple tabs, modern UI</td><td class="good">✅ Great option</td></tr>
      </tbody></table>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Why Git Bash?</div><div class="callout-text">Git Bash comes with Git for Windows. It gives you a Unix-like shell that works the same on Windows, Mac, and Linux. All examples in this course use Git Bash commands.</div></div></div>
      <h2>🚀 Opening Git Bash</h2>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Right-click anywhere on Desktop or in a folder</p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Click <strong>"Open Git Bash here"</strong></p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>You'll see the prompt: <code style="font-family:var(--font-mono);color:var(--green)">username@computer MINGW64 ~$</code></p></div></li>
      </ol>`,
    quiz: [],
  },
  {
    id: 'vscode-terminal', group: 'terminal', icon: '📟', title: 'Opening VS Code & Terminal', xp: 5, time: '3 min',
    hasTrial: true,
    content: `
      <h2>📟 Terminal Inside VS Code</h2>
      <p>VS Code has a built-in terminal — you never have to leave your editor. This is the most efficient way to work.</p>
      <h3>Opening the Terminal in VS Code</h3>
      <ul>
        <li>Menu: <strong>View → Terminal</strong></li>
        <li>Keyboard: <strong>Ctrl+\`</strong> (backtick key, top-left of keyboard)</li>
        <li>You can open multiple terminals as tabs</li>
      </ul>
      <h3>Setting Git Bash as Default</h3>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Open VS Code Settings: <strong>Ctrl+,</strong></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Search for "terminal default profile"</p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Select <strong>Git Bash</strong> from the dropdown</p></div></li>
      </ol>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Quick Workflow</div><div class="callout-text">Open folder in VS Code → press Ctrl+\` to open terminal → type <code style="font-family:var(--font-mono);color:var(--green)">git init</code> → start coding. You never need to switch windows!</div></div></div>
      <h2>🎮 Try the Terminal Below</h2>
      <p>Practice some basic terminal commands in the simulator. Try: <code style="font-family:var(--font-mono);color:var(--green)">pwd</code>, <code style="font-family:var(--font-mono);color:var(--green)">ls</code>, <code style="font-family:var(--font-mono);color:var(--green)">mkdir my-project</code></p>`,
    quiz: [],
  },

  // ─── GIT FUNDAMENTALS ─────────────────────────────────────────────────────
  {
    id: 'git-intro', group: 'git', icon: '🔀', title: 'Git vs GitHub — Not the Same!', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>🔀 Git ≠ GitHub</h2>
      <p>This is the #1 confusion for beginners. Memorize this difference:</p>
      <table class="compare-table"><thead><tr><th>Tool</th><th>What it is</th><th>Lives where?</th></tr></thead>
      <tbody>
        <tr><td>Git</td><td>A program on your laptop that tracks changes</td><td>Your computer</td></tr>
        <tr><td>GitHub</td><td>A website that hosts Git repositories online</td><td>The internet</td></tr>
        <tr><td>GitLab</td><td>Alternative to GitHub, self-hostable</td><td>The internet</td></tr>
        <tr><td>Bitbucket</td><td>Atlassian's alternative, popular in enterprises</td><td>The internet</td></tr>
      </tbody></table>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Perfect Analogy</div><div class="callout-text"><strong>Git = Microsoft Word</strong> (the app on your laptop that edits documents)<br/><strong>GitHub = Google Drive</strong> (cloud storage where you share documents)<br/><br/>You can use Word without Google Drive. But together, they're powerful.</div></div></div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Who Made These?</div><div class="callout-text"><strong>Git</strong> was created in 2005 by <strong>Linus Torvalds</strong> (the same person who created Linux) to manage the Linux kernel source code.<br/><strong>GitHub</strong> was founded in 2008 and acquired by Microsoft in 2018 for $7.5 billion.</div></div></div>`,
    quiz: [
      { q: 'Git and GitHub are the same thing.', options: ['True', 'False'], correct: 1, exp: 'False! Git is a tool installed on your laptop. GitHub is a website. You can use Git without GitHub.' },
    ],
  },
  {
    id: 'git-zones', group: 'git', icon: '🏗️', title: "Git's 4-Zone Architecture", xp: 10, time: '5 min',
    hasTrial: false,
    content: `
      <h2>🏗️ Where Does Your Code Live?</h2>
      <p>At any moment, your code exists in one of <strong>four zones</strong>. Every Git command moves code between these zones.</p>
      <div class="zones-visual">
        <div class="zone-box">
          <div class="zone-icon">📝</div>
          <div class="zone-name">Working Directory</div>
          <div class="zone-desc">Files you're editing right now</div>
        </div>
        <div class="zone-arrow">
          <div class="zone-arrow-cmd">git add</div>
          <div class="zone-arrow-line">→</div>
        </div>
        <div class="zone-box">
          <div class="zone-icon">🛒</div>
          <div class="zone-name">Staging Area</div>
          <div class="zone-desc">Files marked as ready to save</div>
        </div>
        <div class="zone-arrow">
          <div class="zone-arrow-cmd">git commit</div>
          <div class="zone-arrow-line">→</div>
        </div>
        <div class="zone-box">
          <div class="zone-icon">💾</div>
          <div class="zone-name">Local Repo</div>
          <div class="zone-desc">Saved snapshots in .git folder</div>
        </div>
        <div class="zone-arrow">
          <div class="zone-arrow-cmd">git push</div>
          <div class="zone-arrow-line">→</div>
        </div>
        <div class="zone-box active-zone">
          <div class="zone-icon">☁️</div>
          <div class="zone-name">Remote (GitHub)</div>
          <div class="zone-desc">Your code on the internet</div>
        </div>
      </div>
      <h2>📖 Zone Descriptions</h2>
      <ul>
        <li><strong>📝 Working Directory</strong> — Files you see in your folder. You edit these directly. Git sees them as "modified" or "untracked".</li>
        <li><strong>🛒 Staging Area (Index)</strong> — Files you've marked as ready to be saved. Like putting items in a shopping cart before checkout.</li>
        <li><strong>💾 Local Repository</strong> — Committed snapshots stored in the <code style="font-family:var(--font-mono);color:var(--green)">.git</code> folder on your machine.</li>
        <li><strong>☁️ Remote Repository</strong> — Your repository on GitHub, accessible to your entire team.</li>
      </ul>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Shopping Cart Analogy</div><div class="callout-text"><strong>Working Directory</strong> = Walking around the store, picking things up<br/><strong>git add</strong> = Adding items to your cart<br/><strong>Staging Area</strong> = Your cart full of chosen items<br/><strong>git commit</strong> = Checking out and getting a receipt<br/><strong>Local Repo</strong> = Your receipt/purchase history<br/><strong>git push</strong> = Shipping the items to a warehouse<br/><strong>Remote</strong> = The warehouse (GitHub)</div></div></div>`,
    quiz: [
      { q: 'What does the Staging Area represent in Git?', options: ['Files being deleted', 'Files marked as ready to be committed', 'Files already on GitHub', 'Files being merged'], correct: 1, exp: 'The Staging Area (Index) holds files you have marked as ready to commit. Use git add to move files there.' },
      { q: 'Which command moves code from Staging Area to Local Repository?', options: ['git add', 'git push', 'git commit', 'git save'], correct: 2, exp: 'git commit creates a permanent snapshot from everything in the Staging Area and saves it to the Local Repository.' },
    ],
  },
  {
    id: 'git-setup', group: 'git', icon: '👤', title: 'First-Time Git Setup', xp: 5, time: '3 min',
    hasTrial: true,
    content: `
      <h2>👤 Tell Git Who You Are</h2>
      <p>Before using Git, you need to set your name and email. This info is attached to <em>every commit</em> you ever make — like a signature on your work.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Git Bash / Terminal</span><button class="code-copy-btn" data-copy="git config --global user.name &quot;Your Full Name&quot;\ngit config --global user.email &quot;your@email.com&quot;\ngit config --global core.editor &quot;code --wait&quot;">Copy</button></div><pre>
<span class="cmd">$ git config --global user.name "Your Full Name"</span>
<span class="cmd">$ git config --global user.email "your@email.com"</span>
<span class="cmd">$ git config --global core.editor "code --wait"</span>
<span class="comment"># Verify your settings:</span>
<span class="cmd">$ git config --list</span>
<span class="output">user.name=Your Full Name</span>
<span class="output">user.email=your@email.com</span>
<span class="output">core.editor=code --wait</span></pre></div>
      <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><div class="callout-title">Use the SAME email as GitHub</div><div class="callout-text">If your Git email differs from your GitHub account email, your commits won't appear on your GitHub contribution graph (the green squares). Use the exact same email for both!</div></div></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown</div>
        <div class="cmd-display">git config --global user.name "Your Name"</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">config</div><div class="cmd-part-desc">Configure settings</div></div>
          <div class="cmd-part part-flag"><div class="cmd-part-word">--global</div><div class="cmd-part-desc">Apply to all repos</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">user.name</div><div class="cmd-part-desc">Setting name</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">"Your Name"</div><div class="cmd-part-desc">The value</div></div>
        </div>
      </div>
      <h2>🎮 Try it in the Terminal</h2>
      <p>Try: <code style="font-family:var(--font-mono);color:var(--green)">git --version</code> to confirm Git is installed.</p>`,
    quiz: [],
  },
  {
    id: 'git-init', group: 'git', icon: '🔥', title: 'git init — Start a Repository', xp: 10, time: '5 min',
    hasTrial: true,
    content: `
      <h2>🔥 git init — Birth of a Repository</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git init</code> creates a new empty Git repository in the current folder. It creates a hidden <code style="font-family:var(--font-mono);color:var(--cyan)">.git</code> folder that stores all version history.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="mkdir my-portfolio\ncd my-portfolio\ngit init">Copy</button></div><pre>
<span class="comment"># Create a project folder and initialize Git:</span>
<span class="cmd">$ mkdir my-portfolio</span>
<span class="cmd">$ cd my-portfolio</span>
<span class="cmd">$ git init</span>
<span class="output">Initialized empty Git repository in C:/Users/You/my-portfolio/.git/</span>
<span class="comment"># Verify the .git folder was created:</span>
<span class="cmd">$ ls -la</span>
<span class="output">drwxr-xr-x  .git</span></pre></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown</div>
        <div class="cmd-display">git init</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">init</div><div class="cmd-part-desc">Initialize = create new repo</div></div>
        </div>
      </div>
      <div class="callout danger"><span class="callout-icon">❌</span><div class="callout-body"><div class="callout-title">NEVER Run git init in Your Home Directory</div><div class="callout-text">Never run <code>git init</code> in <code>C:\\Users\\You</code> or <code>~</code>. This makes Git track EVERY file on your computer! Always navigate INTO your project folder first.</div></div></div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">What is .git?</div><div class="callout-text">The <code>.git</code> folder is Git's brain. It stores your entire history, branches, configuration, and more. Never delete or manually edit this folder. If you delete <code>.git</code>, you lose ALL version history.</div></div></div>
      <h2>🎮 Practice in Terminal</h2>
      <p>Try these commands in the terminal: <code style="font-family:var(--font-mono);color:var(--green)">mkdir my-portfolio</code>, <code style="font-family:var(--font-mono);color:var(--green)">cd my-portfolio</code>, <code style="font-family:var(--font-mono);color:var(--green)">git init</code></p>`,
    quiz: [
      { q: 'What does git init do?', options: ['Uploads your project to GitHub', 'Creates a new Git repository by adding a .git folder', 'Downloads Git to your computer', 'Deletes all tracked files'], correct: 1, exp: 'git init initializes a new Git repository in the current directory. It creates a hidden .git folder that stores all version history.' },
      { q: 'What happens if you run git init in your home directory (C:\\Users\\You)?', options: ['Nothing bad happens', 'Git tracks ALL files on your entire computer', 'It creates a GitHub account', 'The command fails with an error'], correct: 1, exp: 'Running git init in the home directory makes Git track every file on your computer. Always navigate INTO your project folder first.' },
    ],
  },
  {
    id: 'git-status', group: 'git', icon: '📡', title: 'git status — Your Best Friend', xp: 10, time: '5 min',
    hasTrial: true,
    content: `
      <h2>📡 git status — Know Your State at All Times</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git status</code> tells you the current state of your repository. Professional developers run this <em>constantly</em> — before and after every operation.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span></div><pre>
<span class="cmd">$ git status</span>
<span class="comment"># When repo is clean:</span>
<span class="output">On branch main</span>
<span class="output">nothing to commit, working tree clean</span>

<span class="comment"># After creating files (untracked):</span>
<span class="output">Untracked files:</span>
<span class="output">  (use "git add &lt;file&gt;..." to include in what will be committed)</span>
<span class="output">        index.html</span>
<span class="output">        style.css</span>

<span class="comment"># After git add (staged):</span>
<span class="output">Changes to be committed:</span>
<span class="output">  (use "git restore --staged &lt;file&gt;..." to unstage)</span>
<span class="output">        new file:   index.html</span></pre></div>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Make it a Habit</div><div class="callout-text">Think of <code>git status</code> as your GPS — it always tells you exactly where you are and what needs attention. Run it before every <code>git add</code> or <code>git commit</code>.</div></div></div>
      <h2>📊 Status Messages Decoded</h2>
      <table class="compare-table"><thead><tr><th>Message</th><th>Meaning</th><th>Action</th></tr></thead>
      <tbody>
        <tr><td>Untracked files</td><td>Git has never seen this file</td><td>Run git add</td></tr>
        <tr><td>Modified</td><td>Tracked file has changes not yet staged</td><td>Run git add</td></tr>
        <tr><td>Changes to be committed</td><td>Files are staged and ready to commit</td><td>Run git commit</td></tr>
        <tr><td>nothing to commit</td><td>All changes are saved (committed)</td><td>Nothing needed</td></tr>
      </tbody></table>
      <h2>🎮 Practice in Terminal</h2>
      <p>Try: <code style="font-family:var(--font-mono);color:var(--green)">git init</code>, then <code style="font-family:var(--font-mono);color:var(--green)">git status</code>. Then try adding a file and run status again.</p>`,
    quiz: [
      { q: 'What does "Untracked files" mean in git status?', options: ['Files that have been deleted', 'Files Git has never seen before', 'Files that are already committed', 'Files that have merge conflicts'], correct: 1, exp: '"Untracked" means Git sees the file but has never been told to track it. Use git add to start tracking it.' },
    ],
  },
  {
    id: 'git-add', group: 'git', icon: '🛒', title: 'git add — Stage Your Changes', xp: 10, time: '5 min',
    hasTrial: true,
    content: `
      <h2>🛒 git add — Put Files in the Cart</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git add</code> moves files from the Working Directory to the Staging Area. Think of it as putting items in a shopping cart before checkout.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git add index.html\ngit add .\ngit add *.css\ngit status">Copy</button></div><pre>
<span class="comment"># Stage a specific file:</span>
<span class="cmd">$ git add index.html</span>

<span class="comment"># Stage ALL changed files at once:</span>
<span class="cmd">$ git add .</span>

<span class="comment"># Stage all files of a type:</span>
<span class="cmd">$ git add *.css</span>

<span class="comment"># Verify what's staged:</span>
<span class="cmd">$ git status</span>
<span class="output">Changes to be committed:</span>
<span class="output">    new file:   index.html</span></pre></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown: git add .</div>
        <div class="cmd-display">git add .</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">add</div><div class="cmd-part-desc">Stage files</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">.</div><div class="cmd-part-desc">All files in current folder</div></div>
        </div>
      </div>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Packing Boxes Analogy</div><div class="callout-text"><strong>git add</strong> is like packing items into a box. <strong>git commit</strong> is like sealing and labeling the box. You decide <em>what</em> goes in the box before sealing it. You can add different files to different commits — not everything has to go in at once!</div></div></div>
      <h2>🎮 Practice in Terminal</h2>
      <p>Try: <code style="font-family:var(--font-mono);color:var(--green)">git init</code>, then <code style="font-family:var(--font-mono);color:var(--green)">git add .</code>, then <code style="font-family:var(--font-mono);color:var(--green)">git status</code></p>`,
    quiz: [
      { q: 'What does `git add .` do?', options: ['Commits all changes', 'Stages all changed files in the current directory', 'Uploads files to GitHub', 'Creates a new branch'], correct: 1, exp: 'git add . stages ALL modified and new files in the current directory and its subdirectories.' },
    ],
  },
  {
    id: 'git-commit', group: 'git', icon: '📸', title: 'git commit — Save a Snapshot', xp: 10, time: '6 min',
    hasTrial: true,
    content: `
      <h2>📸 git commit — Save a Permanent Snapshot</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git commit</code> creates a permanent, labeled snapshot of your staged changes. Each commit gets a unique ID (hash) and your message.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy='git commit -m "Add homepage with hero section"'>Copy</button></div><pre>
<span class="cmd">$ git commit -m "Add homepage with hero section"</span>

<span class="output">[main (root-commit) a3f2b1c] Add homepage with hero section</span>
<span class="output"> 3 files changed, 45 insertions(+)</span>
<span class="output"> create mode 100644 index.html</span>
<span class="output"> create mode 100644 style.css</span></pre></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown</div>
        <div class="cmd-display">git commit -m "Your message"</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">commit</div><div class="cmd-part-desc">Create snapshot</div></div>
          <div class="cmd-part part-flag"><div class="cmd-part-word">-m</div><div class="cmd-part-desc">Message flag</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">"message"</div><div class="cmd-part-desc">Commit description</div></div>
        </div>
      </div>
      <h2>✍️ Writing Great Commit Messages</h2>
      <table class="compare-table"><thead><tr><th>✅ GOOD Messages</th><th>❌ BAD Messages</th></tr></thead>
      <tbody>
        <tr><td>Add hero section with background image</td><td>fixed stuff</td></tr>
        <tr><td>Fix navbar overlap on mobile screens</td><td>changes</td></tr>
        <tr><td>Style contact form with flexbox layout</td><td>updated</td></tr>
        <tr><td>Add user authentication with JWT tokens</td><td>asdfjkl</td></tr>
        <tr><td>Refactor database connection pooling</td><td>work</td></tr>
      </tbody></table>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Commit Message Formula</div><div class="callout-text">Start with a verb: <strong>Add</strong>, <strong>Fix</strong>, <strong>Update</strong>, <strong>Remove</strong>, <strong>Refactor</strong>, <strong>Style</strong>. Then describe what changed in simple terms. Your future self (and teammates) will thank you.</div></div></div>
      <h2>🎮 Practice in Terminal</h2>
      <p>Try the full workflow: <code style="font-family:var(--font-mono);color:var(--green)">git init</code> → <code style="font-family:var(--font-mono);color:var(--green)">git add .</code> → <code style="font-family:var(--font-mono);color:var(--green)">git commit -m "Initial commit"</code></p>`,
    quiz: [
      { q: 'What does the -m flag mean in git commit -m "message"?', options: ['Merge flag', 'Move files flag', 'Message flag — adds a commit message', 'Master branch flag'], correct: 2, exp: 'The -m flag stands for message. It lets you provide your commit description on the same line instead of opening a text editor.' },
      { q: 'Which of these is the BEST commit message?', options: ['stuff', 'Fix login bug where users were not redirected after login', 'changed things', 'update'], correct: 1, exp: 'Good commit messages are specific, describe WHAT changed, and start with a verb. Future teammates (and your future self) will be grateful.' },
    ],
  },
  {
    id: 'git-log', group: 'git', icon: '📜', title: 'git log — View History', xp: 10, time: '4 min',
    hasTrial: true,
    content: `
      <h2>📜 git log — Time Machine for Your Code</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git log</code> shows your commit history — who committed what, when, and with what message.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git log\ngit log --oneline\ngit log -p -1">Copy</button></div><pre>
<span class="comment"># Full log (press q to quit):</span>
<span class="cmd">$ git log</span>
<span class="output">commit a3f2b1c (HEAD -> main)</span>
<span class="output">Author: Your Name &lt;you@email.com&gt;</span>
<span class="output">Date:   Mon Jan 15 14:23:01 2024</span>
<span class="output">    Add homepage with hero section</span>

<span class="comment"># Compact one-line view (use this daily!):</span>
<span class="cmd">$ git log --oneline</span>
<span class="output">a3f2b1c Style contact form with flexbox</span>
<span class="output">7e4d9a2 Add hero section with background image</span>
<span class="output">2c8f3d1 Initial commit: project structure</span>

<span class="comment"># Show changes in last commit:</span>
<span class="cmd">$ git log -p -1</span></pre></div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">What is HEAD?</div><div class="callout-text"><strong>HEAD</strong> is a pointer to your current position in history — the commit you're looking at right now. It's always pointing to the latest commit of your current branch. Think of it as a bookmark.</div></div></div>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Useful log flags</div><div class="callout-text"><code>--oneline</code> → compact view<br/><code>--graph</code> → shows branch graph<br/><code>-n 5</code> → last 5 commits only<br/><code>--author="Name"</code> → filter by author</div></div></div>`,
    quiz: [
      { q: 'What does git log --oneline show?', options: ['Only the last commit', 'A compact view of commit history (one line per commit)', 'Only the first commit', 'Your configuration settings'], correct: 1, exp: 'git log --oneline shows a compact view: each commit on one line with its short hash and message. Great for quick history review.' },
    ],
  },
  {
    id: 'git-diff', group: 'git', icon: '🔍', title: 'git diff — See What Changed', xp: 5, time: '3 min',
    hasTrial: true,
    content: `
      <h2>🔍 git diff — See Exactly What Changed</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git diff</code> shows you the exact changes made to files — line by line.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span></div><pre>
<span class="comment"># See unstaged changes (working dir vs staging):</span>
<span class="cmd">$ git diff</span>

<span class="comment"># See staged changes (staging vs last commit):</span>
<span class="cmd">$ git diff --staged</span>

<span class="comment"># Compare two specific commits:</span>
<span class="cmd">$ git diff a3f2b1c 7e4d9a2</span></pre></div>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Sample Diff Output</span></div><pre>
<span class="output">--- a/index.html</span>
<span class="output">+++ b/index.html</span>
<span class="output">@@ -5,7 +5,7 @@</span>
<span class="error-line">-  &lt;h1&gt;Hello World&lt;/h1&gt;</span>
<span class="success">+  &lt;h1&gt;Welcome to My Portfolio&lt;/h1&gt;</span></pre></div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Reading a Diff</div><div class="callout-text">Lines starting with <strong style="color:var(--red)">-</strong> (red) were removed.<br/>Lines starting with <strong style="color:var(--green)">+</strong> (green) were added.<br/>Lines without +/- are unchanged context.</div></div></div>
      <h2>🛡️ Recovery Commands</h2>
      <table class="compare-table"><thead><tr><th>Command</th><th>What it does</th></tr></thead>
      <tbody>
        <tr><td>git restore &lt;file&gt;</td><td>Discard working directory changes</td></tr>
        <tr><td>git restore --staged &lt;file&gt;</td><td>Unstage a file (undo git add)</td></tr>
        <tr><td>git reset --soft HEAD~1</td><td>Undo last commit, keep changes staged</td></tr>
        <tr><td>git revert &lt;hash&gt;</td><td>Safely undo a pushed commit</td></tr>
        <tr><td>git stash</td><td>Temporarily hide current changes</td></tr>
        <tr><td>git stash pop</td><td>Restore stashed changes</td></tr>
      </tbody></table>
      <div class="callout danger"><span class="callout-icon">❌</span><div class="callout-body"><div class="callout-title">git reset --hard is DESTRUCTIVE</div><div class="callout-text">This command discards ALL uncommitted changes permanently. They cannot be recovered. Always prefer <code>git reset --soft</code> first. Use <code>git revert</code> to undo commits already pushed to GitHub.</div></div></div>`,
    quiz: [],
  },

  // ─── GITHUB WORKFLOW ──────────────────────────────────────────────────────
  {
    id: 'github-intro', group: 'github', icon: '🌐', title: 'GitHub Workflow Overview', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>🌐 The Full Git + GitHub Workflow</h2>
      <p>Here's the complete journey from writing code to it being live on GitHub:</p>
      <div class="zones-visual">
        <div class="zone-box"><div class="zone-icon">📝</div><div class="zone-name">Edit Code</div><div class="zone-desc">Working Directory</div></div>
        <div class="zone-arrow"><div class="zone-arrow-cmd">git add</div><div class="zone-arrow-line">→</div></div>
        <div class="zone-box"><div class="zone-icon">🛒</div><div class="zone-name">Stage</div><div class="zone-desc">Staging Area</div></div>
        <div class="zone-arrow"><div class="zone-arrow-cmd">git commit</div><div class="zone-arrow-line">→</div></div>
        <div class="zone-box"><div class="zone-icon">💾</div><div class="zone-name">Save</div><div class="zone-desc">Local Repo</div></div>
        <div class="zone-arrow"><div class="zone-arrow-cmd">git push</div><div class="zone-arrow-line">→</div></div>
        <div class="zone-box active-zone"><div class="zone-icon">🐙</div><div class="zone-name">GitHub</div><div class="zone-desc">Remote Repo</div></div>
      </div>
      <h2>📋 Creating a GitHub Repository</h2>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Go to <strong>github.com</strong> and sign in</p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Click the <strong>+</strong> button (top right) → <strong>New repository</strong></p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Name: <code style="font-family:var(--font-mono);color:var(--green)">my-portfolio</code> — Visibility: <strong>Public</strong></p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p><strong>Do NOT</strong> check "Add README, .gitignore, or license" — you already have local commits</p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Click <strong>Create repository</strong> — copy the HTTPS URL shown</p></div></li>
      </ol>
      <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><div class="callout-title">Don't initialize on GitHub if you have local commits</div><div class="callout-text">If you add a README on GitHub, your first push will fail with "rejected – non-fast-forward". Skip all initialization options when you already have local commits.</div></div></div>`,
    quiz: [],
  },
  {
    id: 'git-remote', group: 'github', icon: '🔗', title: 'git remote — Connect to GitHub', xp: 10, time: '5 min',
    hasTrial: true,
    content: `
      <h2>🔗 Connect Your Local Repo to GitHub</h2>
      <p>A <strong>remote</strong> is a version of your repository stored online. By convention, the first remote is called <code style="font-family:var(--font-mono);color:var(--cyan)">origin</code>.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git remote add origin https://github.com/yourusername/my-portfolio.git\ngit remote -v">Copy</button></div><pre>
<span class="comment"># Add GitHub as the remote (called 'origin' by convention):</span>
<span class="cmd">$ git remote add origin https://github.com/yourusername/my-portfolio.git</span>

<span class="comment"># Verify the connection was added:</span>
<span class="cmd">$ git remote -v</span>
<span class="output">origin  https://github.com/yourusername/my-portfolio.git (fetch)</span>
<span class="output">origin  https://github.com/yourusername/my-portfolio.git (push)</span></pre></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown</div>
        <div class="cmd-display">git remote add origin &lt;url&gt;</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">remote</div><div class="cmd-part-desc">Manage remotes</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">add</div><div class="cmd-part-desc">Add new remote</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">origin</div><div class="cmd-part-desc">Name for the remote</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">&lt;url&gt;</div><div class="cmd-part-desc">GitHub HTTPS URL</div></div>
        </div>
      </div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Why "origin"?</div><div class="callout-text">"origin" is just a conventional nickname for your main remote. You could call it anything (like "github" or "production"), but "origin" is the universal standard that every developer understands.</div></div></div>
      <h2>🎮 Try in Terminal</h2>
      <p>Try: <code style="font-family:var(--font-mono);color:var(--green)">git remote add origin https://github.com/user/repo.git</code></p>`,
    quiz: [],
  },
  {
    id: 'git-push', group: 'github', icon: '🚀', title: 'git push — Upload to GitHub', xp: 10, time: '5 min',
    hasTrial: true,
    content: `
      <h2>🚀 git push — Send Your Code to GitHub</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git push</code> uploads your local commits to GitHub, making them accessible online and to your team.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git push -u origin main">Copy</button></div><pre>
<span class="comment"># First push — set upstream branch:</span>
<span class="cmd">$ git push -u origin main</span>
<span class="output">Enumerating objects: 5, done.</span>
<span class="output">Counting objects: 100% (5/5), done.</span>
<span class="output">Writing objects: 100% (5/5), 1.23 KiB | 1.23 MiB/s, done.</span>
<span class="output">Branch 'main' set up to track 'origin/main'.</span>

<span class="comment"># After first push, just use:</span>
<span class="cmd">$ git push</span></pre></div>
      <div class="cmd-breakdown">
        <div class="cmd-breakdown-title">Command Breakdown</div>
        <div class="cmd-display">git push -u origin main</div>
        <div class="cmd-parts">
          <div class="cmd-part part-git"><div class="cmd-part-word">git</div><div class="cmd-part-desc">Git program</div></div>
          <div class="cmd-part part-verb"><div class="cmd-part-word">push</div><div class="cmd-part-desc">Upload commits</div></div>
          <div class="cmd-part part-flag"><div class="cmd-part-word">-u</div><div class="cmd-part-desc">Set upstream (remember this target)</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">origin</div><div class="cmd-part-desc">Remote name</div></div>
          <div class="cmd-part part-arg"><div class="cmd-part-word">main</div><div class="cmd-part-desc">Branch name</div></div>
        </div>
      </div>
      <h2>🔑 Personal Access Token (PAT)</h2>
      <div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><div class="callout-title">GitHub no longer accepts passwords!</div><div class="callout-text">Since August 2021, GitHub requires a <strong>Personal Access Token (PAT)</strong> instead of your password for Git operations. When Git asks for a password, paste your PAT.</div></div></div>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>GitHub.com → Profile picture → <strong>Settings</strong></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Scroll to bottom → <strong>Developer Settings</strong></p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Personal access tokens → <strong>Tokens (classic)</strong></p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p>Generate new token (classic) — check <strong>repo</strong> scope</p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p><strong>Copy immediately</strong> — it's shown only once!</p></div></li>
      </ol>`,
    quiz: [
      { q: 'What does the -u flag do in "git push -u origin main"?', options: ['Updates all files', 'Uninstalls the remote', 'Sets the upstream branch so future git push works without arguments', 'Uploads only untracked files'], correct: 2, exp: 'The -u (or --set-upstream) flag tells Git to remember this remote/branch combination. After this, you can just type git push for future pushes.' },
    ],
  },
  {
    id: 'git-pull', group: 'github', icon: '⬇️', title: 'git pull — Download from GitHub', xp: 10, time: '4 min',
    hasTrial: true,
    content: `
      <h2>⬇️ git pull — Get the Latest from GitHub</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git pull</code> downloads and merges the latest changes from GitHub into your local repository.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git pull origin main">Copy</button></div><pre>
<span class="comment"># Download AND merge latest changes:</span>
<span class="cmd">$ git pull origin main</span>
<span class="output">remote: Enumerating objects: 3, done.</span>
<span class="output">Updating a3f2b1c..7e4d9a2</span>
<span class="output">Fast-forward</span>
<span class="output"> index.html | 5 ++++</span>

<span class="comment"># Fetch without merging (see what's new):</span>
<span class="cmd">$ git fetch origin</span>

<span class="comment"># After first push, just use:</span>
<span class="cmd">$ git pull</span></pre></div>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Professional Workflow</div><div class="callout-text">Always run <code>git pull</code> before starting work each morning. This ensures you're working on the latest code from your team, not an outdated version that will conflict later.</div></div></div>
      <table class="compare-table"><thead><tr><th>Command</th><th>What it does</th></tr></thead>
      <tbody>
        <tr><td>git pull</td><td>Fetch + merge latest changes from remote</td></tr>
        <tr><td>git fetch</td><td>Download changes but DON'T merge (preview first)</td></tr>
        <tr><td>git pull --rebase</td><td>Fetch + rebase instead of merge (cleaner history)</td></tr>
      </tbody></table>`,
    quiz: [],
  },
  {
    id: 'git-clone', group: 'github', icon: '📥', title: 'git clone — Copy a Repository', xp: 10, time: '4 min',
    hasTrial: true,
    content: `
      <h2>📥 git clone — Download a Full Repository</h2>
      <p><code style="font-family:var(--font-mono);color:var(--green)">git clone</code> downloads an entire repository — including all history, branches, and commits — from GitHub to your machine.</p>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git clone https://github.com/username/repo-name.git">Copy</button></div><pre>
<span class="comment"># Clone any public repository:</span>
<span class="cmd">$ git clone https://github.com/username/repo-name.git</span>
<span class="output">Cloning into 'repo-name'...</span>
<span class="output">remote: Counting objects: 1547, done.</span>
<span class="output">Resolving deltas: 100% (743/743), done.</span>

<span class="comment"># Clone into a specific folder name:</span>
<span class="cmd">$ git clone https://github.com/username/repo.git my-local-name</span>

<span class="comment"># Then enter the folder:</span>
<span class="cmd">$ cd repo-name</span></pre></div>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">When to use clone vs pull?</div><div class="callout-text"><strong>git clone</strong> — Used once, when you don't have the repo at all. Downloads everything from scratch.<br/><strong>git pull</strong> — Used repeatedly when you already have the repo. Just gets the new changes.</div></div></div>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Cloning for Open Source</div><div class="callout-text">You can clone ANY public repository on GitHub to study the code, even if it's not yours. This is how developers learn — by reading real code from real projects.</div></div></div>`,
    quiz: [
      { q: 'When would you use git clone instead of git pull?', options: ['When you want to delete a repo', 'When you already have the repo locally and want updates', 'When you are downloading a repo for the first time', 'When you want to merge branches'], correct: 2, exp: 'git clone is used the first time — when you need to download the entire repository. git pull is used afterwards to get updates.' },
    ],
  },
  {
    id: 'git-origins', group: 'github', icon: '🗺️', title: 'Understanding main/master/origin', xp: 5, time: '3 min',
    hasTrial: false,
    content: `
      <h2>🗺️ Demystifying the Terms</h2>
      <table class="compare-table"><thead><tr><th>Term</th><th>What it means</th></tr></thead>
      <tbody>
        <tr><td>main</td><td>The default, primary branch name (modern GitHub default)</td></tr>
        <tr><td>master</td><td>The old default branch name (still used in older repos)</td></tr>
        <tr><td>origin</td><td>The conventional nickname for your main remote (GitHub repo URL)</td></tr>
        <tr><td>HEAD</td><td>A pointer to your current position in commit history</td></tr>
        <tr><td>upstream</td><td>The original repo when you've forked someone's project</td></tr>
      </tbody></table>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">main vs master</div><div class="callout-text">GitHub changed the default branch name from <strong>master</strong> to <strong>main</strong> in 2020. Both mean the same thing — the primary branch. New repos use "main". Older repos may still use "master". Just use whatever the repo already has.</div></div></div>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Understanding these terms together</span></div><pre>
<span class="comment"># origin/main = the main branch on GitHub (remote)</span>
<span class="cmd">$ git push origin main</span>
<span class="comment">          ^      ^</span>
<span class="comment">       remote  branch</span>

<span class="comment"># HEAD -> main = you are on the main branch locally</span>
<span class="output">commit a3f2b1c (HEAD -> main, origin/main)</span></pre></div>`,
    quiz: [],
  },

  // ─── BRANCHING ────────────────────────────────────────────────────────────
  {
    id: 'branches', group: 'branch', icon: '🌿', title: 'Branching — Work in Parallel', xp: 10, time: '7 min',
    hasTrial: true,
    content: `
      <h2>🌿 Why Branches?</h2>
      <p>Branches let you work on features independently without affecting the main (stable) codebase. Professional teams <strong>NEVER commit directly to main.</strong></p>
      <div class="callout analogy"><span class="callout-icon">💡</span><div class="callout-body"><div class="callout-title">Textbook Analogy</div><div class="callout-text"><strong>main</strong> is the published textbook. A <strong>branch</strong> is your personal draft notebook where you write new chapters. Only after review does your draft get added to the published book. Multiple people can write different chapters simultaneously.</div></div></div>
      <div class="branch-viz">
        <div class="branch-viz-title">Branch Visualization</div>
        <svg width="100%" height="120" viewBox="0 0 500 120" class="branch-svg-wrap">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#00e5ff"/></marker>
          </defs>
          <!-- main branch -->
          <circle cx="40" cy="60" r="10" fill="#00e5ff" stroke="#00e5ff" stroke-width="2"/>
          <circle cx="120" cy="60" r="10" fill="#00e5ff" stroke="#00e5ff" stroke-width="2"/>
          <circle cx="200" cy="60" r="10" fill="#00e5ff" stroke="#00e5ff" stroke-width="2"/>
          <circle cx="400" cy="60" r="14" fill="#50fa7b" stroke="#50fa7b" stroke-width="2"/>
          <circle cx="460" cy="60" r="10" fill="#00e5ff" stroke="#00e5ff" stroke-width="2"/>
          <line x1="50" y1="60" x2="110" y2="60" stroke="#00e5ff" stroke-width="2"/>
          <line x1="130" y1="60" x2="190" y2="60" stroke="#00e5ff" stroke-width="2"/>
          <line x1="210" y1="60" x2="385" y2="60" stroke="#2a3150" stroke-width="2" stroke-dasharray="6,3"/>
          <line x1="414" y1="60" x2="450" y2="60" stroke="#00e5ff" stroke-width="2"/>
          <!-- feature branch -->
          <circle cx="280" cy="25" r="10" fill="#bd93f9" stroke="#bd93f9" stroke-width="2"/>
          <circle cx="350" cy="25" r="10" fill="#bd93f9" stroke="#bd93f9" stroke-width="2"/>
          <line x1="200" y1="55" x2="272" y2="30" stroke="#bd93f9" stroke-width="2"/>
          <line x1="290" y1="25" x2="340" y2="25" stroke="#bd93f9" stroke-width="2"/>
          <line x1="358" y1="28" x2="390" y2="52" stroke="#50fa7b" stroke-width="2"/>
          <!-- labels -->
          <text x="40" y="90" fill="#64748b" font-size="10" text-anchor="middle">init</text>
          <text x="120" y="90" fill="#64748b" font-size="10" text-anchor="middle">c1</text>
          <text x="200" y="90" fill="#64748b" font-size="10" text-anchor="middle">c2</text>
          <text x="400" y="90" fill="#50fa7b" font-size="10" text-anchor="middle">merge</text>
          <text x="460" y="90" fill="#64748b" font-size="10" text-anchor="middle">HEAD</text>
          <text x="280" y="15" fill="#bd93f9" font-size="10" text-anchor="middle">f1</text>
          <text x="350" y="15" fill="#bd93f9" font-size="10" text-anchor="middle">f2</text>
          <text x="90" y="52" fill="#00e5ff" font-size="9" text-anchor="middle">main</text>
          <text x="310" y="15" fill="#bd93f9" font-size="9" text-anchor="start">feature/new-section</text>
        </svg>
      </div>
      <h2>🌿 Branch Commands</h2>
      <div class="code-block"><div class="code-block-header"><span class="code-block-lang">Terminal</span><button class="code-copy-btn" data-copy="git branch feature/about-section\ngit checkout -b feature/contact-form\ngit branch\ngit switch main\ngit merge feature/contact-form\ngit branch -d feature/contact-form">Copy</button></div><pre>
<span class="comment"># Create a new branch:</span>
<span class="cmd">$ git branch feature/about-section</span>

<span class="comment"># Create AND switch to it in one command:</span>
<span class="cmd">$ git checkout -b feature/contact-form</span>

<span class="comment"># List all branches (* = current branch):</span>
<span class="cmd">$ git branch</span>
<span class="output">* feature/contact-form</span>
<span class="output">  feature/about-section</span>
<span class="output">  main</span>

<span class="comment"># Switch back to main:</span>
<span class="cmd">$ git switch main</span>

<span class="comment"># Merge feature into main:</span>
<span class="cmd">$ git merge feature/contact-form</span>

<span class="comment"># Delete branch after merging:</span>
<span class="cmd">$ git branch -d feature/contact-form</span></pre></div>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Branch Naming Conventions</div><div class="callout-text">Use clear, descriptive names with slashes:<br/><code>feature/user-authentication</code><br/><code>fix/navbar-mobile-overflow</code><br/><code>hotfix/payment-bug</code><br/><code>chore/update-dependencies</code></div></div></div>`,
    quiz: [
      { q: 'What does `git checkout -b feature/new-page` do?', options: ['Deletes the feature/new-page branch', 'Downloads the branch from GitHub', 'Creates AND switches to a new branch called feature/new-page', 'Merges feature/new-page into main'], correct: 2, exp: 'git checkout -b creates a new branch AND switches to it in one step. It combines git branch name + git checkout name.' },
    ],
  },
  {
    id: 'merge-conflicts', group: 'branch', icon: '⚡', title: 'Merge Conflicts', xp: 10, time: '7 min',
    hasTrial: false,
    content: `
      <h2>⚡ What is a Merge Conflict?</h2>
      <p>A merge conflict happens when <strong>two branches changed the SAME LINE of the SAME FILE</strong>. Git cannot decide automatically which version to keep — you must decide.</p>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Don't Panic!</div><div class="callout-text">Merge conflicts are NORMAL. Every developer deals with them daily. They're Git's way of asking: "Both branches changed this line — which version do you want?" Once you understand the markers, they're easy to resolve.</div></div></div>
      <h2>🔍 What a Conflict Looks Like</h2>
      <div class="conflict-block">
        <div class="conflict-head">
          <div class="conflict-line conflict-marker">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</div>
          <div class="conflict-line">&lt;h1&gt;Welcome to My Portfolio&lt;/h1&gt;</div>
        </div>
        <div class="conflict-sep">
          <div class="conflict-line conflict-marker">=======</div>
        </div>
        <div class="conflict-incoming">
          <div class="conflict-line">&lt;h1&gt;Hello, I'm a Developer&lt;/h1&gt;</div>
          <div class="conflict-line conflict-marker">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/new-heading</div>
        </div>
      </div>
      <h2>📖 Reading the Conflict Markers</h2>
      <ul>
        <li><code style="font-family:var(--font-mono);color:var(--cyan)">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</code> → This is YOUR current branch's version</li>
        <li><code style="font-family:var(--font-mono);color:var(--text-muted)">=======</code> → The divider between the two versions</li>
        <li><code style="font-family:var(--font-mono);color:var(--purple)">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/...</code> → The incoming branch's version</li>
      </ul>
      <h2>🛠️ How to Resolve a Conflict</h2>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Open the conflicting file in VS Code</p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Delete ALL conflict markers: <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code>, <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code></p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Keep the version you want (or combine both)</p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p>Save the file</p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Run: <code style="font-family:var(--font-mono);color:var(--green)">git add index.html</code></p></div></li>
        <li class="step-item"><div class="step-num">6</div><div class="step-body"><p>Run: <code style="font-family:var(--font-mono);color:var(--green)">git commit -m "Resolve merge conflict in heading"</code></p></div></li>
      </ol>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">VS Code Makes This Easy</div><div class="callout-text">VS Code highlights conflicts with blue/green colors and shows clickable buttons: <strong>"Accept Current Change"</strong>, <strong>"Accept Incoming Change"</strong>, <strong>"Accept Both Changes"</strong>. Much easier than editing the raw markers!</div></div></div>`,
    quiz: [
      { q: 'What causes a merge conflict?', options: ['Two people working on different files', 'Two branches changing the SAME LINE in the SAME FILE', 'Pushing without pulling first', 'Having too many commits'], correct: 1, exp: 'Merge conflicts happen when two branches both modified the same line in the same file. Git cannot decide which version to keep, so it asks you to resolve it.' },
    ],
  },
  {
    id: 'pull-requests', group: 'branch', icon: '🔄', title: 'Pull Requests', xp: 10, time: '5 min',
    hasTrial: false,
    content: `
      <h2>🔄 What is a Pull Request (PR)?</h2>
      <p>A Pull Request is how you propose merging your branch into main on GitHub. It allows <strong>code review and discussion</strong> before the merge happens. This is the backbone of professional team collaboration.</p>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Why "Pull Request"?</div><div class="callout-text">You are requesting that the repository owners "pull" your changes into the main branch. You're saying: "Hey, I made some improvements. Can you review them and merge them in?"</div></div></div>
      <h2>📋 Professional PR Workflow</h2>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Create a branch: <code style="font-family:var(--font-mono);color:var(--green)">git checkout -b feature/user-login</code></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Make changes and commit them</p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>Push branch to GitHub: <code style="font-family:var(--font-mono);color:var(--green)">git push origin feature/user-login</code></p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p>Go to GitHub.com → your repo → click <strong>"Compare &amp; pull request"</strong></p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Write a description: what you changed and WHY</p></div></li>
        <li class="step-item"><div class="step-num">6</div><div class="step-body"><p>Request a reviewer (teammate or instructor)</p></div></li>
        <li class="step-item"><div class="step-num">7</div><div class="step-body"><p>Address review comments, push more commits if needed</p></div></li>
        <li class="step-item"><div class="step-num">8</div><div class="step-body"><p>Click <strong>"Merge pull request"</strong> when approved ✅</p></div></li>
      </ol>
      <div class="callout danger"><span class="callout-icon">❌</span><div class="callout-body"><div class="callout-title">Industry Rule: Never Push Directly to Main</div><div class="callout-text">In professional codebases, ALL changes go through Pull Requests. Direct pushes to main are blocked. This ensures every change is reviewed and tested before reaching production.</div></div></div>`,
    quiz: [],
  },

  // ─── DEPLOY & CI/CD ───────────────────────────────────────────────────────
  {
    id: 'github-pages', group: 'deploy', icon: '🌍', title: 'Deploy with GitHub Pages', xp: 10, time: '5 min',
    hasTrial: false,
    content: `
      <h2>🌍 Make Your Portfolio LIVE on the Internet — Free!</h2>
      <p>GitHub Pages hosts static websites directly from your repository. Your portfolio will be at <code style="font-family:var(--font-mono);color:var(--cyan)">https://yourusername.github.io/repo-name</code> — completely free!</p>
      <ol class="step-list">
        <li class="step-item"><div class="step-num">1</div><div class="step-body"><p>Go to your repository on <strong>github.com</strong></p></div></li>
        <li class="step-item"><div class="step-num">2</div><div class="step-body"><p>Click the <strong>Settings</strong> tab</p></div></li>
        <li class="step-item"><div class="step-num">3</div><div class="step-body"><p>In the left sidebar, click <strong>Pages</strong></p></div></li>
        <li class="step-item"><div class="step-num">4</div><div class="step-body"><p>Under Source: select <strong>"Deploy from a branch"</strong></p></div></li>
        <li class="step-item"><div class="step-num">5</div><div class="step-body"><p>Branch: <strong>main</strong> | Folder: <strong>/ (root)</strong> → Click <strong>Save</strong></p></div></li>
        <li class="step-item"><div class="step-num">6</div><div class="step-body"><p>Wait ~60 seconds, refresh — your URL appears!</p></div></li>
        <li class="step-item"><div class="step-num">7</div><div class="step-body"><p>Open <code style="font-family:var(--font-mono);color:var(--cyan)">https://YOURUSERNAME.github.io/my-portfolio</code></p></div></li>
      </ol>
      <div class="callout tip"><span class="callout-icon">✅</span><div class="callout-body"><div class="callout-title">Share with the World</div><div class="callout-text">GitHub Pages is free for public repos. Share your live portfolio URL with friends, family, and future employers! Add it to your resume and LinkedIn profile.</div></div></div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">CI/CD Demo: Edit → Auto Deploy</div><div class="callout-text">Once GitHub Pages is set up: edit <code>index.html</code> on GitHub.com, commit the change — wait 30 seconds — refresh your live URL. Your change is LIVE automatically! This is CI/CD in action.</div></div></div>`,
    quiz: [],
  },
  {
    id: 'cicd', group: 'deploy', icon: '⚙️', title: 'CI/CD — Code to Production', xp: 10, time: '5 min',
    hasTrial: false,
    content: `
      <h2>⚙️ Continuous Integration / Continuous Deployment</h2>
      <p>CI/CD automates the process of testing and deploying code. Every professional software team uses it.</p>
      <table class="compare-table"><thead><tr><th>Term</th><th>What it does</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>CI (Continuous Integration)</td><td>Automatically runs tests on every commit/PR</td><td>GitHub Actions runs tests on every push</td></tr>
        <tr><td>CD (Continuous Delivery)</td><td>Code is always ready to deploy (tests pass)</td><td>Every merge to main is deployable</td></tr>
        <tr><td>CD (Continuous Deployment)</td><td>Auto-deploys tested code to production</td><td>GitHub Pages auto-deploys from main</td></tr>
      </tbody></table>
      <h2>🔄 A Real-World CI/CD Pipeline</h2>
      <div class="zones-visual">
        <div class="zone-box"><div class="zone-icon">👨‍💻</div><div class="zone-name">Developer Pushes Code</div><div class="zone-desc">git push</div></div>
        <div class="zone-arrow"><div class="zone-arrow-cmd">trigger</div><div class="zone-arrow-line">→</div></div>
        <div class="zone-box"><div class="zone-icon">🧪</div><div class="zone-name">Tests Run</div><div class="zone-desc">Automated tests</div></div>
        <div class="zone-arrow"><div class="zone-arrow-cmd">if pass</div><div class="zone-arrow-line">→</div></div>
        <div class="zone-box active-zone"><div class="zone-icon">🚀</div><div class="zone-name">Auto Deploy</div><div class="zone-desc">Goes live!</div></div>
      </div>
      <div class="callout info"><span class="callout-icon">ℹ️</span><div class="callout-body"><div class="callout-title">Netflix Scale</div><div class="callout-text">Netflix deploys new code <strong>thousands of times per day</strong> using CI/CD. Your GitHub Pages setup is a simplified taste of the same concept used at Google, Netflix, Amazon, and every major tech company.</div></div></div>
      <h2>🛠️ Popular CI/CD Tools</h2>
      <ul>
        <li><strong>GitHub Actions</strong> — Built into GitHub, free for public repos</li>
        <li><strong>Jenkins</strong> — Open-source, highly configurable</li>
        <li><strong>CircleCI</strong> — Cloud-based, easy setup</li>
        <li><strong>GitLab CI/CD</strong> — Built into GitLab</li>
        <li><strong>Vercel / Netlify</strong> — Auto-deploy for front-end apps</li>
      </ul>`,
    quiz: [],
  },

  // ─── CHALLENGES & EXAM ────────────────────────────────────────────────────
  {
    id: 'challenges', group: 'finish', icon: '🚀', title: 'Practice Challenges', xp: 15, time: '20 min',
    hasTrial: true,
    content: `
      <h2>🚀 Practice Challenges</h2>
      <p>Put your knowledge to the test. Complete these challenges to reinforce everything you've learned.</p>
      <div class="challenge-grid">
        <div class="challenge-card beginner">
          <div class="challenge-level">🟢 Beginner — Challenge 1</div>
          <div class="challenge-title">🔥 Mission: Your First Repository</div>
          <div class="challenge-desc">Create your very first Git repository, add files, and make three commits.</div>
          <ul class="challenge-steps">
            <li class="challenge-step">Create a folder called <code style="font-family:var(--font-mono);color:var(--green)">git-practice</code></li>
            <li class="challenge-step">Initialize a Git repository inside it</li>
            <li class="challenge-step">Create three files: <code style="font-family:var(--font-mono);color:var(--cyan)">hello.txt</code>, <code style="font-family:var(--font-mono);color:var(--cyan)">world.txt</code>, <code style="font-family:var(--font-mono);color:var(--cyan)">notes.txt</code></li>
            <li class="challenge-step">Make THREE separate commits, one per file</li>
            <li class="challenge-step">Use <code style="font-family:var(--font-mono);color:var(--green)">git log --oneline</code> to see all three</li>
          </ul>
          <div class="challenge-xp">🏆 Reward: +15 XP</div>
        </div>
        <div class="challenge-card intermediate">
          <div class="challenge-level">🟡 Intermediate — Challenge 2</div>
          <div class="challenge-title">🌿 Mission: Dark Mode Branch</div>
          <div class="challenge-desc">Create a feature branch, make changes, and merge it back.</div>
          <ul class="challenge-steps">
            <li class="challenge-step">Create a branch called <code style="font-family:var(--font-mono);color:var(--cyan)">feature/dark-mode</code></li>
            <li class="challenge-step">Switch to that branch</li>
            <li class="challenge-step">Change the background color in <code style="font-family:var(--font-mono);color:var(--cyan)">style.css</code></li>
            <li class="challenge-step">Commit the change with a good message</li>
            <li class="challenge-step">Switch back to main, merge the branch</li>
            <li class="challenge-step">Delete the feature branch</li>
          </ul>
          <div class="challenge-xp">🏆 Reward: +20 XP</div>
        </div>
        <div class="challenge-card advanced">
          <div class="challenge-level">🔴 Advanced — Challenge 3</div>
          <div class="challenge-title">⚡ Mission: Resolve a Conflict</div>
          <div class="challenge-desc">Intentionally create a merge conflict, then resolve it like a pro.</div>
          <ul class="challenge-steps">
            <li class="challenge-step">Create two branches: <code style="font-family:var(--font-mono);color:var(--cyan)">branch-a</code> and <code style="font-family:var(--font-mono);color:var(--cyan)">branch-b</code></li>
            <li class="challenge-step">In branch-a: edit line 5 of <code style="font-family:var(--font-mono);color:var(--cyan)">index.html</code></li>
            <li class="challenge-step">In branch-b: edit the SAME line 5 differently</li>
            <li class="challenge-step">Merge branch-a into main first</li>
            <li class="challenge-step">Try to merge branch-b — you get a conflict!</li>
            <li class="challenge-step">Resolve the conflict and complete the merge</li>
          </ul>
          <div class="challenge-xp">🏆 Reward: +25 XP</div>
        </div>
      </div>
      <h2>🎮 Practice Terminal</h2>
      <p>Use the terminal below to practice any Git commands. Your progress in the simulator is saved during your session.</p>`,
    quiz: [],
  },
  {
    id: 'command-reference', group: 'finish', icon: '📋', title: 'Quick Command Reference', xp: 5, time: '2 min',
    hasTrial: false,
    content: `
      <h2>📋 Complete Git Command Cheatsheet</h2>
      <p>Bookmark this page! These are the commands you'll use every single day as a developer.</p>
      <h3>🏁 Setup</h3>
      <div class="cmd-ref">
        <div class="cmd-ref-row header"><div class="cmd-ref-cell">Command</div><div class="cmd-ref-cell">Purpose</div><div class="cmd-ref-cell">Example</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git --version</div><div class="cmd-ref-cell">Check Git is installed</div><div class="cmd-ref-cell">git --version</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git config --global</div><div class="cmd-ref-cell">Set global config</div><div class="cmd-ref-cell">git config --global user.name "Name"</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git init</div><div class="cmd-ref-cell">Initialize new repo</div><div class="cmd-ref-cell">git init</div></div>
      </div>
      <h3>📸 Daily Workflow</h3>
      <div class="cmd-ref">
        <div class="cmd-ref-row header"><div class="cmd-ref-cell">Command</div><div class="cmd-ref-cell">Purpose</div><div class="cmd-ref-cell">Example</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git status</div><div class="cmd-ref-cell">Show working tree status</div><div class="cmd-ref-cell">git status</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git add .</div><div class="cmd-ref-cell">Stage all changes</div><div class="cmd-ref-cell">git add .</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git commit -m</div><div class="cmd-ref-cell">Create commit</div><div class="cmd-ref-cell">git commit -m "Add feature"</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git log --oneline</div><div class="cmd-ref-cell">View compact history</div><div class="cmd-ref-cell">git log --oneline</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git diff</div><div class="cmd-ref-cell">Show unstaged changes</div><div class="cmd-ref-cell">git diff</div></div>
      </div>
      <h3>🌿 Branching</h3>
      <div class="cmd-ref">
        <div class="cmd-ref-row header"><div class="cmd-ref-cell">Command</div><div class="cmd-ref-cell">Purpose</div><div class="cmd-ref-cell">Example</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git branch</div><div class="cmd-ref-cell">List all branches</div><div class="cmd-ref-cell">git branch</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git checkout -b</div><div class="cmd-ref-cell">Create and switch branch</div><div class="cmd-ref-cell">git checkout -b feature/x</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git merge</div><div class="cmd-ref-cell">Merge branch into current</div><div class="cmd-ref-cell">git merge feature/x</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git branch -d</div><div class="cmd-ref-cell">Delete a branch</div><div class="cmd-ref-cell">git branch -d feature/x</div></div>
      </div>
      <h3>🌐 GitHub</h3>
      <div class="cmd-ref">
        <div class="cmd-ref-row header"><div class="cmd-ref-cell">Command</div><div class="cmd-ref-cell">Purpose</div><div class="cmd-ref-cell">Example</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git remote add</div><div class="cmd-ref-cell">Add remote repo</div><div class="cmd-ref-cell">git remote add origin URL</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git push</div><div class="cmd-ref-cell">Push to remote</div><div class="cmd-ref-cell">git push origin main</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git pull</div><div class="cmd-ref-cell">Pull from remote</div><div class="cmd-ref-cell">git pull origin main</div></div>
        <div class="cmd-ref-row"><div class="cmd-ref-cell">git clone</div><div class="cmd-ref-cell">Clone a repository</div><div class="cmd-ref-cell">git clone https://...</div></div>
      </div>`,
    quiz: [],
  },
  {
    id: 'final-quiz', group: 'finish', icon: '🎓', title: 'Final Assessment', xp: 15, time: '10 min',
    hasTrial: false,
    content: `<h2>🎓 Final Assessment</h2><p>Test your mastery of Git &amp; GitHub. Answer all questions to earn your certificate!</p>`,
    quiz: [
      { q: 'What is the correct order of the Git workflow?', options: ['commit → add → push', 'add → commit → push', 'push → commit → add', 'commit → push → add'], correct: 1, exp: 'The correct workflow: git add (stage) → git commit (save locally) → git push (upload to GitHub).' },
      { q: 'What does `git clone` do?', options: ['Creates a new empty repo', 'Downloads a complete repository from GitHub', 'Copies a local branch', 'Deletes local files'], correct: 1, exp: 'git clone downloads an entire repository (all history, branches, commits) from a remote source.' },
      { q: 'A merge conflict happens when:', options: ['You forget to commit', 'Two branches changed the same line in the same file', 'The internet is down', 'You have too many branches'], correct: 1, exp: 'Conflicts occur when two branches both modified the same line in the same file. Git cannot auto-resolve it.' },
      { q: 'What is a Pull Request?', options: ['A git command to download code', 'A proposal to merge your branch into main, with code review', 'A way to delete a branch', 'A type of merge conflict'], correct: 1, exp: 'A Pull Request on GitHub is a proposal to merge your branch. It enables code review before the merge happens.' },
      { q: 'Which flag sets the upstream branch for future git push commands?', options: ['-b', '-m', '-u', '--all'], correct: 2, exp: 'The -u (--set-upstream) flag tells Git to remember this remote/branch so future git push works without arguments.' },
      { q: 'What does `git stash` do?', options: ['Deletes all uncommitted changes', 'Temporarily saves uncommitted changes so you can switch branches', 'Creates a new branch', 'Pushes to GitHub without committing'], correct: 1, exp: 'git stash temporarily shelves your changes so you can switch context. git stash pop restores them.' },
      { q: 'In a merge conflict, what does <<<<<<< HEAD represent?', options: ['The incoming branch version', 'Your current branch version', 'The conflict marker to delete', 'The original file before any changes'], correct: 1, exp: '<<<<<<< HEAD marks YOUR current branch\'s version of the code — the branch you were on when the conflict occurred.' },
      { q: 'What is CI/CD?', options: ['A type of Git branch', 'Automated testing and deployment pipeline', 'A GitHub settings page', 'A merge conflict resolution tool'], correct: 1, exp: 'CI/CD (Continuous Integration/Deployment) automates testing and deploying code every time you push changes.' },
    ],
  },
  {
    id: 'graduation', group: 'finish', icon: '🏆', title: 'Graduation', xp: 10, time: '1 min',
    hasTrial: false,
    content: `<div class="grad-screen">
      <span class="grad-badge">🏆</span>
      <h1 class="grad-title">Congratulations!</h1>
      <p class="grad-subtitle">You've Mastered Git & GitHub Basics!</p>
      <p class="grad-desc">You started as an absolute beginner and have now completed the full Git & GitHub bootcamp. You know how to track changes, collaborate with teams, manage branches, resolve conflicts, and deploy to the web.</p>
      <div class="cert-card">
        <div class="cert-logo">⬡</div>
        <div class="cert-school">Codeboosters Tech — GitQuest Platform</div>
        <div class="cert-label">This certifies that</div>
        <div class="cert-name" id="cert-student-name">Git Ninja</div>
        <div class="cert-course">has successfully completed<br/><strong>Git & GitHub — Hands-On Bootcamp</strong></div>
        <div class="cert-badges">
          <span class="cert-badge-chip">🌱 Beginner → 🥷 Git Ninja</span>
          <span class="cert-badge-chip">31 Lessons</span>
        </div>
      </div>
      <div class="grad-actions">
        <button class="btn btn-primary" onclick="window.GitQuestApp.restartCourse()">🔄 Restart Course</button>
        <button class="btn btn-secondary" onclick="window.GitQuestApp.celebrate()">🎉 Celebrate Again!</button>
      </div>
    </div>`,
    quiz: [],
  },
];
