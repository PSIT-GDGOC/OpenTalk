import React from 'react';
import { Flame, TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const TRENDING_TOPICS = [
  { id: '1', name: 'Serverless Cloud Functions vs Dedicated Microservices', category: 'tech', postCount: 240, trendingScore: 98 },
  { id: '2', name: 'GDGOC Open Source Sprint 2026 Kickoff', category: 'open-source', postCount: 180, trendingScore: 95 },
  { id: '3', name: 'Flutter Web vs Next.js performance in 2026', category: 'tech', postCount: 145, trendingScore: 89 },
  { id: '4', name: 'Should students contribute to Documentation or Code first?', category: 'career', postCount: 92, trendingScore: 82 },
];

export const TrendingHub = () => {
  return (
    <div className="w-80 space-y-6 hidden xl:block">
      <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
        <div className="flex items-center space-x-2 mb-4">
          <Flame className="w-5 h-5 text-amber-400" />
          <h2 className="font-bold text-sm text-slate-100">Trending Debates</h2>
        </div>

        <div className="space-y-3">
          {TRENDING_TOPICS.map((topic, index) => (
            <div
              key={topic.id}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/50 hover:border-indigo-500/40 cursor-pointer transition-all group"
            >
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                <span className="font-mono text-indigo-400">0{index + 1} • {topic.category}</span>
                <span className="flex items-center text-emerald-400 font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {topic.trendingScore}%
                </span>
              </div>
              <h4 className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-2">
                {topic.name}
              </h4>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-900 text-[11px] text-slate-500">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1 text-slate-600" />
                  {topic.postCount} stances
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
