import React from 'react';
import Card from './Card';

const focusAreas = [
    {
    title: 'Red Teaming for Generative AI',
    description: 'Developing novel strategies to proactively identify and mitigate security flaws in generative models before they are exploited.',
    tags: ['Red Teaming', 'GenAI', 'Proactive Security'],
  },
  {
    title: 'Secure AI Development Lifecycles (SAIDL)',
    description: 'Integrating security best practices into every stage of AI model development, from data collection to deployment and monitoring.',
    tags: ['DevSecOps', 'AI Governance', 'MLOps'],
  },
  {
    title: 'Explainable AI (XAI) for Threat Detection',
    description: 'Leveraging XAI techniques to understand and debug security-critical AI decisions, improving trust and reliability of automated defense systems.',
    tags: ['XAI', 'Threat Intelligence', 'Model Interpretability'],
  },
];

const FocusSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title text-2xl md:text-3xl font-semibold">Where we're going deep</h2>
      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
        Some areas where community members are spending time and building expertise.
        From AI security to development practices—these are our current deep dives.
      </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {focusAreas.map((area, index) => (
          <div key={index}>
            <Card title={area.title} description={area.description} tags={area.tags} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FocusSection;
