import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden pt-32 pb-16">
      {/* Cosmic glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col items-center">

        {/* --- 1. HERO HEADER --- */}
        {/* --- 1. HERO HEADER --- */}
        <div className="flex flex-col items-start text-left max-w-6xl mb-16 w-full relative">

          {/* Top Label */}
          <div className="mb-6 ml-2 md:ml-0 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-amber-400/50 to-transparent"></div>
            <span className="text-amber-400 font-sans uppercase tracking-[0.2em] text-sm md:text-base font-bold relative">
              The Humble Minds
              <span className="absolute inset-0 blur-md bg-amber-400/30"></span>
            </span>
          </div>

          {/* Main Heading - Staggered */}
          <div className="relative w-full">
            <h1 className="text-6xl md:text-8xl font-normal text-white tracking-tight font-instrument leading-[0.9] z-10 relative group">
              Stay Humble.
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-normal text-slate-300 tracking-tight font-instrument italic leading-[0.9] ml-12 md:ml-32 mt-2 md:-mt-4 relative z-0 group">
              Stay Curious.
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            </h1>
          </div>

          {/* Subtitle - Aligned with second line */}
          <div className="mt-12 ml-12 md:ml-32 max-w-xl">
            <p className="text-xl md:text-2xl text-slate-400 font-instrument italic font-normal leading-relaxed mb-8">
              Connect with developers who believe that sharing knowledge is the ultimate power.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/thehumbleminds" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 bg-white text-black rounded-full font-bold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/10 text-sm md:text-base hover:shadow-2xl hover:shadow-white/20 hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-200 via-white to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                <span className="relative">View on GitHub</span>
                <svg className="w-4 h-4 relative group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="#about" className="group relative px-8 py-3 bg-transparent text-white border border-white/20 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm md:text-base hover:border-white/40 hover:bg-white/5 hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
                <span className="relative">Learn More</span>
              </a>
            </div>

            {/* Micro-text */}
            <p className="mt-8 text-xs font-mono text-slate-600 tracking-wide">
              Currently exploring: <span className="text-slate-500">AI Security</span> • <span className="text-slate-500">VR/XR</span> • <span className="text-slate-500">Blockchain</span>
            </p>
          </div>
        </div>

        {/* --- 2. FEATURE STRIP: What People Share --- */}
        <div className="w-full max-w-5xl border-t border-white/10 pt-12">
          <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-wider mb-8 relative">
            What People Share Here
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Learning Logs', 'Resource Lists', 'Struggle Points', 'Breakthrough Moments', 'Study Notes', 'Project Updates'].map((item, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300 font-medium text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default hover:scale-105"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                <span className="relative">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;