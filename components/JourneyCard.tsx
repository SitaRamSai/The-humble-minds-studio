import React from 'react';

interface JourneyCardProps {
    title: string;
    author: string;
    role: string;
    progress: number;
    tags: string[];
    image?: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, author, role, progress, tags, image }) => {
    return (
        <div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-sm font-bold text-white">
                            {author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">{author}</p>
                            <p className="text-xs text-neutral-400">{role}</p>
                        </div>
                    </div>
                    <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full border border-blue-500/20">
                        {progress}%
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                <div className="w-full bg-neutral-800 h-1.5 rounded-full mb-4 overflow-hidden">
                    <div
                        className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-400"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-xs text-neutral-500 border border-white/5 px-2 py-1 rounded-md">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneyCard;
