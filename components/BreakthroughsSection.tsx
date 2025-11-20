import React from 'react';

const BreakthroughsSection: React.FC = () => {
    return (
        <section className="h-full flex flex-col justify-between p-8">
            <div>
                <h2 className="text-2xl font-bold text-white mb-6 font-serif">This Week's Breakthroughs</h2>

                <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                        <span className="text-xl">✨</span>
                        <div>
                            <p className="text-slate-200 font-medium">Day 30: "The moment recursion finally made sense"</p>
                            <p className="text-slate-500 text-sm">- Alex</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <span className="text-xl">✨</span>
                        <div>
                            <p className="text-slate-200 font-medium">Day 15: "Deployed my first smart contract!"</p>
                            <p className="text-slate-500 text-sm">- Priya</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <span className="text-xl">✨</span>
                        <div>
                            <p className="text-slate-200 font-medium">Day 67: "Built a working XR prototype"</p>
                            <p className="text-slate-500 text-sm">- James</p>
                        </div>
                    </div>
                </div>

                <button className="text-sm text-slate-400 hover:text-white transition-colors mb-8">See all breakthroughs →</button>
            </div>

            <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white mb-2">Join the Movement</h3>
                <p className="text-slate-400 text-sm mb-4">Where humble minds become bold builders.</p>

                <div className="flex flex-col gap-2">
                    <button className="w-full py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-medium text-sm transition-colors">
                        Join Discord Community
                    </button>
                    <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium text-sm transition-colors">
                            Follow on Twitter
                        </button>
                        <button className="flex-1 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium text-sm transition-colors">
                            Contribute on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreakthroughsSection;
