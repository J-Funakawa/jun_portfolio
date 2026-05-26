import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';




const EdenStory = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
        <div className="topSection">
        <WorkTopSection indexNum="3" />
        </div>
        <main>
        <hr />
        <div className='divMedium'>
            
               
               <p>
               Problem<br />
                <strong>Newcomers may struggle to grasp that current members share common reasons for using the food bank.</strong>
               </p>

               <p>
               Solution<br />
               <strong>Sharing stories of current members in their languages on Instagram. </strong>            
               </p>
                 

           </div> 
           <hr />
           <div className='divMedium'>
                    <h2>Discover</h2>
                    <p> 
                    Eden food for change is a food bank in Mississauga. As a part of a service design project, I designed the first time user’s experience, especially for non-English speakers. The goal of this project was to remove the emotional pain they face before the first-visit, such as hesitation to use the foodbank themselves for using the foodbank.
                    </p>
                </div>
           
            
           
            
           <div className='divMedium'>
                <p>
                Findings about members<br />
<strong>1. Some people mentally punish themselves before visiting the food bank for the first time.</strong>
 <br />
2. Over 80% of members are mobile users.<br />
3. Major non-english speakers speak Ukrainian, Turkish, Arabic, Chinese, Urdu and Spanish.<br />

                </p>
                <p>
              Findings about the food bank
                <strong></strong><br />
<strong>1. The donation is not consistent and the manager has to order food one time of the year.</strong> <br />
2. Currently social media is targeted to the existing members and donors.<br />
3. Eden has one person for editing the website, and 1 person for social media.<br />
                </p>

                <img
                   src={require("../../image/work_EdenStory/food.png")}
                   alt=""
                  />
                  <img
                   src={require("../../image/work_EdenStory/site-visit.jpg")}
                   alt=""
                  />
                
            </div>
      

            <div className='divMedium'>
                
                <p>
                Putting together the research findings, I have created the persona and journey map to understand the target audience and  organize the stakeholders' problems.          
                </p>

                <img
                    src={require("../../image/work_EdenStory/persona.jpg")}
                    alt=""
                />
            </div>

            <img className='divImg'
                    src={require("../../image//work_EdenStory/service-blue-print.jpg")}
                    alt=""
                />

<div className='divMedium'>
                   
<h2>Problem Definition</h2>
                <p>
                Based on the research, I have developed following hypothesis.<br />
                </p>
                <p>
                    <strong>Newcomers may struggle to grasp that current members share common reasons for using the food bank.





</strong>

                </p>
                <p>
                    
The type of members can be anything, from international students to refugees. However, it is not easy for first time users to imagine that there are current members who share common context to use the food bank. Understanding the demographic and story behind it may prevent them from putting pressures on themselves.
<br />
<br />
<strong>Clearer understanding of current members' situations will ease the insecurity of first time members. </strong>
                </p>
                <img
                    src={require("../../image/work_EdenStory/persona.jpg")}
                    alt=""
                />
            </div>

            <div className='divMedium'>
               
                <h2>Solution</h2>
               <p> 
                <strong>Sharing stories of current members in their languages on Instagram.</strong>
                </p>
                <p>
                
                As a solution, I came up with the Instagram/Website content that shares the stories of current members and donors.  This content also shares important information and next action so it can be a good trigger to encourage them using the foodbank.
                </p>

                  
                  <img
                    src={require("../../image/work_EdenStory/slides/title.jpg")}
                    alt=""
                />
                <p>
                Our persona is a mobile phone user who visits websites and instagram to find information so they can picture themselves as a new member. Understanding the context of current members helps them think they are welcomed.
                  </p>
                <img
                    src={require("../../image/work_EdenStory/slides/Benefits.jpg")}
                    alt=""
                />
                 <p>
                 <strong>Page 1</strong><br />
                 The face of all posts will be the story of the current members written in their languages with the flags of origin. This is for non-english speakers to easily find the story of their kind while scrolling.                   </p>
                  <img
                    src={require("../../image/work_EdenStory/slides/page1.jpg")}
                    alt=""
                />
               
                 <p>
                 <strong>Page 2</strong><br />
                 On the second page, viewers will find the same story as page 1, but translated to English. This is for donors who mainly speak English. 
                  </p>
                <img
                    src={require("../../image/work_EdenStory/slides/page2.jpg")}
                    alt=""
                />
                 <p>
                 <strong>Page 3</strong><br />
                 The third page will communicate how Eden food bank will welcome all kinds of people providing examples. It will be written in two different languages so non-english speakers can experience the welcomeness.                   </p>
                <img
                    src={require("../../image/work_EdenStory/slides/page3.jpg")}
                    alt=""
                />
                 <p>
                 <strong>Page 4</strong><br />
                 Eden does not require any documents to register, but some people still bring it. Having the caution message on the page 4 will prevent them from wasting their time looking for the unnecessary documents.
                 </p>
                <img
                    src={require("../../image/work_EdenStory/slides/page4.jpg")}
                    alt=""
                />
                 <p>
                 <strong>Page 5</strong><br />
                 The final picture explains what to do next to use the food bank. Since the new member will be directed to visit the nearby food bank on the food bank map, it will guide them to find one close to them.                  </p>
                <img
                    src={require("../../image/work_EdenStory/slides/page5.jpg")}
                    alt=""
                />
                
            </div>
           
            <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    Even though the primary objective of this project was to ease the emotional pain of the first time, I also aimed to make it beneficial to the food bank by encouraging more donations. I was able to practice the service design that is mutually beneficial to both service users and owners. 
                </p>
            </div>
         <hr />
        </main>
        <Footer />
    </div>
 </div>
    

    

  );
};

export default EdenStory;