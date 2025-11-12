import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6">
      <span className="section-eyebrow">Open Community for Curious Minds</span>
      <h1 className="hero-title">
        Where humble minds learn and grow together
      </h1>
      <p className="hero-subtitle">
        The Humble Minds is a welcoming community where passionate learners share knowledge, explore ideas, and support each other's growth. From AI security to development best practices, everyone's journey matters. Join us to learn from others, contribute your insights, and be part of a collaborative learning experience.
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
