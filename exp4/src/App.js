// src/App.js
import React, { useState } from 'react';

function App() {
  // Declare a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App;
