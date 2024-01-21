// src/useCustomHook.js

import { useState } from 'react';

const useCustomHook = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return {
    value,
    increment,
    decrement,
  };
};

export default useCustomHook;
