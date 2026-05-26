import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';



const PetApp = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
 
        <WorkTopSection indexNum="6" />
        <main>

        <hr />
            {/* <div className='divLarge'>
                <div className='divSmall'>
                    <h2>Project Brief</h2>
                    <p> I designed UX and UI for the mobile app on which pet owners can track its health, gain tips, and communicate with other owners. 

Developing the app structure was done by team and creating the wireframe and the mockup were done individually. </p>
                </div>
                <div className='divSmall'>
                    <h2>Process</h2>
                    <p>
                    We created persona for our primary users, single pet owners and secondary users which is young family parents.
                    </p>
                </div>
            </div> */}
            
            <div className='divMedium'>
            
               
            <p>
            Problem<br />
             <strong>First-time pet owners need support to maintain the health of their pets.  </strong>
            
           
            </p>

            <p>
            Solution<br />
            <strong>An app that enables users to monitor their pet's well-being and receive advice on maintaining its health. </strong>            
            </p>
              

        </div> 
         <hr />
           <div className='divMedium'>

            
                <h2>1. Discover</h2>
                <p>
                We created persona for our primary users, single pet owners and secondary users which is young family parents.
                </p>
                <img
                    src={require("../../image/work_PetApp/profile.jpg")}
                    alt=""
                />
                <img
                    src={require("../../image/work_PetApp/persona.jpg")}
                    alt=""
                />
                
            </div>

            <div className='divMedium'>
                
                <h2>2. Ideation</h2>
                
                <p>
                Setting the theme to active and healthy, I designed this visual identity that is consist of 4 colors. The logo represents a 3 month calendar which means one term of the community and each color represent out activities. I chose a calendar since it also generates mood of community since it is consist of many pieces.
                </p>

                <img
                    src={require("../../image/work_PetApp/discussion.jpeg")}
                    alt=""
                />
                 <img
                    src={require("../../image/work_PetApp/howmightwe.jpeg")}
                    alt=""
                />
                
            </div>

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
               
                <h2>3. Sketch and Prototype</h2>
                
                <p>
                Selecting main tasks of the app, I created an wireframe for each tasks so that I can test the prototype. To justify the prototype, I conducted usability testing by planning the test and recruiting users. Feedbacks and observed results was incorporated to the mockup.
                </p>
                  
                  <img
                    src={require("../../image/work_PetApp/sketch.jpg")}
                    alt=""
                />
            </div>
            <img
                    src={require("../../image/work_PetApp/wireframe.png")}
                    alt=""
                />

            <div className='divMedium'>
               
                <h2>4. Mockup</h2>
                
                <p>
                For the creative strategies, I created Moodboard and style tiles. Below are three main moods set to establish a brand for target audiences.
                </p>
                
                <p>
                • Healthy <br />
                Since this app helps pet owners to maintain their pet's health. A sense of healthy pets' life should be conveyed to users.
                </p>

                <p>
                • Supportive<br />
                Our target users are singles who take care of their pets by themselves. Giving beginner-friendly, supportive users help users trust the app and engage more with it. 
                </p>

                <p>
                • Motivating<br />
                Using this app adds another daily task to their life and users have to make a commitment to keep tracking. Because of that, a motivating mood is recommended to be used for the design.
                </p>

                  <img
                    src={require("../../image/work_PetApp/moodboard.png")}
                    alt=""
                />

                  
                
            </div>
            <img
                    src={require("../../image/work_PetApp/styletile.jpg")}
                    alt=""
                />

            <div className='divMedium'>
                

                
                <p>
                After establishing the creative strategies, I incorporate visuals into wireframe and develop mockups in both mobile and desktop versions.
                 </p>
            </div>
            <img src={require("../../image/work_PetApp/final1.jpg")} alt=""/>
                 <img src={require("../../image/work_PetApp/final2.jpg")} alt=""/>
         <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This project expanded my ability to develop and brand and implement creative strategies to UI. I also established a skill to think through the user’s experience thoroughly before going on the high-fidelity prototype. 
                </p>
            </div>
         <hr />
        </main>
 

        <Footer />
    </div>
 </div>
    

    

  );
};

export default PetApp;