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
                <strong>The design was almost impossible to implement due to the lack of frontend developer. </strong>
               </p>

               <p>
               Solution<br />
               <strong>Incorporate Claude Design in the design process to streamline design to implementation.</strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <p>
                    Traditionally, it is common to compromise the quality of design when the tech team faces the tradeoff of the time and the quality. In this case, the team was missing the front-end developer who can implement the interface, only a designer and a backend developer. This made it almost impossible to implement quality design to begin with. To address this situation, I took a lead to reimagine the design process and implementation process using the latest AI design tools.
                    </p>
                    <ul>
                        <li><strong>Goal 1: Maximize single designer's capability and efficiency. </strong></li>
                        <li><strong>Goal 2: Hand off the design to backend developers and implement without taking their time.</strong></li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Research</h2>
                    <p>
                    <strong>FIrstly I investigated the jobs-to-be-done of team members,</strong> in this case the designer, me, and the developer.
                    </p>
                    <p>
                    <strong>Product Manager</strong>
                    </p>
                    <ul>
                        <li>Job:  Collect valuable insights through usability tests.</li>
                        <li>"I want to conduct a usability test with a functional prototype to reveal hidden pain points and mismatch to users' workflow."</li>
                    </ul>
                    <p>
                    <strong>Backend Developer</strong>
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
                        <li>Job: Get feedback using high fidelity prototype</li>
                        <li>Job: Document UI specs precisely</li>
                        <li>Job: Handoff design without taking developer's time.</li>
                    </ul>
                    <p>
                    Secondly, I created the conceptual model of Prototyping to understand the type of prototyping to identify the area AI can benefit the designer and other stakeholders by completing the job more efficiently than traditional methods such as using Figma.
                    </p>
                    <img
                        src={require("../../image/work_ClaudeDesign/conceptual_model.png")}
                        alt="Conceptual model of prototyping"
                    />
           </div>

           <div className='divMedium'>
                    <h2>Design</h2>
                    <p>
                    I explored several tools to find the solution that fulfills all jobs raised in the team. As a result, we achieved the following tasks using Claude Design's capability.
                    </p>
                    <ul>
                        <li>Prototype high-fidelity mockup</li>
                        <li>Creating design system</li>
                        <li>Document the component specs</li>
                        <li>Handoff the detail spec sheet to AI agent on dev environment</li>
                    </ul>
                    <p>
                    <strong>Here's the reimagined design process.</strong>
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>1. Research-to-Design</h2>
                    <ol>
                        <li>Conduct research</li>
                        <li>Synthesize finding</li>
                        <li>Sketch out interface ideas. </li>
                    </ol>
           </div>

           <div className='divMedium'>
                    <h2>2. Setup foundation</h2>
                    <p>
                    Convert front-end files to local repository to install current screen to Claude Design. Claude Design can read local code. I input the non-proprietary, front-end related files to Claude Design to prototype the selected module. Claude Design recreates the screen accurately so the designer doesn't need to spend time making it look similar to production design. <strong>Saved 1-3 hours of designer's time.</strong>
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>3. Prototype functions</h2>
                    <p>
                    Once design is confirmed on sketchbook, I prompt AI to generate the new workflow using a predefined design system. If it's faster to use Figma in some cases, such as designing a component, I design in Figma and input to Claude Design.
                    </p>
                    <ul>
                        <li><strong>Before: A week to create low function mockup on Figma</strong></li>
                        <li><strong>After: 1 day to create a mockup with full functionality ready for user testing.</strong></li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>4. Review &amp; Refine</h2>
                    <p>
                    Claude Design lets users share prototype internally. The designer utilizes edit tool to make tweaks to generated design. Tweaking and applying improvements is much faster especially when the feedback leads to drastic updates.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>5. Test</h2>
                    <p>
                    Download standalone HTML of the prototype from Claude Design. Upload the project to static hosting platforms so it will be on the live link. Conduct usability test with clients.
                    </p>
                    <p>
                    <strong>A single designer can deploy the highly functional prototype and share it with clients for testing in 5 minutes.</strong>
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>6. Document</h2>
                    <p>
                    Use customized skills for documentation which includes detailed instructions on generating documentation. With this skill, Claude Design can:
                    </p>
                    <ul>
                        <li>document all specs of the component or views without taking designer's time.</li>
                        <li>add visual explanation if necessary</li>
                        <li>assign tokens</li>
                    </ul>
                    <p>
                    The developer and QA will be able to understand the requirement with detailed instructions.
                    </p>
                    <p>
                    <strong>Before: 2-5 days<br />
                    After: 1-3 hours (Well detailed, no compromise on documentation quality)</strong>
                    </p>
                    <img
                        src={require("../../image/work_ClaudeDesign/documentation.png")}
                        alt="Generated component documentation"
                    />
           </div>

           <div className='divMedium'>
                    <h2>7. Hand off</h2>
                    <p>
                    Use customized skills that can convert documentation to md files. The backend developer attached this md file to their AI agent in the coding environment. The AI agent implements the interface utilizing design system tokens. Since the Claude Design and Production environment shares the same design system tokens, AI agents implement the UI with fairly high accuracy without taking developer's time.
                    </p>
                    <p>
                    The team of backend developers and a designer can implement advanced design to production code in a day.
                    </p>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>Reflections</h2>
                    <p>
                    This design process innovation empowered a single designer and backend developer to execute high-level design implementation that required budgets and resources that small companies and the teams don't usually have. I believe in AI as a tool that gives more options to professionals on what to focus on to maximize the value in a given time. <strong>However, I still value collaboration between designers and developers.  Humans remain the ones who define what the good design is for users.</strong> Having multiple designers and developers collaborate is still necessary to achieve a good design universally appreciated.
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
