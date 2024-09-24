const ExamResults = ({ answers }) => {
  const renderAnswer = (answer) => {
    const { question, userAnswer, isCorrect } = answer;
    
    let answerDisplay;
    switch (question.type) {
      case 'true_false':
        answerDisplay = userAnswer ? 'True' : 'False';
        break;
      case 'single':
        answerDisplay = userAnswer;
        break;
      case 'multiple':
        answerDisplay = userAnswer.join(', ');
        break;
      default:
        answerDisplay = 'Unknown answer type';
    }

    return (
      <div key={question.id}>
        <h3>{question.text}</h3>
        <p>Your answer: {answerDisplay}</p>
        <p>Correct answer: {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}</p>
        <p>{isCorrect ? 'Correct!' : 'Incorrect'}</p>
        <p>Explanation: {question.explanation}</p>
      </div>
    );
  };

  // ... (rest of the component)
};

export default ExamResults;