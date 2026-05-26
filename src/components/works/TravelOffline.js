import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import worksData from '../../object/WorksData';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';



const TravelOffline = () => {
    
//   const indexNumber = 4

  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
        <WorkTopSection indexNum="4" />
        <main>
        <hr />
            
            <div className='divMedium'>
            
               
               <p>
               Problem
               <br />
                <strong> How to differentiate the product through experience in a market with dominant players. </strong>
               </p>

               <p>
               Solution
               <br />
               <strong>Design the experience with an element of entertainment and focus on the moments when burning needs arise. </strong>            
               </p>
                 

           </div> 
           
            <hr />
            <div className='divMedium'>
            
               
            <h2>Background</h2>
                
                <p>
                Happ is an offline travel guide app available for iOS devices. As part of a personal project, I analyzed this app’s user experiences to identify opportunities for introducing distinct features.
                </p>
         
              

        </div> 
            <div className='divMedium'>
                
                <h2>Discover</h2>
                
                <p>
           
                Despite Happ offering a unique offline experience, major tech companies dominate its competition. To explore ways to differentiate the app, I conducted a competitor analysis. I discovered that Happ has the potential to provide users with unexpected destination discoveries, even in offline, on-site situations.
                </p>
                <img
                    src={require("../../image/work_TravelOffline/competitive.png")}
                    alt=""
                />
                <p>
                I also identified some scenes in the traveling process and generated ideas to address issues in each of these scenes.
                </p>
                <img
                    src={require("../../image/work_TravelOffline/journey.png")}
                    alt=""
                />
              
            </div>
           <div className='divMedium'>
                
                <h2>Solution</h2>
                
                <p>
                As a solution, I developed a concept along with three ideas/features to deliver a unique experience that aligns with the app’s brand.
                 <br/ >
                 <br />
                 Concept: <br />
                <strong>Introduce user-generated-content 
                to enhance intuitive, on-site destination-findings.</strong><br />
                <br />
                Ideas:
                <br />
                <strong>1. Footprints Tracing with User-Generated Diaries</strong>
                <br/ >
                <strong>2. Enhanced Visually Entertaining Map</strong>
                <br/ >
                <strong>3. Recovery from negative-peak moments</strong>
                </p>
                <img
                    src={require("../../image/work_TravelOffline/concept.png")}
                    alt=""
                />
              
            </div>

            <div className='divMedium'>
                
    
                
               <p>
                Idea1<br />
                <strong>Footprints Tracing with User-Generated Diaries </strong><br />
                 
                Users can follow in the footsteps of pro travelers, historical figures, and celebrities, exploring destinations from their perspectives. This can be accomplished by building a community of travelers and incorporating a destination-based diary feature.
                <br /><br />
                Happ stands out from other planning apps with its map-based interactive interface, allowing users to explore their surroundings in real time. While the current version includes pictures and icons, the map could evolve to tell stories through animations and visualized surroundings, offering a richer, more immersive experience.
            
                </p>
                <img
                    src={require("../../image/work_TravelOffline/idea1_question.png")}
                    alt=""
                />
                <img
                    src={require("../../image/work_TravelOffline/idea1_answer.png")}
                    alt=""
                />
                <p>
                Idea2<br />
                
                 
                 <strong>
                Creating visually enhance entertaining map that tells stories.
                 </strong><br />
               
                Happ’s map-based interactive interface sets it apart from other planning apps, allowing users to open the map at any time and discover what’s nearby. While the current version features pictures and icons, the map has the potential to evolve with animations and visualized surroundings that present stories waiting for tourists.
                <br /><br />
                Unlike Google Maps or Apple Maps, which focus on providing information, Happ can offer more immersive storytelling through animations or inviting illustrations. This could be achieved by using LLM to generate illustrations based on reviews already shared on Happ. A visually enhanced map would spark users’ curiosity, encouraging longer engagement with the app.
                </p>
                 
                <img
                    src={require("../../image/work_TravelOffline/idea2_question.png")}
                    alt=""
                />
                <img
                    src={require("../../image/work_TravelOffline/idea2_answer.png")}
                    alt=""
                />
                 <p>
                Idea3<br />
                
                 
                 <strong>
                 Help user recover from negative-peak moments like "Can't find washroom".
                 </strong><br />
                 <br />
                 Based on the  <strong>End-Peak Rule </strong>, which states that <strong>users primarily remember the emotional peak of their experiences</strong>, creating an emotional connection to the product can be achieved by alleviating the negative peaks in their journey.
                 <br />
                 <br />
                 Happ can alleviate negative experiences, such as difficulty finding suitable washrooms, by offering detailed information and collaborating with restaurants and cafes to attract customers while sharing washroom locations. Once the community grows, local users can contribute washroom information, helping others and making Happ a valuable resource, even offline.
            
                </p>
                 
                <img
                    src={require("../../image/work_TravelOffline/idea3_question.png")}
                    alt=""
                />
                <img
                    src={require("../../image/work_TravelOffline/idea3_answer.png")}
                    alt=""
                />
            </div>
           
            
           

            <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This project was a valuable opportunity for me to strengthen my skill in analyzing the market from the aspect of the experience. Similar to how Snapchat gained its popularity through the story feature, user-experience can serve as a significant competitive advantage. Moving forward, I aim to brush up on my ideas and also develop effective marketing strategies.</p>
            </div>
         <hr />
           
        </main>

    
        <Footer />
    </div>
 </div>
    

    

  );
};

export default TravelOffline;