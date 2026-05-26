import React from 'react';
import worksData from '../object/WorksData';

const WorkTopSection = ({indexNum}) => {
    const ArrayNum = indexNum - 1
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
          <p>{worksData[ArrayNum].number}</p>
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
