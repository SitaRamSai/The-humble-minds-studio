import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden" style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}>
      {/* Hero Content - Centered */}
      <div className="text-center py-20 md:py-28 px-4">
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-white"
          style={{ letterSpacing: '-0.02em', fontWeight: 700 }}
        >
          The Humble Minds
        </h1>
        <p
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          style={{ lineHeight: '1.5', fontWeight: 400 }}
        >
          Learn in public. Grow together. A community of curious minds documenting their journeys—no experts, just learners.
        </p>
      </div>

      {/* Interactive Demo Section - Large Card */}
      <div className="max-w-5xl mx-auto px-4 pb-20 animate-rise" style={{ animationDelay: '200ms' }}>
        <div
          className="relative rounded-3xl overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(59, 130, 246, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Blue Glow Effect */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>
          </div>

          <div className="relative z-10 p-8 md:p-12">
            {/* Top Controls */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-full text-sm font-medium transition-all duration-300 border border-blue-500/30">
                Learning in Public
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-full text-sm font-medium transition-all duration-300 border border-white/10">
                Community Driven
              </button>
              <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white rounded-full text-sm font-medium transition-all duration-300 border border-white/10">
                Open Source
              </button>
            </div>

            {/* Main Content */}
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-slate-300 text-lg leading-relaxed">
                  "Share your learning journey, document your failures and breakthroughs, and connect with others exploring AI security, development, and beyond."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20">
                  <div className="text-amber-400 text-sm font-medium mb-1">Active Community</div>
                  <div className="text-white text-2xl font-bold">150+</div>
                  <div className="text-slate-400 text-xs">Learners sharing daily</div>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                  <div className="text-blue-400 text-sm font-medium mb-1">Learning Paths</div>
                  <div className="text-white text-2xl font-bold">25+</div>
                  <div className="text-slate-400 text-xs">Topics covered</div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
                  <div className="text-green-400 text-sm font-medium mb-1">Open Contributions</div>
                  <div className="text-white text-2xl font-bold">500+</div>
                  <div className="text-slate-400 text-xs">Resources shared</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Join the community · Share your story · Grow together</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 border border-white/10"
                  title="Save"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                </button>
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 border border-white/10"
                  title="Share"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </button>
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 rounded-lg transition-all duration-300 border border-white/10"
                  title="More"
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-white/20">
                  Start Your Journey
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Content Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Community Highlights */}
          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Join Our Community</h3>
              </div>

              <p className="text-slate-400 mb-6">
                Connect with developers, security researchers, and lifelong learners. Share your progress, ask questions, and learn from others' experiences.
              </p>

              <div className="flex -space-x-3 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs text-white font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-white font-medium">
                  +145
                </div>
              </div>

              <button className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-2 transition-colors duration-300">
                View all members
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Live Activity</h3>
                <span className="ml-auto text-xs text-green-400 font-medium">● Live</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm">Alex shared a new learning path on AI Security</p>
                    <span className="text-xs text-slate-500">2 minutes ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm">Sarah completed "Intro to Web Security"</p>
                    <span className="text-xs text-slate-500">15 minutes ago</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm">New challenge posted: "Build a secure API"</p>
                    <span className="text-xs text-slate-500">1 hour ago</span>
                  </div>
                </div>
              </div>

              <button className="text-green-400 hover:text-green-300 font-medium text-sm flex items-center gap-2 transition-colors duration-300">
                View all activity
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
