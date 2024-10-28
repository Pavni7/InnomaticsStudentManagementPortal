// src/components/Dashboard.js
import React from 'react';
import { useStudentContext } from './StudentContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { students, totalStudents } = useStudentContext();
  const classStats = students.reduce((acc, student) => {
    acc[student.class] = (acc[student.class] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(classStats).map(([name, value]) => ({ name, students: value }));

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="student-count">Total Students: {totalStudents}</p>
      <div className="chart-wrapper">
        <BarChart width={400} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="students" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
