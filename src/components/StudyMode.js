import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import studyTopics from '../data/studyTopics';

function StudyMode() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="study-mode fade-in">
      <h2>Study Mode</h2>
      <div className="study-content">
        <div className="topic-list">
          <h3>Symfony Topics</h3>
          <ul>
            {studyTopics.map((topic) => (
              <li key={topic.id}>
                <button 
                  onClick={() => handleTopicSelect(topic)}
                  className={selectedTopic && selectedTopic.id === topic.id ? 'active' : ''}
                >
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {selectedTopic && (
          <div className="topic-content">
            <h3>{selectedTopic.title}</h3>
            <p>{selectedTopic.description}</p>
            <h4>Key Points:</h4>
            <ul>
              {selectedTopic.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a href={selectedTopic.docLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read More in Symfony Docs
            </a>
          </div>
        )}
      </div>
      <Link to="/exam" className="btn btn-secondary">Take Practice Exam</Link>
    </div>
  );
}

export default StudyMode;