import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <span className="section-eyebrow">Humble Minds Community Hub</span>
      <h1 className="hero-title">
        Learn, build, and share inside a generous community
      </h1>
      <p className="hero-subtitle">
        The Humble Minds community brings together security-focused makers, thoughtful writers, and curious builders. Dive into living learning paths, co-create open knowledge in AI security, privacy, and emerging tech, and document your journey so the next learner can start faster.
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
