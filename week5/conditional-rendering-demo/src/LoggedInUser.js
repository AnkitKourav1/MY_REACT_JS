
import React from 'react';

const LoggedInUser = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>You are logged in.</p>
    </div>
  );
};

export default LoggedInUser;
