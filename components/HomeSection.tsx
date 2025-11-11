import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-full">
      <div className="max-w-3xl">
        <div className="mb-4">
          {/* Removed 'The Humble Minds' from the hero section */}
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Learn Together, Build Together
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          The Humble Minds is an open community where curious minds share their learning journeys and projects. Whether you're exploring AI security, web development, data science, or any tech domain—this is your space to document, learn, and grow. Join our community of learners and share what you're building.
        </p>
        <a href="#connect" className="cta-button">
          Join the Community
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
