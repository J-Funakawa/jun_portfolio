import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../css/Hmenu.css';

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {

    
    const { basePath = '' } = this.props;
    return (
      <Menu>
        <a className="menu-item" href={`${basePath}/workhome`}>
          <h2 className='nav-header'>Jun Funakawa</h2>
        </a>
        <a className="menu-item" href={`${basePath}/workhome`}>
          <h2 className='nav-header'>Work</h2>
        </a>
        <a className="menu-item" href={`${basePath}/about`}>
          <h2 className='nav-header'>About</h2>

        </a>
        <a className="menu-item" href={`${basePath}/contact`}>
          <h2 className='nav-header'>Contact</h2>
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;

