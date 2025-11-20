import React from 'react';

const tracks = [
    {
        icon: '🔐',
        title: 'AI Security',
        active: 15,
        latest: '"Red teaming GPT-4"',
        topics: ['Prompt injection', 'Jailbreaking', 'Defense mechanisms'],
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
    {
        icon: '🥽',
        title: 'XR/VR Development',
        active: 8,
        latest: '"Building my first AR app"',
        topics: ['WebXR', 'Unity', 'Three.js'],
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20'
    },
    {
        icon: '⛓️',
        title: 'Blockchain & Web3',
        active: 23,
        latest: '"100 days of Solidity"',
        topics: ['Smart contracts', 'DeFi', 'NFTs'],
        color: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20'
    },
    {
        icon: '🔌',
        title: 'IoT & Hardware',
        active: 6,
        latest: '"Raspberry Pi home automation"',
        topics: ['Arduino', 'Sensors', 'Edge computing'],
        color: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20'
    }
];

const JourneyTracks: React.FC = () => {
    return (
        <section id="journeys" className="h-full flex flex-col">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-1">Learning Tracks</h2>
                <p className="text-slate-400 text-sm">Pick your adventure, find your tribe.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow overflow-y-auto pb-2">
                {tracks.map((track, index) => (
                    <div key={index} className="bg-white/5 border border-white/5 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group cursor-pointer flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg ${track.bg} ${track.border} border flex items-center justify-center text-xl`}>
                                    {track.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight group-hover:text-white transition-colors">{track.title}</h3>
                                    <p className={`text-xs font-medium ${track.color}`}>{track.active} active journeys</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 flex-grow">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-semibold">Latest</p>
                            <p className="text-slate-300 text-sm italic">{track.latest}</p>
                        </div>

                        <div className="mt-auto">
                            <p className="text-xs text-slate-500 mb-2">Trending topics:</p>
                            <div className="flex flex-wrap gap-1.5">
                                {track.topics.map((topic, i) => (
                                    <span key={i} className="px-2 py-1 rounded-md bg-black/20 text-[10px] text-slate-400 border border-white/5">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                            <span className="text-xs text-slate-500">Join track</span>
                            <span className="text-xs text-white group-hover:translate-x-1 transition-transform">Explore →</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JourneyTracks;
