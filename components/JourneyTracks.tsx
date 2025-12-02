import React from 'react';

const tracks = [
    {
        icon: '🔐',
        title: 'AI Security',
        description: 'Exploring adversarial attacks, prompt injection, and defense mechanisms for LLMs.',
        topics: ['Prompt injection', 'Jailbreaking', 'Defense mechanisms'],
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
    {
        icon: '🥽',
        title: 'XR/VR Development',
        description: 'Building immersive experiences with WebXR, Unity, and Three.js.',
        topics: ['WebXR', 'Unity', 'Three.js'],
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20'
    },
    {
        icon: '⛓️',
        title: 'Blockchain & Web3',
        description: 'Understanding smart contracts, DeFi protocols, and decentralized applications.',
        topics: ['Smart contracts', 'DeFi', 'NFTs'],
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20'
    },
    {
        icon: '🔌',
        title: 'IoT & Hardware',
        description: 'Connecting the physical world with sensors, edge computing, and automation.',
        topics: ['Arduino', 'Sensors', 'Edge computing'],
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20'
    }
];

const JourneyTracks: React.FC = () => {
    return (
        <section id="journeys" className="h-full flex flex-col">
            <div className="mb-6 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-1">Our Focus Areas</h2>
                <p className="text-slate-400 text-sm">The technologies we are currently exploring.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                {tracks.map((track, index) => (
                    <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group cursor-default flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg ${track.bg} ${track.border} border flex items-center justify-center text-xl`}>
                                    {track.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight">{track.title}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 flex-grow">
                            <p className="text-slate-300 text-sm leading-relaxed">{track.description}</p>
                        </div>

                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-1.5">
                                {track.topics.map((topic, i) => (
                                    <span key={i} className="px-2 py-1 rounded-md bg-black/20 text-[10px] text-slate-400 border border-white/5">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneyTracks;
