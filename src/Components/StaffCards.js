import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function StaffCards() {
  return (
    <div className='cards'>
      <h1>MANAGE STAFF</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/add-employee.jpg'
              text='Add a new employee to the staff'
              label='Add Staff'
              path='/add-staff'
            />
            <CardItem
              src='images/show-staff.jpg'
              text='Show the list of all staff members'
              label='Show Staff'
              path='/view-staff'
            />
            <CardItem
              src='images/add-department.jpg'
              text='Add a new department'
              label='Add Department'
              path='/add-department'
            />
            <CardItem
              src='images/add-to-department.jpg'
              text='Add people to a department'
              label='Add to Department'
              path='/add-to-department'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StaffCards;
