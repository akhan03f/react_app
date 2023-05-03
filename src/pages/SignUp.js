import React from 'react';
import axios from 'axios';
import '../App.css';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      password_confirmation: e.target.password.value,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/register', user);
      console.log('Response:', response);
      if (response.status === 201) {
        navigate('/signupconfirmation');
      } else {
        console.error('Error occurred during registration:', response);
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="sign-up">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input type="password" name="password_confirmation" id="password_confirmation" required />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
        <div className="sign-up-link">
          Already have an account? <a href="#">Log in</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
