import React from 'react';

interface CardProps {
  title: string;
  description: string;
  tags?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, tags }) => {
  return (
    <div className="content-card h-full flex flex-col">
      <div>
        <h3 className="text-xl font-semibold text-purple-400 mb-2 transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span key={tag} className="bg-purple-900/50 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
