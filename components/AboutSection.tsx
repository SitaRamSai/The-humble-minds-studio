import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title">About The Humble Minds</h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <p className="text-gray-300 leading-relaxed">
          <a href="https://www.thehumbleminds.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">The Humble Minds</a> is an open community where passionate individuals share their learning journeys and projects. We're not a platform or organization—we're a collective of curious minds exploring different domains.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4 md:mt-0">
          Sitaram is one of our contributors who's diving deep into AI security. This space documents his learning path, focus areas, and findings. If you're interested in AI security, you can follow along, learn from his journey, and even contribute your own insights. Everyone is welcome to join and share what they're working on.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
