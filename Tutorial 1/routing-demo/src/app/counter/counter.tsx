'use client';

import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{counter}</p>
    </>
  );
};

export default Counter;
