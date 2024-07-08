import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddDepartment() {
  const [deptName, setDeptName] = useState('');
  const [hodId, setHodId] = useState('');
  const [hodUsers, setHodUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHodUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/hod-users');
        setHodUsers(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError('Error fetching HoD users');
        console.error('Error fetching HoD users:', error);
      }
    };

    fetchHodUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/add-department', { dept_name: deptName, hod_id: hodId });
      if (response.data.success) {
        alert('Department added successfully');
        setDeptName('');
        setHodId('');
        setError('');
      } else {
        setError('Failed to add department');
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('Error adding department');
      console.error('Error adding department:', error);
    }
  };

  return (
    <div className="add-department-container">
      <h2>Add Department</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Department Name:</label>
          <input
            type="text"
            value={deptName}
            onChange={(e) => setDeptName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Head of Department (HOD):</label>
          <select value={hodId} onChange={(e) => setHodId(e.target.value)} required>
            <option value="">Select HOD</option>
            {hodUsers.map(user => (
              <option key={user.user_id} value={user.user_id}>{user.username}</option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={loading}>Add Department</button>
      </form>
    </div>
  );
}

export default AddDepartment;
