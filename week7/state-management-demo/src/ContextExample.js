// src/ContextExample.js

import React, { createContext, useContext, useState } from 'react';

// Create a context
const MyContext = createContext();

const ContextExample = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      <div>
        <h2>Context Example</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <ChildComponent />
      </div>
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  // Use the context in the child component
  const { count, increment } = useContext(MyContext);

  return (
    <div>
      <h3>Child Component</h3>
      <p>Count from context: {count}</p>
      <button onClick={increment}>Increment from Child</button>
    </div>
  );
};

export default ContextExample;
