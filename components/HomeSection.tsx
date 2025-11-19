import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="bento-grid">
        {/* Main Hero Block */}
        <div className="bento-card col-span-1 md:col-span-4 md:row-span-2 flex flex-col justify-center relative group min-h-[500px] p-8 md:p-12">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <div className="w-64 h-64 rounded-full bg-blue-600/20 blur-3xl animate-pulse-glow"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-medium uppercase tracking-wider mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Community Active
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-[1.1] font-serif">
                <span className="text-white">Curating knowledge,</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">together.</span>
              </h1>

              <p className="text-xl text-stone-400 max-w-xl leading-relaxed font-light">
                No experts, just learners. Document your journey, share your failures, and grow with a community of humble minds.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
                Start Your Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
              <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Explore Paths
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Block - Active Learners */}
        <div className="bento-card col-span-1 md:col-span-2 flex flex-col justify-between p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="flex -space-x-4 mb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-xs text-slate-400">
                U{i}
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-black bg-slate-900 flex items-center justify-center text-xs text-white font-medium">
              +42
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Join the movement</h3>
            <p className="text-slate-400">Developers documenting their growth right now.</p>
          </div>
        </div>

        {/* Tertiary Block - Geometric Abstract */}
        <div className="bento-card col-span-1 md:col-span-2 flex items-center justify-center relative overflow-hidden min-h-[240px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-24 h-24 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full blur-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
