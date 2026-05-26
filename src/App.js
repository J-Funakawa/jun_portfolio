// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import WorkHome from './components/WorkHome';

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


const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works/hamoriharmony" element={<HamoriHarmony />} />
        <Route path="/works/refreshbar" element={<RefreshBar />} />
        <Route path="/works/ethnography" element={<Ethnography />} />
        <Route path="/works/atomos" element={<Atomos />} />
        <Route path="/works/edenstory" element={<EdenStory />} />
        <Route path="/works/lettura" element={<Lettura />} />
        <Route path="/works/creativeworks" element={<CreativeWorks />} />
        <Route path="/works/petapp" element={<PetApp />} />
        <Route path="/works/safety" element={<Safety />} />
        <Route path="/works/traveloffline" element={<TravelOffline />} />
        <Route path="/works/accountmanager" element={<AccountManager />} />
        <Route path="/workhome" element={<WorkHome />} />
 
        
        <Route path="/" element={<Home />} />
        {/* Add more routes for other works */}
      </Routes>
    </Router>
  );
};

export default App;
