// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import User from './User';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/johndoe">User Profile</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:username" element={<User />} />
    </Routes>
      </div>
    </Router>
  );
};

export default App;
