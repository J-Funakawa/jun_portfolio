import React from 'react';
// import { Link } from 'react-router-dom';
// import { useWorld } from '../context/WorldContext';

// Shared back button used by About and every work detail page. Returns to the
// current world's home (e.g. /uds-crag/workhome) so it never leaks to another
// world.
//
// Hidden for now — return null everywhere. To restore, uncomment the imports
// and the Link below.
const BackButton = () => {
  return null;

  // const { basePath } = useWorld();
  // return (
  //   <Link id="backButton" to={`${basePath}/workhome`}>
  //     <img src={require("../image/work_01/backbutton@4x.png")} alt="Back" />
  //   </Link>
  // );
};

export default BackButton;
