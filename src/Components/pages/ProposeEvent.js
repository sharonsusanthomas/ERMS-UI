import React, { useState } from 'react';
import axios from 'axios';

function ProposeEvent() {
  const [formData, setFormData] = useState({
    event_name: '',
    event_type: '',
    event_date: '',
    venue: '',
    username: '',
    budget: '',
    description: '',
    hosting_dept: '',
  });

  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/propose-event', formData);
      if (response.data.success) {
        alert('Event proposed successfully');
        setFormData({
          event_name: '',
          event_type: '',
          event_date: '',
          venue: '',
          username: '',
          budget: '',
          description: '',
          hosting_dept: '',
        });
      } else {
        alert(`Error proposing event: ${response.data.message}`);
      }
    } catch (error) {
      console.error('Error proposing event:', error);
      alert('Error proposing event');
    }
  };

  return (
    <div className="propose-event-container">
      <h2>Propose Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="event_name">Event Name</label>
          <input
            type="text"
            id="event_name"
            name="event_name"
            value={formData.event_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event_type">Event Type</label>
          <input
            type="text"
            id="event_type"
            name="event_type"
            value={formData.event_type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event_date">Event Date</label>
          <input
            type="date"
            id="event_date"
            name="event_date"
            value={formData.event_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="venue">Venue</label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Organizer Username</label>
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
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hosting_dept">Hosting Department</label>
          <input
            type="text"
            id="hosting_dept"
            name="hosting_dept"
            value={formData.hosting_dept}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Propose Event</button>
      </form>
    </div>
  );
}

export default ProposeEvent;
