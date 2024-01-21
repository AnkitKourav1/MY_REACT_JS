// src/ReduxExample.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
const increment = () => ({ type: 'INCREMENT' });

const ReduxExample = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default ReduxExample;
