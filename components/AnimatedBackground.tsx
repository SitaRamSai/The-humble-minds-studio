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

    // Mouse position
    const mouse = { x: 0, y: 0, radius: 150 };

    // Floating Particle class (antigravity style)
    class FloatingParticle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      opacity: number;
      color: string;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 1;
        this.density = Math.random() * 30 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.vx = 0;
        this.vy = 0;

        // Color variations: amber, blue, purple
        const colors = [
          'rgba(251, 191, 36,', // amber
          'rgba(100, 150, 255,', // blue
          'rgba(167, 139, 250,', // purple
          'rgba(255, 255, 255,', // white
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Calculate distance from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Antigravity effect - particles float away from mouse
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density * 0.6;
          const directionY = forceDirectionY * force * this.density * 0.6;

          this.vx -= directionX;
          this.vy -= directionY;
        }

        // Add gentle upward float (antigravity)
        this.vy -= 0.02;

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Damping
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Return to base position
        const returnForce = 0.02;
        this.vx += (this.baseX - this.x) * returnForce;
        this.vy += (this.baseY - this.y) * returnForce;

        // Pulse effect
        this.opacity = 0.3 + Math.sin(Date.now() * 0.001 + this.baseX) * 0.2;

        // Wrap around edges
        if (this.x < 0) { this.x = canvas.width; this.baseX = canvas.width; }
        if (this.x > canvas.width) { this.x = 0; this.baseX = 0; }
        if (this.y < 0) { this.y = canvas.height; this.baseY = canvas.height; }
        if (this.y > canvas.height) { this.y = 0; this.baseY = 0; }
      }

      draw() {
        if (!ctx) return;

        // Draw glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
        gradient.addColorStop(0, `${this.color} ${this.opacity})`);
        gradient.addColorStop(1, `${this.color} 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.size * 3, this.y - this.size * 3, this.size * 6, this.size * 6);

        // Draw particle
        ctx.fillStyle = `${this.color} ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Comet/Shooting Star class
    class Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      opacity: number;
      life: number;
      maxLife: number;
      tail: { x: number; y: number; opacity: number }[];

      constructor() {
        this.reset();
      }

      reset() {
        // Start from random position on top or right edge
        if (Math.random() > 0.5) {
          this.x = Math.random() * canvas.width;
          this.y = -50;
        } else {
          this.x = canvas.width + 50;
          this.y = Math.random() * canvas.height * 0.5;
        }

        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 3 + 2;
        this.angle = Math.random() * Math.PI / 4 + Math.PI / 6; // 30-75 degrees
        this.opacity = Math.random() * 0.5 + 0.5;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 100;
        this.tail = [];
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;

        // Add to tail
        this.tail.push({ x: this.x, y: this.y, opacity: this.opacity });
        if (this.tail.length > 20) {
          this.tail.shift();
        }

        // Reset if off screen or life expired
        if (this.x > canvas.width + 100 || this.y > canvas.height + 100 || this.life > this.maxLife) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;

        // Draw tail
        for (let i = 0; i < this.tail.length; i++) {
          const segment = this.tail[i];
          const opacity = (i / this.tail.length) * segment.opacity * 0.5;
          const size = (i / this.tail.length) * 2;

          ctx.fillStyle = `rgba(251, 191, 36, ${opacity})`;
          ctx.beginPath();
          ctx.arc(segment.x, segment.y, size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw comet head with glow
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 6);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(251, 191, 36, ${this.opacity * 0.6})`);
        gradient.addColorStop(1, 'rgba(251, 191, 36, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 150);
    const floatingParticles: FloatingParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      floatingParticles.push(new FloatingParticle());
    }

    // Create comets
    const comets: Comet[] = [];
    for (let i = 0; i < 3; i++) {
      comets.push(new Comet());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      // Fade effect instead of clear for trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update comets
      comets.forEach((comet) => {
        comet.update();
        comet.draw();
      });

      // Draw and update floating particles
      floatingParticles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Parallax effect
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
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
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Deep space background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(75, 0, 130, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(25, 25, 112, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(10, 10, 30, 0.8) 0%, rgba(5, 5, 15, 1) 100%)
          `,
        }}
      />

      {/* Animated nebula clouds */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(251, 191, 36, 0.05) 0%, transparent 40%),
            radial-gradient(ellipse at 70% 60%, rgba(167, 139, 250, 0.05) 0%, transparent 40%)
          `,
          animation: 'nebulaFloat 20s ease-in-out infinite alternate',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="background-grid"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5,
        }}
      />

      {/* Canvas for particles and comets */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          mixBlendMode: 'screen',
        }}
      />

      {/* Star field overlay */}
      <div
        className="stars-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
            radial-gradient(circle at 60% 20%, white 0.5px, transparent 0.5px),
            radial-gradient(circle at 80% 80%, white 0.8px, transparent 0.8px),
            radial-gradient(circle at 40% 70%, rgba(251, 191, 36, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '200px 200px, 300px 300px, 250px 250px, 350px 350px',
          backgroundPosition: '0 0, 50px 50px, 100px 100px, 150px 150px',
          opacity: 0.6,
          animation: 'starsTwinkle 10s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
