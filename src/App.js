import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Videos from './pages/Videos';
import Feedback from './pages/Feedback';
import SignUp from './pages/signup'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/courses" component={Courses} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
