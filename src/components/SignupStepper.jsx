import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Stepper, { Step } from './Stepper';
import './SignupStepper.css';

const SignupStepper = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFinalSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        navigate('/login');
      } else {
        alert('Signup failed: ' + result.error);
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    }
  };

  return (
    <div className="signup-container">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={handleFinalSubmit}
        nextButtonText="Next"
        backButtonText="Back"
      >
        <Step>
          <h2>Your Name</h2>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p className="signup-link">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </Step>
        <Step>
          <h2>Your Age</h2>
          <input
            name="age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </Step>
        <Step>
          <h2>Email ID</h2>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Step>
        <Step>
          <h2>Create Password</h2>
          <input
            name="password"
            type="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Step>
        <Step>
          <h2 className="final-welcome-heading">
            All set! <br />
            Welcome, {formData.name}.
          </h2>
        </Step>
      </Stepper>
    </div>
  );
};

export default SignupStepper;
