import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section>
      <h2 className="section-title">About The Humble Minds</h2>
      <div className="grid md:grid-cols-2 gap-x-8">
        <p className="text-slate-600 leading-relaxed">
          <a
            href="https://www.thehumbleminds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-500 font-semibold"
          >
            The Humble Minds
          </a>{' '}
          is an open community where passionate individuals share their learning journeys and projects. We're not a platform or organization—we're a collective of curious minds exploring different domains, from AI security to web development, data science, and beyond.
        </p>
        <p className="text-slate-600 leading-relaxed mt-4 md:mt-0">
          This is a space for learners, builders, and explorers. Share your learning paths, document your projects, and connect with others on similar journeys. Whether you're just starting out or deep into a specialized field, your contributions matter. Below you'll find some of the current focus areas from our community members—join us and add yours!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
