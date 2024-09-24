import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ExamSimulator from './components/ExamSimulator';
import StudyMode from './components/StudyMode';
import Results from './components/Results';
import Participants from './components/Participants';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/exam">Exam Simulator</a></li>
              <li><a href="/study">Study Mode</a></li>
              <li><a href="/results">Results</a></li>
              <li><a href="/participants">Participants</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam" element={<ExamSimulator />} />
          <Route path="/study" element={<StudyMode />} />
          <Route path="/results" element={<Results />} />
          <Route path="/participants" element={<Participants />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
