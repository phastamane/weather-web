import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    window.particlesJS.load('particles-js', '/assets/particlesjs-config.json', () => {
      console.log('callback - particles.js config loaded');
    });
  }, []);

  return <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }} />;
};

export default ParticlesBackground;
