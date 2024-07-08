import React, { useState, useEffect } from 'react';
import axios from 'axios';


function AddEventRecordForm() {
  const [formData, setFormData] = useState({
    event_id: '',
    department_id: '',
    number_of_activities: '',
    date_time: '',
    venue: 'Christ Lavasa', // Default value
    academic_year: '',
    event_type: '',
    speaker_name: '',
    speaker_job: '',
    target_audience: '',
    website_contact: '',
    organizing_committee_details: '',
    participants_count: '',
    summary: ''
  });

  const [departments, setDepartments] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch departments from backend when component mounts
    fetchDepartments();
    fetchEvents();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/departments');
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add-event-record', formData);
      console.log('Event record added:', response.data);
      // Handle success (e.g., show a success message, reset form, etc.)
      alert('Event record added successfully!');
      setFormData({
        event_id: '',
        department_id: '',
        number_of_activities: '',
        date_time: '',
        venue: 'Christ Lavasa',
        academic_year: '',
        event_type: '',
        speaker_name: '',
        speaker_job: '',
        target_audience: '',
        website_contact: '',
        organizing_committee_details: '',
        participants_count: '',
        summary: ''
      });
    } catch (error) {
      console.error('Error adding event record:', error.response.data);
      // Handle error (e.g., show an error message to the user)
      alert('Failed to add event record. Please check the form and try again.');
    }
  };

  return (
    <div className='form-container'>
      <h2>Add Event Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event:
          <select name="event_id" value={formData.event_id} onChange={handleChange} required>
            <option value="">Select Event</option>
            {events.map((event) => (
              <option key={event.event_id} value={event.event_id}>{event.event_name}</option>
            ))}
          </select>
        </label>
        <label>
          Department:
          <select name="department_id" value={formData.department_id} onChange={handleChange} required>
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.dept_id} value={dept.dept_id}>{dept.dept_name}</option>
            ))}
          </select>
        </label>
        <label>
          Number of Activities:
          <input type="number" name="number_of_activities" value={formData.number_of_activities} onChange={handleChange} required />
        </label>
        <label>
          Date and Time:
          <input type="datetime-local" name="date_time" value={formData.date_time} onChange={handleChange} required />
        </label>
        <label>
          Venue:
          <input type="text" name="venue" value={formData.venue} onChange={handleChange} required />
        </label>
        <label>
          Academic Year:
          <input type="text" name="academic_year" value={formData.academic_year} onChange={handleChange} required />
        </label>
        <label>
          Event Type:
          <input type="text" name="event_type" value={formData.event_type} onChange={handleChange} required />
        </label>
        <label>
          Speaker Name:
          <input type="text" name="speaker_name" value={formData.speaker_name} onChange={handleChange} required />
        </label>
        <label>
          Speaker Job:
          <input type="text" name="speaker_job" value={formData.speaker_job} onChange={handleChange} required />
        </label>
        <label>
          Target Audience:
          <input type="text" name="target_audience" value={formData.target_audience} onChange={handleChange} required />
        </label>
        <label>
          Website or Contact:
          <input type="text" name="website_contact" value={formData.website_contact} onChange={handleChange} required />
        </label>
        <label>
          Organizing Committee Details:
          <input type="text" name="organizing_committee_details" value={formData.organizing_committee_details} onChange={handleChange} required />
        </label>
        <label>
          Participants Count:
          <input type="number" name="participants_count" value={formData.participants_count} onChange={handleChange} required />
        </label>
        <label>
          Summary:
          <textarea name="summary" value={formData.summary} onChange={handleChange} required />
        </label>
        <button type="submit">Add Event Record</button>
      </form>
    </div>
  );
}

export default AddEventRecordForm;
