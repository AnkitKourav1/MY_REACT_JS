// src/StudentList.js

import React from 'react';

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
};

export default StudentList;
