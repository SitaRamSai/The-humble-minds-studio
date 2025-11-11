import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title">About This Hub</h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <p className="text-gray-300 leading-relaxed">
          This AI Security Hub is a dedicated space within the larger <a href="https://www.thehumbleminds.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">The Humble Minds</a> community. While our community explores many topics, this corner is my personal initiative to document and share a continuous journey into the world of AI security.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4 md:mt-0">
          The goal is to foster a transparent, security-first culture in AI development. By sharing my learning path, focus areas, and findings, I hope to provide valuable insights for practitioners, researchers, and enthusiasts alike. This is a place for collaborative learning and open discussion.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
