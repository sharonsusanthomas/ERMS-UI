import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApprovedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchApprovedEvents();
  }, []);

  const fetchApprovedEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/approved'); // Replace with your backend URL
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching approved events:', error);
    }
  };

  return (
    <div>
      <h2>Approved Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.event_id}>
            <strong>{event.event_name}</strong> - {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApprovedEvents;
