import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
  
      console.log('Logged in successfully. Response data:', response.data);
  
      // Redirect or perform any action after successful login
      // For example, redirect to another page
      // history.push('/dashboard');
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900 text-center">Sign In</h3>
        <p className="mb-4 text-grey-700 text-center">Enter your email and password</p>
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
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2 leading-tight"
            />
            <span className="text-sm font-normal text-grey-900">Keep me logged in</span>
          </label>
          <a href="javascript:void(0)" className="text-sm font-medium text-purple-blue-500">Forget password?</a>
        </div>
        <button type="submit" className="w-full py-3 text-sm font-bold leading-none text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:bg-gray-600">Sign in</button>
         <p className="mt-4 text-sm text-center text-grey-900">Not registered yet? <a href="./registration" className="font-bold text-purple-blue-500 hover:text-purple-blue-600">Create an Account</a></p>
      </form>
    </div>
  );
}

export default Login;
