// src/App.js
import React, { useState } from 'react';

function App() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Handle input change and update the state
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Dynamic Form</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default App;
