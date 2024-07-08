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
import StaffDetails from './Components/pages/StaffDetails';
import AddStaff from './Components/pages/AddStaff';
import ViewStaff from './Components/pages/ViewStaff';
import UpdateStaff from './Components/pages/UpdateStaff';
import AddDepartment from './Components/pages/AddDepartment';
import AddToDepartment from './Components/pages/AddToDepartment';
import ProposeEvent from './Components/pages/ProposeEvent';
import PendingApproval from './Components/pages/PendingApproval'; // Add import for PendingApproval
import ApprovedEvents from './Components/pages/ApprovedEvents'; // Add import for ApprovedEvents
import RejectedEvents from './Components/pages/RejectedEvents'; // Add import for RejectedEvents

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/staff-home" element={<StaffHome />} />
        <Route path="/hod-home" element={<HODHome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-staff" element={<AddStaff />} />
        <Route path="/view-staff" element={<ViewStaff />} />
        <Route path="/add-department" element={<AddDepartment />} />
        <Route path="/add-to-department" element={<AddToDepartment />} />
        <Route path="/event-proposal" element={<ProposeEvent />} />
        <Route path="/update-staff/:id" element={<UpdateStaff />} />
        <Route path="/staff-details" element={<StaffDetails />} />
        <Route path="/pending-approval" element={<PendingApproval />} /> {/* Add route for PendingApproval */}
        <Route path="/approved-events" element={<ApprovedEvents />} /> {/* Add route for ApprovedEvents */}
        <Route path="/rejected-events" element={<RejectedEvents />} /> {/* Add route for RejectedEvents */}
      </Routes>
    </Router>
  );
}

export default App;
