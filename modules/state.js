const STORAGE_KEY = 'gitquest_v2';

const LEVELS = [
  { name: 'Beginner',   emoji: '🌱', min: 0   },
  { name: 'Explorer',   emoji: '🔭', min: 60  },
  { name: 'Developer',  emoji: '⚡', min: 120 },
  { name: 'Git Ninja',  emoji: '🥷', min: 200 },
  { name: 'Git Master', emoji: '🏆', min: 285 },
];

function getDefault() {
  return { xp: 0, completed: [], streak: 0, lastVisit: null };
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...getDefault(), ...JSON.parse(raw) } : getDefault();
  } catch { return getDefault(); }
}

export function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

export function addXP(state, amount) {
  state.xp = (state.xp || 0) + amount;
  saveState(state);
  return state;
}

export function markComplete(state, lessonId) {
  if (!state.completed.includes(lessonId)) {
    state.completed.push(lessonId);
    saveState(state);
  }
  return state;
}

export function isComplete(state, lessonId) {
  return state.completed.includes(lessonId);
}

export function getLevel(xp) {
  let current = LEVELS[0];
  for (const lvl of LEVELS) { if (xp >= lvl.min) current = lvl; }
  return current;
}

export function getXPProgress(xp) {
  return Math.min(100, Math.round((xp / 285) * 100));
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  return getDefault();
}

export function updateStreak(state) {
  const today = new Date().toDateString();
  if (state.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = state.lastVisit === yesterday ? (state.streak || 0) + 1 : 1;
    state.lastVisit = today;
    saveState(state);
  }
  return state;
}
