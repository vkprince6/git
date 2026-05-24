const ACHIEVEMENTS = [
  { id: 'first_lesson',  icon: '🚀', title: 'First Step',     desc: 'Completed your first lesson',    condition: s => s.completed.length >= 1 },
  { id: 'git_init',      icon: '🔥', title: 'Initialized!',   desc: 'Learned git init',               condition: s => s.completed.includes('git-init') },
  { id: 'first_commit',  icon: '📸', title: 'First Commit',   desc: 'Learned git commit',             condition: s => s.completed.includes('git-commit') },
  { id: 'speed_learner', icon: '⚡', title: 'Speed Learner',  desc: 'Completed 5 lessons',            condition: s => s.completed.length >= 5 },
  { id: 'halfway',       icon: '🎯', title: 'Halfway There',  desc: 'Completed 15+ lessons',          condition: s => s.completed.length >= 15 },
  { id: 'github_push',   icon: '☁️', title: 'In the Cloud',   desc: 'Learned git push',               condition: s => s.completed.includes('git-push') },
  { id: 'brancher',      icon: '🌿', title: 'Branch Master',  desc: 'Learned branching',              condition: s => s.completed.includes('branches') },
  { id: 'conflict_hero', icon: '⚔️', title: 'Conflict Hero',  desc: 'Learned merge conflicts',        condition: s => s.completed.includes('merge-conflicts') },
  { id: 'xp_100',        icon: '💯', title: '100 XP Club',    desc: 'Earned 100+ XP',                 condition: s => s.xp >= 100 },
  { id: 'xp_200',        icon: '💎', title: 'Diamond Dev',    desc: 'Earned 200+ XP',                 condition: s => s.xp >= 200 },
  { id: 'quiz_ace',      icon: '🎓', title: 'Quiz Ace',       desc: 'Completed Final Assessment',     condition: s => s.completed.includes('final-quiz') },
  { id: 'all_complete',  icon: '🏆', title: 'Git Master!',    desc: 'Completed all 31 lessons',       condition: s => s.completed.length >= 31 },
];

let unlockedCache = new Set();
let toastQueue = [];
let toastShowing = false;

export function checkAchievements(state, onUnlock) {
  for (const ach of ACHIEVEMENTS) {
    if (!unlockedCache.has(ach.id) && ach.condition(state)) {
      unlockedCache.add(ach.id);
      toastQueue.push(ach);
      if (!toastShowing) processQueue(onUnlock);
    }
  }
}

function processQueue(onUnlock) {
  if (!toastQueue.length) { toastShowing = false; return; }
  toastShowing = true;
  onUnlock(toastQueue.shift());
  setTimeout(() => processQueue(onUnlock), 3500);
}

export function initAchievementCache(state) {
  unlockedCache = new Set();
  for (const ach of ACHIEVEMENTS) {
    if (ach.condition(state)) unlockedCache.add(ach.id);
  }
}
