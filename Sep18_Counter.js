import React, { useState } from 'react';

function Counter() {
  // Step 1: Initialize the counter state to 0
  const [count, setCount] = useState(0);

  // Step 2: Functions to increment and decrement the counter
  const increment = () => {
    setCount(count + 1);  // Update the state to the new value (count + 1)
  };

  const decrement = () => {
    setCount(count - 1);  // Update the state to the new value (count - 1)
  };

  // Step 3: Render the counter display and buttons
  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
