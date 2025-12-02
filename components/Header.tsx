import React, { useState, useEffect } from 'react';
// Switched to standard anchor tag to resolve Router Context issues in preview environment

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 h-16 flex items-center justify-between max-w-[1400px] mx-auto">
        {/* Logo Area - Simple white square icon */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-md bg-[#1e1e1e] border border-white/10 flex items-center justify-center hover:border-white/20 transition-colors">
            <div className="w-3 h-3 bg-white rounded-[1px]"></div>
          </div>
        </a>

        {/* Right Aligned Nav */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#journeys" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Journeys</a>
            <a href="/people" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">People</a>
            <a href="/#focus" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Focus</a>
            <a href="/#contributors" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Community</a>
            <a href="/#about" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">About</a>
          </nav>

          <a href="/profile" className="px-4 py-2 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-lg transition-colors border border-white/5">
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;