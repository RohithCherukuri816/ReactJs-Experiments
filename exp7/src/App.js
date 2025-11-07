// src/App.js
import React from 'react';

function App() {
  const students = [
    { id: 1, name: 'sai' },
    { id: 2, name: 'pream' },
    { id: 3, name: 'bhasi' },
    { id: 4, name: 'prethi' }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333' }}>Student List</h1>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        maxWidth: '300px',
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {students.map((student) => (
          <li key={student.id} style={{
            padding: '10px 20px',
            borderBottom: '1px solid #ddd'
          }}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
