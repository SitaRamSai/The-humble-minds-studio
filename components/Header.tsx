import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <nav className="container mx-auto px-4 py-3 flex justify-center h-full items-center">
        <div className="header-unique-font text-3xl font-bold tracking-widest text-center w-full">
          The Humble Minds
        </div>
      </nav>
    </header>
  );
};

export default Header;
