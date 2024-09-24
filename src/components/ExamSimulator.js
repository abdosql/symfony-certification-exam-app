import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { generateExam } from '../utils/examGenerator';
import Timer from './Timer';
import ProgressBar from './ProgressBar';
import TopicOverview from './TopicOverview';
import QuestionDisplay from './QuestionDisplay';
import QuestionUploader from './QuestionUploader';
import { calculateScore } from '../utils/scoringUtils';

function ExamSimulator() {
  const { state, dispatch } = useAppContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showTopicOverview, setShowTopicOverview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState('');
  const [examFinished, setExamFinished] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [useDefaultQuestions, setUseDefaultQuestions] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showUserInfoForm, setShowUserInfoForm] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (useDefaultQuestions !== null && !state.currentExam) {
      const questions = useDefaultQuestions ? state.defaultQuestions : state.uploadedQuestions;
      generateExam(questions)
        .then(exam => {
          dispatch({ type: 'START_EXAM', payload: exam });
          setIsLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [useDefaultQuestions, state.currentExam, state.uploadedQuestions, state.defaultQuestions, dispatch]);

  useEffect(() => {
    console.log("ExamSimulator component mounted");
    initExam();
  }, []);

  useEffect(() => {
    console.log("Current exam state:", state.currentExam);
  }, [state.currentExam]);

  const initExam = () => {
    // Initialize exam logic here
    setIsLoading(false);
  };

  const handleAnswer = useCallback((questionId, answer) => {
    console.log(`Answer recorded for question ${questionId}:`, answer);
    setUserAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: answer }));
  }, []);

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  }, []);

  const handlePreviousQuestion = useCallback(() => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  }, []);

  const handleFinishExam = useCallback(() => {
    console.log("handleFinishExam called");
    try {
      setExamFinished(true);
      console.log("User Answers:", userAnswers);
      const score = calculateScore(state.currentExam.questions, userAnswers);
      console.log("Score calculated:", score);
      const participant = { ...userInfo, score };
      console.log("Participant data:", participant);
      dispatch({ type: 'END_EXAM', payload: { questions: state.currentExam.questions, userAnswers, score, participant } });
      console.log("Dispatched END_EXAM action");

      const resultsData = { 
        questions: state.currentExam.questions, 
        userAnswers, 
        score, 
        participant 
      };
      console.log("Data being passed to Results:", resultsData);

      // Send results to the backend
      fetch('/api/saveResults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultsData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Results saved:', data);
        // Navigate to results page after saving
        navigate('/results', { state: resultsData });
      })
      .catch(error => {
        console.error('Error saving results:', error);
        // Navigate to results page even if saving fails
        navigate('/results', { state: resultsData });
      });

    } catch (error) {
      console.error("Error in handleFinishExam:", error);
    }
  }, [state.currentExam, userAnswers, dispatch, navigate, userInfo]);

  const toggleTopicOverview = useCallback(() => {
    setShowTopicOverview(prevState => !prevState);
  }, []);

  const handleUploadComplete = () => {
    setShowUploader(false);
    setUseDefaultQuestions(false);
  };

  const handleUserInfoSubmit = (event) => {
    event.preventDefault();
    setShowUserInfoForm(false);
  };

  if (isLoading) return <div className="loading">Loading exam... Please wait. Debug: {debugInfo}</div>;
  if (error) return <div className="error">Error: {error}. Debug: {debugInfo}</div>;
  if (!state.currentExam && useDefaultQuestions === null) {
    return (
      <div className="question-choice">
        <h2>Choose Question Set</h2>
        <button onClick={() => setUseDefaultQuestions(true)} className="btn btn-primary">Use Default Questions</button>
        <button onClick={() => setShowUploader(true)} className="btn btn-secondary">Upload New Questions</button>
      </div>
    );
  }

  if (showUploader) {
    return <QuestionUploader onUploadComplete={handleUploadComplete} />;
  }

  if (showUserInfoForm) {
    return (
      <div className="user-info-form">
        <h2>Enter Your Information</h2>
        <form onSubmit={handleUserInfoSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Start Exam</button>
        </form>
      </div>
    );
  }

  if (!state.currentExam) return <div className="error">No exam data. Please try again. Debug: {debugInfo}</div>;

  const currentQuestion = state.currentExam.questions[currentQuestionIndex];
  const progress = (Object.keys(userAnswers).length / state.currentExam.questions.length) * 100;

  console.log("Rendering exam component");
  return (
    <div className="exam-simulator fade-in">
      <h2>Symfony 7 Certification Exam Simulator</h2>
      <Timer duration={5400} onFinish={handleFinishExam} />
      <ProgressBar progress={progress} />
      <button onClick={toggleTopicOverview} className="btn btn-secondary">Topic Overview</button>
      {showTopicOverview && (
        <TopicOverview 
          questions={state.currentExam.questions} 
          currentIndex={currentQuestionIndex}
          onSelectQuestion={setCurrentQuestionIndex}
        />
      )}
      <div className="question-number">
        Question {currentQuestionIndex + 1} of {state.currentExam.questions.length}
      </div>
      <QuestionDisplay
        question={currentQuestion}
        userAnswer={userAnswers[currentQuestion.id]}
        onAnswer={handleAnswer}
      />
      <div className="navigation">
        <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className="btn">
          Previous
        </button>
        <button onClick={handleNextQuestion} disabled={currentQuestionIndex === state.currentExam.questions.length - 1} className="btn">
          Next
        </button>
        <button onClick={handleFinishExam} className="btn btn-primary">Finish Exam</button>
      </div>
    </div>
  );
}

export default ExamSimulator;