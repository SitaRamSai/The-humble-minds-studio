import React from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    url: '#', // Replace with your GitHub URL
    description: 'Explore community projects and contribute to open-source initiatives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400 transition-colors duration-300 group-hover:text-purple-300">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: '#', // Replace with your LinkedIn URL
    description: 'Connect with community members and share professional insights.',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400 transition-colors duration-300 group-hover:text-purple-300">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
   {
    name: 'X (Twitter)',
    url: '#', // Replace with your X/Twitter URL
    description: 'Join conversations, share updates, and engage with the community.',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-gray-400 transition-colors duration-300 group-hover:text-purple-300">
        <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
      </svg>
    ),
  },
];

const ConnectSection: React.FC = () => {
  return (
    <section id="connect">
      <h2 className="section-title">Join the Community</h2>
      <p className="text-gray-400 text-sm mb-6">
        Connect with fellow learners, share your journey, and grow together. Find us on these platforms:
      </p>
      <div className="flex flex-col gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="connect-card">
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-400">{link.name}</h3>
                <p className="text-gray-300 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">{link.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;
