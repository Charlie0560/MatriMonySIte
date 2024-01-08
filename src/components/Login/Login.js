// components/Login/Login.js
import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your login logic here
  };

  const handleCreateProfile = () => {
    // Navigate to the createProfile page
    navigate('/createProfile');
  };
  const handleFormClick = (e) => {
    // Prevent the click event from propagating to the overlay
    e.stopPropagation();
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-form" onClick={handleFormClick}>
        {/* <button className='close-btn' onClick={onClose}><FontAwesomeIcon icon="fa-regular fa-circle-xmark" /></button> */}
        <p id='login-heading'>Vadhuvar Melava Login</p>
        <div id="email-div">
          <label htmlFor="Email">Email: </label><br />
          <input id="email-inp" type="email" />
        </div>
        <div id="password-div">
          <label htmlFor="password">Password: </label><br />
          <input id="pass-inp" type="password" />
        </div>
        
        <button onClick={handleLogin} className='login-btn'>Login</button>
        <div>
          Don't have a profile?{' '}
          <span className="create-profile-link" onClick={handleCreateProfile}>
            Create Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
