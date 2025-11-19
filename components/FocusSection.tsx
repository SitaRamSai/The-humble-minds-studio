import React from 'react';

const activeTopics = [
  { name: 'Adversarial Attacks', count: 1, trend: '+100%' },
  { name: 'LLM Security', count: 1, trend: 'new' },
  { name: 'Red Teaming', count: 1, trend: 'rising' },
];

const FocusSection: React.FC = () => {
  return (
    <section id="focus" className="h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
          <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Active Topics</h2>
        </div>
        <p className="text-slate-400 text-sm">What we're building right now.</p>
      </div>

      <div className="flex flex-col gap-3 flex-grow">
        {activeTopics.map((topic, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="text-slate-200 font-medium group-hover:text-white transition-colors">{topic.name}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">{topic.count} active</span>
              <span className={`text-xs font-mono ${topic.trend.includes('+') ? 'text-green-400' : 'text-slate-500'}`}>
                {topic.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusSection;
