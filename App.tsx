import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearningSection from './components/LearningSection';
import FocusSection from './components/FocusSection';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ContributorsSection from './components/ContributorsSection';
import ConnectSection from './components/ConnectSection';
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
      <div className="bento-card col-span-1 md:col-span-4 animate-rise" style={{ animationDelay: `120ms` }}>
        <LearningSection />
      </div>
      <div className="bento-card col-span-1 md:col-span-2 animate-rise" style={{ animationDelay: `200ms` }}>
        <FocusSection />
      </div>
      <div className="bento-card col-span-1 md:col-span-3 animate-rise" style={{ animationDelay: `280ms` }}>
        <ContributorsSection />
      </div>
      <div className="bento-card col-span-1 md:col-span-3 animate-rise" style={{ animationDelay: `360ms` }}>
        <ConnectSection />
      </div>
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
