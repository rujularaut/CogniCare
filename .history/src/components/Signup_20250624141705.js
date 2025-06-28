import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Get Started with CogniCare</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="number" placeholder="Age" required />
          <input type="email" placeholder="Email ID" required />
          <input type="password" placeholder="Create Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="signup-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
