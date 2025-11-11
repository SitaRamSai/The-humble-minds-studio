import React from 'react';
import Card from './Card';

const learningTopics = [
  {
    title: 'Adversarial Attacks on LLMs',
    description: 'Exploring techniques like prompt injection, data poisoning, and model inversion to understand model vulnerabilities.',
    tags: ['Prompt Engineering', 'Data Security', 'LLM'],
  },
  {
    title: 'Differential Privacy',
    description: 'Studying methods to ensure individual data privacy within large datasets used for training AI, adding mathematical guarantees of anonymity.',
    tags: ['Privacy', 'Cryptography', 'Data Science'],
  },
  {
    title: 'Federated Learning Security',
    description: 'Understanding vulnerabilities in distributed machine learning systems and developing defenses against model poisoning and inference attacks.',
    tags: ['Distributed Systems', 'MLOps', 'Security'],
  },
];

const LearningSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title">Sitaram's Learning Path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {learningTopics.map((topic, index) => (
           <div key={index}>
             <Card title={topic.title} description={topic.description} tags={topic.tags} />
           </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
