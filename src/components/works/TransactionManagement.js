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
                <strong>The transaction management workflow did not match users' mental models, contributing to significantly low usage.</strong>
               </p>

               <p>
               Solution<br />
               <strong>I redesigned the system around agents' and brokers' day-to-day workflows through user research and iterative artificial intelligence prototyping.</strong>
               </p>

           </div>
           <hr />

           <div className='divMedium'>
                    <h2>Background</h2>
                    <p>
                    In this project, I led a major workflow redesign for a B2B task management platform used by real estate brokerages.
                    </p>
                    <p>
                    Real estate transactions involve numerous legal documents that must be signed by stakeholders, including home buyers and sellers.
                    </p>
                    <p>
                    Agents collect these signatures and submit the completed documents to brokerage staff for compliance review. Brokerage staff then reviews and approves the required documents before a transaction can proceed to closing.
                    </p>
                    <p>
                    However, we found significant room for improvement in how our existing product supported this process.
                    </p>
                    <p>
                    As the sole designer on the team, I led the redesign of the transaction management workflow, from research and problem definition through prototyping and usability testing.
                    </p>
                    <p>
                    <strong>Goal:</strong> Redesign the task table and document management experience to accommodate the edge cases that naturally occur throughout a real estate transaction.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>How I Redesigned the Workflow</h2>
                    <p>
                    At a high level, my process was:
                    </p>
                    <p>
                    <strong>Interview users → Map the existing workflow → Identify the mental-model mismatch → Restructure the information architecture → Redesign task management → Redesign document management → Build a functional prototype → Test with agents and brokers → Iterate</strong>
                    </p>
                    <p>
                    The research revealed that the problem was deeper than an outdated interface. The product's underlying structure did not reflect how documents actually accumulate and change throughout a real estate transaction.
                    </p>
                    <p>
                    Instead of simply updating the interface, I redesigned the workflow around this reality. Here is how I got there.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Research</h2>
                    <p>
                    <strong>Understanding the Real Transaction Workflow</strong>
                    </p>
                    <p>
                    I conducted user interviews with agents and brokerage staff to understand how they managed transactions in their day-to-day work. Rather than focusing only on how they used our product, I wanted to understand what happened before, during, and after they interacted with it.
                    </p>
                    <p>
                    After the interviews, I mapped their day-to-day task flow to identify where the existing product conflicted with their actual workflow.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/taskflow_zoomout.png")}
                        alt="Day-to-day task flow of agents and brokerage"
                    />
                    <p className="imgCaption">Day-to-day task flow of agents and brokerage</p>
                    <p>
                    <strong>Main Finding</strong>
                    </p>
                    <p>
                    The existing interface did not match users' mental models of how tasks and documents evolve during a transaction. The system was designed around the assumption that each task contained a single document.
                    </p>
                    <p>
                    Real transactions were much less predictable. During negotiations, multiple related documents could accumulate under the same task. An original agreement might be followed by a counteroffer, an addendum, another revision, and eventually an executed document. The interface did not accommodate this progression well.
                    </p>
                    <p>
                    At the same time, the outdated interface made system behavior difficult to predict, adding another layer of confusion to an already complex workflow.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/checklist_before.png")}
                        alt="Transaction checklist table before the design"
                    />
                    <p className="imgCaption">Transaction checklist table before the design</p>
                    <p>
                    This led me to rethink two fundamental parts of the experience: the task table and the document management view.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>1. Separating Tasks From Documents</h2>
                    <p>
                    <strong>Problem:</strong>
                    </p>
                    <p>
                    Tasks and documents represented different concepts, but the interface made it difficult for users to distinguish between them.
                    </p>
                    <p>
                    Brokerages provide agents with a predefined set of tasks for each transaction. Each task represents an action that needs to be completed, often requiring one or more documents to be submitted. Agents can also launch signature requests using document templates provided for their state.
                    </p>
                    <p>
                    This creates multiple layers of information. At the task level, users need to understand the compliance review status, such as whether a task is approved, rejected, or expired. At the document level, users need information about individual documents and signature activities, such as whether a document has been sent, signed, or expired. The existing interface mixed these concepts together.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/separation.png")}
                        alt="Separating task-level and document-level information"
                    />
                    <p className="imgCaption">Separating task-level and document-level information</p>
                    <p>
                    <strong>My Approach</strong>
                    </p>
                    <p>
                    I reviewed the information architecture and separated information according to its role in the transaction. I distinguished:
                    </p>
                    <ul>
                        <li>Task-level information and actions.</li>
                        <li>Document-level information and actions.</li>
                        <li>Compliance review status.</li>
                        <li>Signature status.</li>
                    </ul>
                    <p>
                    This led me to consolidate document-related information into the document column and the dedicated document management view. Instead of asking users to interpret several types of status at once, the redesigned table gives each piece of information a clearer role.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/checklist_after.png")}
                        alt="Transaction checklist table after the design"
                    />
                    <p className="imgCaption">Transaction checklist table after the design</p>
           </div>

           <div className='divMedium'>
                    <h2>2. Designing for Multiple Documents</h2>
                    <p>
                    <strong>Document Management View</strong>
                    </p>
                    <p>
                    <strong>Problem:</strong>
                    </p>
                    <p>
                    The system was designed around one document per task, while real transactions accumulate multiple documents over time.
                    </p>
                    <p>
                    Negotiations rarely produce a single final document. A task might begin with an original document and later accumulate addenda, counteroffers, revised documents, and finally an executed agreement.
                    </p>
                    <p>
                    Agents also frequently need to perform actions on groups of related documents, such as:
                    </p>
                    <ul>
                        <li>Sending documents for signature.</li>
                        <li>Submitting documents for compliance review.</li>
                        <li>Downloading documents together.</li>
                        <li>Archiving documents that are no longer relevant.</li>
                    </ul>
                    <p>
                    Treating every document as an isolated item did not reflect this workflow.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/modal_before.png")}
                        alt="Document management view before the design"
                    />
                    <p className="imgCaption">Document management view before the design</p>
                    <p>
                    <strong>My Approach</strong>
                    </p>
                    <p>
                    I introduced the concept of folders. A folder allows agents to accumulate documents related to the same activity or negotiation under a task. If an agent needs to restart the process, they can create a new folder rather than mixing new documents with files from a previous attempt.
                    </p>
                    <p>
                    This creates a structure that better reflects how the transaction develops in the real world:
                    </p>
                    <p>
                    <strong>Task → Folder → Documents</strong>
                    </p>
                    <p>
                    Rather than forcing unpredictable transaction activity into a rigid one-document structure, the interface can now accommodate documents as they accumulate and change over time.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>3. Making the History Visible</h2>
                    <p>
                    Introducing folders solved the structural problem, but it created another question: how can agents and brokers understand what has happened inside a folder over time?
                    </p>
                    <p>
                    To answer this, I designed a timeline view. The timeline records important activities as agents work with documents, including uploading files, launching signature requests, and archiving documents. This gives both agents and brokerage staff visibility into how the folder has evolved.
                    </p>
                    <p>
                    Instead of looking only at the current state and trying to reconstruct what happened, users can understand the history of the transaction directly from the interface.
                    </p>
                    <img
                        src={require("../../image/work_TransactionManagement/modal_after.png")}
                        alt="Document management view after the design"
                    />
                    <p className="imgCaption">Document management view after the design</p>
           </div>

           <div className='divMedium'>
                    <h2>Prototype and Test</h2>
                    <p>
                    Once I redesigned the interface and workflow, I built the entire experience as a functional prototype in Claude Design. I used the prototype to conduct usability testing with agents and brokers.
                    </p>
                    <p>
                    Rather than explaining the new interface beforehand, I asked participants to simulate completing transaction management tasks without instructions or assistance from the moderator. This allowed me to evaluate whether the redesigned information architecture was understandable on its own.
                    </p>
           </div>

           <div className='divMedium'>
                    <h2>Results</h2>
                    <p>
                    <strong>Users Could Navigate the New Workflow Without Assistance</strong>
                    </p>
                    <p>
                    During usability testing, agents were able to complete the assigned tasks smoothly without the confusion we observed in the previous experience. Separating task-level and document-level information made the workflow easier to understand, while the folder structure better accommodated the way documents accumulate during real transactions.
                    </p>
                    <p>
                    Both agents and brokers also responded positively to the timeline view because it gave them greater visibility into the history of their work. The testing therefore gave us evidence that the new information architecture addressed the core confusion identified during research.
                    </p>
                    <p>
                    <strong>Testing Revealed a New Need</strong>
                    </p>
                    <p>
                    The usability test also uncovered a workflow that the existing system did not support. Brokerages typically predefined the tasks agents needed to complete. However, participants revealed that agents sometimes needed to create additional tasks themselves as unexpected requirements emerged during a transaction.
                    </p>
                    <p>
                    This led to the concept of a <strong>Free Task</strong>: a task that agents could create themselves in addition to the predefined tasks created by the brokerage. Rather than treating usability testing as the final validation step, this finding became another input into the design process.
                    </p>
           </div>

           <hr />
           <div className='divMedium'>
                    <h2>Reflection</h2>
                    <p>
                    This project reinforced the importance of understanding users' workflows before redesigning an interface.
                    </p>
                    <p>
                    At first, the problem could have appeared to be an outdated task table or document management screen. Through research, I found that the deeper issue was the product's underlying model: it assumed a simpler relationship between tasks and documents than users experienced in real transactions.
                    </p>
                    <p>
                    That insight changed the scope of my design work from improving individual screens to restructuring how tasks, documents, and transaction history were represented throughout the workflow.
                    </p>
                    <p>
                    This was also my first opportunity to independently lead an end-to-end UX design process, from research and problem definition through information architecture, interaction design, prototyping, and usability testing. The experience strengthened my ability to gather meaningful insights within limited time and translate them into design decisions that reflect how users actually work.
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
