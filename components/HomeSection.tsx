import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden pt-32 pb-16">
      {/* Global Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col items-center">

        {/* --- 1. HERO HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-16">

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 font-sans drop-shadow-2xl leading-tight">
            The Humble Minds<br />
            <span className="text-slate-500">Learning Collective</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            A community of developers documenting their learning journeys in AI Security, XR/VR, Blockchain & IoT.
            <br className="hidden md:block" />
            <span className="text-slate-200">We believe in learning in public and sharing the struggle.</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href="https://github.com/thehumbleminds" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/10">
              View on GitHub
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="#about" className="px-8 py-4 bg-[#1a1a1a] text-white border border-white/10 rounded-lg font-semibold hover:bg-[#252525] transition-colors flex items-center gap-2">
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
          </div>
        </div>

        {/* --- 2. FEATURE STRIP: What People Share --- */}
        <div className="w-full max-w-5xl border-t border-white/10 pt-12">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8">What People Share Here</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Learning Logs', 'Resource Lists', 'Struggle Points', 'Breakthrough Moments', 'Study Notes', 'Project Updates'].map((item, i) => (
              <div key={i} className="flex items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 font-medium text-center hover:bg-white/10 transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;