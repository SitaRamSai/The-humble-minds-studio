import React, { useEffect, useRef } from 'react';

const Hero3DFeature: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 20, y: 30 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    const cube = cubeRef.current;
    if (!container || !cube) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      mouseY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      targetRotationRef.current = {
        x: 20 + mouseY * 30,
        y: 30 + mouseX * 30
      };
    };

    const animate = () => {
      // Smooth easing
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.05;
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.05;

      if (cube) {
        cube.style.transform = `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animate();

    // Auto-rotation when mouse is not moving
    const autoRotate = setInterval(() => {
      if (Math.abs(mouseX) < 0.1 && Math.abs(mouseY) < 0.1) {
        targetRotationRef.current.y += 0.5;
      }
    }, 50);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(autoRotate);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[500px] flex items-center justify-center perspective-[1000px]"
      style={{ perspective: '1000px' }}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400/20"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      {/* 3D Geometric Structure */}
      <div
        ref={cubeRef}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(20deg) rotateY(30deg)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Central Dodecahedron-inspired structure */}
        <div className="relative w-64 h-64" style={{ transformStyle: 'preserve-3d' }}>

          {/* Front face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/40 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'translateZ(100px)',
              boxShadow: '0 0 40px rgba(251, 191, 36, 0.2)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/20 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-amber-400/60 rounded-full animate-pulse" />
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/30 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'translateZ(-100px) rotateY(180deg)',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.15)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/15 rounded-2xl" />
          </div>

          {/* Right face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/35 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'rotateY(90deg) translateZ(100px)',
              boxShadow: '0 0 35px rgba(251, 191, 36, 0.18)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/20 rounded-2xl" />
          </div>

          {/* Left face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/35 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'rotateY(-90deg) translateZ(100px)',
              boxShadow: '0 0 35px rgba(251, 191, 36, 0.18)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/20 rounded-2xl" />
          </div>

          {/* Top face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/35 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'rotateX(90deg) translateZ(100px)',
              boxShadow: '0 0 35px rgba(251, 191, 36, 0.18)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/20 rounded-2xl" />
          </div>

          {/* Bottom face */}
          <div
            className="absolute inset-0 border-2 border-amber-400/35 rounded-3xl backdrop-blur-sm bg-amber-400/5"
            style={{
              transform: 'rotateX(-90deg) translateZ(100px)',
              boxShadow: '0 0 35px rgba(251, 191, 36, 0.18)'
            }}
          >
            <div className="absolute inset-4 border border-amber-400/20 rounded-2xl" />
          </div>

          {/* Inner cube - smaller */}
          <div className="absolute inset-8" style={{ transformStyle: 'preserve-3d' }}>
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'translateZ(50px)' }}
            />
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'translateZ(-50px) rotateY(180deg)' }}
            />
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'rotateY(90deg) translateZ(50px)' }}
            />
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'rotateY(-90deg) translateZ(50px)' }}
            />
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'rotateX(90deg) translateZ(50px)' }}
            />
            <div
              className="absolute inset-0 border border-amber-400/50 rounded-2xl"
              style={{ transform: 'rotateX(-90deg) translateZ(50px)' }}
            />
          </div>

          {/* Orbiting elements */}
          <div
            className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"
            style={{
              transform: 'translateZ(150px)',
              animation: 'pulse-glow 2s ease-in-out infinite'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-amber-300 rounded-full shadow-lg shadow-amber-300/50"
            style={{
              transform: 'translateZ(-150px)',
              animation: 'pulse-glow 2.5s ease-in-out infinite'
            }}
          />

          {/* Corner accent dots */}
          {[
            { x: -100, y: -100, z: 100 },
            { x: 100, y: -100, z: 100 },
            { x: -100, y: 100, z: 100 },
            { x: 100, y: 100, z: 100 },
            { x: -100, y: -100, z: -100 },
            { x: 100, y: -100, z: -100 },
            { x: -100, y: 100, z: -100 },
            { x: 100, y: 100, z: -100 }
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-amber-400/60 rounded-full"
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
                boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)'
              }}
            />
          ))}
        </div>

        {/* Floating rings around the structure */}
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 -ml-48 -mt-48 border border-amber-400/20 rounded-full"
          style={{
            transform: 'rotateX(80deg)',
            animation: 'spin-slow 20s linear infinite'
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 -ml-40 -mt-40 border border-amber-400/15 rounded-full"
          style={{
            transform: 'rotateY(80deg)',
            animation: 'spin-slow 15s linear infinite reverse'
          }}
        />
      </div>

      {/* Info label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-xs font-mono text-amber-400/60 tracking-wider">
          Interactive 3D Visualization
        </p>
        <p className="text-[10px] font-mono text-slate-600 mt-1">
          Move your cursor to interact
        </p>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(10px, -10px);
          }
          50% {
            transform: translate(-5px, -20px);
          }
          75% {
            transform: translate(-10px, -5px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotateX(80deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(80deg) rotateZ(360deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.6;
            transform: translateZ(150px) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateZ(150px) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero3DFeature;
