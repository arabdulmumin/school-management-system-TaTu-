
import React from 'react';
import SearchIcon from '@mui/icons-material/Search'; // Example: Material UI icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Top-right example
import MenuIcon from '@mui/icons-material/Menu'; // Top-left example

import './Header.css'; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <MenuIcon />
        <span>Other Left Icon</span>
      </div>
      <div className="header-middle">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="header-right">
        <NotificationsIcon />
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;
