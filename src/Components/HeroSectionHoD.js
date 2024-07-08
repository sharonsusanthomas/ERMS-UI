import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

const HeroSectionHoD = () => {
  const navigate = useNavigate();

  const handleCheckEventsClick = () => {
    window.open('https://calendar.google.com', '_blank');
  };

  const handlePendingApprovalClick = () => {
    navigate('/pending-approval');
  };

  const handleApprovedEventsClick = () => {
    navigate('/approved-events');
  };

  const handleRejectedEventsClick = () => {
    navigate('/rejected-events');
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
          onClick={handlePendingApprovalClick}
        >
          Pending Approval
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleApprovedEventsClick}
        >
          Approved Events
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleRejectedEventsClick}
        >
          Rejected Events
        </Button>
      </div>
    </div>
  );
}

export default HeroSectionHoD;
