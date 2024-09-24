export const calculateScore = (questions, userAnswers) => {
  let totalScore = 0;
  let totalWeight = 0;

  questions.forEach(question => {
    const weight = question.difficulty === 'easy' ? 1 : question.difficulty === 'medium' ? 2 : 3;
    totalWeight += weight;

    if (isAnswerCorrect(question, userAnswers[question.id])) {
      totalScore += weight;
    }
  });

  return (totalScore / totalWeight) * 100;
};

const isAnswerCorrect = (question, userAnswer) => {
  if (question.type === 'multiple') {
    return arraysEqual(question.correctAnswer.sort(), userAnswer.sort());
  }
  return question.correctAnswer === userAnswer;
};

const arraysEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};