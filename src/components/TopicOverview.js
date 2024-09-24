import React from 'react';

function TopicOverview({ questions, currentIndex, onSelectQuestion }) {
  const topics = [...new Set(questions.map(q => q.topic))];

  return (
    <div className="topic-overview">
      {topics.map((topic, index) => (
        <div key={topic} className="topic">
          <h4>{topic}</h4>
          {questions
            .filter(q => q.topic === topic)
            .map((q, qIndex) => {
              const questionIndex = questions.findIndex(question => question.id === q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => onSelectQuestion(questionIndex)}
                  className={questionIndex === currentIndex ? 'active' : ''}
                >
                  {index * 5 + qIndex + 1}
                </button>
              );
            })}
        </div>
      ))}
    </div>
  );
}

export default TopicOverview;