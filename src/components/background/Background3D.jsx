import { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    // Responsive settings
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 40 : 100;
    const gridSize = isMobile ? 40 : 60;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles = [];
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.z = Math.random() * 1000 + 500;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.3 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulsePhase += this.pulseSpeed;

        if (this.y > canvas.height + 20) {
          this.reset();
        }
        if (this.x < -20 || this.x > canvas.width + 20) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        const scale = 1 - this.z / 1500;
        const size = this.size * scale;
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;

        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 3);
        gradient.addColorStop(0, `rgba(0, 255, 65, ${this.opacity * scale * pulse * 0.8})`);
        gradient.addColorStop(0.5, `rgba(0, 255, 65, ${this.opacity * scale * pulse * 0.3})`);
        gradient.addColorStop(1, 'rgba(0, 255, 65, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(0, 255, 65, ${this.opacity * scale * pulse})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // 3D Grid system
    const drawGrid = (time) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const perspective = 600;
      const gridDepth = 2000;
      const gridSpacing = gridSize;
      const numLines = isMobile ? 15 : 25;

      // Vertical lines
      for (let i = -numLines; i <= numLines; i++) {
        const x = i * gridSpacing;

        for (let j = 0; j < 20; j++) {
          const z1 = j * 100 + (time % 100);
          const z2 = z1 + 100;

          if (z1 > gridDepth) continue;

          const scale1 = perspective / (perspective + z1);
          const scale2 = perspective / (perspective + z2);

          const x1 = centerX + x * scale1;
          const y1 = centerY + 200 * scale1;
          const x2 = centerX + x * scale2;
          const y2 = centerY + 200 * scale2;

          const opacity = Math.max(0, 1 - z1 / gridDepth) * 0.15;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Horizontal lines
      for (let i = 0; i < 20; i++) {
        const z = i * 100 + (time % 100);
        if (z > gridDepth) continue;

        const scale = perspective / (perspective + z);
        const y = centerY + 200 * scale;
        const opacity = Math.max(0, 1 - z / gridDepth) * 0.15;

        ctx.beginPath();
        ctx.moveTo(centerX - numLines * gridSpacing * scale, y);
        ctx.lineTo(centerX + numLines * gridSpacing * scale, y);
        ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      time += 1;

      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid (behind everything)
      drawGrid(time);

      // Draw particles and connections
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black-pure">
      {/* Main Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ opacity: 0.8 }}
      />

      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 60%, rgba(0, 255, 65, 0.03) 0%, rgba(0, 0, 0, 0.8) 70%)',
        }}
      />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />

      {/* Subtle scan lines */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.05) 2px, rgba(0, 255, 65, 0.05) 4px)',
        }}
      />
    </div>
  );
};

export default Background3D;
