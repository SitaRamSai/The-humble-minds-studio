import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about">
      <h2 className="section-title text-2xl md:text-3xl font-semibold">About this space</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          <a href="https://www.thehumbleminds.com/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200 underline underline-offset-2">The Humble Minds</a> started as a simple idea: what if we learned in public and shared our journeys with each other? We're not a platform or formal organization—just a group of people exploring different fields, from AI security to web development, data science, and whatever else catches our curiosity.
        </p>
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          Whether you're just starting out or deep into something specialized, you're welcome to share what you're working on. There's no pressure to be an expert—we're all learning. If you want to add your learning path or project to this site, reach out. The more diverse our journeys, the more interesting this becomes.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
