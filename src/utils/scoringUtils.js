export function calculateScore(questions, userAnswers) {
  let correctAnswers = 0;
  let totalWeight = 0;
  let weightedCorrectAnswers = 0;

  questions.forEach((question, index) => {
    const userAnswer = userAnswers[question.id];
    const weight = getQuestionWeight(question.difficulty);
    totalWeight += weight;

    if (isAnswerCorrect(question, userAnswer)) {
      correctAnswers++;
      weightedCorrectAnswers += weight;
    }
  });

  const totalQuestions = questions.length;
  const percentageScore = (correctAnswers / totalQuestions) * 100;
  const weightedPercentage = (weightedCorrectAnswers / totalWeight) * 100;

  const certificationLevel = getCertificationLevel(percentageScore, weightedPercentage);

  return {
    correctAnswers,
    totalQuestions,
    percentageScore,
    weightedPercentage,
    certificationLevel
  };
}

function isAnswerCorrect(question, userAnswer) {
  if (question.type === 'multiple') {
    if (!Array.isArray(userAnswer) || !Array.isArray(question.correctAnswer)) {
      return false;
    }
    const sortedUserAnswer = [...userAnswer].sort();
    const sortedCorrectAnswer = [...question.correctAnswer].sort();
    return JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);
  } else {
    return userAnswer === question.correctAnswer;
  }
}

function getQuestionWeight(difficulty) {
  switch (difficulty) {
    case 'easy': return 1;
    case 'medium': return 2;
    case 'hard': return 3;
    default: return 1;
  }
}

function getCertificationLevel(percentageScore, weightedPercentage) {
  if (percentageScore >= 85 && weightedPercentage >= 80) {
    return 'Expert Developer';
  } else if (percentageScore >= 70 && weightedPercentage >= 65) {
    return 'Advanced Developer';
  } else {
    return 'Not Certified';
  }
}