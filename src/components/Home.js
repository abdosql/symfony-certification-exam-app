import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Symfony 7 Certification Practice</h1>
      <p>Prepare for your Symfony 7 certification with our comprehensive practice app.</p>
      <div className="cta-buttons">
        <Link to="/exam" className="btn btn-primary">Start Exam Simulation</Link>
        <Link to="/study" className="btn btn-secondary">Enter Study Mode</Link>
      </div>
    </div>
  );
}

export default Home;