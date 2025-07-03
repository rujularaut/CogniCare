import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        navigate('/login');
      } else {
        setError(data.error || 'Signup failed');
      }
    } catch (err) {
      setError('Server not reachable');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Get Started with CogniCare</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email ID" value={formData.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
          <button type="submit" className="start-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
