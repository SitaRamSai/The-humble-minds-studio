import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ fontFamily: "'Google Sans', 'Inter', -apple-system, sans-serif" }}
    >
      {/* Hero Content - Centered */}
      <div className="text-center mx-auto px-6" style={{ paddingTop: '80px', paddingBottom: '80px', maxWidth: '1200px' }}>
        <h1
          className="font-bold text-white mb-6"
          style={{
            fontSize: '60px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: '1.1'
          }}
        >
          The Humble Minds
        </h1>
        <p
          className="text-slate-400 mx-auto"
          style={{
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '1.5',
            maxWidth: '800px'
          }}
        >
          The fastest path from learning to mastery. No experts, just curious minds documenting their journey in public.
        </p>
      </div>

      {/* Interactive Demo Section - Large Card */}
      <div className="mx-auto px-6 animate-rise" style={{ maxWidth: '1200px', paddingBottom: '80px', animationDelay: '200ms' }}>
        <div
          className="relative overflow-hidden group mx-auto"
          style={{
            maxWidth: '900px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #0f1419 0%, #0a2847 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(66, 133, 244, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Blue Glow Effect - Subtle Pulse */}
          <div
            className="absolute inset-0 opacity-20 group-hover:opacity-30 pointer-events-none"
            style={{
              transition: 'opacity 300ms ease-in-out'
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl animate-pulse"
              style={{
                width: '384px',
                height: '384px',
                background: 'rgba(66, 133, 244, 0.3)'
              }}
            ></div>
          </div>

          <div className="relative z-10" style={{ padding: '48px' }}>
            {/* Top Controls - Pill-shaped buttons */}
            <div className="flex flex-wrap items-center mb-8" style={{ gap: '16px' }}>
              <button
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 font-medium transition-all"
                style={{
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: '1px solid rgba(66, 133, 244, 0.3)',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Learning in Public
              </button>
              <button
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-medium transition-all"
                style={{
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Community Driven
              </button>
              <button
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white font-medium transition-all"
                style={{
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 500,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Open Source
              </button>
            </div>

            {/* Main Content */}
            <div style={{ marginBottom: '32px' }}>
              <div
                className="bg-white/5 backdrop-blur-sm p-6"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  marginBottom: '24px'
                }}
              >
                <p
                  className="text-slate-300"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.6',
                    fontWeight: 400
                  }}
                >
                  "Share your learning journey, document your failures and breakthroughs, and connect with others exploring AI security, development, and beyond."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '16px', marginBottom: '24px' }}>
                <div
                  className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm p-4"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(245, 158, 11, 0.2)'
                  }}
                >
                  <div className="text-amber-400 font-medium mb-1" style={{ fontSize: '14px' }}>Active Community</div>
                  <div className="text-white font-bold" style={{ fontSize: '24px' }}>150+</div>
                  <div className="text-slate-400" style={{ fontSize: '12px' }}>Learners sharing daily</div>
                </div>

                <div
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-4"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(66, 133, 244, 0.2)'
                  }}
                >
                  <div className="text-blue-400 font-medium mb-1" style={{ fontSize: '14px' }}>Learning Paths</div>
                  <div className="text-white font-bold" style={{ fontSize: '24px' }}>25+</div>
                  <div className="text-slate-400" style={{ fontSize: '12px' }}>Topics covered</div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm p-4"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}
                >
                  <div className="text-green-400 font-medium mb-1" style={{ fontSize: '14px' }}>Open Contributions</div>
                  <div className="text-white font-bold" style={{ fontSize: '24px' }}>500+</div>
                  <div className="text-slate-400" style={{ fontSize: '12px' }}>Resources shared</div>
                </div>
              </div>

              <div className="flex items-center text-slate-400" style={{ gap: '8px', fontSize: '14px' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Join the community · Share your story · Grow together</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div
              className="flex flex-wrap items-center justify-between border-t border-white/10"
              style={{ paddingTop: '24px', gap: '16px' }}
            >
              <div className="flex items-center" style={{ gap: '12px' }}>
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 transition-all"
                  title="Save"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in-out'
                  }}
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                  </svg>
                </button>
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 transition-all"
                  title="Share"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in-out'
                  }}
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </button>
                <button
                  className="p-2.5 bg-white/10 hover:bg-white/15 transition-all"
                  title="More"
                  style={{
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in-out'
                  }}
                >
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </button>
              </div>

              <div className="flex items-center" style={{ gap: '12px' }}>
                <button
                  className="px-6 py-3 bg-white text-black font-semibold hover:scale-105 transition-all flex items-center shadow-lg shadow-white/20"
                  style={{
                    borderRadius: '24px',
                    fontSize: '14px',
                    gap: '8px',
                    transitionDuration: '300ms',
                    transitionTimingFunction: 'ease-in-out'
                  }}
                >
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
      <div className="mx-auto px-6" style={{ maxWidth: '1200px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '24px' }}>
          {/* Community Highlights */}
          <div
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm relative overflow-hidden group"
            style={{
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(147, 51, 234, 0.2)'
            }}
          >
            <div
              className="absolute top-0 right-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
              style={{
                width: '256px',
                height: '256px',
                background: 'rgba(147, 51, 234, 0.1)',
                transition: 'opacity 700ms ease-in-out'
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center mb-4" style={{ gap: '8px' }}>
                <div
                  className="bg-purple-500/20 rounded-full flex items-center justify-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-white" style={{ fontSize: '20px' }}>Join Our Community</h3>
              </div>

              <p className="text-slate-400" style={{ fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                Connect with developers, security researchers, and lifelong learners. Share your progress, ask questions, and learn from others' experiences.
              </p>

              <div className="flex mb-4" style={{ marginLeft: '-12px' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium"
                    style={{
                      width: '40px',
                      height: '40px',
                      border: '2px solid #0f172a',
                      fontSize: '12px'
                    }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div
                  className="rounded-full bg-slate-800 flex items-center justify-center text-white font-medium"
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #0f172a',
                    fontSize: '12px'
                  }}
                >
                  +145
                </div>
              </div>

              <button
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center transition-colors"
                style={{
                  fontSize: '14px',
                  gap: '8px',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                View all members
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div
            className="bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm relative overflow-hidden group"
            style={{
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            <div
              className="absolute top-0 right-0 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
              style={{
                width: '256px',
                height: '256px',
                background: 'rgba(16, 185, 129, 0.1)',
                transition: 'opacity 700ms ease-in-out'
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex items-center mb-4" style={{ gap: '8px' }}>
                <div
                  className="bg-green-500/20 rounded-full flex items-center justify-center"
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-white" style={{ fontSize: '20px' }}>Live Activity</h3>
                <span className="ml-auto text-green-400 font-medium" style={{ fontSize: '12px' }}>● Live</span>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div
                  className="flex items-start bg-white/5 p-3"
                  style={{
                    gap: '12px',
                    borderRadius: '8px',
                    marginBottom: '12px'
                  }}
                >
                  <div className="rounded-full bg-green-400" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
                  <div className="flex-1">
                    <p className="text-slate-300" style={{ fontSize: '14px', marginBottom: '4px' }}>Alex shared a new learning path on AI Security</p>
                    <span className="text-slate-500" style={{ fontSize: '12px' }}>2 minutes ago</span>
                  </div>
                </div>

                <div
                  className="flex items-start bg-white/5 p-3"
                  style={{
                    gap: '12px',
                    borderRadius: '8px',
                    marginBottom: '12px'
                  }}
                >
                  <div className="rounded-full bg-blue-400" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
                  <div className="flex-1">
                    <p className="text-slate-300" style={{ fontSize: '14px', marginBottom: '4px' }}>Sarah completed "Intro to Web Security"</p>
                    <span className="text-slate-500" style={{ fontSize: '12px' }}>15 minutes ago</span>
                  </div>
                </div>

                <div
                  className="flex items-start bg-white/5 p-3"
                  style={{
                    gap: '12px',
                    borderRadius: '8px'
                  }}
                >
                  <div className="rounded-full bg-purple-400" style={{ width: '8px', height: '8px', marginTop: '6px' }}></div>
                  <div className="flex-1">
                    <p className="text-slate-300" style={{ fontSize: '14px', marginBottom: '4px' }}>New challenge posted: "Build a secure API"</p>
                    <span className="text-slate-500" style={{ fontSize: '12px' }}>1 hour ago</span>
                  </div>
                </div>
              </div>

              <button
                className="text-green-400 hover:text-green-300 font-medium flex items-center transition-colors"
                style={{
                  fontSize: '14px',
                  gap: '8px',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
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
