import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="container mx-auto px-4 py-3 flex justify-between h-full items-center">
        <div className="header-unique-font text-xl md:text-2xl font-semibold tracking-normal">
          <span className="text-gray-200">
            The Humble Minds
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-normal">
          <a href="#learning" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
            What we're learning
          </a>
          <a href="#connect" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
            Connect
          </a>
          <a href="#about" className="text-gray-400 hover:text-gray-200 transition-colors duration-200">
            About
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
