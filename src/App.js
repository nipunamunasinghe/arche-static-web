import React, { useRef } from 'react';
import Navbar from './NavBar';
import Hero from './Hero';
import ProjectScope from './ProjectScope';
import Technologies from './Technologies';
import './index.css';
import ResearchGaps from './ResearchGaps';
import ResearchObjectives from './ResearchObjectives';
import Methodology from './Methodology';
import ProjectTimeline from './ProjectTimeline';
import DocumentDownloads from './DocumentDownloads';
import Presentations from './Presentations';
import MeetOurTeam from './MeetOurTeam';
import GroupMembers from './GroupMembers';
import DownloadApp from './DownloadApp';
import ContactForm from './ContactForm';
import ResearchProblem from './ResearchProblem';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const projectScopeRef = useRef(null);
  const researchGapsRef = useRef(null);
  const researchProblemRef = useRef(null);
  const researchObjectivesRef = useRef(null);
  const methodologyRef = useRef(null);
  const technologiesRef = useRef(null);
  const projectTimelineRef = useRef(null);
  const documentDownloadsRef = useRef(null);
  const presentationsRef = useRef(null);
  const meetOurTeamRef = useRef(null);
  const groupMembersRef = useRef(null);
  const downloadAppRef = useRef(null);
  const contactFormRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        refs={{
          heroRef,
          projectScopeRef,
          researchGapsRef,
          researchProblemRef,
          researchObjectivesRef,
          methodologyRef,
          technologiesRef,
          projectTimelineRef,
          documentDownloadsRef,
          presentationsRef,
          meetOurTeamRef,
          groupMembersRef,
          downloadAppRef,
          contactFormRef,
        }}
      />
      <div ref={heroRef}><Hero /></div>
      <div ref={projectScopeRef}><ProjectScope /></div>
      <div ref={researchGapsRef}><ResearchGaps /></div>
      <div ref={researchProblemRef}><ResearchProblem /></div>
      <div ref={researchObjectivesRef}><ResearchObjectives /></div>
      <div ref={methodologyRef}><Methodology /></div>
      <div ref={technologiesRef}><Technologies /></div>
      <div ref={projectTimelineRef}><ProjectTimeline /></div>
      <div ref={documentDownloadsRef}><DocumentDownloads /></div>
      <div ref={meetOurTeamRef}><MeetOurTeam /></div>
      <div ref={groupMembersRef}><GroupMembers /></div>
      <div ref={downloadAppRef}><DownloadApp /></div>
      <div ref={contactFormRef}><ContactForm /></div>
    </div>
  );
}

export default App;
