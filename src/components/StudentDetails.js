// src/components/StudentDetails.js
import React from 'react';
import { useStudentContext } from './StudentContext';

const StudentDetails = () => {
  const { selectedStudent, setCurrentView, setSelectedStudent } = useStudentContext();

  if (!selectedStudent) return <p>No student selected</p>;

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {selectedStudent.name}</p>
      <p>Email: {selectedStudent.email}</p>
      <p>Age: {selectedStudent.age}</p>
      <p>Class: {selectedStudent.class}</p>
      <p>Address: {selectedStudent.address}</p>
      <p>Phone: {selectedStudent.phone}</p>
      <button onClick={() => { setSelectedStudent(selectedStudent); setCurrentView('register'); }}>Edit</button>
      <button onClick={() => setCurrentView('students')}>Back to List</button>
    </div>
  );
};

export default StudentDetails;
