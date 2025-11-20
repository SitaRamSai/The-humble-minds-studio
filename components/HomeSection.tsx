import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden pt-32 pb-16">
      {/* Global Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10 flex flex-col items-center">

        {/* --- 1. HERO HEADER --- */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-16">

          {/* Social Proof Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              📚 247 people documenting
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              🔥 12 new journeys today
            </span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              ✨ 5 breakthroughs shared
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 font-sans drop-shadow-2xl leading-tight">
            Watch People Learn Tech<br />
            <span className="text-slate-500">in Real-Time</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-400 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
            Follow developers as they document learning AI Security, XR/VR, Blockchain & IoT.
            <br className="hidden md:block" />
            <span className="text-slate-200">No courses. No experts. Just real journeys—from confusion to clarity.</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/10">
              Start Documenting Your Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
            <button className="px-8 py-4 bg-[#1a1a1a] text-white border border-white/10 rounded-lg font-semibold hover:bg-[#252525] transition-colors flex items-center gap-2">
              Explore Learning Journeys
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </button>
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