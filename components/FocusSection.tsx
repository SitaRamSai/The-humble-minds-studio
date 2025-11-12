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
    <section id="focus">
      <h2 className="section-title">Community Focus Areas</h2>
      <p className="section-subtitle">
        Discover what community members are focusing on. From AI security to development best practices—see where people are diving deep and share your own expertise.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {focusAreas.map((area, index) => (
          <Card key={index} title={area.title} description={area.description} tags={area.tags} />
        ))}
      </div>
    </section>
  );
};

export default FocusSection;
