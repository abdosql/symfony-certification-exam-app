import React, { useEffect, useState } from 'react';
import './Participants.css'; // We'll create this file for styles

function Participants() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [participantToDelete, setParticipantToDelete] = useState(null);

  useEffect(() => {
    fetchParticipants();
  }, []);

  const fetchParticipants = () => {
    fetch('/api/getResults')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setParticipants(data);
        } else {
          setError('Received unexpected data format');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching results:', error);
        setError('Failed to load participants: ' + error.message);
        setLoading(false);
      });
  };

  const handleDelete = (participant) => {
    setParticipantToDelete(participant);
    setShowModal(true);
  };

  const confirmDelete = () => {
    fetch('/api/deleteResult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        participantId: participantToDelete.participant.email, 
        adminPassword: adminPassword 
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        fetchParticipants();
        setShowModal(false);
        setAdminPassword('');
        setParticipantToDelete(null);
      } else {
        alert(data.message || 'Failed to delete participant');
      }
    })
    .catch(error => {
      console.error('Error deleting participant:', error);
      alert('Failed to delete participant');
    });
  };

  if (loading) {
    return <div className="loading">Loading participants...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="participants-container">
      <h2 className="participants-title">Participants and Results</h2>
      {participants.length === 0 ? (
        <p className="no-participants">No participants yet.</p>
      ) : (
        <div className="table-container">
          <table className="participants-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Correct Answers</th>
                <th>Total Questions</th>
                <th>Percentage Score</th>
                <th>Weighted Score</th>
                <th>Certification Level</th>
                <th>Action</th>
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
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(exam)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3 className="modal-title">Enter Admin Password</h3>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="Admin Password"
              className="admin-password-input"
            />
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmDelete}>Confirm Delete</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Participants;