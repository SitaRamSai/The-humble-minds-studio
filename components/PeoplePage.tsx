import React from 'react';

interface Contributor {
    id: string;
    name: string;
    role: string;
    initials: string;
    bio: string;
    contributingTo: string[];
    color: string;
}

const contributors: Contributor[] = [
    {
        id: '1',
        name: 'Sita Ram',
        role: 'Security Researcher',
        initials: 'SR',
        bio: 'Exploring adversarial attacks on LLMs and documenting defense mechanisms.',
        contributingTo: ['Adversarial ML', 'LLM Security', 'Red Teaming'],
        color: 'bg-blue-500'
    }
];

const PeoplePage: React.FC = () => {
    return (
        <div className="min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">The Builders</h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Meet the minds behind the code. These are the people documenting their journeys and contributing to the collective knowledge.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {contributors.map((person) => (
                        <div key={person.id} className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">

                            {/* Header: Avatar + Name */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full ${person.color}/20 border border-${person.color}/30 flex items-center justify-center text-white font-bold text-lg`}>
                                        {person.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{person.name}</h3>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider">{person.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-slate-300 text-sm leading-relaxed mb-6 min-h-[60px]">
                                {person.bio}
                            </p>

                            {/* Contributing To */}
                            <div className="border-t border-white/5 pt-4">
                                <p className="text-xs text-slate-500 mb-3 font-medium">CONTRIBUTING TO</p>
                                <div className="flex flex-wrap gap-2">
                                    {person.contributingTo.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 rounded-md bg-black/20 text-[10px] text-slate-400 border border-white/5 group-hover:border-white/10 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action */}
                            <div className="mt-6 pt-4 flex justify-end">
                                <button className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 flex items-center gap-1">
                                    View Profile <span className="text-lg">→</span>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PeoplePage;
