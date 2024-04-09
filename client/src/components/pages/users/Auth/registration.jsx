import React, { useState } from 'react';
import axios from 'axios';

function RegistrationForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFullnameChange = (e) => {
    setFullname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        fullname,
        email,
        password,
      });
      console.log('Registration successful:', response.data);
      // Add any further logic such as redirecting to a login page or showing a success message
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
      // Handle registration failure, such as displaying an error message to the user
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900 text-center">Register</h3>
        <p className="mb-4 text-grey-700 text-center">Create your account</p>
        <div className="mb-3">
          <label htmlFor="fullname" className="block text-sm font-medium text-grey-900">Fullname*</label>
          <input
            id="fullname"
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 mt-1 text-sm bg-grey-200 text-white placeholder-white text-dark-grey-900 rounded-lg focus:outline-none focus:border-purple-blue-500"
            value={fullname}
            onChange={handleFullnameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-medium text-grey-900">Email*</label>
          <input
            id="email"
            type="email"
            placeholder="mail@loopple.com"
            className="w-full px-4 py-3 mt-1 text-sm bg-grey-200 text-white placeholder-white text-dark-grey-900 rounded-lg focus:outline-none focus:border-purple-blue-500"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="block text-sm font-medium text-grey-900">Password*</label>
          <input
            id="password"
            type="password"
            placeholder="Enter a password"
            className="w-full px-4 py-3 mt-1 text-sm bg-grey-200 text-white placeholder-white text-dark-grey-900 rounded-lg focus:outline-none focus:border-purple-blue-500"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-grey-900">Confirm Password*</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-3 mt-1 text-sm bg-grey-200 text-white placeholder-white text-dark-grey-900 rounded-lg focus:outline-none focus:border-purple-blue-500"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button type="submit" className="w-full py-3 text-sm font-bold leading-none text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Register</button>
        <p className="mt-4 text-sm text-center text-grey-900">Already have an account? <a href="./login" className="font-bold text-purple-blue-500 hover:text-purple-blue-600">Sign In</a></p>
      </form>
    </div>
  );
};

export default RegistrationForm;
