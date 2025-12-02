import React from 'react';

type UpdateType = 'entry' | 'start' | 'ask' | 'milestone' | 'resource';

interface ActivityUpdate {
    id: string;
    author: string;
    role: string;
    avatarColor: string;
    timeAgo: string;
    type: UpdateType;
    stats: string;
    content: string;
    tags: string[];
}

const updates: ActivityUpdate[] = [
    {
        id: '1',
        author: 'Sita Ram',
        role: 'AI Security Researcher',
        avatarColor: 'bg-blue-600',
        timeAgo: '2 hours ago',
        type: 'entry',
        stats: 'Day 47 • 234 followers',
        content: '"Finally cracked prompt injection! Here\'s what clicked..."',
        tags: ['PromptInjection', 'AISecurity'],
    },
];

const CommunityPulse: React.FC = () => {
    return (
        <section className="h-full flex flex-col">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white mb-1">Live Learning Feed</h2>
                    <p className="text-slate-400 text-sm">Real updates from real journeys.</p>
                </div>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                {updates.map((update) => (
                    <div key={update.id} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
                        <div className="flex items-start gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-full ${update.avatarColor} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
                                {update.author[0]}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-0.5">
                                    <h3 className="text-sm font-bold text-white truncate">{update.author}</h3>
                                    <span className="text-xs text-slate-500">Posted {update.timeAgo}</span>
                                </div>
                                <p className="text-xs text-slate-400">{update.role}</p>
                                <p className="text-xs text-slate-500 mt-0.5">{update.stats}</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-200 mb-3 font-medium leading-relaxed">
                            {update.content}
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                {update.tags.map((tag, i) => (
                                    <span key={i} className="text-xs text-blue-400 hover:text-blue-300">#{tag}</span>
                                ))}
                            </div>
                            <button className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                                View journey <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                <button className="text-sm text-slate-400 hover:text-white transition-colors">View all journeys</button>
            </div>
        </section>
    );
};

export default CommunityPulse;
