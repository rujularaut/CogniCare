import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to CogniCare</h2>
        <form>
          <input type="email" placeholder="Email ID" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
