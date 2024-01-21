// src/App.js

import React, { useState } from 'react';
import UserGreeting from './UserGreeting';

const App = () => {
  // Example of conditional rendering with a state variable
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [username, setUsername] = useState('JohnDoe');

  const handleToggleLogin = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>Conditional Rendering Demo</h1>
      <button onClick={handleToggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <UserGreeting isLoggedIn={isLoggedIn} username={username} />
    </div>
  );
};

export default App;
