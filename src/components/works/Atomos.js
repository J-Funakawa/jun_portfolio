import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';



const Atomos = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
    <WorkTopSection indexNum="6" />
        <main>
            <div className='divLarge'>
                <div className='divSmall'>
                    <h2>An Ice breaker for workshop</h2>
                    <p>Hamori-Harmony is the card game I created for the icebreaker of a
                workshop. It encourages people to open up to one another and start
                conversating and working together. </p>
                </div>
                <div className='divSmall'>
                    <h2>An Ice breaker for workshop</h2>
                    <p>Hamori-Harmony is the card game I created for the icebreaker of a
                workshop. It encourages people to open up to one another and start
                conversating and working together. </p>
                </div>
            </div>
           <div className='divMedium'>
                <img
                    src="https://framerusercontent.com/images/k33s60igpIa6FQrEPjz5VTXIwmU.jpg?scale-down-to=2048"
                    alt=""
                />
                <h2>An Ice breaker for workshop</h2>
                
                <p>
                Hamori-Harmony is the card game I created for the icebreaker of a
                workshop. It encourages people to open up to one another and start
                conversating and working together. While designing this product, we
                have raised enough money to begin production through crowdfunding.
                Please review the design process and overall success of this project.
                </p>
                
            </div>

            {/* <div className='hr'></div> */}

            <div className='divSmall'>
                    <h2>An Ice breaker for workshop</h2>
                    <p>Hamori-Harmony is the card game I created for the icebreaker of a
                workshop. It encourages people to open up to one another and start
                conversating and working together. </p>
            </div>
        </main>

        <div>
            <a className="buttonLink" href="https://youtu.be/fRsfKeukhmc">
            <h3>Watch Video</h3>
            </a>
        </div>
        <WorkIndex />
    </div>
 </div>
    

    

  );
};

export default Atomos;