// src/components/Navigation.js
import React from 'react';
import { useStudentContext } from './StudentContext';
import '../styles/Navigation.css'; // Import the CSS file

const Navigation = () => {
  const { setCurrentView, setSelectedStudent } = useStudentContext();

  const handleClick = (view) => {
    setCurrentView(view);
    setSelectedStudent(null);
  };

  return (
    <nav>
      <div className="container mx-auto flex gap-4">
        <button onClick={() => handleClick('dashboard')} className="text-blue-500">Dashboard</button>
        <button onClick={() => handleClick('students')} className="text-blue-500">Student List</button>
        <button onClick={() => handleClick('register')} className="text-blue-500">Register Student</button>
      </div>
    </nav>
  );
};

export default Navigation;
