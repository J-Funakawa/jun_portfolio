// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import WorkHome from './components/WorkHome';
import WorldLayout from './function/WorldLayout';
import { DEFAULT_WORLD } from './object/worlds';

import './css/Text.css';
import HamoriHarmony from './components/works/HamoriHarmony';
import RefreshBar from './components/works/RefreshBar';
import Ethnography from './components/works/Ethnography';
import Atomos from './components/works/Atomos';
import EdenStory from './components/works/EdenStory';
import Lettura from './components/works/Lettura';
import CreativeWorks from './components/works/CreativeWorks';
import PetApp from './components/works/PetApp';
import Safety from './components/works/Safety';
import AccountManager from './components/works/AccountManager';
import TravelOffline from './components/works/TravelOffline';
import ClaudeDesign from './components/works/ClaudeDesign';
import TransactionManagement from './components/works/TransactionManagement';


const App = () => {
  return (
    <Router>

      <Routes>
        {/* Root + legacy redirects (static routes rank above /:world). */}
        <Route path="/" element={<Navigate to={`/${DEFAULT_WORLD}/workhome`} replace />} />
        <Route path="/workhome" element={<Navigate to={`/${DEFAULT_WORLD}/workhome`} replace />} />
        <Route path="/home-uds-crag" element={<Navigate to="/uds-crag/workhome" replace />} />

        {/* Every world shares this one set of pages, namespaced under /:world. */}
        <Route path="/:world" element={<WorldLayout />}>
          <Route index element={<Navigate to="workhome" replace />} />
          <Route path="workhome" element={<WorkHome />} />
          <Route path="about" element={<About />} />
          <Route path="works/hamoriharmony" element={<HamoriHarmony />} />
          <Route path="works/refreshbar" element={<RefreshBar />} />
          <Route path="works/ethnography" element={<Ethnography />} />
          <Route path="works/atomos" element={<Atomos />} />
          <Route path="works/edenstory" element={<EdenStory />} />
          <Route path="works/lettura" element={<Lettura />} />
          <Route path="works/creativeworks" element={<CreativeWorks />} />
          <Route path="works/petapp" element={<PetApp />} />
          <Route path="works/safety" element={<Safety />} />
          <Route path="works/traveloffline" element={<TravelOffline />} />
          <Route path="works/accountmanager" element={<AccountManager />} />
          <Route path="works/claudedesign" element={<ClaudeDesign />} />
          <Route path="works/transactionmanagement" element={<TransactionManagement />} />
        </Route>

        {/* Any other/legacy link redirects to the default world's home. */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_WORLD}/workhome`} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
