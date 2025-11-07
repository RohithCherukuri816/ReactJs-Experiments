// src/App.js
import React, { useState } from 'react';

function App() {
  // State to track whether the component should be visible
  const [isVisible, setIsVisible] = useState(true);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Conditional Rendering Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Component
      </button>

      {isVisible && (
        <div style={{ marginTop: '20px' }}>
          <h2>This component is now visible!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
