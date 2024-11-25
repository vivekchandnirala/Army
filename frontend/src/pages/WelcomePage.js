import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './WelcomePage.css';

const WelcomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userCaption, setUserCaption] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const navigate = useNavigate();

  // Generate a random caption
  useState(() => {
    const randomCaption = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCaption(randomCaption);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userCaption !== generatedCaption) {
      alert('Incorrect Caption. Please try again.');
      return;
    }

    try {
      // Send data to the backend
      await axios.post('http://localhost:5000/api/users', { name, email });
      navigate('/home'); // Navigate to the Home page
    } catch (error) {
      console.error('Error saving user data:', error);
      alert('Failed to save user data. Please try again.');
    }
  };

  return (
    <div className="welcome-container">
      <form onSubmit={handleSubmit} className="welcome-form">
        <h1>Indian Army Portal</h1>
        <p>Welcome to the official portal. Please authenticate to proceed.</p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="caption">Enter Caption:</label>
          <input
            type="text"
            id="caption"
            value={userCaption}
            onChange={(e) => setUserCaption(e.target.value)}
            required
          />
          <p className="generated-caption">Caption: <strong>{generatedCaption}</strong></p>
        </div>
        <button type="submit" className="welcome-button">
          Enter the Portal
        </button>
      </form>
    </div>
  );
};

export default WelcomePage;
