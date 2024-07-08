import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSectionAdmin() {
  const navigate = useNavigate();

  const handleStaffDetailsClick = () => {
    navigate('/staff-details');
  };

  const handleCheckEventsClick = () => {
    window.open('https://calendar.google.com', '_blank');
  };

  const handleApprovedEventsClick = () => {
    navigate('/approved-events'); // Assuming '/approved-events' is your route for approved events
  };

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>CHRIST UNIVERSITY</h1>
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
          onClick={handleStaffDetailsClick}
        >
          STAFF AND DEPARTMENTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleApprovedEventsClick}
        >
          APPROVED EVENTS
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionAdmin;
