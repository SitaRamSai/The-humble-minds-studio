import React from 'react';

const ContributorSpotlight: React.FC = () => {
  return (
    <section aria-labelledby="contributor-spotlight">
      <h2 id="contributor-spotlight" className="section-title">
        Contributor Spotlight
      </h2>
      <p className="section-subtitle">
        Celebrate the Humble Minds members who champion collaboration and lift the community with their curiosity.
      </p>
      <div className="connect-card">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
            🛡️
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Sitaram</h3>
            <p className="text-sm font-medium text-blue-600">Community Security Researcher</p>
            <p className="text-sm text-slate-500 mt-2">
              Leads collaborative threat-modelling sessions and documents best practices so every Humble Mind can build safer, more transparent AI systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorSpotlight;
