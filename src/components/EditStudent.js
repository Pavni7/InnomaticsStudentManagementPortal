// src/components/EditStudent.js
import React, { useState, useEffect } from 'react';
import { useStudentContext } from './StudentContext';

const EditStudent = () => {
  const { selectedStudent, updateStudent, setCurrentView } = useStudentContext();
  const [formData, setFormData] = useState({ ...selectedStudent });

  useEffect(() => {
    setFormData({ ...selectedStudent });
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(formData);
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <label>
          Class:
          <input type="text" name="class" value={formData.class} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setCurrentView('dashboard')}>Cancel</button>
      </form>
    </div>
  );
};

export default EditStudent;
