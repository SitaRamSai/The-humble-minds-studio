import React from 'react';
import { Link } from 'react-router-dom';

const BentoGridSection: React.FC = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

                    {/* 1. Active Topics (Focus) - Spans 2 columns */}
                    <div className="md:col-span-2 bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-9xl">🎯</span>
                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                <h2 className="text-sm font-bold text-purple-400 uppercase tracking-wider">Active Topics</h2>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">What we're building</h3>
                            <p className="text-slate-400 mb-8 max-w-md">The core technologies and security challenges our community is currently tackling.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'Adversarial Attacks', count: 'High Activity', trend: '+100%' },
                                    { name: 'LLM Security', count: 'New', trend: 'Rising' },
                                    { name: 'Red Teaming', count: 'Steady', trend: 'Stable' },
                                    { name: 'Prompt Injection', count: 'Critical', trend: 'Hot' }
                                ].map((topic, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5">
                                        <span className="text-slate-200 font-medium">{topic.name}</span>
                                        <span className="text-xs text-slate-500">{topic.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 2. People (Builders) - Spans 1 column, 2 rows height */}
                    <div className="md:row-span-1 bg-gradient-to-b from-blue-900/20 to-purple-900/20 border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">👥</span>
                                <h2 className="text-sm font-bold text-blue-400 uppercase tracking-wider">The Builders</h2>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Meet the Minds</h3>
                            <p className="text-slate-400 mb-8">
                                A directory of learners, researchers, and engineers documenting their journey.
                            </p>

                            <div className="flex -space-x-3 mb-8">
                                {['SR'].map((initial, i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-white ${['bg-blue-500'][i]}`}>
                                        {initial}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href="/people" className="w-full py-4 bg-white text-black rounded-xl font-bold text-center hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 relative z-10">
                            View All People
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoGridSection;
