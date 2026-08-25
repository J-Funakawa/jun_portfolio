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
                <strong>Transaction Management System did not match client's mental modal, leading to significant low use.</strong>
               </p>

               <p>
               Solution<br />
               <strong>Redesigned the system to fit users day to day workflow through user research and iterative AI prototyping. </strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <ul>
                        <li>Constellation Commissions is a product used by real estate brokerage to calculate the complex money split between agents and brokerage</li>
                        <li>There are quite a few legal documents in real estate transactions that needs to be signed by stakeholders, such as home sellers and buyers. Agents are required to submit signed documents to broker staff for compliance review. Broker staff needs to approve each document to proceed to closing.</li>
                        <li>Commissions provide a set of features to enable agents to submit documents and for brokers to review documents.</li>
                        <li>However, this feature was not used by our main clients so I took ownership of this problem so the feature serves for clients benefit.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Research</h2>
                    <p>
                    <strong>User Interview</strong>
                    </p>
                    <ul>
                        <li>Conducted user interviews with one of the clients to understand their current workflow and pain points.</li>
                        <li>Mapped task flow to reveal the workflow of agents and brokerage. </li>
                        <li>Main Findings; Transaction Management System did not match client's mental modal and their day to day workflow.
                            <ul>
                                <li>The interface is highly confusing for users to understand the functionality.</li>
                                <li>Each task was designed to accommodate single documents not accommodating additional documents created during the negotiation such as counter offers and addendum.</li>
                            </ul>
                        </li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Design</h2>
                    <p>
                    <strong>Table Design</strong>
                    </p>
                    <ul>
                        <li>Problem: task and document is a separate concept but the UI made it difficult for users to distinguish the difference. </li>
                        <li>Brokers provide a set of tasks to agents. Each task asks for documents to be submitted. Agents can also launch a signature session to collect signatures using attached templates. </li>
                        <li>This feature confuses users to understand the different types of status; Task status communicates the review status, such as rejected, approved, and expired. Launching a signature for this task adds more information such as signing status, sent, signed, expired. I organized task level information and call to actions and document level information and CTAs separately to present right information in the right process.</li>
                    </ul>
                    <p>
                    <strong>Document Modal</strong>
                    </p>
                    <ul>
                        <li>Accommodate multiple documents and edge cases but also enable tracking documents</li>
                        <li>As negotiation goes, documents are accumulated over time such as original document, addendum, counter documents, and executed document. </li>
                        <li>In their workflow, there are several times agents need to act on a group of documents, emailing agents for signature, submitting for review, downloading.</li>
                        <li>Therefore, I create a concept of folder and timeline view. Agents can accumulate documents in the folder. If there's a need to start from the beginning, they can create a new folder so they can separate documents from previous activities. </li>
                        <li>The timeline view enables both brokers and agents to track the updates made to this folder over time as agents upload documents, in timeline view, launch ensign or archive documents.</li>
                    </ul>
           </div>

           <div className='divMedium'>
                    <h2>Test</h2>
                    <p>
                    <strong>Attendees</strong>
                    </p>
                    <ul>
                        <li>Two real estate agents and one broker in Ohio.</li>
                        <li>Researcher; Jun Funakawa</li>
                    </ul>
                    <p>
                    <strong>Method</strong>
                    </p>
                    <ul>
                        <li>Online Usability Test</li>
                        <li>I gave users a mock-scenarios for a transaction.</li>
                        <li>I instructed participants to scan the screen and guess what they see and guess what each button would do. </li>
                        <li>Ask participants about their next steps in the scenario and try to complete each step to simulate task execution. Each step I asked edge cases in real life scenarios to find opportunities for enhancements and improvement.</li>
                    </ul>
                    <p>
                    <strong>Findings</strong>
                    </p>
                    <ul>
                        <li>Findings 1; Broker wants to review a set of the documents submitted for review under the task, not just one by one.</li>
                        <li>Findings 2; Broker wanted </li>
                        <li>Finding 3; Agents wants to add "Free Tasks"</li>
                    </ul>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This end-to-end UX design experience made me reconfirm the importance of thorough research and iteration to create a truly usable interface and interactions.
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
