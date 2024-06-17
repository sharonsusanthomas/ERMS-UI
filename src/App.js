import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import StaffHome from './Components/pages/StaffHome';
import HODHome from './Components/pages/HODHome';
import Login from './Components/Login';
import Services from './Components/pages/Services';
import SignUp from './Components/pages/SignUp';
import StaffDetails from './Components/pages/StaffDetails'; // Import StaffDetails
import AddStaff from './Components/pages/AddStaff';
import ViewStaff from './Components/pages/ViewStaff';
import UpdateStaff from './Components/pages/UpdateStaff';
import AddDepartment from './Components/pages/AddDepartment';
import AddToDepartment from './Components/pages/AddToDepartment';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/staff-home' element={<StaffHome />} />
        <Route path='/hod-home' element={<HODHome />} />
        <Route path='/services' element={<Services />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/add-staff' element={<AddStaff />} />
        <Route path='/view-staff' element={<ViewStaff />} />
        <Route path='/add-department' element={<AddDepartment/>}></Route>
        <Route path='/add-to-department' element={<AddToDepartment/>}></Route>

        <Route path="/update-staff/:id" element={<UpdateStaff />} />
        <Route path='/staff-details' element={<StaffDetails />} /> {/* Add route for StaffDetails */}
      </Routes>
    </Router>
  );
}

export default App;
