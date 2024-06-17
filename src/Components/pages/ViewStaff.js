import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../ViewStaff.css';

function ViewStaff() {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:5000/view-staff');
      console.log('Response data:', response.data); // Log the response data for debugging
      setStaff(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching staff:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this staff?');
    if (confirmDelete) {
      try {
        await axios.put(`http://localhost:5000/delete-staff/${id}`);
        fetchStaff(); // Fetch updated list after deletion
      } catch (error) {
        console.error('Error updating status:', error);
      }
    }
  };

  return (
    <div>
      <h2>View Staff</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Role</th>
                <th>Email</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              {staff.length > 0 ? (
                staff.map((member, index) => (
                  <tr key={index}>
                    <td>{member.username}</td>
                    <td>{member.role}</td>
                    <td>{member.email}</td>
                    <td>
                      <Link to={`/update-staff/${member.user_id}`}>Update Staff</Link>
                      {' / '}
                      <button className="delete-button" onClick={() => handleDelete(member.user_id)}>Delete Staff</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No staff found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewStaff;
