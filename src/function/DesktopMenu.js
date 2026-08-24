import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navigation.css';
import '../css/Text.css';

const DesktopMenu = ({ basePath = '' }) => {
  const location = useLocation();

  // Function to determine if the current path matches the given path
  const isCurrentPath = (path) => location.pathname === path;

  return (
    <nav className="main-navigation" id="mainNavigation">
      <div className="wrapper" id="navList">
        <div className="nav-logo" id="homeNavLink">
          <h1>Jun Funakawa</h1>
        </div>
        <Link to={`${basePath}/about`} className={`nav-link ${isCurrentPath(`${basePath}/about`) ? 'active' : ''}`} id="aboutNavLink">
          <h1>About</h1>
        </Link>
        <Link to={`${basePath}/workhome`} className={`nav-link ${isCurrentPath(`${basePath}/workhome`) ? 'active' : ''}`} id="workNavLink">
          <h1>Work</h1>
        </Link>
        <Link to={`${basePath}/contact`} className={`nav-link ${isCurrentPath(`${basePath}/contact`) ? 'active' : ''}`} id="contactNavLink">
          <h1>Contact</h1>
        </Link>
      </div>
    </nav>
  );
};

export default DesktopMenu;
