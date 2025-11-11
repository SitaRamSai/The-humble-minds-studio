import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-full py-16 md:py-24">
      <div className="max-w-5xl px-4">
        {/* Overline text */}
        <div className="mb-6 md:mb-8">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium tracking-wide">
            Open Learning Community
          </span>
        </div>

        {/* Main headline with gradient */}
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-8">
          <span className="block text-white">Learn Together,</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Build Together
          </span>
        </h1>

        {/* Subheadline - shorter and punchier */}
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
          An open community where curious minds share learning journeys, build projects, and grow together.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#connect" className="cta-button text-lg px-8 py-4">
            Join the Community
          </a>
          <a
            href="#learning"
            className="inline-block px-8 py-4 rounded-md font-semibold text-lg text-gray-300 hover:text-white border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
          >
            Explore Learning Paths
          </a>
        </div>

        {/* Optional: Stats or social proof */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Open</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Source</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Community</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Driven</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">Free</div>
            <div className="text-sm text-gray-500 uppercase tracking-wider">Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
