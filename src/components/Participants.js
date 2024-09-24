import React, { useEffect, useState } from 'react';

function Participants() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/getResults')
      .then(response => response.json())
      .then(data => {
        setParticipants(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching results:', error);
        setError('Failed to load participants');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading participants...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="participants">
      <h2>Participants and Results</h2>
      {participants.length === 0 ? (
        <p>No participants yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Correct Answers</th>
              <th>Total Questions</th>
              <th>Percentage Score</th>
              <th>Weighted Score</th>
              <th>Certification Level</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((exam, index) => (
              <tr key={index}>
                <td>{exam.participant.name}</td>
                <td>{exam.participant.email}</td>
                <td>{exam.participant.score.correctAnswers}</td>
                <td>{exam.participant.score.totalQuestions}</td>
                <td>{exam.participant.score.percentageScore.toFixed(2)}%</td>
                <td>{exam.participant.score.weightedPercentage.toFixed(2)}%</td>
                <td>{exam.participant.score.certificationLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Participants;