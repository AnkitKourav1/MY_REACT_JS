
import React from 'react';
import LoggedInUser from './LoggedInUser';
import GuestUser from './GuestUser';

const UserGreeting = ({ isLoggedIn, username }) => {
  // Conditional rendering using a conditional statement
  if (isLoggedIn) {
    return <LoggedInUser username={username} />;
  } else {
    return <GuestUser />;
  }
};

export default UserGreeting;
