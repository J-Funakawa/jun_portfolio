import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/Hmenu.css';

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {

    
    return (
      <Menu>
        <a className="menu-item" href="/">
          <h2 className='nav-header'>Jun Funakawa</h2>
        </a>
        <a className="menu-item" href="/workhome">
          <h2 className='nav-header'>Work</h2>
        </a>
        <a className="menu-item" href="/about">
          <h2 className='nav-header'>About</h2>
          
        </a>
        <a className="menu-item" href="/contact">
          <h2 className='nav-header'>Contact</h2>
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;

