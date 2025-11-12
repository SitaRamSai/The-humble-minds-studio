import React from 'react';
import Card from './Card';

const learningTopics = [
  {
    title: 'Adversarial Attacks on LLMs',
    description: 'Exploring techniques like prompt injection, data poisoning, and model inversion to understand model vulnerabilities.',
    tags: ['Prompt Engineering', 'Data Security', 'LLM'],
  },
  {
    title: 'Blockchain Security',
    description: 'Investigating smart contract vulnerabilities, consensus mechanism attacks, and cryptographic implementations in decentralized systems.',
    tags: ['Blockchain', 'Cryptography', 'Web3'],
  },
  {
    title: 'AR/VR/XR Security',
    description: 'Examining privacy risks, data leakage, and attack vectors in augmented, virtual, and extended reality environments.',
    tags: ['AR/VR', 'Privacy', 'Immersive Tech'],
  },
];

const LearningSection: React.FC = () => {
  return (
    <section id="learning">
      <h2 className="section-title">Community Learning Paths</h2>
      <p className="section-subtitle">
        Explore what community members are learning. These are real learning journeys from contributors. Add your own learning path to inspire others!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningTopics.map((topic, index) => (
          <Card key={index} title={topic.title} description={topic.description} tags={topic.tags} />
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
