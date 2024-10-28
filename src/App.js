// src/App.js
import React from 'react';
import { StudentProvider, useStudentContext } from './components/StudentContext';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import './App.css';

const MainApp = () => {
  const { currentView } = useStudentContext();

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <StudentList />;
      case 'register':
        return <StudentForm />;
      case 'details':
        return <StudentDetails />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto p-4">
        {renderView()}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <StudentProvider>
      <MainApp />
    </StudentProvider>
  );
};

export default App;
