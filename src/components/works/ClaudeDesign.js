import React from 'react';
import Navigation from '../../function/Navigation';
import BackButton from '../../function/BackButton';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';




const ClaudeDesign = () => {
  return (
  <div>
    <Navigation />
    <BackButton />

    <div className="pagePicSpace">
        <div className="topSection">
        <WorkTopSection indexNum="7" />
        </div>
        <main>
        <hr />
        <div className='divMedium'>

               <p>
               Problem<br />
                <strong>The team lacked a front-end developer resource to implement the high level design system. </strong>
               </p>

               <p>
               Solution<br />
               <strong>Incorporate Claude Design in the design process to streamline design hand off.</strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <ul>
                        <li>Commissions needed a strong design system to achieve sophisticated experience and establish the brand. However, the team had to give up the complex design system since the team lacked a front end developer.</li>
                        <li>The team had to compromise implementation of an advanced design system since the team was constrained with two backend developers. As a designer, I took leadership to address this situation to solve the problem using the AI prototyping method.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Research.</h2>
                    <p>
                    AI can do anything. But first, I needed to understand our team's needs to correctly leverage AI's potential and evaluate its value.
                    </p>
                    <p>
                    I asked developers and product managers to understand the impediments to define the job of team members.
                    </p>
                    <p>
                    <strong>Backend Developper</strong>
                    </p>
                    <ul>
                        <li>I don't have a knowledge of the frontend to implement UI that requires large refactoring, animation. </li>
                        <li>Job: Implement UI following design handed off from users</li>
                        <li>Impediments: Don't have time to implement high level UI as scope largely expands for him</li>
                    </ul>
                    <p>
                    <strong>Designer's job</strong>
                    </p>
                    <ul>
                        <li>I want to prototype the concept in high fidelity to evaluate the design</li>
                        <li>I want to conduct usability testing using the prototype</li>
                        <li>I want to document the spec of UI as detail as possible without spending extra time for documentation</li>
                        <li>I want to hand off the design to the developer without taking developer's time. </li>
                        <li>Job: Create high fidelity prototype</li>
                        <li>Job: Get feedbacks using high fidelity prototype</li>
                        <li>Job: Document UI specs precisely</li>
                        <li>Job Handoff design without taking developper's time.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Design</h2>
                    <ul>
                        <li>I explored several tools to find the solution that fulfills all jobs raised in the team.</li>
                        <li>I established a method leveraging cloud design capabilities.</li>
                        <li>As a result the prototyping -&gt; Documentation -&gt; Handoff speed has been significantly decreased.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>1.Setup</h2>
                    <p>
                    <strong>Converted Local repository to the base of prototype</strong>
                    </p>
                    <ul>
                        <li>Claude design can read local code. I input the copy of production code on my local laptop to Claude Design. </li>
                        <li>Claude Design recreates the screen accurately so the design doesn't need to recreate the screen on figma. </li>
                        <li>Design can prepare a prototype environment quickly.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>2. Prototype</h2>
                    <ul>
                        <li>Firstly,  sketch out ideas in my sketch book. </li>
                        <li>Once design is confirmed, I prompt AI to generate the new screen on top of a copy of the production UI.</li>
                        <li>Claude Design AI will utilize the predefined design system and create a prototype quickly</li>
                        <li>If it's faster to use figma, create components in Figma and input to Claude Design</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>3. Review &amp; Refine</h2>
                    <ul>
                        <li>The claude design let users to share prototype internally</li>
                        <li>The designer utilizes edit tool to make tweaks to generated AI</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>4. Test</h2>
                    <ul>
                        <li>Download standalone HTML from Claude Design</li>
                        <li>Upload the project to Vercel platform.</li>
                        <li>Test with users</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>5. Document</h2>
                    <ul>
                        <li>Plan component architecture</li>
                        <li>Created a customized skill which included detailed instructions on generating documentation about selected components or views in the prototype.
                            <ul>
                                <li>Architecture</li>
                                <li>Style instructions component by component
                                    <ul>
                                        <li>Tokens</li>
                                    </ul>
                                </li>
                                <li>Spacing</li>
                                <li>Behavior instructions</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                    -&gt; The AI will generate a detailed documentation without taking designers time.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>6. Hand off</h2>
                    <ul>
                        <li>Created a customized skill to convert documentation to md file. </li>
                        <li>This md file states the acceptance criteria on the interface. </li>
                        <li>The backend developer attached this md file to their AI agent in the coding environment. The AI agent implements the interface utilizing design system tokens. Since the Claude Design and Production environment shares the same design system tokens, AI agents implement the UI with fairly high accuracy without taking developer's time.</li>
                    </ul>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>The result</h2>
                    <p>
                    This process of innovation empowered single designers to conduct a high-level design delivery that used to be done by a team of designers. Designers, developers, and qa continuously collaborate to find the flaw in the design and the room for improvement.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Reflections</h2>
                    <p>
                    I believe in AI as a tool for the design method, however I still value collaboration between designers and developers.  It empowered a small team to produce a high quality design and focus on the area where their expertise shines. Yet, we're the ones who define what the good design is for users. Having multiple designers and developers collaborate is still necessary to achieve a good design universally appreciated.
                    </p>
           </div>
         <hr />
        </main>
        <Footer />
    </div>
 </div>

  );
};

export default ClaudeDesign;
