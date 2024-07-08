import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const handleCheckEventsClick = () => {
    window.open('https://calendar.google.com', '_blank');
  };

  const handleAddRecordClick = () => {
    console.log('hey');
    // Additional functionality for adding a record can be implemented here
  };

  const handleProposeEventClick = () => {
    window.location.href = '/event-proposal'; // Assuming you have a route set up for the event proposal page
  };

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
          onClick={handleCheckEventsClick}
        >
          CHECK EVENTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleAddRecordClick}
        >
          ADD RECORD
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleProposeEventClick}
        >
          Propose an event
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
