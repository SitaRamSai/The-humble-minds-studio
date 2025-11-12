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
      <h2 className="section-title text-2xl md:text-3xl font-semibold">What people are learning</h2>
      <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
        Here's what some of us are exploring right now. These are real learning journeys from people like Sitaram.
        Feel free to reach out if something resonates with you!
      </p>
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
