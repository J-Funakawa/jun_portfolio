import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Text.css';
import '../css/WorkHome.css';
import '../css/WorkGlobal.css';




import worksData from '../object/WorksData.js';
import Face from '../function/Face';
import Navigation from '../function/Navigation.js';
import WorkIndex from '../function/WorkIndex.js';

const WorkHome = () => {
  return (
    <div>
    <Navigation />
    <h2 className='LogoText'>Jun Funakawa</h2>

    
    <WorkIndex />
   
    <div className='divSmall' id='centerAlinedA'> 

      <p>
                    Thank you for visiting my website.
                
                    <br /> Please contact me for more information. 
                    </p>
                    <br />
                    <p>
                    <hr />
                    <strong>Email</strong>
                    <br />
                    fjworks.5c@gmail.com
                    </p>
                  
                    <p>
                    <strong>    LinkedIn</strong>
                    <br />
                    <a href='https://www.linkedin.com/in/jun-funakawa-0033b51b1/'>linkedin.com/in/jun-funakawa-0033b51b1</a>
                    </p>
                    
                    <hr />
      </div>
   
      <div className='divSmall' id='centerAlinedB'>
                    <p>
                    © 2024 Jun Funakawa All Rights Reserved.
                    </p>
      </div>

    </div>
  );
};

export default WorkHome;
