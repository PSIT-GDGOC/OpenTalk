import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, ShieldCheck } from 'lucide-react';

export const PostCard = ({ post, onVote, onOpenDebate }) => {
  const [userVoted, setUserVoted] = useState(null);

  const handleVote = (type) => {
    setUserVoted((prev) => (prev === type ? null : type));
    onVote(post.id, type);
  };

  return (
    <article className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all shadow-sm">
      {/* Author & Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
            {post.authorName.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-sm text-slate-100">{post.authorName}</span>
              <span className="text-xs text-slate-500">• {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <span className="text-xs text-indigo-400 capitalize">{post.topic}</span>
          </div>
        </div>

        {post.moderationStatus === 'approved' && (
          <div className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Stance</span>
          </div>
        )}
      </div>

      {/* Post Title & Content */}
      <h3 
        onClick={() => onOpenDebate && onOpenDebate(post)}
        className="text-lg font-bold text-slate-100 mb-2 hover:text-indigo-400 cursor-pointer transition-colors"
      >
        {post.title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-4 whitespace-pre-line">
        {post.content}
      </p>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800/70 text-slate-400 border border-slate-700/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Action Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-800/60">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleVote('up')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              userVoted === 'up'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-emerald-400'
            }`}
          >
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>{post.upvotes + (userVoted === 'up' ? 1 : 0)}</span>
          </button>

          <button
            onClick={() => handleVote('down')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              userVoted === 'down'
                ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-rose-400'
            }`}
          >
            <ThumbsDown className="w-3.5 h-3.5" />
            <span>{post.downvotes + (userVoted === 'down' ? 1 : 0)}</span>
          </button>

          <button 
            onClick={() => onOpenDebate && onOpenDebate(post)}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-indigo-400 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{post.replyCount} Debates</span>
          </button>
        </div>

        <button className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
