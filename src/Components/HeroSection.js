import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>CHRIST UNIVERSITY </h1>
      <p>EVENT RECORD MANAGEMENT SYSTEM</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CHECK EVENTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ADD RECORD 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

// import React, { useEffect, useState } from 'react';
// import '../App.css';
// import { Button } from './Button';
// import './HeroSection.css';

// function HeroSection() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Function to fetch Google Calendar events
//     const fetchEvents = async () => {
//       // Make API request to fetch events from Google Calendar
//       // Use fetched events to update state
//       try {
//         const response = await fetch('YOUR_API_ENDPOINT_HERE');
//         const data = await response.json();
//         setEvents(data.items); // Assuming the API response contains events in `items` array
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     // Call fetchEvents function when component mounts
//     fetchEvents();
//   }, []);

//   return (
//     <div className='hero-container'>
//       {/* Your existing content */}
//       <h1>CHRIST UNIVERSITY </h1>
//       <p>EVENT RECORD MANAGEMENT SYSTEM</p>
//       <div className='hero-btns'>
//         {/* Button to navigate to Google Calendar */}
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//           onClick={() => window.open('YOUR_GOOGLE_CALENDAR_URL_HERE', '_blank')}
//         >
//           CHECK EVENTS
//         </Button>
//         {/* Your existing Add Record button */}
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
//         >
//           ADD RECORD 
//         </Button>
//       </div>
//       {/* Display fetched events */}
//       <div>
//         <h2>Upcoming Events</h2>
//         <ul>
//           {events.map(event => (
//             <li key={event.id}>{event.summary}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default HeroSection;
