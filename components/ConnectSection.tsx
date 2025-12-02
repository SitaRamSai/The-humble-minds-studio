import React from 'react';

const ConnectSection: React.FC = () => {
  return (
    <section id="connect" className="py-32 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Massive Branding */}
      <h1 className="text-[12vw] leading-none font-black text-white/10 tracking-tighter select-none pointer-events-none text-center">
        THE HUMBLE<br />MINDS
      </h1>

      {/* Follow Us Section - Overlaying or below */}
      <div className="mt-12 flex flex-col items-center gap-6 z-10">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-[0.2em]">Follow Us</p>

        <div className="flex items-center gap-8">
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-white/20 underline-offset-4">
            Discord
          </a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-white/20 underline-offset-4">
            Twitter
          </a>
          <a href="https://github.com/thehumbleminds" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium hover:underline decoration-white/20 underline-offset-4">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
