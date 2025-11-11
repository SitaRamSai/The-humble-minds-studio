import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="container mx-auto px-4 py-3 flex justify-between h-full items-center">
        <div className="header-unique-font text-2xl md:text-3xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            The Humble Minds
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#learning" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Learning
          </a>
          <a href="#connect" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            Connect
          </a>
          <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
