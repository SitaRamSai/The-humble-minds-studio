import React from 'react';
import JourneyCard from './JourneyCard';

const communityPaths = [
  {
    title: 'Adversarial Attacks on LLMs',
    author: 'Sita Ram',
    role: 'Security Researcher',
    progress: 45,
    tags: ['LLM', 'Security', 'Adversarial'],
  },
];

const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="h-full flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Community Paths</h2>
        <p className="text-slate-400">Real learning journeys happening now.</p>
      </div>

      <div className="grid gap-4 flex-grow">
        {communityPaths.map((path, index) => (
          <JourneyCard
            key={index}
            title={path.title}
            author={path.author}
            role={path.role}
            progress={path.progress}
            tags={path.tags}
          />
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-2 w-full group">
          View all paths
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </section>
  );
};

export default LearningSection;
