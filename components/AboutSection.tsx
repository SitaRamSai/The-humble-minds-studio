import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title text-2xl md:text-3xl">About The Humble Minds</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          <a href="https://www.thehumbleminds.com/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-2">The Humble Minds</a> is an open community where passionate individuals share their learning journeys and projects. We're not a platform or organization—we're a collective of curious minds exploring different domains, from AI security to web development, data science, and beyond.
        </p>
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          This is a space for learners, builders, and explorers. Share your learning paths, document your projects, and connect with others on similar journeys. Whether you're just starting out or deep into a specialized field, your contributions matter. Below you'll find some of the current focus areas from our community members—join us and add yours!
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
