import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JourneyTracks from './components/JourneyTracks';
import CommunityPulse from './components/CommunityPulse';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ContributorsSection from './components/ContributorsSection';
import ConnectSection from './components/ConnectSection';
import BreakthroughsSection from './components/BreakthroughsSection';
import Header from './components/Header';
import ProfileView from './components/ProfileView';
import AnimatedBackground from './components/AnimatedBackground';

// Home Page Component
const HomePage = () => (
  <>
    <div className="mb-6">
      <HomeSection />
    </div>
    <div className="bento-grid">
      {/* Row 1: Journey Tracks (Main Content) & Community Pulse (Sidebar) */}
      <div className="bento-card col-span-1 md:col-span-4 animate-rise h-[600px]" style={{ animationDelay: `120ms` }}>
        <JourneyTracks />
      </div>
      <div className="bento-card col-span-1 md:col-span-2 animate-rise h-[600px]" style={{ animationDelay: `200ms` }}>
        <CommunityPulse />
      </div>

      {/* Row 2: Connections & Breakthroughs */}
      <div className="bento-card col-span-1 md:col-span-3 animate-rise" style={{ animationDelay: `280ms` }}>
        <ContributorsSection />
      </div>
      <div className="bento-card col-span-1 md:col-span-3 animate-rise" style={{ animationDelay: `360ms` }}>
        <BreakthroughsSection />
      </div>

      {/* Row 3: How It Works (Full Width) */}
      <div className="bento-card col-span-1 md:col-span-6 animate-rise" style={{ animationDelay: `440ms` }}>
        <AboutSection />
      </div>
    </div>
  </>
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
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
