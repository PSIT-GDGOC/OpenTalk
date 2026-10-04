import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const DebateModal = ({ post, onClose }) => {
  const { user } = useAuth();
  const [stanceSide, setStanceSide] = useState('support');
  const [content, setContent] = useState('');
  const [replies, setReplies] = useState([
    {
      id: 'rep-1',
      authorName: 'Rohan Gupta',
      stanceSide: 'support',
      content: 'Completely agree. A single repository removes version drift across mobile and web interfaces when schemas evolve.',
      upvotes: 14,
      createdAt: '1 hour ago',
    },
    {
      id: 'rep-2',
      authorName: 'Emily Taylor',
      stanceSide: 'counter',
      content: 'However, mobile CI/CD build times (especially iOS builds) can slow down the main pipeline if caching is not dialed in.',
      upvotes: 9,
      createdAt: '35 mins ago',
    },
  ]);

  const handleAddReply = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newReply = {
      id: `rep-${Date.now()}`,
      authorName: user?.displayName || 'Anonymous Contributor',
      stanceSide,
      content,
      upvotes: 0,
      createdAt: 'Just now',
    };

    setReplies([...replies, newReply]);
    setContent('');
  };

  const getSideColor = (side) => {
    if (side === 'support') return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    if (side === 'counter') return 'bg-rose-500/15 text-rose-400 border-rose-500/30';
    return 'bg-slate-700/30 text-slate-400 border-slate-700/50';
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-bold text-slate-100">Threaded Debate</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Original Post Context */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800/80">
          <h3 className="text-sm font-semibold text-slate-200 mb-1">{post.title}</h3>
          <p className="text-xs text-slate-400 line-clamp-2">{post.content}</p>
        </div>

        {/* Replies List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Community Stance Debates ({replies.length})
          </h4>
          {replies.map((reply) => (
            <div key={reply.id} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-xs text-slate-200">{reply.authorName}</span>
                  <span className="text-[11px] text-slate-500">• {reply.createdAt}</span>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border uppercase tracking-wider ${getSideColor(reply.stanceSide)}`}>
                  {reply.stanceSide}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{reply.content}</p>
            </div>
          ))}
        </div>

        {/* Reply Box */}
        <form onSubmit={handleAddReply} className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-slate-400">Select your stance:</span>
            {['support', 'counter', 'neutral'].map((side) => (
              <button
                key={side}
                type="button"
                onClick={() => setStanceSide(side)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium capitalize border transition-all ${
                  stanceSide === side
                    ? getSideColor(side)
                    : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
                }`}
              >
                {side}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="State your counter or supporting argument..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              required
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
