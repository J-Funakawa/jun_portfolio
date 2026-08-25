import React from 'react';
import worksData, { getWorkNumber } from '../object/WorksData';
import { useWorld } from '../context/WorldContext';

const WorkTopSection = ({indexNum}) => {
    const ArrayNum = indexNum - 1
    const { works: worldWorkIds } = useWorld();
    const displayNumber = getWorkNumber(worksData[ArrayNum].id, worldWorkIds);
  return (
    <div className="topSection">
      <div className="contentHolder">
       
        <div className="imageHolder">
          <img
            src={worksData[ArrayNum].imagePath}
            alt=""
          />
        </div>
        {/* <div className='vinette'></div> */}
        <div className="titleHolder">
          <p>{displayNumber}</p>
          <h4>
            {worksData[ArrayNum].title}
          </h4>

        </div>
        <div className="descriptionHolder">
          {/* <h5>{worksData[ArrayNum].question}</h5> */}
          <p className='titleTag1'>{worksData[ArrayNum].tag1}</p>
          <p className='titleTag2'>{worksData[ArrayNum].tag2}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkTopSection;
