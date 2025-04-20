import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>E-Learning Platform</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/videos">Video Lectures</Link></li>
        <li><Link to="/feedback">Feedback</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
