import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

function QuestionUploader({ onUploadComplete }) {
  const { dispatch } = useAppContext();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const questions = JSON.parse(event.target.result);
        dispatch({ type: 'UPLOAD_QUESTIONS', payload: questions });
        setError(null);
        alert('Questions uploaded successfully!');
        onUploadComplete();
      } catch (err) {
        setError('Failed to parse the file. Please upload a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="question-uploader">
      <h2>Upload Exam Questions</h2>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleUpload} className="btn btn-primary">Upload</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default QuestionUploader;