import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import WorkTopSection from '../../function/ WorkTopSection';
import Navigation from '../../function/Navigation';
import Footer from '../../function/Footer';




const HamoriHarmony = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
        
        <WorkTopSection indexNum="5" />
        <main>
        <hr />
    
        <div className='divMedium'>
            
               
               <p>
               Problem<br />
                <strong> Effective communication in hackathons relies on teammates forming strong bonds to encourage genuine expression of their thoughts and feelings. </strong>
               
              
               </p>

               <p>
               Solution<br />
               <strong>
An icebreaker that creates the experience of harmonizing voices by responding to a question with answers simultaneously.</strong>            
               </p>
                 

           </div> 
        <hr />
           <div className='divMedium'>
                <img
                    src={require("../../image/work_HamoriHarmony/top_icebreaker.jpg")}
                    alt=""
                />
                <h2>Background</h2>
                
                <p>
                Hamori-Harmony is the card game I created for the icebreaker of a
                workshop. It encourages people to open up to one another and start
                conversating and working together. While designing this product, we
                have raised enough money to begin production through crowdfunding.
                Please review the design process and overall success of this project.
                </p>
                
            </div>
            <div className='divMedium'>
                <img
                    src={require("../../image/work_HamoriHarmony/workshop_3.jpg")}
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


            <div className='divMedium'>
                
                <h2>How it works</h2>
                
                <p>
                Setting the theme to active and healthy, I designed this visual identity that is consist of 4 colors. The logo represents a 3 month calendar which means one term of the community and each color represent out activities. I chose a calendar since it also generates mood of community since it is consist of many pieces.
                </p>

                <img
                    src={require("../../image/work_HamoriHarmony/concept_howitworks.jpg")}
                    alt=""
                />
                <img
                    src={require("../../image/work_HamoriHarmony/concept_outcome.jpg")}
                    alt=""
                />
                
            </div>

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
               
                <h2>Development</h2>
                
                <p>
                Questions on the card are divided into a three-level, “easy” with two or three possible answers, “normal” with four to ten possible answers, and “miracle” with infinite possible answers. In addition to the difference in the number of possible answers, I designed the type of questions into five major categories.                  </p>
                  
                  <img
                    src={require("../../image/work_HamoriHarmony/typeofquestion.jpg")}
                    alt=""
                />
                
            </div>
             <div className='divLarge'>
                <div className='divSmall'>
                        <h2>1st Protorype</h2>
                        <img
                        src={require("../../image/work_HamoriHarmony/card_1.jpg")}
                        alt=""
                    />
                        <p>Hamori-Harmony is the card game I created for the icebreaker of a
                    workshop. It encourages people to open up to one another and start
                    conversating and working together. </p>
                </div>
                <div className='divSmall'>
                        <h2>1st Protorype</h2>
                        <img
                        src={require("../../image/work_HamoriHarmony/card_2.jpg")}
                        alt=""
                    />
                        <p>Hamori-Harmony is the card game I created for the icebreaker of a
                    workshop. It encourages people to open up to one another and start
                    conversating and working together. </p>
                </div>
            </div>
            
            <div className='divMedium'>
               <h2>Final Product</h2>
               <p>
               Incorporating visual identity, I created single page responsive website where users can join the community, using no-code designing tool.              
                 </p>

                 <img
                   src={require("../../image/work_HamoriHarmony/finalproduct.jpg")}
                   alt=""
               />
               
           </div>

            <div className='divMedium'>
                <h2>Marketing</h2>
                <p>
                In this project, I also planned marketing strategy based on the our persona.<br />

                1. I set the goal to inviting 30 new   people.<br />

                2. I planned two methods, referral and advertising on Instagram, just using 3 accounts of ours.<br />

                3. I created journey map that tells scenario of how users reach and join the community.<br />

                4. For the social media advertising, I created a guideline for what to tell based on AIDMA model.<br />
                 </p>
            </div>


            <div className='divLarge'>
                <div className='divSmall'>
                    <h2>X(Twitter) account</h2>
                    <img
                   src={require("../../image/work_HamoriHarmony/twitter.jpg")}
                   alt=""
                  />
                    <a className="buttonLink" href="ttps://twitter.com/hamorihamony">
                    <h3>Open X</h3>
                    </a>
                </div>
                <div className='divSmall'>
                    <h2>Promotion Video</h2>
                    <img
                   src={require("../../image/work_HamoriHarmony/promotion-video.png")}
                   alt=""
                  />
                    <div>
                <a className="buttonLink" href="https://youtu.be/fRsfKeukhmc">
                <h3>Watch Video</h3>
                </a>
         </div>
      
            </div>
        </div>
        <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    One of the challenges of this project was marketing for the crowdfunding project. The methods are not practical to the target audience. What I could have done was meet more people in the community and involve them in creating a movement. This project led me to learn marketing and be successful in the Online Community project.   
                 </p>
            </div>
         <hr />
            
        </main>

       
        <Footer />
    </div>
 </div>
    

    

  );
};

export default HamoriHarmony;