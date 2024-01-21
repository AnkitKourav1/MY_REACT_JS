// src/App.js

import React from 'react';
import Counter from './Counter';
import UserList from './UserList';
import CustomHookExample from './CustomHookExample';

function App() {
  return (
    <div>
      <h1>React Hooks Demo</h1>
      <Counter />
      <hr />
      <UserList />
      <hr />
      <CustomHookExample />
    </div>
  );
}

export default App;
