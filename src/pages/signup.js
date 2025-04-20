import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Create Your Account</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="username" style={{ marginBottom: '5px' }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            style={{ padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="email" style={{ marginBottom: '5px' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            style={{ padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="password" style={{ marginBottom: '5px' }}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            style={{ padding: '8px', fontSize: '14px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="confirmPassword" style={{ marginBottom: '5px' }}>Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            style={{ padding: '8px', fontSize: '14px' }}
          />
        </div>

        {/* The Link component acts as an anchor to the "home" route */}
        <Link to="/">
          <button className="cta-btn" style={{ padding: '10px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
