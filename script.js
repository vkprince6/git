import { LESSONS, GROUPS } from './data/lessons.js';
import { loadState, addXP, markComplete, isComplete, getLevel, getXPProgress, resetState, updateStreak } from './modules/state.js';
import { buildQuizHTML, handleAnswer } from './modules/quizzes.js';
import { checkAchievements, initAchievementCache } from './modules/achievements.js';

// ─── APP STATE ────────────────────────────────────────────────────────────────
let appState = loadState();
let currentLessonId = null;

// ─── INIT ─────────────────────────────────────────────────────────────────────
function init() {
  appState = updateStreak(appState);
  initAchievementCache(appState);
  renderSidebar();
  updateHUD();

  const firstIncomplete = LESSONS.find(l => !isComplete(appState, l.id));
  navigateTo(firstIncomplete?.id || 'welcome');

  document.addEventListener('click', e => {
    const btn = e.target.closest('.code-copy-btn');
    if (btn) {
      const text = btn.dataset.copy || btn.closest('.code-block')?.querySelector('pre')?.textContent || '';
      navigator.clipboard?.writeText(text).catch(() => {});
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.color = 'var(--green)';
      setTimeout(() => { btn.textContent = orig; btn.style.color = ''; }, 1500);
    }
  });
}

// ─── HUD ──────────────────────────────────────────────────────────────────────
function updateHUD() {
  const xp = appState.xp || 0;
  const lvl = getLevel(xp);
  const pct = getXPProgress(xp);

  document.getElementById('xp-fill').style.width = `${pct}%`;
  document.getElementById('xp-text').textContent = `${xp} XP`;
  document.getElementById('level-emoji').textContent = lvl.emoji;
  document.getElementById('level-label').textContent = lvl.name;
  document.getElementById('streak-num').textContent = appState.streak || 0;

  const done = appState.completed.length;
  document.getElementById('course-fill').style.width = `${Math.round((done / LESSONS.length) * 100)}%`;
  document.getElementById('done-count').textContent = done;
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────────
function renderSidebar() {
  const nav = document.getElementById('module-list');
  nav.innerHTML = '';

  for (const group of GROUPS) {
    const groupLessons = LESSONS.filter(l => l.group === group.id);
    if (!groupLessons.length) continue;

    const groupEl = document.createElement('div');
    groupEl.className = 'module-group';
    groupEl.innerHTML = `<div class="group-label">${group.label}</div>`;

    for (const lesson of groupLessons) {
      const done = isComplete(appState, lesson.id);
      const active = lesson.id === currentLessonId;
      const item = document.createElement('div');
      item.className = `module-item${active ? ' active' : ''}${done ? ' completed' : ''}`;
      item.dataset.id = lesson.id;
      item.innerHTML = `
        <div class="module-icon">${lesson.icon}</div>
        <div class="module-info">
          <div class="module-title">${lesson.title}</div>
          <div class="module-xp">+${lesson.xp} XP · ${lesson.time}</div>
        </div>
        <div class="module-check ${done ? 'done' : 'pending'}">${done ? '✓' : '○'}</div>`;
      item.addEventListener('click', () => navigateTo(lesson.id));
      groupEl.appendChild(item);
    }
    nav.appendChild(groupEl);
  }
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function navigateTo(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson) return;
  currentLessonId = id;
  renderLesson(lesson);
  document.querySelectorAll('.module-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });
  document.getElementById('content-panel').scrollTop = 0;
}

// ─── LESSON RENDERER ──────────────────────────────────────────────────────────
function renderLesson(lesson) {
  const container = document.getElementById('lesson-container');
  const idx = LESSONS.findIndex(l => l.id === lesson.id);
  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;
  const done = isComplete(appState, lesson.id);
  const group = GROUPS.find(g => g.id === lesson.group);

  const terminalSection = lesson.hasTrial ? buildTerminalHTML(lesson.id) : '';
  const quizSection = lesson.quiz?.length ? buildQuizHTML(lesson.quiz, lesson.id) : '';

  container.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-breadcrumb">${group?.label || ''}</div>
      <div class="lesson-title-row">
        <span class="lesson-emoji">${lesson.icon}</span>
        <h1 class="lesson-title">${lesson.title}</h1>
      </div>
      <div class="lesson-meta">
        <span class="lesson-xp-badge">+${lesson.xp} XP</span>
        <span class="lesson-time">⏱ ${lesson.time}</span>
      </div>
    </div>
    <div class="lesson-body">
      ${lesson.content}
      ${terminalSection}
      ${quizSection}
    </div>
    <div class="lesson-nav">
      ${prev ? `<button class="btn btn-secondary" onclick="GitQuestApp.go('${prev.id}')">← ${prev.title}</button>` : '<div></div>'}
      <div class="nav-spacer"></div>
      ${done
        ? `<button class="btn btn-secondary" disabled>✓ Completed</button>`
        : `<button class="btn btn-complete" onclick="GitQuestApp.complete('${lesson.id}')">Mark Complete +${lesson.xp} XP ✓</button>`
      }
      ${next ? `<button class="btn btn-primary" onclick="GitQuestApp.go('${next.id}')">Next: ${next.title} →</button>` : ''}
    </div>`;

  if (lesson.hasTrial) mountTerminal(lesson.id);
}

// ─── TERMINAL HTML BUILDER ────────────────────────────────────────────────────
function buildTerminalHTML(lessonId) {
  return `<div class="terminal-wrap" id="term-wrap-${lessonId}">
    <div class="terminal-topbar">
      <div class="terminal-dot red"></div>
      <div class="terminal-dot yellow"></div>
      <div class="terminal-dot green"></div>
      <span class="terminal-label">bash — GitQuest Terminal Simulator</span>
    </div>
    <div class="terminal-output" id="term-out-${lessonId}"></div>
    <div class="terminal-input-row">
      <span class="terminal-prompt-sym">$</span>
      <input class="terminal-input" id="term-in-${lessonId}" type="text"
        placeholder="type a command and press Enter…" autocomplete="off" spellcheck="false" />
    </div>
    <div class="terminal-hint">↑↓ history · Tab hint · type <strong>help</strong> for all commands</div>
  </div>`;
}

// ─── TERMINAL MOUNT ───────────────────────────────────────────────────────────
function mountTerminal(lessonId) {
  const output = document.getElementById(`term-out-${lessonId}`);
  const input  = document.getElementById(`term-in-${lessonId}`);
  if (!output || !input) return;

  const s = {
    cwd: '~', files: { '~': { type: 'dir' } },
    git: null, history: [], histIdx: -1,
  };

  const esc = t => t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  function print(text, cls = 'output') {
    const d = document.createElement('div');
    d.className = `terminal-line ${cls}`;
    d.textContent = text;
    output.appendChild(d);
    output.scrollTop = output.scrollHeight;
  }

  function prompt() {
    return `user@gitquest:${s.cwd}${s.git ? ` (${s.git.branch})` : ''}$`;
  }

  function run(raw) {
    const cmd = raw.trim();
    if (!cmd) return;
    s.history.unshift(cmd); s.histIdx = -1;
    const row = document.createElement('div');
    row.className = 'terminal-line';
    row.innerHTML = `<span style="color:var(--green)">${esc(prompt())}</span> ${esc(cmd)}`;
    output.appendChild(row);

    const [base, ...args] = cmd.split(/\s+/);
    switch (base) {
      case 'pwd':   print(s.cwd === '~' ? '/home/user' : `/home/user${s.cwd.slice(1)}`); break;
      case 'ls':    doLs(args); break;
      case 'cd':    doCd(args); break;
      case 'mkdir': doMkdir(args); break;
      case 'touch': doTouch(args); break;
      case 'echo':  print(args.join(' ')); break;
      case 'clear': output.innerHTML = ''; break;
      case 'help':  doHelp(); break;
      case 'git':   doGit(args); break;
      default: print(`${base}: command not found — type 'help'`, 'error-line');
    }
    output.scrollTop = output.scrollHeight;
  }

  function doLs(args) {
    const hidden = args.some(a => a.includes('a'));
    const entries = Object.keys(s.files)
      .filter(p => s.cwd === '~' ? /^~\/[^/]+$/.test(p) : p.startsWith(s.cwd+'/') && p.split('/').length === s.cwd.split('/').length+1)
      .map(p => p.split('/').pop());
    if (hidden && s.git) entries.unshift('.git');
    print(entries.length ? entries.join('  ') : '(empty directory)');
  }

  function doCd(args) {
    if (!args[0]||args[0]==='~') { s.cwd='~'; return; }
    const t = args[0]==='..' ? (s.cwd.split('/').slice(0,-1).join('/')||'~') :
              args[0].startsWith('~/') ? args[0] :
              (s.cwd==='~' ? `~/${args[0]}` : `${s.cwd}/${args[0]}`);
    if (s.files[t]?.type==='dir'||t==='~') s.cwd=t;
    else print(`cd: ${args[0]}: No such directory`,'error-line');
  }

  function doMkdir(args) {
    if (!args[0]) { print('mkdir: missing operand','error-line'); return; }
    s.files[s.cwd==='~'?`~/${args[0]}`:`${s.cwd}/${args[0]}`] = { type:'dir' };
    print(`Directory '${args[0]}' created`,'success');
  }

  function doTouch(args) {
    if (!args[0]) { print('touch: missing operand','error-line'); return; }
    s.files[`${s.cwd}/${args[0]}`] = { type:'file' };
    print(`'${args[0]}' created`);
  }

  function doHelp() {
    [
      '┌─ Terminal Commands ──────────────────────────┐',
      '│  pwd · ls · ls -la · cd · mkdir · touch     │',
      '│  echo · clear · help                         │',
      '├─ Git Commands ───────────────────────────────┤',
      '│  git --version     git init                  │',
      '│  git status        git add . / <file>        │',
      '│  git commit -m ""  git log / --oneline       │',
      '│  git branch        git checkout -b <name>    │',
      '│  git switch <name> git merge <branch>        │',
      '│  git remote add    git push / git pull       │',
      '│  git clone <url>   git stash / stash pop     │',
      '│  git restore       git reset --soft          │',
      '└──────────────────────────────────────────────┘',
    ].forEach(l => print(l));
  }

  function doGit(args) {
    const [sub, ...rest] = args;
    if (!sub) { print('usage: git [command]'); return; }
    if (sub==='--version') { print('git version 2.47.0'); return; }
    if (sub==='config') { print('Config updated ✓','success'); return; }
    if (sub==='init') { doGitInit(); return; }
    if (!s.git) { print('fatal: not a git repository. Run: git init','error-line'); return; }
    const g = s.git;
    if (sub==='status')   doGitStatus();
    else if (sub==='add')      doGitAdd(rest);
    else if (sub==='commit')   doGitCommit(rest);
    else if (sub==='log')      doGitLog(rest);
    else if (sub==='diff')     print('(no unstaged changes in simulator)');
    else if (sub==='branch')   doGitBranch(rest);
    else if (sub==='checkout'||sub==='switch') doGitCheckout(rest);
    else if (sub==='merge')    doGitMerge(rest);
    else if (sub==='remote')   doGitRemote(rest);
    else if (sub==='push')     doGitPush(rest);
    else if (sub==='pull')     print('Already up to date.','success');
    else if (sub==='clone')    doGitClone(rest);
    else if (sub==='stash')    doGitStash(rest);
    else if (sub==='restore')  doGitRestore(rest);
    else if (sub==='reset')    doGitReset(rest);
    else print(`git: '${sub}' is not a git command`,'error-line');
  }

  function doGitInit() {
    if (s.git) { print('Reinitialized existing Git repository in .git/'); return; }
    s.git = { staged:[], commits:[], branch:'main', branches:['main'], remotes:{} };
    print(`Initialized empty Git repository in ${s.cwd==='~'?'/home/user':`/home/user${s.cwd.slice(1)}`}/.git/`,'success');
  }

  function doGitStatus() {
    const g = s.git;
    print(`On branch ${g.branch}`);
    if (!g.commits.length) print('No commits yet');
    if (g.staged.length) { print('Changes to be committed:'); g.staged.forEach(f=>print(`\tnew file:   ${f}`,'success')); }
    const tracked = g.commits.flatMap(c=>c.files||[]);
    const untracked = Object.keys(s.files).filter(p=>p.startsWith(s.cwd)&&s.files[p].type==='file').map(p=>p.split('/').pop()).filter(f=>!g.staged.includes(f)&&!tracked.includes(f));
    if (untracked.length) { print('Untracked files:'); untracked.forEach(f=>print(`\t${f}`,'error-line')); }
    if (!g.staged.length&&!untracked.length) print('nothing to commit, working tree clean');
  }

  function doGitAdd(args) {
    const g = s.git;
    if (!args[0]) { print('Nothing specified','error-line'); return; }
    if (args[0]==='.') {
      const files = Object.keys(s.files).filter(p=>p.startsWith(s.cwd)&&s.files[p].type==='file').map(p=>p.split('/').pop());
      files.forEach(f=>{ if(!g.staged.includes(f)) g.staged.push(f); });
      print(files.length?`Staged ${files.length} file(s)`:'Nothing to stage', files.length?'success':'output');
    } else { if(!g.staged.includes(args[0])) g.staged.push(args[0]); print(`Staged: ${args[0]}`,'success'); }
  }

  function doGitCommit(args) {
    const g = s.git;
    if (!g.staged.length) { print('nothing to commit, working tree clean'); return; }
    const mi = args.indexOf('-m');
    if (mi<0||!args[mi+1]) { print('error: use git commit -m "your message"','error-line'); return; }
    const msg = args.slice(mi+1).join(' ').replace(/^["']|["']$/g,'');
    const hash = Math.random().toString(36).slice(2,9);
    const files = [...g.staged]; g.staged = [];
    g.commits.push({ hash, msg, files });
    print(`[${g.branch}${g.commits.length===1?' (root-commit)':''} ${hash}] ${msg}`,'success');
    print(` ${files.length} file(s) changed`);
    files.forEach(f=>print(` create mode 100644 ${f}`));
  }

  function doGitLog(args) {
    const g = s.git;
    if (!g.commits.length) { print('fatal: no commits yet','error-line'); return; }
    const oneline = args.includes('--oneline');
    [...g.commits].reverse().forEach((c,i)=>{
      if (oneline) print(`${c.hash}${i===0?` (HEAD -> ${g.branch})`:''} ${c.msg}`);
      else { print(`commit ${c.hash}${i===0?` (HEAD -> ${g.branch})`:''}`,); print(`    ${c.msg}`); print(''); }
    });
  }

  function doGitBranch(args) {
    const g = s.git;
    if (args[0]==='-d'&&args[1]) {
      if (args[1]===g.branch) { print(`error: cannot delete checked-out branch '${args[1]}'`,'error-line'); return; }
      g.branches = g.branches.filter(b=>b!==args[1]);
      print(`Deleted branch ${args[1]}.`,'success');
    } else if (args[0]&&!args[0].startsWith('-')) {
      if (g.branches.includes(args[0])) { print(`fatal: Branch '${args[0]}' already exists.`,'error-line'); return; }
      g.branches.push(args[0]); print(`Branch '${args[0]}' created`,'success');
    } else g.branches.forEach(b=>print(b===g.branch?`* ${b}`:`  ${b}`));
  }

  function doGitCheckout(args) {
    const g = s.git;
    if (args[0]==='-b'&&args[1]) {
      if (g.branches.includes(args[1])) { print(`fatal: Branch '${args[1]}' already exists.`,'error-line'); return; }
      g.branches.push(args[1]); g.branch=args[1];
      print(`Switched to a new branch '${args[1]}'`,'success');
    } else if (args[0]) {
      if (!g.branches.includes(args[0])) { print(`error: Branch '${args[0]}' not found.`,'error-line'); return; }
      g.branch=args[0]; print(`Switched to branch '${args[0]}'`,'success');
    }
  }

  function doGitMerge(args) {
    if (!args[0]) { print('merge: no branch specified','error-line'); return; }
    print(`Merge made by the 'ort' strategy.`,'success');
  }

  function doGitRemote(args) {
    const g = s.git;
    if (args[0]==='add'&&args[1]&&args[2]) { g.remotes[args[1]]=args[2]; print(`Remote '${args[1]}' → ${args[2]}`,'success'); }
    else if (args[0]==='-v') {
      if (!Object.keys(g.remotes).length) { print('(no remotes)'); return; }
      Object.entries(g.remotes).forEach(([n,u])=>{ print(`${n}\t${u} (fetch)`); print(`${n}\t${u} (push)`); });
    } else print('usage: git remote add <name> <url>  |  git remote -v');
  }

  function doGitPush(args) {
    const g = s.git;
    if (!g.commits.length) { print('error: nothing to push (no commits)','error-line'); return; }
    if (!Object.keys(g.remotes).length) { print('fatal: No remote. Run: git remote add origin <url>','error-line'); return; }
    print(`Enumerating objects: ${g.commits.length*3}, done.`);
    print('Writing objects: 100%, done.');
    print(`To ${Object.values(g.remotes)[0]}`);
    print(`   * [new branch]      ${g.branch} -> ${g.branch}`);
    if (args.includes('-u')) print(`Branch '${g.branch}' set up to track 'origin/${g.branch}'.`,'success');
    print('Push successful ✓','success');
  }

  function doGitClone(args) {
    if (!args[0]) { print('usage: git clone <url>','error-line'); return; }
    const name = args[0].split('/').pop().replace('.git','');
    print(`Cloning into '${name}'...`);
    print('remote: Enumerating objects: 42, done.');
    print('Receiving objects: 100% (42/42), done.');
    print(`Cloned into ${name}/`,'success');
    s.files[`${s.cwd}/${name}`] = { type:'dir' };
  }

  function doGitStash(args) {
    if (!args[0]||args[0]==='save') print(`Saved WIP on ${s.git.branch}`,'success');
    else if (args[0]==='pop') print('Stash applied','success');
    else if (args[0]==='list') print('stash@{0}: WIP on main');
    else print('usage: git stash [save|pop|list]');
  }

  function doGitRestore(args) {
    if (args.includes('--staged')&&args.length>1) {
      const f = args.find(a=>!a.startsWith('-'));
      if (f) { s.git.staged=s.git.staged.filter(x=>x!==f); print(`Unstaged: ${f}`,'success'); }
    } else if (args[0]) print(`Restored '${args[0]}'`,'success');
  }

  function doGitReset(args) {
    if (args.includes('--hard')) print('WARNING: --hard discards all uncommitted changes permanently!','error-line');
    print('HEAD reset','success');
  }

  // boot
  print('GitQuest Terminal v1.0 — type help for all commands','success');
  print('Try: git init → git add . → git commit -m "Initial commit"','comment');

  input.addEventListener('keydown', e => {
    if (e.key==='Enter') { run(input.value); input.value=''; }
    else if (e.key==='ArrowUp') { e.preventDefault(); s.histIdx=Math.min(s.histIdx+1,s.history.length-1); input.value=s.history[s.histIdx]||''; }
    else if (e.key==='ArrowDown') { e.preventDefault(); s.histIdx=Math.max(s.histIdx-1,-1); input.value=s.histIdx>=0?s.history[s.histIdx]:''; }
  });

  input.focus();
}

// ─── COMPLETE LESSON ──────────────────────────────────────────────────────────
function completeLesson(id) {
  const lesson = LESSONS.find(l => l.id === id);
  if (!lesson || isComplete(appState, id)) return;

  appState = markComplete(appState, id);
  appState = addXP(appState, lesson.xp);
  updateHUD();
  renderSidebar();
  showXPFloat(lesson.xp);
  checkAchievements(appState, showAchievement);
  renderLesson(lesson);

  if (id === 'graduation') { celebrate(); return; }
  const idx = LESSONS.findIndex(l => l.id === id);
  if (idx >= 0 && idx < LESSONS.length - 1) setTimeout(() => navigateTo(LESSONS[idx+1].id), 800);
}

// ─── QUIZ ANSWER ──────────────────────────────────────────────────────────────
function answerQuiz(lessonId, qIdx, optIdx) {
  const lesson = LESSONS.find(l => l.id === lessonId);
  if (!lesson?.quiz) return;
  const result = handleAnswer(lessonId, qIdx, optIdx, lesson.quiz);
  if (!result.alreadyAnswered && result.correct) {
    appState = addXP(appState, 5);
    updateHUD();
    showXPFloat(5);
    checkAchievements(appState, showAchievement);
  }
}

// ─── XP FLOAT ─────────────────────────────────────────────────────────────────
function showXPFloat(amount) {
  const el = document.getElementById('xp-float');
  document.getElementById('xp-float-val').textContent = amount;
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

// ─── ACHIEVEMENT TOAST ────────────────────────────────────────────────────────
function showAchievement(ach) {
  const toast = document.getElementById('achievement-toast');
  document.getElementById('ach-icon').textContent = ach.icon;
  document.getElementById('ach-desc').textContent = `${ach.title} — ${ach.desc}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── CONFETTI ─────────────────────────────────────────────────────────────────
function celebrate() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const COLORS = ['#00e5ff','#bd93f9','#50fa7b','#f1fa8c','#ff79c6','#ffb86c'];
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 8 + 4, d: Math.random() * 150 + 100,
    color: COLORS[Math.floor(Math.random()*COLORS.length)],
    tilt: 0, tiltAngle: 0, tiltAngleInc: Math.random() * 0.07 + 0.05,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath(); ctx.lineWidth = p.r/2; ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r/4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/4);
      ctx.stroke();
      p.tiltAngle += p.tiltAngleInc;
      p.y += (Math.cos(frame + p.d) + 1 + p.r/2) / 2;
      p.tilt = Math.sin(p.tiltAngle - frame/5) * 12;
      if (p.y > canvas.height) { p.x = Math.random() * canvas.width; p.y = -10; }
    });
    frame++;
    if (frame < 300) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ─── PUBLIC API (used by inline onclick handlers) ─────────────────────────────
window.GitQuestApp = {
  go: navigateTo,
  complete: completeLesson,
  answerQuiz,
  celebrate,
  restartCourse: () => {
    if (confirm('Reset ALL progress? This cannot be undone.')) {
      appState = resetState();
      updateHUD();
      renderSidebar();
      navigateTo('welcome');
    }
  },
};

// ─── BOOTSTRAP ────────────────────────────────────────────────────────────────
init();
