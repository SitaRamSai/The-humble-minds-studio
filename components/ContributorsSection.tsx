import React from 'react';

const contributors = [
  {
    name: 'Sitaram',
    focus: 'AI Security',
    description: 'Exploring adversarial attacks on LLMs, secure AI development practices, and emerging threats in generative AI systems.',
    tags: ['AI Security', 'Red Teaming', 'LLM Safety'],
    github: '#', // Replace with actual GitHub URL
  },
];

const ContributorsSection: React.FC = () => {
  return (
    <section id="contributors">
      <h2 className="section-title">Active Contributors</h2>
      <p className="section-subtitle">
        Meet the community members who are actively sharing their learning journeys. Want to be featured? Share your work and join the conversation!
      </p>
      <div className="flex flex-col gap-4">
        {contributors.map((contributor, index) => (
          <div
            key={index}
            className="content-card"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{contributor.name}</h3>
                <span className="tag-pill">{contributor.focus}</span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {contributor.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {contributor.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {contributor.github && contributor.github !== '#' && (
                <a
                  href={contributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-500 text-sm font-semibold inline-flex items-center gap-1 mt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  View profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContributorsSection;
