import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JourneyTracks from './components/JourneyTracks';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ConnectSection from './components/ConnectSection';
import Header from './components/Header';
import ProfileView from './components/ProfileView';
import AnimatedBackground from './components/AnimatedBackground';

import BentoGridSection from './components/BentoGridSection';
import PeoplePage from './components/PeoplePage';

// Home Page Component
const HomePage = () => (
  <div className="space-y-24">
    <HomeSection />
    <div className="container mx-auto px-4 max-w-6xl">
      <JourneyTracks />
    </div>
    <BentoGridSection />
    <AboutSection />
    <ConnectSection />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen text-white animate-page-fade bg-black">
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Header />
          <main className="container mx-auto px-4 pt-24 pb-12 max-w-7xl">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/people" element={<PeoplePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
