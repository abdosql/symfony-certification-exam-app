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
        <div className="true-false-options">
          <label className="radio-label">
            <input
              type="radio"
              name={question.id}
              value="true"
              checked={userAnswer === true}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            True
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name={question.id}
              value="false"
              checked={userAnswer === false}
              onChange={handleChange}
            />
            <span className="radio-custom"></span>
            False
          </label>
        </div>
      )}
      {question.type === 'single' && (
        <select 
          className="select-input" 
          value={userAnswer || ''} 
          onChange={handleChange}
        >
          <option value="">Select an answer</option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      )}
      {question.type === 'multiple' && (
        <div className="multiple-options">
          {question.options.map((option, index) => (
            <label key={index} className="checkbox-label">
              <input
                type="checkbox"
                value={option}
                checked={userAnswer && userAnswer.includes(option)}
                onChange={(e) => {
                  const newAnswer = userAnswer ? [...userAnswer] : [];
                  if (e.target.checked) {
                    newAnswer.push(option);
                  } else {
                    const index = newAnswer.indexOf(option);
                    if (index > -1) newAnswer.splice(index, 1);
                  }
                  onAnswer(question.id, newAnswer);
                }}
              />
              <span className="checkbox-custom"></span>
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionDisplay;