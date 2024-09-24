import React from 'react';

function QuestionDisplay({ question, userAnswer, onAnswer }) {
  const handleChange = (event) => {
    let answer;
    switch (question.type) {
      case 'true_false':
        answer = event.target.value === 'true';
        break;
      case 'single':
        answer = event.target.value;
        break;
      case 'multiple':
        const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
        answer = selectedOptions;
        break;
      default:
        answer = event.target.value;
    }
    onAnswer(question.id, answer);
  };

  return (
    <div className="question-display">
      <h3>{question.text}</h3>
      {question.type === 'true_false' && (
        <div>
          <label>
            <input
              type="radio"
              name={question.id}
              value="true"
              checked={userAnswer === true}
              onChange={handleChange}
            /> True
          </label>
          <label>
            <input
              type="radio"
              name={question.id}
              value="false"
              checked={userAnswer === false}
              onChange={handleChange}
            /> False
          </label>
        </div>
      )}
      {question.type === 'single' && (
        <select value={userAnswer || ''} onChange={handleChange}>
          <option value="">Select an answer</option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}
      {question.type === 'multiple' && (
        <select multiple value={userAnswer || []} onChange={handleChange}>
          {question.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
}

export default QuestionDisplay;