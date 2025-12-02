import React from 'react';

const ContributorsSection: React.FC = () => {
  return (
    <section id="contributors" className="h-full flex flex-col justify-center p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 font-serif">Community Impact</h2>
        <p className="text-slate-400 text-sm">How journeys inspire journeys.</p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4 items-start">
          <div className="w-1 bg-blue-500/50 h-full rounded-full min-h-[40px]"></div>
          <p className="text-lg text-slate-200 font-light leading-relaxed">
            "Sita Ram's AI Security notes helped <span className="text-blue-400 font-medium">45 people</span> get unstuck"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
