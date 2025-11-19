import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-[#1f1f1f]/95 backdrop-blur-xl' : 'bg-[#1f1f1f]'
      }`}
      style={{
        fontFamily: "'Google Sans', 'Inter', -apple-system, sans-serif",
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Top Announcement Banner */}
      <div
        className="bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-pink-600/15"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="flex items-center justify-end gap-2 py-2">
            <span
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20"
              style={{
                border: '1px solid rgba(59, 130, 246, 0.3)',
                fontSize: '12px',
                fontWeight: 500
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400">New</span>
            </span>
            <span
              className="text-slate-200"
              style={{ fontSize: '12px', fontWeight: 500 }}
            >
              Community Challenges Live
            </span>
            <span
              className="text-slate-400"
              style={{ fontSize: '12px' }}
            >
              · Share your journey and win recognition
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="flex items-center justify-between" style={{ height: '64px' }}>
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Icon */}
            <div
              className="bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                fontSize: '14px',
                transitionDuration: '300ms',
                transitionTimingFunction: 'ease-in-out'
              }}
            >
              H
            </div>
            {/* Logo Text */}
            <span
              className="text-white font-semibold tracking-tight"
              style={{
                fontSize: '16px',
                letterSpacing: '-0.01em'
              }}
            >
              The Humble Minds
            </span>
          </Link>

          {/* Right Side Navigation */}
          <div className="flex items-center gap-8">
            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/#learning"
                className="text-slate-400 hover:text-white transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Learning Paths
              </a>
              <a
                href="/#focus"
                className="text-slate-400 hover:text-white transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Our Focus
              </a>
              <a
                href="/#contributors"
                className="text-slate-400 hover:text-white transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Community
              </a>
              <a
                href="/#about"
                className="text-slate-400 hover:text-white transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Case Studies
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Link
                to="/profile"
                className="hidden md:flex text-slate-400 hover:text-white transition-colors"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Profile
              </Link>
              <button
                className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white font-medium transition-all"
                style={{
                  fontSize: '14px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-in-out'
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
