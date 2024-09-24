import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/exam">Exam Simulator</Link></li>
          <li><Link to="/study">Study Mode</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;