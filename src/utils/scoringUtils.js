export function calculateScore(questions, userAnswers) {
  console.log("Calculating score with:", { questions: questions.length, userAnswers: Object.keys(userAnswers).length });
  let correctAnswers = 0;
  let totalQuestions = questions.length;
  let weightedScore = 0;

  questions.forEach(question => {
    const isCorrect = isAnswerCorrect(question, userAnswers[question.id]);
    console.log(`Question ${question.id}: User Answer: ${userAnswers[question.id]}, Correct: ${isCorrect}`);
    if (isCorrect) {
      correctAnswers++;
      weightedScore += question.difficulty || 1;
    }
  });

  const percentageScore = (correctAnswers / totalQuestions) * 100;
  const weightedPercentage = (weightedScore / (totalQuestions * 1.5)) * 100;

  const score = {
    correctAnswers,
    totalQuestions,
    percentageScore,
    weightedPercentage,
    certificationLevel: getCertificationLevel(percentageScore, weightedPercentage)
  };

  console.log("Calculated score:", score);
  return score;
}

function isAnswerCorrect(question, userAnswer) {
  if (!userAnswer) return false;
  
  switch (question.type) {
    case 'single':
      return userAnswer === question.correctAnswer;
    case 'multiple':
      return arraysEqual(userAnswer, question.correctAnswer);
    case 'boolean':
      return userAnswer === question.correctAnswer;
    default:
      return false;
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

function getCertificationLevel(percentageScore, weightedPercentage) {
  if (percentageScore >= 85 && weightedPercentage >= 80) {
    return "Expert Developer";
  } else if (percentageScore >= 70 && weightedPercentage >= 65) {
    return "Advanced Developer";
  } else {
    return "Not Certified";
  }
}