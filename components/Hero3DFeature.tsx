import React, { useEffect, useRef, useState } from 'react';

const Hero3DFeature: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 20, y: 30 });
  const animationFrameRef = useRef<number>();
  const [matrixColumns, setMatrixColumns] = useState<any[]>([]);

  // Matrix digital rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Alternate between amber and green for unique look
        const useAmber = Math.random() > 0.5;
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - fontSize * 3, 0, drops[i] * fontSize);

        if (useAmber) {
          gradient.addColorStop(0, 'rgba(251, 191, 36, 0)');
          gradient.addColorStop(0.5, 'rgba(251, 191, 36, 0.8)');
          gradient.addColorStop(1, 'rgba(217, 119, 6, 1)');
        } else {
          gradient.addColorStop(0, 'rgba(34, 197, 94, 0)');
          gradient.addColorStop(0.5, 'rgba(34, 197, 94, 0.8)');
          gradient.addColorStop(1, 'rgba(22, 163, 74, 1)');
        }

        ctx.fillStyle = gradient;
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  // 3D cube rotation with mouse tracking
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
      rotationRef.current.x += (targetRotationRef.current.x - rotationRef.current.x) * 0.05;
      rotationRef.current.y += (targetRotationRef.current.y - rotationRef.current.y) * 0.05;

      if (cube) {
        cube.style.transform = `rotateX(${rotationRef.current.x}deg) rotateY(${rotationRef.current.y}deg)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    animate();

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
      className="relative w-full h-full min-h-[500px] flex items-center justify-center"
      style={{ perspective: '1200px' }}
    >
      {/* Matrix Digital Rain Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Scanning lines effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent animate-scan" />
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent animate-scan-delayed" />
      </div>

      {/* Radial gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-gradient-radial from-amber-500/20 via-green-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* 3D Matrix Code Cube */}
      <div
        ref={cubeRef}
        className="relative z-10"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(20deg) rotateY(30deg)',
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="relative w-72 h-72" style={{ transformStyle: 'preserve-3d' }}>

          {/* Front face - Code streams */}
          <div
            className="absolute inset-0 border border-amber-400/60 backdrop-blur-md bg-black/40 overflow-hidden"
            style={{
              transform: 'translateZ(120px)',
              boxShadow: '0 0 60px rgba(251, 191, 36, 0.4), inset 0 0 60px rgba(34, 197, 94, 0.2)'
            }}
          >
            <div className="p-4 font-mono text-xs text-green-400 leading-relaxed">
              <div className="animate-glitch">{'{ learn: true }'}</div>
              <div className="text-amber-400 animate-pulse">{'const minds = [];'}</div>
              <div className="text-green-500">{'01101000 01110101'}</div>
              <div className="text-amber-300">{'while(curious) {{'}</div>
              <div className="pl-4 text-green-400">{'explore();'}</div>
              <div className="text-amber-300">{'}}'}</div>
            </div>
            <div className="absolute bottom-2 right-2 w-12 h-12 border-2 border-amber-400/80 rounded-lg animate-pulse" />
          </div>

          {/* Back face */}
          <div
            className="absolute inset-0 border border-green-400/60 backdrop-blur-md bg-black/40 overflow-hidden"
            style={{
              transform: 'translateZ(-120px) rotateY(180deg)',
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(251, 191, 36, 0.2)'
            }}
          >
            <div className="p-4 font-mono text-xs text-amber-400 leading-relaxed">
              <div className="animate-glitch">{'> initiating...'}</div>
              <div className="text-green-400">{'[HUMBLE_MINDS]'}</div>
              <div className="text-amber-500">{'11001010 11010'}</div>
              <div className="text-green-300">{'share.knowledge'}</div>
            </div>
          </div>

          {/* Right face */}
          <div
            className="absolute inset-0 border border-green-400/60 backdrop-blur-md bg-black/40 overflow-hidden"
            style={{
              transform: 'rotateY(90deg) translateZ(120px)',
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.4), inset 0 0 60px rgba(251, 191, 36, 0.2)'
            }}
          >
            <div className="p-4 font-mono text-xs text-green-400 leading-relaxed">
              <div>{'[====>    ] 45%'}</div>
              <div className="text-amber-400 animate-pulse">{'loading...'}</div>
              <div className="text-green-500">{'01010100 01001000'}</div>
              <div className="text-amber-300">{'decrypt.complete'}</div>
            </div>
          </div>

          {/* Left face */}
          <div
            className="absolute inset-0 border border-amber-400/60 backdrop-blur-md bg-black/40 overflow-hidden"
            style={{
              transform: 'rotateY(-90deg) translateZ(120px)',
              boxShadow: '0 0 60px rgba(251, 191, 36, 0.4), inset 0 0 60px rgba(34, 197, 94, 0.2)'
            }}
          >
            <div className="p-4 font-mono text-xs text-amber-400 leading-relaxed">
              <div className="text-green-400">{'<AI_LEARNING/>'}</div>
              <div className="animate-glitch">{'matrix.active'}</div>
              <div className="text-green-500">{'11110000 10011'}</div>
              <div className="text-amber-300">{'system.online'}</div>
            </div>
          </div>

          {/* Top face */}
          <div
            className="absolute inset-0 border border-green-400/60 backdrop-blur-md bg-black/40"
            style={{
              transform: 'rotateX(90deg) translateZ(120px)',
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.4)'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20 border-2 border-amber-400 rounded-full animate-spin-slow opacity-60" />
            </div>
          </div>

          {/* Bottom face */}
          <div
            className="absolute inset-0 border border-amber-400/60 backdrop-blur-md bg-black/40"
            style={{
              transform: 'rotateX(-90deg) translateZ(120px)',
              boxShadow: '0 0 60px rgba(251, 191, 36, 0.4)'
            }}
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20 border-2 border-green-400 rounded-full animate-spin-slow-reverse opacity-60" />
            </div>
          </div>

          {/* Corner nodes with glitch effect */}
          {[
            { x: -120, y: -120, z: 120, color: 'amber' },
            { x: 120, y: -120, z: 120, color: 'green' },
            { x: -120, y: 120, z: 120, color: 'green' },
            { x: 120, y: 120, z: 120, color: 'amber' },
            { x: -120, y: -120, z: -120, color: 'green' },
            { x: 120, y: -120, z: -120, color: 'amber' },
            { x: -120, y: 120, z: -120, color: 'amber' },
            { x: 120, y: 120, z: -120, color: 'green' }
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 ${
                pos.color === 'amber' ? 'bg-amber-400' : 'bg-green-400'
              } rounded-full animate-pulse`}
              style={{
                transform: `translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
                boxShadow: `0 0 20px ${pos.color === 'amber' ? 'rgba(251, 191, 36, 0.8)' : 'rgba(34, 197, 94, 0.8)'}`
              }}
            />
          ))}

          {/* Floating data particles */}
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-amber-400 rounded-full"
            style={{
              transform: 'translateZ(180px)',
              animation: 'orbit 4s linear infinite',
              boxShadow: '0 0 15px rgba(251, 191, 36, 1)'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-green-400 rounded-full"
            style={{
              transform: 'translateZ(-180px)',
              animation: 'orbit-reverse 3s linear infinite',
              boxShadow: '0 0 15px rgba(34, 197, 94, 1)'
            }}
          />
        </div>

        {/* Orbital rings with grid pattern */}
        <div
          className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -ml-[225px] -mt-[225px] rounded-full"
          style={{
            border: '1px solid rgba(251, 191, 36, 0.3)',
            transform: 'rotateX(75deg)',
            animation: 'spin-slow 25s linear infinite',
            boxShadow: '0 0 30px rgba(251, 191, 36, 0.2)'
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-amber-400/30" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-amber-400/30" />
        </div>
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -ml-[200px] -mt-[200px] rounded-full"
          style={{
            border: '1px solid rgba(34, 197, 94, 0.3)',
            transform: 'rotateY(75deg)',
            animation: 'spin-slow 20s linear infinite reverse',
            boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)'
          }}
        >
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-400/30" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-green-400/30" />
        </div>
      </div>

      {/* Info label */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none z-20">
        <p className="text-xs font-mono text-green-400/80 tracking-wider animate-pulse">
          [ MATRIX VISUALIZATION ACTIVE ]
        </p>
        <p className="text-[10px] font-mono text-amber-400/60 mt-1">
          &gt; Move cursor to control rotation
        </p>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% {
            top: 0%;
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

        @keyframes scan-delayed {
          0% {
            top: 0%;
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

        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }

        .animate-scan-delayed {
          animation: scan-delayed 6s ease-in-out infinite 2s;
        }

        @keyframes glitch {
          0%, 100% {
            transform: translate(0);
            opacity: 1;
          }
          20% {
            transform: translate(-2px, 2px);
            opacity: 0.8;
          }
          40% {
            transform: translate(2px, -2px);
            opacity: 0.8;
          }
          60% {
            transform: translate(-2px, -2px);
            opacity: 0.8;
          }
          80% {
            transform: translate(2px, 2px);
            opacity: 0.8;
          }
        }

        .animate-glitch {
          animation: glitch 3s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotateX(75deg) rotateZ(0deg);
          }
          to {
            transform: rotateX(75deg) rotateZ(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow 8s linear infinite reverse;
        }

        @keyframes orbit {
          0% {
            transform: translateZ(180px) rotateY(0deg) translateX(60px);
          }
          100% {
            transform: translateZ(180px) rotateY(360deg) translateX(60px);
          }
        }

        @keyframes orbit-reverse {
          0% {
            transform: translateZ(-180px) rotateY(0deg) translateX(-60px);
          }
          100% {
            transform: translateZ(-180px) rotateY(-360deg) translateX(-60px);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Hero3DFeature;
