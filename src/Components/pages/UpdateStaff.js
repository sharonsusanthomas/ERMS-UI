import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../UpdateStaff.css';

function UpdateStaff() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'Admin',
    email: '',
  });

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/staff/${id}`);
      setFormData({
        username: response.data.username,
        password: response.data.password, // Typically, you would not fetch or show the password like this for security reasons.
        role: response.data.role,
        email: response.data.email,
      });
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

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
      await axios.put(`http://localhost:5000/update-staff/${id}`, formData);
      alert('Staff updated successfully');
      navigate('/view-staff');
    } catch (error) {
      console.error('Error updating staff:', error);
      alert('Error updating staff');
    }
  };

  return (
    <div className="update-staff-container">
      <h2>Update Staff</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
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
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Staff</button>
      </form>
    </div>
  );
}

export default UpdateStaff;
