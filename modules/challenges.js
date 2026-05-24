// Challenge tracking module
const completedChallenges = new Set();

export function markChallengeComplete(id) {
  completedChallenges.add(id);
  const el = document.getElementById(`challenge-${id}`);
  if (el) el.classList.add('challenge-done');
}

export function isChallengeComplete(id) {
  return completedChallenges.has(id);
}
