import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';




const RefreshBar = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
        <WorkTopSection indexNum="1" />
        <main>
        <hr />
             
        <div className='divMedium'>
            
               
            <p>
            Problem<br />
             <strong>The environment is causing a blurred distinction between work and break time, leading to exhaustion as a consequence. </strong>
            
           
            </p>

            <p>
            Solution<br />
            <strong>An appointment-based refreshment bar for relaxing away from the discussions of the hackathon. </strong>            
            </p>
              

        </div> 
            <hr />

            

            <div className='divMedium'>

            <img
                    src={require("../../image/work_HamoriHarmony/workshop_2.jpg")}
                    alt=""
                />
            </div>
            <div className='divMedium'>
                
                <h2>Background</h2>
                
                <p>
                As a part of Internship at Curio School in Japan, I designed the bar experience for the large scale hackathon of high school students. This project aimed to maintain participants' creativity and motivation in a room with no window for 8 hours for 5 days. This work represents how I observed the problem and solved the service issue from the human-centered perspective.              </p>


            </div>

            <div className='divMedium'>
                
                <h2>Discover</h2>
                
                <p>
               <strong>  1. Ethnography</strong><br />
               I attended the event disguising as a camera man so I can observe how students behave throughout the day.
                </p>
                <p>
                <strong>  2. Interviewing past participants </strong><br />
                
                I interviewed a couple of past participants to ask questions about how their motivation and mind changes throughout a week.      
                </p>

               

                 <img
                        src={require("../../image/work_HamoriHarmony/workshop_1.jpg")}
                        alt=""
                    />
            </div>

         

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
                <h2>Problem Definition</h2>
                
                <p>
                <strong> 1. The boundary of the work and break is blurry.</strong><br />
As a result of the endeavor to provide an extraordinary environment to high school students, some furnitures, such as Yogibo, was making participants think they are in a relaxed environment. This reduced the number of breaks from the participants. 
                </p>
                <p>
                <strong> 2. The environment is preventing people from taking a break.</strong><br />
As a result of the endeavor to provide an extraordinary environment to high school students, some furnitures, such as Yogibo, was making participants think they are in a relaxed environment. This reduced the number of breaks from the participants. 
                </p>
                <p>
                <strong> 3. Participants are not taking a break even though they are in the break.(False Break)</strong><br />
                Although they had a given time for a break such as lunch time, they were always thinking about their work and ideation. Participants needed more time not thinking about the work and bonding with their teammates.                 </p>

                <p>
                <strong> Hypothesis</strong><br />
               </p>


                
                  
                  <img
                    src={require("../../image/work_RefreshBar/Hypothesis.png")}
                    alt=""
                />
                
            </div>

            <div className='divMedium'>
               
                <h2>Solution</h2>
                <p>
                <strong>
                I proposed the bar space in the same workshop room called “Refresh Bar”. 
                </strong>
                </p>
                
                <p>
                <strong>Experience </strong><br />
                In this bar space, participants find a long table and high-chairs with the bar master serving non-alcoholic drinks. The participants can book the refresh bar once a day and come to this bar with team members to refresh for 15 minutes. The master of the bar changes everyday. The way of refreshment will also change depending on the master, some will play a game with participants, others will talk about topics outside of the hackathon. </p>
                
                

                  <img
                    src={require("../../image/work_RefreshBar/concept.jpg")}
                    alt=""
                />
                
                <p>
               <strong>Rationale</strong><br />
              1. The reservation system will encourage participants to be mindful of the break time and set a goal to work until the break time.   
                </p>
                <p>   
               2. Bar experience is not ordinary to high school students, so it motivates them and makes them think they “want to” take a break instead of they “have to” take a break.                
               </p>
               <p>   
              3.  The experience will produce the time away from the workshop and avoid false break solidifying the break time and work time. 
               </p>
                  
                  
                
            </div>
            <div className='divLarge'>
                <div className='divSmall'>
                    <img
                   src={require("../../image/work_RefreshBar/photo1.jpg")}
                   alt=""
                  />
                </div>
                <div className='divSmall'>
                    <img
                   src={require("../../image/work_RefreshBar/photo2.jpg")}
                   alt=""
                  />
                    </div>
             </div>
         

            <div className='divMedium'>
                
                <h2>Impact</h2>
                
                <p>
                During the event, the reservation slots were already full at the beginning of the day. Participants showed strong interest in the refresh bar. We also observed moments of participants bonding with each other and refreshing with laughs.
                <br />
                 <strong>After-event inquiry reported the participants evaluated the environment over 80%. </strong>Mono-Coto Innovation was also held in 2020 online because of the pandemic. This solution was also implemented this year as an online format. 
                </p>
                 <img src={require("../../image/work_RefreshBar/photo4.png")} alt=""/>
                 <img src={require("../../image/work_RefreshBar/photo3.png")} alt=""/>
                
            </div>
        
            <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    One of the constraints for this project was the budget. However, though we couldn’t rent the fancy chairs and tables, we were able to observe the change in participants behavior. It proved the effectiveness of the human-centered approach. 
                    </p>
            </div>
         <hr />    


            
        </main>

        <Footer />
    </div>
 </div>
    

    

  );
};

export default RefreshBar;