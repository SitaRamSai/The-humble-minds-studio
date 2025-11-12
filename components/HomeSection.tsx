import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <span className="section-eyebrow">Open Community for Curious Minds</span>
      <h1 className="hero-title">
        Where humble minds learn and grow together
      </h1>
      <p className="hero-subtitle">
        The Humble Minds is a builder-first, welcoming community where passionate learners document and share progress in real time. From AI security and engineering craft to product experiments, blockchain, AR/VR/XR, and more—share your journey, get feedback, and find collaborators or fellow explorers. Everyone’s growth matters here.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href="#learning" className="cta-button">
          Explore learning paths
        </a>
        <a href="#connect" className="cta-secondary">
          Join the community
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
