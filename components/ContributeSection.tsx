import React from 'react';

const ContributeSection: React.FC = () => {
  return (
    <section id="contribute">
      <h2 className="section-title">How to Contribute</h2>
      <p className="section-subtitle">
        Share your learning journey, document your research, or contribute to ongoing projects. Every perspective adds value—from beginner tutorials to advanced research papers.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="content-card">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Share Your Learning Journey</h3>
          <p className="text-slate-600 leading-relaxed">Publish your learning paths and what you’re exploring—help others follow along and collaborate.</p>
        </div>
        <div className="content-card">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Document Your Research</h3>
          <p className="text-slate-600 leading-relaxed">Write up findings, experiments, and insights across AI, blockchain, XR, and more.</p>
        </div>
        <div className="content-card">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Contribute to Projects</h3>
          <p className="text-slate-600 leading-relaxed">Jump into open issues, build tools, or improve docs—every contribution helps.</p>
        </div>
        <div className="content-card">
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Join the Conversation</h3>
          <p className="text-slate-600 leading-relaxed">Connect via GitHub, LinkedIn, and X to collaborate with the community.</p>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;

