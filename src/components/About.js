import React from 'react';
import WorkIndex from '../function/WorkIndex';
import Navigation from '../function/Navigation';
import '../css/WorkGlobal.css';
import '../css/About.css';
import WorkTopSection from '../function/ WorkTopSection';
import Footer from '../function/Footer';



const About = () => {
  return (
  <div>
        <Navigation />
        <a  id = "backButton"  href="../workhome"><img src={require("./../image/work_01/backbutton@4x.png")} /></a>
    

  <div className="pagePicSpace">
 
           <WorkTopSection indexNum="7" />

      <main className='aboutMain'>

            


            <div className='divMedium'>
                
                <h2>Background</h2>
                
                <p>
               <strong>A strong curiosity has led me to various creations and skills.</strong><br />
               Prior to discovering my path as a service designer, I consistently engaged in both individual and collaborative creation through hackathons, competitions, and school. New ideas always required acquiring new skills, resulting in the accumulation of various experiences and skills.
                </p>

               
               

                 <img
                        src={require("./../image/about/works.jpg")}
                        alt=""
                    />
            </div>
            <div class="outerContainer">
      

                <div class="innerContainer" id="innerContainer2">
                    <h3>UX Design</h3>
                    <p>• Adobe XD</p>
                    <p>• Figma</p>
                </div>

                <div class="innerContainer" id="innerContainer3">
                    <h3>Graphic Design</h3>
                    <p>• Adobe Illustrator</p>
                    <p>• Adobe Photoshop</p>
                </div>

                <div class="innerContainer" id="innerContainer4">
                    <h3>Video Editing</h3>
                    <p>• Adobe After Effect</p>
                    <p>• Adobe Adobe Premiere Pro</p>
                </div>

                <div class="innerContainer" id="innerContainer5">
                    <h3>Coding</h3>
                    <p>• HTML</p>
                    <p>• CSS</p>
                    <p>• Java Script</p>
                </div>
            </div>
         

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
                <h2>Goal</h2>
                
                <p>
                <strong> Innovating a service with a strong brand and unique experience.</strong><br />
               
Having explored a range of designs, I've come to realize that the heart of my creative aspirations is in crafting complete experiences. Moving forward, my objective is to pioneer unique experiences akin to Airbnb, leveraging my accumulated background to refine and enhance the overall experience.
                </p>
               
                
            </div>
            <div className='divMedium'>
                <h2>Person</h2>
                <p><strong>"Jun Funakawa is a curious, hard-working and methodological person."</strong>
                <br />
                - Yvonne Shek (Professor at Humber College)
                </p>
                <p>
                My life has been driven by curiosity, constantly questioning why things are the way they are. I find the richness of life in creating things that have never existed before, with excitement and anticipation.                </p>
                
             
                 <img
                  src={require("./../image/about/profile.jpeg")}
                  alt=""
                />

            </div>
            <div class="outerContainer">
  
        
                <div class="innerContainer" id="innerContainer4">
                    <h3>Interest</h3>
                    <p>• Branding</p>
                    <p>• Product Management</p>
                    <p>• Phycology</p>
                    <p>• Innovation</p>
                </div>

                <div class="innerContainer" id="innerContainer5">
                    <h3>Personality</h3>
                    <p>• Responsible</p>
                    <p>• Open</p>
                    <p>• Organized</p>
                    <p>• Collaborative</p>
                </div>
            </div>
            <div className='divMedium'>
                <h2>As a Service Designer</h2>
               
                <p>
               
                <strong> Having practiced design thinking for 8 years, my passion lies in problem-solving, particularly in the discovery of problems. </strong><br />
             <br />
             I approach service design holistically, drawing on my background in graphic design and business development to assess services and products comprehensively, spanning from visual elements to core values. Yet, my profound concern lies in accurately defining problems through thorough research.
                             </p>
               
              
               
                <img
                  src={require("./../image/work_RefreshBar/concept.jpg")}
                  alt=""
                />
                
            </div>
            <div class="outerContainer">
              <div class="innerContainer" id="innerContainer1">
                  <h3>Education</h3>
                  <p>Humber College 
                  <br />Bachelor of Design
                  <br />(User Experience/Service Design) 
                  <br /> 2021-2025
                  <br />Toronto, Canada</p>
              </div>

              <div class="innerContainer" id="innerContainer2">
                  <h3>Internship 1</h3>
                  <p>Service Designer
                  <br />CURIOSCHOOL (Tokyo, Japan)
                  <br />Mar 2018 - Dec 2019 (1 year 10 months)
                  <br />Tokyo, Japan</p>
            
              </div>

              <div class="innerContainer" id="innerContainer3">
                  <h3>Internship 2</h3>
                  <p>Graphic Designer
                  <br />ActsDesignHaus
                  <br />Mar 2019 - Jul 2019 (5 months)
                  <br />Tokyo, Japan</p>
                </div>

                <div class="innerContainer" id="innerContainer3">
                  <h3>Internship 3</h3>
                  <p>Service Designer / Business Development
                  <br />80&Company
                  <br />Jun 2023 - Present/Feb 2024 (8 months)
                  <br />Kyoto, Japan (Remotely from Canada)</p>
                </div>
             </div>


          
       


            
        </main>
      
    
      </div>
 
      <Footer />
  </div>
  );
};

export default About;