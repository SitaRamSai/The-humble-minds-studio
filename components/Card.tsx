import React from 'react';

interface CardProps {
  title: string;
  description: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, tags }) => {
  return (
    <div className="bento-card h-full flex flex-col group">
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Decorative gradient glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500 group-hover:duration-200" />
    </div>
  );
};

export default Card;
