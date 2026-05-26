import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import worksData from '../../object/WorksData';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';



const Lettura = () => {
    
  const indexNumber = 0

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
               Problem<br />
                <strong>Attracting college students to an online study community without incurring any promotion fees.</strong>
               
              
               </p>

               <p>
               Solution<br />
               <strong>Designing the new creative strategies and advertising images to share on Instagram. </strong>            
               </p>
                 

           </div> 
           
                 

     
            <hr />
           <div className='divMedium'>
                <img
                    src={require("../../image/work_Lettura/lettura_photo.jpeg")}
                    alt=""
                />
                <h2>Backgrounds</h2>
                
                <p>
                Lettura is an online community for university students. In this community people share activities such as reading books and share thoughts, working together online in the early morning. The goal of this project was to rebrand this community and invite 60+ people to this community. This work showcases my ability as designer and marketer.                </p>
                
            </div>

            <div className='divMedium'>
            

                <h2>Visual Identity</h2>
                
                <p>
                Setting the theme to active and healthy, I designed this visual identity that is consist of 4 colors. The logo represents a 3 month calendar which means one term of the community and each color represent out activities. I chose a calendar since it also generates mood of community since it is consist of many pieces.
                </p>
                <p>Old Logo  </p>
                <img 
                    src={require("../../image/work_Lettura/oldlogo.jpg")}
                    alt=""
                />
                <p>New Logo  </p>

                <img
                    src={require("../../image/work_Lettura/visual identity@3x-100.jpg")}
                    alt=""
                />
                
            </div>

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
               
                <h2>Website Development</h2>
                
                <p>
                I created one landing page where users can register for the new enrollment of the community. To emphasize the brand identity, I used brand colours over the pages to give the intended impression.                  </p>
                  
                  <img
                    src={require("../../image/work_Lettura/p4@3x-100.jpg")}
                    alt=""
                />
                
            </div>

            <div className='divMedium'>
               
                <h2>Graphics</h2>
                
                <p>
                I created graphics that communicate the brand messages. They are used in the promotion on Instagram and online activities such as virtual backgrounds on video platforms. I chose this style since it appeals to our target audience which is female university students.                   </p>

                  <img
                    src={require("../../image/work_Lettura/graphics@3x-100.jpg")}
                    alt=""
                />
                  
                
            </div>

            <div className='divMedium'>
                
                <h2>Marketing</h2>
                
                <p>
                In this project, I also planned marketing strategy based on the our persona.<br />

                1. I set the goal to inviting 60 new   people.<br />

                2. I planned two methods, referral and advertising on Instagram, just using 3 accounts of ours.<br />

                3. I created journey map that tells scenario of how users reach and join the community.<br />

                4. For the social media advertising, I created a guideline for what to tell based on AIDMA model.<br />
                 </p>
                 <img src={require("../../image/work_Lettura/Artboard 4@75x-20.jpg")} alt=""/>
                 <img src={require("../../image/work_Lettura/Artboard 5@75x-20.jpg")} alt=""/>
                <img src={require("../../image/work_Lettura/Artboard 10@75x-20.jpg")} alt=""/>
                <img src={require("../../image/work_Lettura/Artboard 11@75x-20.jpg")} alt=""/>
                <img src={require("../../image/work_Lettura/Artboard 12@75x-20.jpg")} alt=""/>
                
            </div>
            <div className='divMedium'>
                <img
                    src={require("../../image/work_Lettura/lettura_photo.jpeg")}
                    alt=""
                />
                <h2>Impact</h2>
                
                <p>
                After this branding and marketing implementation, the community welcomed 60 new people which is 6 times more members than before via the Instagram channel with no promotion fees. My work contributed greatly to picturing and creating the path to new stages of this community.                </p>
                
            </div>

            <hr />
            <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    Through this project, I found my ability to maximize the marketing effort based on both knowledge of branding and marketing.                  </p>
            </div>
         <hr />
        </main>
        

    
        <Footer />
    </div>
 </div>
    

    

  );
};

export default Lettura;