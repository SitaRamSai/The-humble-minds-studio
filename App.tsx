import React from 'react';
import LearningSection from './components/LearningSection';
import FocusSection from './components/FocusSection';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ConnectSection from './components/ConnectSection';
import ContributorsSection from './components/ContributorsSection';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 animate-page-fade">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="hero-shell animate-rise" style={{ animationDelay: `0ms` }}>
          <HomeSection />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="lg:col-span-2 surface-card animate-rise" style={{ animationDelay: `120ms` }}>
            <LearningSection />
          </div>

          <div className="surface-card animate-rise" style={{ animationDelay: `200ms` }}>
            <ConnectSection />
          </div>

          <div className="lg:col-span-2 surface-card animate-rise" style={{ animationDelay: `280ms` }}>
            <FocusSection />
          </div>

          <div className="surface-card animate-rise" style={{ animationDelay: `360ms` }}>
            <ContributorsSection />
          </div>

          <div className="lg:col-span-3 surface-card animate-rise" style={{ animationDelay: `440ms` }}>
            <AboutSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
