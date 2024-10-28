import React from 'react';
import { useStudentContext } from './StudentContext';
import "../styles/StudentList.css";
// import EditStudent from './components/EditStudent';

const StudentList = () => {
  const {
    students, deleteStudent, editStudent, // Include editStudent here
    setCurrentPage, totalPages,
    searchTerm, setSearchTerm, selectedClass, setSelectedClass
  } = useStudentContext();

  return (
    <div className="p-6">
      <input 
        type="text" 
        placeholder="Search" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <select 
        value={selectedClass} 
        onChange={(e) => setSelectedClass(e.target.value)} 
        className="dropdown-style"
      >
        <option value="all">All Classes</option>
        <option value="10th Grade">10th Grade</option>
        <option value="11th Grade">11th Grade</option>
        <option value="12th Grade">12th Grade</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <button onClick={() => editStudent(student.id)} className="edit-button">
                  Edit
                </button>
              </td>
              <td>
                <button 
                  onClick={() => {
                    const confirmDelete = window.confirm("Are you sure you want to delete this student?");
                    if (confirmDelete) {
                      deleteStudent(student.id);
                    }
                  }} 
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
