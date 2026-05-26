import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Text.css';
import '../css/WorkIndex.css';
import worksData from '../object/WorksData.js';


const WorkIndex = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="worksGridContainer">
        {worksData.map((work) => (
          <div key={work.id} className="gridDiv" id={`gridDiv${work.id}`}>
            <Link to={work.link || '/default-link'} onClick={handleClick} style={{ textDecoration: 'none' }}>

              <img className="gridImage" src={work.imagePath} alt={work.alt || 'Default Alt Text'} />
         
            <div className='gridText'>
              <p className='gridTextTag'>{work.tag1}<br />{work.tag2}</p>
              <p className='gridTextNumber'>{work.number}</p>
              <h2 className='gridTitle'>{work.title}</h2>
             
              <p className='gridTextStatus'>{work.status}</p>
              {/* <p className='gridTextQuestion'>"{work.question}"</p> */}
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkIndex;
