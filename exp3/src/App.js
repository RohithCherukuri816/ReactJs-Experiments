// src/App.js
import React from 'react';
import Child from './Child';

function App() {
  const greetingMessage = "Hello from the Parent Component!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Child message={greetingMessage} />
    </div>
  );
}

export default App;
