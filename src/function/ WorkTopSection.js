import React from 'react';
import worksData, { getWorkNumber } from '../object/WorksData';
import { useWorld } from '../context/WorldContext';

// Wrap non-empty hero text in a beige highlight span; leave blank/whitespace
// tags unwrapped so they don't render a stray highlight mark.
const highlight = (text) =>
  text && String(text).trim()
    ? <span className="heroHighlight">{text}</span>
    : text;

const WorkTopSection = ({indexNum}) => {
    const ArrayNum = indexNum - 1
    const { works: worldWorkIds } = useWorld();
    const displayNumber = getWorkNumber(worksData[ArrayNum].id, worldWorkIds);
  return (
    <div className="topSection">
      <div className="contentHolder">

        {/* Clip path that bows the image's top/bottom edges so the horizontal
            center is slightly taller than the left/right edges. Uses
            objectBoundingBox (0–1) so it scales with the responsive image. */}
        <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="heroImageClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.0025,0.0025 Q 0.5,-0.0025 0.9975,0.0025 Q 1.0025,0.5 0.9975,0.9975 Q 0.5,1.0025 0.0025,0.9975 Q -0.0025,0.5 0.0025,0.0025 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="imageHolder">
          <img
            src={worksData[ArrayNum].imagePath}
            alt=""
          />
          <span className="heroTape heroTape--tl" aria-hidden="true"></span>
          <span className="heroTape heroTape--tr" aria-hidden="true"></span>
          <span className="heroTape heroTape--bl" aria-hidden="true"></span>
          <span className="heroTape heroTape--br" aria-hidden="true"></span>
        </div>
        {/* <div className='vinette'></div> */}
        <div className="titleHolder">
          <p>{highlight(displayNumber)}</p>
          <h4>
            {highlight(worksData[ArrayNum].title)}
          </h4>

        </div>
        <div className="descriptionHolder">
          {/* <h5>{worksData[ArrayNum].question}</h5> */}
          <p className='titleTag1'>{highlight(worksData[ArrayNum].tag1)}</p>
          <p className='titleTag2'>{highlight(worksData[ArrayNum].tag2)}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkTopSection;
