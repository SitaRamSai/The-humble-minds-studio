import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-8 md:p-16">

      {/* 1. How It Works */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight font-serif">How It Works</h2>
          <p className="text-slate-400 text-lg">Your learning journey becomes someone's roadmap.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-2xl mx-auto md:mx-0">1</div>
            <h3 className="text-xl font-bold text-white">Start where you are</h3>
            <p className="text-slate-400 leading-relaxed">
              Pick any technology. No prerequisites. No gatekeeping. Whether it's Day 1 or Day 100, your journey matters.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-2xl mx-auto md:mx-0">2</div>
            <h3 className="text-xl font-bold text-white">Document everything</h3>
            <p className="text-slate-400 leading-relaxed">
              Share daily logs, weekly reflections, resources that helped, code that broke, moments of clarity. Raw and real beats polished and perfect.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-bold text-2xl mx-auto md:mx-0">3</div>
            <h3 className="text-xl font-bold text-white">Follow and be followed</h3>
            <p className="text-slate-400 leading-relaxed">
              Find others on similar paths. Learn from those ahead. Guide those behind. We all started at Day 1.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Why Document Your Learning */}
      <div className="mb-20 p-8 md:p-12 bg-white/5 border border-white/5 rounded-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center font-serif">Why Document Your Learning?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl mb-2">📝</div>
            <h3 className="text-white font-bold mb-1">Accountability</h3>
            <p className="text-slate-400 text-sm">Public commitment keeps you going</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🤝</div>
            <h3 className="text-white font-bold mb-1">Find Your People</h3>
            <p className="text-slate-400 text-sm">Connect with others on the same struggle</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📈</div>
            <h3 className="text-white font-bold mb-1">See Your Growth</h3>
            <p className="text-slate-400 text-sm">Your Day 1 self won't recognize Day 30 you</p>
          </div>
          <div>
            <div className="text-2xl mb-2">💡</div>
            <h3 className="text-white font-bold mb-1">Help Others</h3>
            <p className="text-slate-400 text-sm">Your confusion today is someone's solution tomorrow</p>
          </div>
        </div>
      </div>

      {/* 4. Final CTA */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">Ready to dive in?</h2>
        <p className="text-slate-400 text-lg mb-8">Join us on GitHub and start exploring.</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/thehumbleminds" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-black rounded-lg font-bold hover:bg-slate-200 transition-colors">
            View on GitHub
          </a>
          <a href="#connect" className="px-6 py-3 bg-transparent text-white border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors">
            Connect with Us
          </a>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
