import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddToDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  useEffect(() => {
    // Fetch departments
    axios.get('http://localhost:5000/departments')
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => console.error('Error fetching departments:', error));

    // Fetch users
    axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_id: selectedUser,
      dept_id: selectedDepartment
    };

    axios.post('http://localhost:5000/add-to-department', data)
      .then(response => {
        alert(response.data.message);
        setSelectedDepartment('');
        setSelectedUser('');
      })
      .catch(error => console.error('Error adding user to department:', error));
  };

  return (
    <div className="add-to-department-container">
      <h2>Add User to Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="department">Select Department:</label>
          <select
            id="department"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            required
          >
            <option value="" disabled>Select a department</option>
            {departments.map(department => (
              <option key={department.dept_id} value={department.dept_id}>
                {department.dept_name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user">Select User:</label>
          <select
            id="user"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            required
          >
            <option value="" disabled>Select a user</option>
            {users.map(user => (
              <option key={user.user_id} value={user.user_id}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add to Department</button>
      </form>
    </div>
  );
};

export default AddToDepartment;
