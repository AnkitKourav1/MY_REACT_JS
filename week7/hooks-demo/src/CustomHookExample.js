// src/CustomHookExample.js

import React from 'react';
import useCustomHook from './useCustomHook';

const CustomHookExample = () => {
  const { value, increment, decrement } = useCustomHook();

  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>Value: {value}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CustomHookExample;
