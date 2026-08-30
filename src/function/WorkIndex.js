import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Text.css';
import '../css/WorkIndex.css';
import worksData from '../object/WorksData.js';
import { useWorld } from '../context/WorldContext';

// Resolve which works to render: an explicit `works` prop wins; otherwise use
// the current world's selection (list of ids), or all works when the world
// has no selection.
const resolveWorks = (works, worldWorkIds) => {
  if (works) return works;
  if (worldWorkIds) {
    return worldWorkIds
      .map((id) => worksData.find((w) => w.id === id))
      .filter(Boolean);
  }
  return worksData;
};

const WorkIndex = ({ works }) => {
  const { basePath, works: worldWorkIds } = useWorld();
  const list = resolveWorks(works, worldWorkIds);

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  // Card number reflects display order (01, 02, ...), not the work's id.
  // Non-numeric labels (e.g. the "About" tile) are kept as-is.
  let orderCount = 0;

  return (
    <div>
      <div className="worksGridContainer">
        {list.map((work) => {
          const isNumbered = /^\d+$/.test(String(work.number).trim());
          const displayNumber = isNumbered
            ? String(++orderCount).padStart(2, '0')
            : work.number;
          return (
          <div key={work.id} className="gridDiv" id={`gridDiv${work.id}`}>
            <Link to={`${basePath}${work.link || '/default-link'}`} onClick={handleClick} style={{ textDecoration: 'none' }}>

              <div className="gridImageWrap">
                <img className="gridImage" src={work.imagePath} alt={work.alt || 'Default Alt Text'} />
              </div>

            <div className='gridText'>
              <p className='gridTextTag'>{work.tag1}<br />{work.tag2}</p>
              <p className='gridTextNumber'>{displayNumber}</p>
              <h2 className='gridTitle'>{work.title}</h2>

              <p className='gridTextStatus'>{work.status}</p>
              {/* <p className='gridTextQuestion'>"{work.question}"</p> */}
            </div>
            </Link>
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkIndex;
