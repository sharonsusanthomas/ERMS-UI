import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../AddStaff.css';

const AddStaff = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'Admin',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/add-staff', formData);
      if (response.data.success) {
        alert('Staff added successfully');
        // Clear form
        setFormData({
          username: '',
          password: '',
          role: 'Admin',
          email: '',
        });
      } else {
        alert(`Error adding staff: ${response.data.message}`);
      }
    } catch (error) {
      alert(`Error adding staff: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <div className='add-employee-container'>
      <h2>Add Staff</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="input-shade1"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-shade2"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              className="input-shade3"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Admin">Admin</option>
              <option value="HoD">HoD</option>
              <option value="Staff">Staff</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-shade4"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit">Add Staff</button>
        <button type="button" className="btn-secondary" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddStaff;
