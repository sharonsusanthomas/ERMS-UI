import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddDepartment() {
  const [deptName, setDeptName] = useState('');
  const [hodId, setHodId] = useState('');
  const [hodUsers, setHodUsers] = useState([]);

  useEffect(() => {
    // Fetch HoD users to populate HOD options
    const fetchHodUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/hod-users');
        setHodUsers(response.data);
      } catch (error) {
        console.error('Error fetching HoD users:', error);
      }
    };

    fetchHodUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add-department', { dept_name: deptName, hod_id: hodId });
      if (response.data.success) {
        alert('Department added successfully');
        setDeptName('');
        setHodId('');
      }
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  return (
    <div>
      <h2>Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department Name:</label>
          <input type="text" value={deptName} onChange={(e) => setDeptName(e.target.value)} required />
        </div>
        <div>
          <label>Head of Department (HOD):</label>
          <select value={hodId} onChange={(e) => setHodId(e.target.value)} required>
            <option value="">Select HOD</option>
            {hodUsers.map(user => (
              <option key={user.user_id} value={user.user_id}>{user.username}</option>
            ))}
          </select>
        </div>
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
}

export default AddDepartment;
