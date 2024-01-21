// src/Counter.js

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect to update the document title
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
