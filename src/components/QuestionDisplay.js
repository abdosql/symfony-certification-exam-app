import React from 'react';

function QuestionDisplay({ question, userAnswer, onAnswer }) {
  const handleAnswerChange = (event) => {
    const answer = event.target.value;
    console.log(`Answer selected for question ${question.id}:`, answer);
    onAnswer(question.id, answer);
  };

  if (!question || !question.options) {
    return <div className="error">Question data is not available.</div>;
  }

  return (
    <div className="question-display">
      <h3>{question.text}</h3>
      {question.type === 'boolean' ? (
        <div>
          <label>
            <input
              type="radio"
              value="true"
              checked={userAnswer === 'true'}
              onChange={handleAnswerChange}
            />
            True
          </label>
          <label>
            <input
              type="radio"
              value="false"
              checked={userAnswer === 'false'}
              onChange={handleAnswerChange}
            />
            False
          </label>
        </div>
      ) : (
        question.options.map((option) => (
          <label key={option}>
            <input
              type={question.type === 'single' ? 'radio' : 'checkbox'}
              value={option}
              checked={question.type === 'single' ? userAnswer === option : userAnswer && userAnswer.includes(option)}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        ))
      )}
    </div>
  );
}

export default QuestionDisplay;