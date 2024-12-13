import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  const [homeDropdownVisible, setHomeDropdownVisible] = useState(false);
  const [academicsDropdownVisible, setAcademicsDropdownVisible] = useState(false);

  const toggleHomeDropdown = () => {
    setHomeDropdownVisible(prevState => !prevState);
  };

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownVisible(prevState => !prevState);
  };

  return (
    <div className="sidebar">
      <div onClick={toggleHomeDropdown}>HOME</div>
      {homeDropdownVisible && (
        <div className="dropdown-menu">
          <p>Dashboard</p>
          <p>Profile</p>
          <p>Inbox</p>
          <p>Calendar</p>
          <p>Help</p>
        </div>
      )}

      <div onClick={toggleAcademicsDropdown}>ACADEMICS</div>
      {academicsDropdownVisible && (
        <div className="dropdown-menu">
          <p>Admission</p>
          <p>Course Registration</p>
          <p>Courses</p>
          <p>Schedule</p>
          <p>Thesis</p>
          <p>Student Results</p>
          <p>Rules & Regulations</p>
        </div>
      )}
      <div>
        <ul>
          <li><NavLink to="/home">HOME</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/inbox">Inbox</NavLink></li>
          <li><NavLink to="/calendar">Calendar</NavLink></li>
          <li><NavLink to="/help">Help</NavLink></li>
          <li><NavLink to="/academics">ACADEMICS</NavLink></li>
          <li><NavLink to="/admission">Admission</NavLink></li>
          <li><NavLink to="/course registration">Course Registration</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/schedule">Schedule</NavLink></li>
          <li><NavLink to="/thesis">Thesis</NavLink></li>
          <li><NavLink to="/studentresults">Student Results</NavLink></li>
          <li><NavLink to="/rules & regulations">Rules & Regulations</NavLink></li>
          <li><NavLink to="/accommodation">ACCOMMODATION</NavLink></li>
          <li><NavLink to="/finance">FINANCE</NavLink></li>
          <li><NavLink to="/counseling">COUNSELING</NavLink></li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;