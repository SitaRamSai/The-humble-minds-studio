import React from 'react';

interface JourneyCardProps {
    author: string;
    topic: string;
    daysActive: number;
    postCount: number;
    followerCount: number;
    latestSnippet: string;
    tags: string[];
    avatarColor?: string;
}

                </h3 >

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
            </div >
        </div >
    );
};

export default JourneyCard;
