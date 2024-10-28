// src/components/StudentContext.js
import React, { createContext, useState, useContext } from 'react';
// import "../styles/StudentContext.css"

// Create Context
const StudentContext = createContext();

// Mock Data
const initialStudents = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 18, class: "12th Grade", address: "123 Main St", phone: "123-456-7890" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 17, class: "11th Grade", address: "456 Oak Ave", phone: "098-765-4321" },
  {
    "id":3,
    "name":"Michael Johnson",
    "email":"michael@example.com",
    "age":18,
    "class":"12th Grade",
    "address":"9102 Maple St, Riverside",
    "phone":"345-678-9012"
},
{
    "id":4,
    "name":"Emily Davis",
    "email":"emily@example.com",
    "age":16,
    "class":"10th Grade",
    "address":"2345 Pine St, Greendale",
    "phone":"456-789-0123"
},
{
    "id":5,
    "name":"Daniel Harris",
    "email":"daniel@example.com",
    "age":17,
    "class":"11th Grade",
    "address":"6789 Birch St, Fairview",
    "phone":"234-567-8901"
},
{
    "id":6,
    "name":"Emma Wilson",
    "email":"emma@example.com",
    "age":16,
    "class":"10th Grade",
    "address":"3456 Willow St, Lakeside",
    "phone":"678-901-2345"
},
{
    "id":7,
    "name":"Sophia Moore",
    "email":"sophia@example.com",
    "age":18,
    "class":"12th Grade",
    "address":"7890 Cedar St, Oakwood",
    "phone":"890-123-4567"
},
{
    "id":8,
    "name":"Ethan Brown",
    "email":"ethan@example.com",
    "age":17,
    "class":"11th Grade",
    "address":"4567 Poplar St, Mapleton",
    "phone":"321-654-9870"
},
{
    "id":9,
    "name":"Mia Taylor",
    "email":"mia@example.com",
    "age":18,
    "class":"12th Grade",
    "address":"1012 Ash St, Brookfield",
    "phone":"654-789-1234"
},
{
    "id":10,
    "name":"Oliver Anderson",
    "email":"oliver@example.com",
    "age":16,
    "class":"10th Grade",
    "address":"8765 Spruce St, Rivertown",
    "phone":"987-321-6547"
}
];

// Context Provider Component
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(initialStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const itemsPerPage = 10;
  const editStudent = (id) => {
    const studentToEdit = students.find(student => student.id === id);
    setSelectedStudent(studentToEdit);  // Sets the student you want to edit
    setCurrentView('edit');  // Change the view if necessary, or handle navigation to an edit form
  };
  
  

  const addStudent = (student) => setStudents([...students, { ...student, id: students.length + 1 }]);
  const updateStudent = (updatedStudent) => setStudents(students.map(student => student.id === updatedStudent.id ? updatedStudent : student));
  const deleteStudent = (id) => setStudents(students.filter(student => student.id !== id));

  const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) && (selectedClass === 'all' || student.class === selectedClass));
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const currentStudents = filteredStudents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <StudentContext.Provider value={{
      students: currentStudents, totalStudents: students.length, addStudent, updateStudent, deleteStudent,
      currentPage, setCurrentPage, totalPages, searchTerm, setSearchTerm, selectedClass, setSelectedClass,editStudent,
      currentView, setCurrentView, selectedStudent, setSelectedStudent
    }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
