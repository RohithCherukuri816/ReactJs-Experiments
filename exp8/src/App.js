// src/App.js
import React, { useState } from 'react';

function App() {
  // Initial list of student names
  const students = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eva',
    'Frank',
    'Grace'
  ];

  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input changes
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the list based on the search term
  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Student Search Filter</h1>
      <input
        type="text"
        placeholder="Search students..."
        value={searchTerm}
        onChange={handleChange}
        style={{ padding: '10px', width: '250px', marginBottom: '20px' }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => (
            <li key={index} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>
              {student}
            </li>
          ))
        ) : (
          <li>No students found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
