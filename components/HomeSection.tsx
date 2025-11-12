import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-full py-12 md:py-16">
      <div className="max-w-4xl px-4">
        {/* Welcoming intro */}
        <div className="mb-6">
          <span className="text-purple-300/80 text-base md:text-lg font-normal">
            Welcome to
          </span>
        </div>

        {/* Main headline - more personal */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] mb-6">
          <span className="block text-white mb-2">The Humble Minds</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-normal text-gray-300">
            A space for learners & builders
          </span>
        </h1>

        {/* More conversational description */}
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl mx-auto">
          We're a community of curious people learning in public—sharing what we're exploring,
          the projects we're building, and the challenges we're working through. Whether you're
          diving into AI, web development, or any other field, you're welcome here.
        </p>

        {/* Softer CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#learning" className="inline-block px-7 py-3 rounded-lg font-medium text-base text-gray-300 hover:text-white border border-purple-500/30 hover:border-purple-400/60 hover:bg-purple-500/5 transition-all duration-300">
            See what people are learning
          </a>
          <a href="#connect" className="inline-block px-7 py-3 rounded-lg font-medium text-base text-purple-300 hover:text-purple-200 underline underline-offset-4 decoration-purple-400/40 hover:decoration-purple-400/80 transition-all duration-300">
            Connect with us
          </a>
        </div>

        {/* Community note - more personal */}
        <div className="mt-8 pt-8 border-t border-gray-700/30">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This is an open space—not a platform, not a product. Just a place where people share their learning journeys.
            Started by folks like Sitaram who believe in learning together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
