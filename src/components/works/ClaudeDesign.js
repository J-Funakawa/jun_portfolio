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
                <strong>The design was almost impossible to implement because the team did not have a front-end developer.</strong>
               </p>

               <p>
               Solution<br />
               <strong>I reimagined our design-to-implementation process by incorporating Claude Design, enabling a single designer and backend developers to prototype, test, document, and implement high-quality interfaces with significantly less development effort.</strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <p>
                    When engineering resources are limited, teams often face a tradeoff between implementation time and design quality.
                    </p>
                    <p>
                    Our team faced an especially difficult version of this problem. We had one designer and two backend developers, but no front-end developer who could implement complex interfaces, animations, or significant front-end changes.
                    </p>
                    <p>
                    This meant that even if I created a high-quality design in Figma, implementing it could require significant additional work from backend developers. In practice, the lack of front-end resources limited what we could realistically design in the first place.
                    </p>
                    <p>
                    Instead of simply reducing the scope of the design, I explored whether emerging AI design and coding tools could change the way we worked.
                    </p>
                    <p>
                    I set two goals:
                    </p>
                    <ul>
                        <li><strong>Goal 1:</strong> Maximize the capability and efficiency of a single designer.</li>
                        <li><strong>Goal 2:</strong> Hand off designs in a way that minimizes the implementation work required from backend developers.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>How I Reimagined the Process</h2>
                    <p>
                    At a high level, I replaced the traditional workflow of designing static interfaces, documenting them manually, and asking developers to recreate them with a workflow centered around functional prototypes and shared code.
                    </p>
                    <p>
                    The new process was:
                    </p>
                    <p>
                    <strong>Research → Sketch → Build the foundation → Prototype → Review and refine → Test → Document → Hand off → Implement</strong>
                    </p>
                    <p>
                    Instead of treating design, documentation, and implementation as separate activities, I explored how Claude Design and coding agents could connect them.
                    </p>
                    <p>
                    The result was a workflow in which I could move from a sketch to a functional prototype, test it with users, generate detailed documentation, and hand it off in a format that an AI coding agent could use to support implementation.
                    </p>
                    <p>
                    Here is how I got there.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Research</h2>
                    <p>
                    <strong>Understanding What Each Team Member Actually Needed</strong>
                    </p>
                    <p>
                    Before choosing a tool, I investigated the jobs to be done across the team. I wanted to understand not only what each person was responsible for, but also what prevented them from doing their job efficiently.
                    </p>
                    <p>
                    <strong>Product Manager</strong>
                    </p>
                    <p>
                    The Product Manager needed to collect valuable insights through usability testing. Their goal was:
                    </p>
                    <p>
                    "I want to conduct a usability test with a functional prototype to reveal hidden pain points and mismatches with users' workflows."
                    </p>
                    <p>
                    A static mockup could communicate the visual design, but it was not always sufficient for evaluating complex workflows.
                    </p>
                    <p>
                    <strong>Backend Developers</strong>
                    </p>
                    <p>
                    The backend developers needed to implement the interface based on my designs, but they did not have the front-end expertise or time required for significant interface refactoring and animation.
                    </p>
                    <p>
                    Their job was to implement the interface according to the design handoff. Their primary impediment was that sophisticated interface work could significantly expand their scope and take time away from backend development.
                    </p>
                    <p>
                    <strong>My Role as the Designer</strong>
                    </p>
                    <p>
                    I identified four jobs that I needed the design process to support:
                    </p>
                    <ul>
                        <li>Create high-fidelity prototypes to evaluate design concepts.</li>
                        <li>Gather feedback through functional usability testing.</li>
                        <li>Document interface requirements precisely without spending days creating documentation manually.</li>
                        <li>Hand off designs without creating significant additional work for backend developers.</li>
                    </ul>
                    <p>
                    This made the underlying problem clearer. I did not simply need a faster way to create interfaces. I needed a process that could connect design, testing, documentation, and implementation while working within the constraints of our team.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Identifying Where AI Actually Helps</h2>
                    <p>
                    I then evaluated AI tools across different parts of the design process. I did not assume that AI would automatically make every task faster.
                    </p>
                    <p>
                    During experimentation, I found cases where AI prototyping was actually less efficient. Generated interfaces could contain errors, and correcting those errors could take longer than creating the design through traditional methods.
                    </p>
                    <p>
                    I also wanted to preserve low-fidelity prototyping. Sketching is valuable precisely because it allows ideas to remain flexible before time is invested in implementation.
                    </p>
                    <p>
                    Instead of asking, "How can I use AI for design?", I reframed the question:
                    </p>
                    <p>
                    <strong>At which stages of prototyping can AI complete the team's jobs more efficiently than traditional tools?</strong>
                    </p>
                    <p>
                    To answer this, I created a conceptual model of prototyping methods and compared where sketching, Figma, Claude Design, and direct code editing were most effective. This helped me identify where AI added meaningful value and where traditional design methods were still faster.
                    </p>
                    <img
                        src={require("../../image/work_ClaudeDesign/conceptual_model.png")}
                        alt="Conceptual model of prototyping methods"
                    />
           </div>

           <div className='divMedium'>
                    <h2>Testing Different Approaches</h2>
                    <p>
                    I explored several workflows, including editing local repositories directly using Claude Code. Through these experiments, I identified two additional requirements for our team.
                    </p>
                    <p>
                    <strong>Low Maintenance</strong>
                    </p>
                    <p>
                    Our team consisted of one designer and two backend developers. Tools such as Figma provide significant flexibility, but maintaining variables, components, tokens, and documentation can become a substantial responsibility for a single designer. I wanted the design system to remain useful without creating another system that required constant maintenance.
                    </p>
                    <p>
                    <strong>Low Learning Barrier</strong>
                    </p>
                    <p>
                    The company was not accustomed to working closely with designers. Instead of requiring everyone to understand a specialized design tool, I wanted to consolidate prototypes and documentation in an environment where team members could access the work and use an AI agent to understand the design intent.
                    </p>
                    <p>
                    These findings shaped the workflow I eventually adopted.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Design</h2>
                    <p>
                    After exploring several tools and approaches, I found that Claude Design could support four critical parts of our workflow:
                    </p>
                    <ul>
                        <li>Creating high-fidelity, functional prototypes.</li>
                        <li>Creating and applying a design system.</li>
                        <li>Documenting detailed component and interface requirements.</li>
                        <li>Preparing design documentation that coding agents could use during implementation.</li>
                    </ul>
                    <p>
                    I then redesigned our process around these capabilities.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>1. Research and Sketch</h2>
                    <p>
                    The process still begins with traditional design work. I conduct research, synthesize findings, and sketch interface ideas before generating high-fidelity prototypes.
                    </p>
                    <p>
                    This is intentional. AI is useful for accelerating execution, but I still use low-fidelity sketches to explore ideas quickly and decide what should actually be built. Only after I have selected a direction do I move into Claude Design.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>2. Build the Foundation</h2>
                    <p>
                    Instead of rebuilding the existing product manually in Figma, I provide Claude Design with the relevant non-proprietary front-end files from our local repository.
                    </p>
                    <p>
                    Because Claude Design can interpret the existing front-end code, it can recreate the current interface and establish a realistic foundation for prototyping. This means I do not need to spend hours manually reproducing the production interface before I can begin designing improvements.
                    </p>
                    <p>
                    <strong>Before:</strong> I spent approximately one to three hours recreating the existing interface.<br />
                    <strong>After:</strong> Claude Design creates the foundation from the existing front-end files, allowing me to focus directly on the new design.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>3. Create a Functional Prototype</h2>
                    <p>
                    Once I confirm the direction through sketches, I prompt Claude Design to generate the new workflow using our predefined design system.
                    </p>
                    <p>
                    I do not force every design task into the same tool. If creating a particular component is faster in Figma, I design it there and then bring the result into Claude Design. The goal is not to eliminate Figma for the sake of eliminating it. The goal is to use the most efficient method for each part of the process.
                    </p>
                    <p>
                    The biggest difference is that the resulting prototype is functional rather than simply visual.
                    </p>
                    <p>
                    <strong>Before:</strong> Approximately one week to create a limited-functionality mockup in Figma.<br />
                    <strong>After:</strong> Approximately one day to create a functional prototype ready for usability testing.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>4. Review and Refine</h2>
                    <p>
                    Claude Design allows me to share prototypes internally and make changes directly to generated designs. This becomes especially valuable when feedback requires substantial changes to a workflow.
                    </p>
                    <p>
                    Instead of updating multiple static screens and reconnecting prototype interactions, I can modify the functional experience itself and immediately evaluate the result. This makes iteration much faster when research reveals that the original workflow needs to change significantly.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>5. Test With Users</h2>
                    <p>
                    Once the prototype is ready, I download a standalone HTML version from Claude Design and upload it to a static hosting platform. This gives me a live link that I can share directly with clients for usability testing.
                    </p>
                    <p>
                    As a result, I can independently deploy a highly functional prototype and prepare it for client testing in approximately five minutes. The prototype behaves much more like the real product, allowing us to evaluate workflows that would be difficult to test accurately with static screens.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>6. Generate Detailed Documentation</h2>
                    <p>
                    Documentation had previously been one of the most time-consuming parts of the handoff process. To address this, I created customized skills with detailed instructions for generating interface documentation.
                    </p>
                    <p>
                    Using these skills, Claude Design can:
                    </p>
                    <ul>
                        <li>Document component and view requirements.</li>
                        <li>Add visual explanations when necessary.</li>
                        <li>Assign appropriate design tokens.</li>
                        <li>Produce detailed implementation requirements for developers and quality assurance.</li>
                    </ul>
                    <p>
                    Instead of choosing between speed and documentation quality, I can generate detailed requirements while spending significantly less time creating them manually.
                    </p>
                    <p>
                    <strong>Before:</strong> Approximately two to five days.<br />
                    <strong>After:</strong> Approximately one to three hours, while maintaining detailed documentation.
                    </p>
                    <img
                        src={require("../../image/work_ClaudeDesign/documentation.png")}
                        alt="Generated component documentation"
                    />
           </div>

           <div className='divMedium'>
                    <h2>7. Hand Off to Development</h2>
                    <p>
                    Finally, I created customized skills that convert the documentation into Markdown files that can be used directly by coding agents. Backend developers can provide these files to the AI agents in their coding environments.
                    </p>
                    <p>
                    Because the Claude Design prototype and production environment use the same design system tokens, the coding agent can translate the documented interface into production code with a relatively high level of visual accuracy. The developer can then review the implementation rather than manually recreating every interface detail from scratch.
                    </p>
                    <p>
                    As a result, a team consisting of backend developers and a single designer can move an advanced interface from design to production code within approximately one day.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>The Reimagined Workflow</h2>
                    <p>
                    The final process connects activities that were previously fragmented:
                    </p>
                    <p>
                    <strong>Research → Sketch → Build the foundation → Prototype → Review and refine → Test → Document → Hand off → Implement</strong>
                    </p>
                    <p>
                    The most important change is not simply that AI makes individual design tasks faster. The prototype, design system, documentation, and implementation now share information across the entire process.
                    </p>
                    <p>
                    Instead of repeatedly translating the same design from idea → Figma → documentation → developer interpretation → production, I created a workflow in which the design intent can move more directly from research to implementation.
                    </p>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This process empowered a single designer and a small backend development team to implement a level of interface design that would normally require more specialized front-end resources.
                    </p>
                    <p>
                    More importantly, it changed where I could spend my time. I believe AI is most valuable when it gives professionals more choices about where to focus their expertise. By reducing the time I spent recreating interfaces, building prototypes, and manually documenting specifications, I could spend more time on research, design decisions, usability testing, and refinement.
                    </p>
                    <p>
                    At the same time, I do not see this process as a replacement for collaboration between designers and developers. AI can accelerate execution, but humans still define what good design means for users. Collaboration between designers and developers remains essential for creating thoughtful, maintainable, and widely appreciated products.
                    </p>
                    <p>
                    For this team, AI did not replace those roles. It helped us work around a temporary resource constraint and expand what a small team could realistically build.
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
