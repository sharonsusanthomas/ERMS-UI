// src/Components/pages/PendingApproval.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '../Button';

const PendingApproval = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchPendingEvents();
  }, []);

  const fetchPendingEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/pending');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching pending events:', error);
    }
  };

  const handleApprove = async (eventId) => {
    try {
      await axios.post(`http://localhost:5000/approve/${eventId}`);
      fetchPendingEvents();
    } catch (error) {
      console.error('Error approving event:', error);
    }
  };

  const handleReject = async (eventId) => {
    try {
      await axios.post(`http://localhost:5000/reject/${eventId}`);
      fetchPendingEvents();
    } catch (error) {
      console.error('Error rejecting event:', error);
    }
  };

  return (
    <div className='pending-approval-container'>
      <h1>Pending Approval</h1>
      {events.length === 0 ? (
        <p>No pending events</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Type</th>
              <th>Event Date</th>
              <th>Venue</th>
              <th>Budget</th>
              <th>Description</th>
              <th>Hosting Dept</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.event_id}>
                <td>{event.event_name}</td>
                <td>{event.event_type}</td>
                <td>{event.event_date}</td>
                <td>{event.venue}</td>
                <td>{event.budget}</td>
                <td>{event.description}</td>
                <td>{event.hosting_dept}</td>
                <td>
                  <Button onClick={() => handleApprove(event.event_id)}>Approve</Button>
                  <Button onClick={() => handleReject(event.event_id)}>Reject</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PendingApproval;
