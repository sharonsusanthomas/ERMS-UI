import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RejectedEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchRejectedEvents();
  }, []);

  const fetchRejectedEvents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/rejected'); // Replace with your backend URL
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching rejected events:', error);
    }
  };

  return (
    <div>
      <h2>Rejected Events</h2>
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

export default RejectedEvents;
