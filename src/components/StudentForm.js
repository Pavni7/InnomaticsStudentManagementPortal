import React, { useState, useEffect } from 'react';
import { useStudentContext } from './StudentContext';
import "../styles/StudentForm.css";

const StudentForm = () => {
  const { addStudent, updateStudent, selectedStudent, setCurrentView } = useStudentContext();
  const [formData, setFormData] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  const [errors, setErrors] = useState({ email: '', phone: '' });

  useEffect(() => {
    setFormData(selectedStudent || { name: '', email: '', age: '', class: '', address: '', phone: '' });
    setErrors({ email: '', phone: '' }); // Reset errors on load
  }, [selectedStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Regular expression for a phone number format (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and phone number
    const emailValid = validateEmail(formData.email);
    const phoneValid = validatePhone(formData.phone);

    if (!emailValid || !phoneValid) {
      setErrors({
        email: emailValid ? '' : 'Please enter a valid email address.',
        phone: phoneValid ? '' : 'Phone number must be 10 digits.'
      });
      return;
    }

    // If validation passes, add or update the student
    selectedStudent ? updateStudent(formData) : addStudent(formData);
    setCurrentView('students');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
        
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="class"
          value={formData.class}
          onChange={handleChange}
          placeholder="Class"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}

        <button type="submit">{selectedStudent ? 'Update Student' : 'Register Student'}</button>
      </form>
    </div>
  );
};

export default StudentForm;
