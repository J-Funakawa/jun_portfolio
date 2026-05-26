import React from 'react';
import { Link } from 'react-router-dom';
import WorkIndex from './WorkIndex';
import '../css/Text.css';
import '../css/WorkGlobal.css';

const Footer = () => {
  return (
    <div>
    
      <div className='divSmall' id='centerAlinedA'>
      <p>
                    Thank you for visiting my website.
                
                    <br /> Please contact me for more information. 
                    </p>
                    <br />

                    <p>
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
      <WorkIndex />
      <div className='divSmall' id='centerAlinedB'>
                    <p>
                    © 2024 Jun Funakawa All Rights Reserved.
                    </p>
      </div>
    </div>

    
  );
};

export default Footer;


