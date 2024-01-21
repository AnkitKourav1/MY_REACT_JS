// src/App.js

import React from 'react';
import StudentList from './StudentList';

const App = () => {
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
  ];

  return (
    <div>
      <h1>Student List</h1>
      <StudentList students={students} />
    </div>
  );
};

export default App;
