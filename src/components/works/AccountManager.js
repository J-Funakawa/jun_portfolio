import React from 'react';
import WorkIndex from '../../function/WorkIndex';
import Navigation from '../../function/Navigation';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';



const AccountManager = () => {
  return (
  <div>
    <Navigation />
    <a  id = "backButton"  href="../workhome"><img src={require("../../image/work_01/backbutton@4x.png")} /></a>

    <div className="pagePicSpace">
 
        <WorkTopSection indexNum="5" />
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
             <strong>Keeping track of personal finances gets complicated as accounts and cards increase. </strong>
            
           
            </p>

            <p>
            Solution<br />
            <strong>A software to manage personal finance by linking all cards from different banks.</strong>            
            </p>
              

        </div> 
         <hr />
           <div className='divMedium'>

            
                <h2>1. Discover</h2>
                <p>
                I identified the complexity of tracking expenses, incomes, and upcoming payments across different bank accounts and websites, which made personal finance management cumbersome and time-consuming.
                </p>
                <img
                    src={require("../../image/work_AccountManager/Mockups.jpg")}
                    alt=""
                    className="imgScreen"
                />
              
                
            </div>

            <div className='divMedium'>
                
                <h2>2. Ideation</h2>
                
                <p>
                I added functionality to visualize upcoming incomes and expenses, such as household bills. Additionally, I incorporated a categorization feature that allows users to see the breakdown of their expenses by category, like housing or dining, to better understand their spending habits.
                <br></br>
                <br></br><strong>• Pages for monthly and upcoming expenses, income, and budget control.</strong>
<br></br><strong>• Created an "All Account" page to consolidate multiple bank accounts for comprehensive oversight.</strong>
<br></br><strong>• Included visualization of upcoming incomes and expenses, such as household bills.</strong>
<br></br><strong>• Incorporated a categorization feature to analyze expenses by categories like housing and dining.</strong>

                </p>

                <img
                    src={require("../../image/work_AccountManager/IA_ver1.png")}
                    alt=""
                />
                
                
            </div>

            {/* <div className='hr'></div> */}
            <div className='divMedium'>
               
                <h2>3. Sketch and Prototype</h2>
                
                <p>
               I created multiple sketches to test various layout designs and ensured software usability and functionality across different screens, minimizing later development issues.
                </p>
                  
                <img
                    src={require("../../image/work_AccountManager/IA_ver2.png")}
                    alt=""
                />
            </div>
           

            <div className='divMedium'>
               
                <h2>4. Mockup</h2>
                
        
                
                <p>
                • Ensured clarity in identifying expenses and incomes by color-coding data in separate sections.
                </p>

                <p>
                • Incorporated images of cards to facilitate instant recognition of associated accounts, promoting faster cognitive recognition and usability.
        
                </p>

        
        
        
        

                  <img
                    src={require("../../image/work_AccountManager/Overview_allaccount.jpg")}
                    alt=""
                    className="imgScreen"
                />
 <img
                    src={require("../../image/work_AccountManager/Overview_CIBC.jpg")}
                    alt=""
                    className="imgScreen"
                  
                />
                  
                
            </div>
            <div className='divMedium'>

            
<h2>Reflection</h2>
<p>
Iterating through multiple sketches and layout versions before development significantly improved the software's quality and user-friendliness, emphasizing the importance of thorough quality assurance and iterative design practices.
</p>



</div>

         <hr />
        </main>
  

        <Footer />
    </div>
 </div>
    

    

  );
};

export default AccountManager;