import React from 'react';
import HamburgerMenu from '../function/Hmenu';
import MediaQuery from 'react-responsive';
import DesktopMenu from './DesktopMenu';


const Navigation = () => {
  return (
<div>
  <MediaQuery maxWidth={767}>
    
    <HamburgerMenu />
  </MediaQuery>
  <MediaQuery minWidth={768}>
    <DesktopMenu />
  </MediaQuery>
</div>

  );
};

export default Navigation;
