import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSectionHoD() {
  const navigate = useNavigate();

  const handleStaffDetailsClick = () => {
    navigate('/staff-details');
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
        >
          CHECK EVENTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleStaffDetailsClick}
        >
          Pending Approval
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionHoD;
