import React from 'react';

interface JourneyCardProps {
    title: string;
    author: string;
    role: string;
    progress: number;
    tags: string[];
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, author, role, progress, tags }) => {
    return (
        <div className="group relative bg-neutral-900/50 border border-white/5 rounded-xl p-5 hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer hover:border-white/10 hover:-translate-y-1">
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                            <span className="text-slate-300">{author}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-600" />
                            <span>{role}</span>
                        </div>
                    </div>
                    <div className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                        {progress}%
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-neutral-800 h-1.5 rounded-full mb-4 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-xs text-slate-400 border border-white/5 bg-white/5 px-2 py-1 rounded-md group-hover:border-white/10 transition-colors">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JourneyCard;
