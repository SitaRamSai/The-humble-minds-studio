import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix digital rain effect
    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops with random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Alternate between amber and green for unique look
        const useAmber = i % 3 === 0; // More consistent pattern
        const gradient = ctx.createLinearGradient(
          0,
          drops[i] * fontSize - fontSize * 4,
          0,
          drops[i] * fontSize
        );

        if (useAmber) {
          gradient.addColorStop(0, 'rgba(251, 191, 36, 0)');
          gradient.addColorStop(0.3, 'rgba(251, 191, 36, 0.5)');
          gradient.addColorStop(0.7, 'rgba(251, 191, 36, 0.9)');
          gradient.addColorStop(1, 'rgba(217, 119, 6, 1)');
        } else {
          gradient.addColorStop(0, 'rgba(34, 197, 94, 0)');
          gradient.addColorStop(0.3, 'rgba(34, 197, 94, 0.5)');
          gradient.addColorStop(0.7, 'rgba(34, 197, 94, 0.9)');
          gradient.addColorStop(1, 'rgba(22, 163, 74, 1)');
        }

        ctx.fillStyle = gradient;
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop when it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    // Animation loop
    let animationFrameId: number;
    let lastTime = 0;
    const fps = 20; // Control frame rate for Matrix effect
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      const deltaTime = currentTime - lastTime;

      if (deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);
        draw();
      }
    };

    animate(0);

    // Parallax effect (subtle)
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.005;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.005;
      if (container) {
        container.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="animated-background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Base dark background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#0a0a0a',
        }}
      />

      {/* Scanning lines effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(251, 191, 36, 0.4), transparent)',
            animation: 'scanVertical 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(to right, transparent, rgba(34, 197, 94, 0.4), transparent)',
            animation: 'scanVertical 12s ease-in-out infinite 4s',
          }}
        />
      </div>

      {/* Radial gradient glow - Matrix themed */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          background: `
            radial-gradient(
              ellipse at center,
              rgba(251, 191, 36, 0.08) 0%,
              rgba(34, 197, 94, 0.05) 30%,
              rgba(10, 10, 10, 0) 70%
            )
          `,
          animation: 'pulse 6s ease-in-out infinite alternate',
          filter: 'blur(40px)',
        }}
      />

      {/* Canvas for Matrix digital rain */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.5,
        }}
      />

      {/* Vignette overlay for depth */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.7) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Additional CSS animations */}
      <style>{`
        @keyframes scanVertical {
          0% {
            top: -2px;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
