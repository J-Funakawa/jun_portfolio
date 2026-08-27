import React from 'react';
import Navigation from '../../function/Navigation';
import BackButton from '../../function/BackButton';
import WorkTopSection from '../../function/ WorkTopSection';
import Footer from '../../function/Footer';




const TransactionManagement = () => {
  return (
  <div>
    <Navigation />
    <BackButton />

    <div className="pagePicSpace">
        <div className="topSection">
        <WorkTopSection indexNum="8" />
        </div>
        <main>
        <hr />
        <div className='divMedium'>

               <p>
               Problem<br />
                <strong>Transaction Management workflow did not match user's mental model, leading to significantly low usage. </strong>
               </p>

               <p>
               Solution<br />
               <strong>Redesigned the system to fit users' day-to-day workflow through user research and iterative AI prototyping. </strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <p>
                    <strong>In this project, I led the large workflow improvement for B2B task-management SaaS for real estate brokerages.</strong> There are quite a few legal documents in real estate transactions that need to be signed by stakeholders, such as home sellers and buyers. Agents are required to get signatures and submit documents to broker staff for compliance review. Broker staff needs to approve each document to proceed to closing. As a single designer in the team, I drove the redesign of this system as we found significant room for improvement.
                    </p>
                    <p>
                    <strong>Goal: Update the task table and document management screen to be resilient to edge cases that occur during the transaction.</strong>
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/checklist_before.png")}
                        alt="Task checklist before the redesign"
                    />
           </div>

           <div className='divMedium'>
                    <h2>Research</h2>
                    <p>
                    <strong>User Interview</strong>
                    </p>
                    <p>
                    I conducted user interviews to understand their current workflow and pain points. After the research, I mapped their day-to-day taskflow to reveal the pain points agents and brokerage are experiencing.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/taskflow_zoomout.png")}
                        alt="Zoomed-out task flow map"
                    />
                    <p>
                    <strong>Main Findings: current interface did not match client's mental model and workflow.</strong> Each task was designed to store a single document while additional documents are created during the negotiation such as counter offers and addendum. Outdated UI also made it hard to predict the system behavior.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Design</h2>
                    <p>
                    <strong>Table Design</strong>
                    </p>
                    <p>
                    <strong>Problem: task and document are separate concepts but the UI made it difficult for users to distinguish the difference.</strong>
                    </p>
                    <p>
                    Brokers provide a set of tasks to agents. Each task asks for documents to be submitted. Agents can also launch a signature session using the templates provided by states.
                    </p>
                    <p>
                    Although necessary, this structure made it hard to understand the different types of status: Task status communicates the review status, such as rejected, approved, and expired. Launching a signature for this task adds more information such as signing status, sent, signed, expired. I reviewed the information architecture to distinguish task level information and call-to-actions and document level information and CTAs. This process led to consolidating all the document related information to the document column and document management screen.
                    </p>
                    <p>
                    <strong>Document Management View</strong>
                    </p>
                    <p>
                    <strong>Problem: the system does not accommodate multiple documents per task.</strong> As negotiation goes, documents are accumulated over time such as original document, addendum, counter documents, and executed document. In their workflow, there are several times agents need to act on a group of documents, emailing agents for signature, submitting for review, downloading.
                    </p>
                    <p>
                    Therefore, <strong>I created a concept of folder and timeline view.</strong> Agents can accumulate documents in the folder. If there's a need to start from the beginning, they can create a new folder so they can separate documents from previous activities. The timeline view enables both brokers and agents to track the updates made to this folder over time as agents upload documents, in timeline view, launch design or archive documents.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Test</h2>
                    <p>
                    After designing the new interface and the workflow, I prototyped the entire workflow on Claude Design for usability testing. In the test, agents and brokers simulated completing tasks without any instructions or help by the moderator.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Result</h2>
                    <p>
                    <strong>In testing, the redesign resolved the confusion that drove low usage:</strong>
                    </p>
                    <ul>
                        <li>The agents were able to complete the task smoothly without any confusion. </li>
                        <li>The broker and agents appreciated the timeline view that offered visibility to their process. </li>
                    </ul>
                    <p>
                    The test also surfaced the need for "Free Task" which let agents create their own task, in addition to predefined tasks prepared by the brokers.
                    </p>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This end-to-end UX design experience made me reconfirm the importance of thorough research and iteration to create a truly usable interface and interactions. This was my first project to lead the whole process by myself. I'd like to continue developing my ability to collect as much insight in a given time to produce an experience truly valuable to users.
                    </p>
           </div>
         <hr />
        </main>
        <Footer />
    </div>
 </div>

  );
};

export default TransactionManagement;
