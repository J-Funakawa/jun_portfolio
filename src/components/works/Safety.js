import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import worksData from '../../object/WorksData';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';



const Safety = () => {
    
  const indexNumber = 0

  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
        <WorkTopSection indexNum="2" />
        <main>
        <hr />
            
            <div className='divMedium'>
            
               
               <p>
               Problem
               <br />
                <strong> Female college students have bare control in their safety. </strong>
               
              
               </p>

               <p>
               Solution
               <br />
               <strong>Security-on-board Train and an App to notify its arrival time. </strong>            
               </p>
                 

           </div> 
           
            <hr />
            <div className='divMedium'>
            
               
            <h2>Background</h2>
                
                <p>
           
                As a part of the design research class, I have conducted a survey and diary study to understand young, female people's experience in commuting. We conducted research with the premise of creating an app to address issues discovered through the research process.
                </p>
         
              

        </div> 
            <div className='divMedium'>
                
                <h2>Discover</h2>
                
                <p>
           
We held focus group research within the class and developed the hypothesis below. The purpose of this research was to validate this hypothesis and find appropriate features for the new app by understanding the experience in high resolution. For this, we have picked survey and diary study as research methods.
                </p>
                <img
                    src={require("../../image/work_Safety/DiaryStudy/Hypothesis.jpeg")}
                    alt=""
                />
                <p>
                We have developed a persona of female university students who often use the subway and mainly suffer from anti-social behaviour in transportation.
                </p>
                <img
                    src={require("../../image/work_Safety/DiaryStudy/Persona.jpeg")}
                    alt=""
                />
              
            </div>
           <div className='divMedium'>
                
                <h2>1. Survey</h2>
                
                <p>
                First, we conducted the survey. In this research, I have asked following topics.
                 <br/ >
                <strong>1. When they feel unsafe</strong>
                <br/ >
                <strong>2. Why they feel unsafe</strong>
                <br/ >
                <strong>3. What features are demanded in those situations.</strong>
                </p>
                <img
                    src={require("../../image/work_Safety/Survey/Methods.jpeg")}
                    alt=""
                />
                <img
                    src={require("../../image/work_Safety/Survey/Choices.jpeg")}
                    alt=""
                />
            </div>

            <div className='divMedium'>
                
    
                
                 <p>
                Finding 1<br />
                 <strong>
                    Over 70% of the reason they feel unsafe was related to the confrontation with anti-social behaviour and the appearance of a suspicious person. 
                 </strong>
                </p>
                <img
                    src={require("../../image/work_Safety/Survey/Findings2.jpeg")}
                    alt=""
                />
                <p>
                Finding 2<br />
                
                 
                 <strong>
                    Persona don't know if they should leave or stay, so they ask for help to family and friends. 
                 </strong><br />
                 The most demanded feature was notifying close contacts about their situation followed by calling someone close contacts.
                  This result indicates that people are looking for instant help from significant others. Also, it is possible to assume that the persona is not sure what to do. Leaving the area seems to be an obvious reaction but they prefer to ask others for help.
            
                </p>
                 
                <img
                    src={require("../../image/work_Safety/Survey/Findings3.jpeg")}
                    alt=""
                />
            </div>
           
            
            <div className='divMedium'>
                
                <h2>2. Diary Study</h2>
                
                <p>
                After the survey, I conducted a diary study. Diary study helps us understand the experience over time. Users travel to different locations depending on the day, and so is their safety.  
                </p>
                <img
                    src={require("../../image/work_Safety/DiaryStudy/Method.jpeg")}
                    alt=""
                />
            
                
            </div>

            <div className='divMedium'>
                
              
                <p>Finding 3<br />
                <strong> Users have bare control of their safety. </strong>
                <br />
                After ten days, I compared all the data collected and created one journey map so all the pain points were visualized in one map. Analyzing the data, I found out that the anxiety and stress while commuting come from unexpected factors and lack of precaution. Reducing the sudden thread takes time and money, but enforcing control of their safety may provide a better experience. 
                <br />    <br />

                </p>
                
                
            </div>
            <img className='divImg'
                    src={require("../../image/work_Safety/DiaryStudy/Journey Map.jpeg")}
                    alt=""
                />

            <div className='divMedium'>
                
                <h2>Solution</h2>
                
                <p>
                <strong>Security-on-board Train and an App to notify its arrival time.</strong><br />
                I suggested a subway with security person on board. Since it is not possible to have security person in all train, I also suggested an app to notify its arrival time to users so users can have more control over their safety.
                <br />    
                </p>
                <img
                    src={require("../../image/work_Safety/DiaryStudy/Recommendation2.jpeg")}
                    alt=""
                />
                <img
                    src={require("../../image/work_Safety/DiaryStudy/Recommendation.jpg")}
                    alt=""
                />
                
            </div>

            <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    In this project, I believe that I was able to analyze the quantitative data from a different perspective so I can synthesize the problem definition from the data. Because the sample was small, I couldn't validate my findings. I would like to collect enough sample sizes next time.  
                 </p>
            </div>
         <hr />
           
        </main>

    
        <Footer />
    </div>
 </div>
    

    

  );
};

export default Safety;