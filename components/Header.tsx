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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Link to="/">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
              H
            </div>
          </Link>
          <Link to="/" className="text-xl font-bold tracking-tight text-white">Humble Minds</Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/#learning" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Journeys</a>
          <a href="/#focus" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Focus</a>
          <a href="/#contributors" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Community</a>
          <a href="/#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</a>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/profile" className="hidden md:flex text-sm font-medium text-white hover:text-blue-400 transition-colors">
            Profile
          </Link>
          <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
            Join Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
