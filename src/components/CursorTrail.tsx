import { useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
  color: string;
}

const CursorTrail: React.FC = () => {
  useEffect(() => {
    const particles: Particle[] = [];
    let animationId: number;

    const colors = ['#a855f7', '#c084fc', '#e879f9', '#f0abfc', '#fbbf24'];

    const createParticle = (x: number, y: number) => {
      const particle: Particle = {
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        life: 0,
        maxLife: 30 + Math.random() * 20,
        size: 2 + Math.random() * 4,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      particles.push(particle);
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.life++;
        particle.y -= 0.5 + Math.random() * 0.5;
        particle.x += (Math.random() - 0.5) * 0.5;
        particle.opacity = 1 - (particle.life / particle.maxLife);
        particle.size *= 0.98;

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      // Remove existing particles from DOM
      document.querySelectorAll('.cursor-particle').forEach(el => el.remove());

      particles.forEach(particle => {
        const div = document.createElement('div');
        div.className = 'cursor-particle';
        div.style.cssText = `
          position: fixed;
          left: ${particle.x}px;
          top: ${particle.y}px;
          width: ${particle.size}px;
          height: ${particle.size}px;
          background: ${particle.color};
          border-radius: 50%;
          opacity: ${particle.opacity};
          pointer-events: none;
          z-index: 9999;
          box-shadow: 0 0 ${particle.size * 2}px ${particle.color};
          transform: translate(-50%, -50%);
        `;
        document.body.appendChild(div);
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Create particles less frequently for better performance
      if (Math.random() < 0.3) {
        createParticle(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      // Clean up particles
      document.querySelectorAll('.cursor-particle').forEach(el => el.remove());
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default CursorTrail;