import React from 'react';
import { Link } from 'react-router-dom';
// import '../css/HomeNav.css';
import '../css/Face.css';
import Face from '../function/Face';
import Navigation from '../function/Navigation';


const Home = () => {
  return (
  
    <div>
         <Navigation />
      <Face addEvent={() => {}} isMousemoveActive={true} />
    </div>
  );
};

export default Home;