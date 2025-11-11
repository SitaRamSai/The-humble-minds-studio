import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-full">
      <div className="max-w-3xl">
        <div className="mb-4">
          {/* Removed 'The Humble Minds' from the hero section */}
        </div>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          A Public Journey into AI Security
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto">
          An open-source journal documenting my learning path, focus areas, and findings in the world of AI security. A personal initiative from Sitaram within The Humble Minds community.
        </p>
        <a href="#connect" className="cta-button">
          Connect With Me
        </a>
      </div>
    </section>
  );
};

export default HomeSection;
