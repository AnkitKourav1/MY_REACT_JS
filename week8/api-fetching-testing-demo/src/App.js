// src/App.js

import React from 'react';
import UserListAxios from './UserListAxios';
import UserListFetch from './UserListFetch';

function App() {
  return (
    <div>
      <h1>API Fetching and Testing Demo</h1>
      <UserListAxios />
      <hr />
      <UserListFetch />
    </div>
  );
}

export default App;
