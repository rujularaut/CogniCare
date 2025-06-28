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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="signup-container">
      <Stepper
        initialStep={1}
        onFinalStepCompleted={() => console.log('Form complete', formData)}
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
          <h2>All Set!</h2>
          <p>Welcome, {formData.name}.</p>
          <p className="final-login-text">
  Already have an account? <a href="/login">Login here</a>
</p>

        </Step>
      </Stepper>
    </div>
  );
};

export default SignupStepper;
