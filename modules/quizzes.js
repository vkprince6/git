export function buildQuizHTML(quiz, lessonId) {
  if (!quiz || quiz.length === 0) return '';
  return `<div class="quiz-section">
    <div class="quiz-header">
      <div class="quiz-header-icon">❓</div>
      <div class="quiz-header-title">Knowledge Check</div>
    </div>
    ${quiz.map((q, i) => buildQuestionHTML(q, i, lessonId)).join('')}
  </div>`;
}

function buildQuestionHTML(q, i, lessonId) {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  return `<div class="quiz-question" id="quiz-q-${lessonId}-${i}" data-answered="false" data-correct="${q.correct}">
    <div class="quiz-q-text">${i + 1}. ${q.q}</div>
    <div class="quiz-options">
      ${q.options.map((opt, j) => `
        <div class="quiz-option" data-idx="${j}" onclick="GitQuestApp.answerQuiz('${lessonId}',${i},${j})">
          <div class="quiz-option-letter">${letters[j]}</div>
          <span>${opt}</span>
        </div>`).join('')}
    </div>
    <div class="quiz-feedback hidden" id="quiz-fb-${lessonId}-${i}"></div>
  </div>`;
}

export function handleAnswer(lessonId, qIdx, optIdx, questions) {
  const qEl = document.getElementById(`quiz-q-${lessonId}-${qIdx}`);
  if (!qEl || qEl.dataset.answered === 'true') return { correct: false, alreadyAnswered: true };

  const q = questions[qIdx];
  const correct = optIdx === q.correct;
  qEl.dataset.answered = 'true';

  qEl.querySelectorAll('.quiz-option').forEach((opt, i) => {
    opt.style.pointerEvents = 'none';
    if (i === q.correct) opt.classList.add('correct');
    else if (i === optIdx && !correct) opt.classList.add('wrong');
  });

  const fb = document.getElementById(`quiz-fb-${lessonId}-${qIdx}`);
  if (fb) {
    fb.classList.remove('hidden');
    fb.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
    fb.textContent = correct ? `✅ Correct! ${q.exp}` : `❌ Not quite. ${q.exp}`;
  }

  return { correct, alreadyAnswered: false };
}
