import React from 'react';

const activeLearners = [
  { name: 'Sita Ram', status: 'Adversarial attacks on LLMs', avatar: 'SR' },
];

const ContributorsSection: React.FC = () => {
  return (
    <section id="contributors" className="h-full flex flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Active Learners</h2>
        <p className="text-slate-400 text-sm">People growing right now.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {activeLearners.map((learner, index) => (
          <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-white font-bold mb-2 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
              {learner.avatar}
            </div>
            <span className="text-xs font-medium text-white mb-1">{learner.name}</span>
            <span className="text-[10px] text-slate-500 leading-tight max-w-[80px]">{learner.status}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-6 text-center">
        <p className="text-xs text-slate-500 mb-3">Join 42 others online</p>
        <div className="flex justify-center -space-x-2">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
