import React, { useEffect } from 'react';
import LearningSection from './components/LearningSection';
import FocusSection from './components/FocusSection';
import AboutSection from './components/AboutSection';
import HomeSection from './components/HomeSection';
import ConnectSection from './components/ConnectSection';
import Header from './components/Header';

const App: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.bento-box');
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all bento boxes except the hero
    const boxes = document.querySelectorAll('.bento-box:not(:first-child)');
    boxes.forEach(box => observer.observe(box));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      boxes.forEach(box => observer.unobserve(box));
    };
  }, []);

  return (
    <div className="text-gray-100 min-h-screen animate-fade-in">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Hero Section - Spanning 3 columns with more breathing room */}
          <div className="md:col-span-3 bento-box animate-fade-in" style={{ minHeight: '500px' }}>
            <HomeSection />
          </div>

          {/* Learning Section - Spanning 2 columns */}
          <div id="learning" className="md:col-span-2 bento-box animate-fade-in" style={{ animationDelay: `100ms`}}>
            <LearningSection />
          </div>

          {/* Connect Section - Spanning 1 column */}
          <div className="md:row-span-2 bento-box animate-fade-in" style={{ animationDelay: `200ms`}}>
            <ConnectSection />
          </div>

          {/* Focus Section - Spanning 2 columns */}
          <div className="md:col-span-2 bento-box animate-fade-in" style={{ animationDelay: `300ms`}}>
            <FocusSection />
          </div>

          {/* About Section - Spanning 3 columns */}
          <div className="md:col-span-3 bento-box animate-fade-in" style={{ animationDelay: `400ms`}}>
            <AboutSection />
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;
