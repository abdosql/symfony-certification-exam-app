import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  console.log("Location state:", location.state);
  const { questions, userAnswers, score, participant } = location.state || {};
  const [showAnswers, setShowAnswers] = useState(false);

  console.log("Results component received:", { 
    questions: questions ? questions.length : 'undefined', 
    userAnswers: userAnswers ? Object.keys(userAnswers).length : 'undefined', 
    score, 
    participant 
  });

  if (!questions || !userAnswers || !score || !participant) {
    return (
      <div className="results">
        <h2>No Exam Results Available</h2>
        <p>You haven't taken an exam yet.</p>
        <Link to="/exam" className="btn btn-primary">Take an Exam</Link>
      </div>
    );
  }

  const { correctAnswers, totalQuestions, percentageScore, weightedPercentage, certificationLevel } = score;

  const toggleShowAnswers = () => {
    setShowAnswers(prevState => !prevState);
  };

  return (
    <div className="results">
      <h2>Exam Results</h2>
      <div className="score-summary">
        <h3>Your Certification Level: <span className="certification-level">{certificationLevel}</span></h3>
        <p>Correct Answers: <span className="highlight">{correctAnswers}</span> out of {totalQuestions}</p>
        <p>Percentage Score: <span className="highlight">{percentageScore.toFixed(2)}%</span></p>
        <p>Weighted Score: <span className="highlight">{weightedPercentage.toFixed(2)}%</span></p>
      </div>
      <div className="certification-explanation">
        <h4>Certification Levels:</h4>
        <ul>
          <li>Expert Developer: Score ≥ 85% and Weighted Score ≥ 80%</li>
          <li>Advanced Developer: Score ≥ 70% and Weighted Score ≥ 65%</li>
          <li>Not Certified: Score &lt; 70% or Weighted Score &lt; 65%</li>
        </ul>
      </div>
      <div className="action-buttons">
        <Link to="/exam" className="btn btn-primary">Take Another Exam</Link>
        <Link to="/study" className="btn btn-secondary">Study Mode</Link>
        <button onClick={toggleShowAnswers} className="btn btn-info">
          {showAnswers ? 'Hide Answers' : 'Show Answers'}
        </button>
      </div>
      {showAnswers && (
        <div className="answers">
          <h3>Answered Questions</h3>
          {questions.map((question, index) => (
            <div key={question.id} className={`question ${userAnswers[question.id] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
              <h4>Question {index + 1}: {question.text}</h4>
              <p><strong>Your Answer:</strong> <span className="user-answer">{userAnswers[question.id]}</span></p>
              <p><strong>Correct Answer:</strong> <span className="correct-answer">{question.correctAnswer}</span></p>
              <p className="result">{userAnswers[question.id] === question.correctAnswer ? 'Correct' : 'Incorrect'}</p>
              <div className="explanation">
                <strong>Explanation:</strong>
                <p>{question.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;