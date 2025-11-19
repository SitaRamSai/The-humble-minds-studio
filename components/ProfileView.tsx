import React from 'react';
import JourneyCard from './JourneyCard';

const ProfileView: React.FC = () => {
    return (
        <div className="animate-rise">
            {/* Profile Header */}
            <div className="relative mb-12">
                <div className="h-48 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/5 mb-[-3rem]"></div>
                <div className="px-8 flex items-end justify-between">
                    <div className="flex items-end gap-6">
                        <div className="w-32 h-32 rounded-full bg-black border-4 border-black relative z-10 overflow-hidden">
                            SR
                        </div>
                        <div className="mb-4">
                            <h1 className="text-3xl font-bold text-white">Sita Ram</h1>
                            <p className="text-slate-400">Security Researcher • LLM Adversary</p>
                        </div>
                    </div>
                    <div className="mb-4 flex gap-3">
                        <button className="px-6 py-2 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                            Follow
                        </button>
                        <button className="px-6 py-2 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-colors">
                            Message
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar Stats */}
                <div className="col-span-1 space-y-6">
                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Community Stats</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-white">Journeys Active</span>
                                <span className="text-blue-400 font-mono">1</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white">Contributions</span>
                                <span className="text-purple-400 font-mono">12</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-white">Followers</span>
                                <span className="text-white font-mono">42</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5">
                        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-4">Focus Areas</h3>
                        <div className="flex flex-wrap gap-2">
                            {['Adversarial ML', 'LLM Security', 'Python', 'Red Teaming'].map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Active Journeys</h2>
                        <div className="grid gap-4">
                            <JourneyCard
                                title="Adversarial Attacks on LLMs"
                                author="Sita Ram"
                                role="Security Researcher"
                                progress={45}
                                tags={['LLM', 'Security', 'Adversarial']}
                            />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6">Completed Paths</h2>
                        <div className="grid gap-4 opacity-75 hover:opacity-100 transition-opacity">
                            <p className="text-slate-500 italic">No completed paths yet.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;
