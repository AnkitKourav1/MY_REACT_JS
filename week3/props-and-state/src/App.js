// src/App.js

import React from 'react';
import Person from './Person';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Props and State Demo</h1>
      <Person name="John Doe" age={25} />
      <Person name="Jane Doe" age={30} />
      <Counter />
    </div>
  );
};

export default App;
