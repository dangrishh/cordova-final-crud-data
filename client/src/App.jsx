import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

/* users */
import Signup from './components/pages/users/Auth/registration';
import Login from './components/pages/users/Auth/login';

/* admin */
import Dashboard from './components/pages/admin/Home/dashboard';
import Spinner from './components/pages/users/Home/Spinner'; // Import the Spinner component

import './App.css';

function App() {

  /* spinner loading */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clear the timeout when component unmounts or when loading state changes
    return () => clearTimeout(timer);
  }, []); // This effect runs only once on component mount

  // Prevent rendering routes until loading state is false
  if (loading) {
    return <Spinner />;
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Signup />} />


          {/* Admin */}
          
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
