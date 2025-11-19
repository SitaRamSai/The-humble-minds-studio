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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#1f1f1f]/95 backdrop-blur-xl' : 'bg-[#1f1f1f]'
        } border-b border-white/5`}
      style={{ fontFamily: "'Inter', -apple-system, sans-serif" }}
    >
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-7xl py-2">
          <div className="flex items-center justify-end gap-2 text-xs">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-green-400 font-medium">New</span>
            </span>
            <span className="text-slate-300 font-medium">Community Challenges Live</span>
            <span className="text-slate-400">· Share your journey and win recognition</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/20">
              H
            </div>
            <span className="text-base font-semibold tracking-tight text-white" style={{ letterSpacing: '-0.01em' }}>
              The Humble Minds
            </span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#learning" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Learning Paths
            </a>
            <a href="/#focus" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Our Focus
            </a>
            <a href="/#contributors" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              Contributors
            </a>
            <a href="/#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300">
              About Us
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/profile"
              className="hidden md:flex text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300"
            >
              Profile
            </Link>
            <button className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-full transition-all duration-300 border border-white/10 hover:border-white/20">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
