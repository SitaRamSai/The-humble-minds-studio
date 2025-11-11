import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <span className="section-eyebrow">Learning Collective Inspired by YC Launches</span>
      <h1 className="hero-title">
        Learn fast, ship faster—together.
      </h1>
      <p className="hero-subtitle">
        The Humble Minds is a builder-first community documenting what we are learning and shipping in real time. From AI security and engineering craft to product experiments, share your progress, get feedback, and find collaborators on the same wave.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a href="#connect" className="cta-button">
          Join the community
        </a>
        <a href="#focus" className="cta-secondary">
          Explore focus areas
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
