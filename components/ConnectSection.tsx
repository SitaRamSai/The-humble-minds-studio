import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <section id="connect" className="h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-white mb-6">Join the<br />Conversation.</h2>

      <div className="space-y-4">
        <a href="#" className="block p-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-105 transition-transform text-center">
          Join Discord Community
        </a>
        <a href="#" className="block p-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors text-center">
          Follow on Twitter
        </a>
        <a href="#" className="block p-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors text-center">
          Contribute on GitHub
        </a>
      </div>
    </section>
  );
};

export default ConnectSection;
