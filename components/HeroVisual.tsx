import React, { useEffect, useRef, useState } from 'react';

interface StatCard {
  label: string;
  value: string;
  icon: string;
  position: { x: number; y: number };
  delay: number;
}

const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Real community stats - these can be dynamic later
  const stats: StatCard[] = [
    {
      label: 'Active Learners',
      value: '24+',
      icon: '👥',
      position: { x: -120, y: -100 },
      delay: 0,
    },
    {
      label: 'Resources Shared',
      value: '156',
      icon: '📚',
      position: { x: 140, y: -80 },
      delay: 0.2,
    },
    {
      label: 'Breakthroughs',
      value: '12',
      icon: '⚡',
      position: { x: -140, y: 120 },
      delay: 0.4,
    },
    {
      label: 'AI Security Focus',
      value: '89%',
      icon: '🔒',
      position: { x: 130, y: 130 },
      delay: 0.6,
    },
  ];

  // Gradient Mesh Orb Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 400;
    canvas.width = size;
    canvas.height = size;

    let time = 0;
    let animationFrameId: number;

    const drawGradientOrb = () => {
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;

      // Animated morphing effect
      const morph1 = Math.sin(time * 0.5) * 20;
      const morph2 = Math.cos(time * 0.3) * 20;
      const morph3 = Math.sin(time * 0.7) * 15;

      // Create multiple gradient layers for depth
      const gradients = [
        {
          x: centerX + morph1,
          y: centerY + morph2,
          r1: 0,
          r2: 180,
          colors: [
            { pos: 0, color: 'rgba(251, 191, 36, 0.6)' }, // amber
            { pos: 0.5, color: 'rgba(168, 85, 247, 0.4)' }, // purple
            { pos: 1, color: 'rgba(59, 130, 246, 0.0)' }, // blue fade
          ],
        },
        {
          x: centerX - morph2,
          y: centerY + morph3,
          r1: 0,
          r2: 160,
          colors: [
            { pos: 0, color: 'rgba(139, 92, 246, 0.5)' }, // purple
            { pos: 0.5, color: 'rgba(59, 130, 246, 0.3)' }, // blue
            { pos: 1, color: 'rgba(16, 185, 129, 0.0)' }, // green fade
          ],
        },
        {
          x: centerX + morph3,
          y: centerY - morph1,
          r1: 0,
          r2: 140,
          colors: [
            { pos: 0, color: 'rgba(236, 72, 153, 0.4)' }, // pink
            { pos: 0.5, color: 'rgba(168, 85, 247, 0.3)' }, // purple
            { pos: 1, color: 'rgba(0, 0, 0, 0)' },
          ],
        },
      ];

      // Draw each gradient layer
      gradients.forEach((g) => {
        const gradient = ctx.createRadialGradient(g.x, g.y, g.r1, g.x, g.y, g.r2);
        g.colors.forEach((c) => gradient.addColorStop(c.pos, c.color));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      });

      // Add glow effect
      ctx.globalCompositeOperation = 'lighter';
      const glowGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        60,
        centerX,
        centerY,
        120
      );
      glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      // Outer glow ring
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 140 + Math.sin(time) * 5, 0, Math.PI * 2);
      ctx.stroke();

      time += 0.01;
      animationFrameId = requestAnimationFrame(drawGradientOrb);
    };

    drawGradientOrb();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePos({ x: x * 20, y: y * 20 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: '500px' }}
    >
      {/* Central Orb */}
      <div
        className="relative transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            filter: 'blur(40px)',
            transform: 'scale(1.2)',
          }}
        />
      </div>

      {/* Floating Stat Cards */}
      {stats.map((stat, index) => (
        <div
          key={index}
          className="absolute animate-float-delayed"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(calc(-50% + ${stat.position.x}px), calc(-50% + ${stat.position.y}px))`,
            animationDelay: `${stat.delay}s`,
          }}
        >
          <div
            className="group relative transition-all duration-300 ease-out hover:scale-110"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            }}
          >
            {/* Connecting Line to Center */}
            <svg
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                width: Math.abs(stat.position.x) + 50,
                height: Math.abs(stat.position.y) + 50,
                transform: `translate(${stat.position.x > 0 ? '-100%' : '0'}, ${
                  stat.position.y > 0 ? '-100%' : '0'
                })`,
              }}
            >
              <line
                x1={stat.position.x > 0 ? Math.abs(stat.position.x) + 50 : 0}
                y1={stat.position.y > 0 ? Math.abs(stat.position.y) + 50 : 0}
                x2={stat.position.x > 0 ? Math.abs(stat.position.x) + 50 : 0}
                y2={stat.position.y > 0 ? Math.abs(stat.position.y) + 50 : 0}
                stroke="rgba(168, 85, 247, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </svg>

            {/* Glass Card */}
            <div
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              style={{
                boxShadow:
                  '0 8px 32px 0 rgba(168, 85, 247, 0.15), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

              <div className="relative z-10 flex items-center gap-3 min-w-[140px]">
                <span className="text-2xl" role="img" aria-label={stat.label}>
                  {stat.icon}
                </span>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Animated particle on card */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            </div>
          </div>
        </div>
      ))}

      {/* Ambient particles around the orb */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40 animate-float-particle"
            style={{
              left: `${50 + Math.cos((i / 8) * Math.PI * 2) * 40}%`,
              top: `${50 + Math.sin((i / 8) * Math.PI * 2) * 40}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
