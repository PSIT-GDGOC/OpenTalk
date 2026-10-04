import React from 'react';
import { Compass, Flame, Sparkles, Code2, ShieldAlert, Hash } from 'lucide-react';

export const Sidebar = ({ currentTab, onSelectTab }) => {
  const navItems = [
    { id: 'feed', label: 'Explore Feed', icon: Compass },
    { id: 'trending', label: 'Trending Debates', icon: Flame },
    { id: 'campus', label: 'GDGOC Hub', icon: Sparkles },
    { id: 'opensource', label: 'Open Source Sprint', icon: Code2 },
    { id: 'moderation', label: 'Trust & Moderation', icon: ShieldAlert },
  ];

  const topics = [
    { name: 'flutter-vs-react', count: 128 },
    { name: 'cloud-functions', count: 74 },
    { name: 'firebase-emulators', count: 96 },
    { name: 'gdgoc-sprint-2026', count: 215 },
  ];

  return (
    <aside className="w-64 space-y-6 hidden lg:block">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-slate-800/80">
        <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Popular Tags
        </h3>
        <div className="space-y-1">
          {topics.map((t) => (
            <button
              key={t.name}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-indigo-400 hover:bg-slate-900/60 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Hash className="w-3.5 h-3.5 text-slate-500" />
                <span>{t.name}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-600">{t.count}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
