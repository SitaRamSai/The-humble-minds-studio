import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-serif">
          We believe in<br />
          <span className="text-stone-500">open learning.</span>
        </h2>
      </div>
      <div className="flex-1 space-y-6 text-lg text-slate-400 font-light leading-relaxed">
        <p>
          <strong className="text-white font-medium">The Humble Minds</strong> is not just a platform; it's a movement. We are a collective of curious minds who believe that the best way to learn is to do it in public.
        </p>
        <p>
          We document our failures, share our breakthroughs, and build together. Whether you're exploring AI security, Web3, or the next frontier of tech, you don't have to do it alone.
        </p>
        <div className="pt-4">
          <a href="#" className="text-white border-b border-white/20 hover:border-white pb-1 transition-all">Read our full manifesto →</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
