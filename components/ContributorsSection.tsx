import React from 'react';

const contributors = [
  {
    name: 'Sitaram',
    role: 'Community Member',
    focus: 'AI Security & Machine Learning',
    avatar: '🔐',
    description: 'Exploring adversarial attacks, federated learning security, and building secure AI systems.',
  },
  // Add more contributors as they join
];

const ContributorsSection: React.FC = () => {
  return (
    <section id="contributors">
      <h2 className="section-title">Our Contributors</h2>
      <p className="section-subtitle">
        Meet the passionate individuals who make The Humble Minds community vibrant. Each member brings unique perspectives and learning experiences to share.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="content-card">
            <div className="flex items-start gap-3 mb-3">
              <div className="text-4xl">{contributor.avatar}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  {contributor.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-1">
                  {contributor.role}
                </p>
                <p className="text-xs text-slate-500 font-semibold mb-2">
                  {contributor.focus}
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {contributor.description}
            </p>
          </div>
        ))}
        <div className="content-card border-dashed border-2 border-slate-300 flex flex-col items-center justify-center text-center p-6 min-h-[200px]">
          <div className="text-5xl mb-3 opacity-40">✨</div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">
            Your Spot Awaits
          </h3>
          <p className="text-sm text-slate-500 mb-4">
            Join our community and share your learning journey with others
          </p>
          <a href="#connect" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            Get started →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;
