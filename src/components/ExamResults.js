import React from 'react';

const ExamResults = ({ questions, userAnswers, score }) => {
  const renderAnswer = (question, userAnswer) => {
    let answerDisplay;
    let correctAnswerDisplay;

    switch (question.type) {
      case 'true_false':
        answerDisplay = userAnswer ? 'True' : 'False';
        correctAnswerDisplay = question.correctAnswer ? 'True' : 'False';
        break;
      case 'single':
        answerDisplay = userAnswer;
        correctAnswerDisplay = question.correctAnswer;
        break;
      case 'multiple':
        answerDisplay = Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer;
        correctAnswerDisplay = Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer;
        break;
      default:
        answerDisplay = 'Unknown answer type';
        correctAnswerDisplay = 'Unknown answer type';
    }

    const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer);

    return (
      <div key={question.id} className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
        <h3>{question.text}</h3>
        <p>Your answer: {answerDisplay}</p>
        <p>Correct answer: {correctAnswerDisplay}</p>
        <p>{isCorrect ? 'Correct!' : 'Incorrect'}</p>
        <p>Explanation: {question.explanation}</p>
        <p>Difficulty: {question.difficulty}</p>
        <p>Topic: {question.topic}</p>
      </div>
    );
  };

  return (
    <div className="exam-results">
      <h2>Exam Results</h2>
      <p>Your score: {score}/{questions.length}</p>
      <div className="answers-review">
        {questions.map((question) => renderAnswer(question, userAnswers[question.id]))}
      </div>
    </div>
  );
};

export default ExamResults;