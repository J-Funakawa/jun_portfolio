import React from 'react';
import HamburgerMenu from '../function/Hmenu';
import MediaQuery from 'react-responsive';
import DesktopMenu from './DesktopMenu';
import { useWorld } from '../context/WorldContext';


const Navigation = () => {
  const { basePath } = useWorld();
  return (
<div>
  <MediaQuery maxWidth={767}>

    <HamburgerMenu basePath={basePath} />
  </MediaQuery>
  <MediaQuery minWidth={768}>
    <DesktopMenu basePath={basePath} />
  </MediaQuery>
</div>

  );
};

export default Navigation;
