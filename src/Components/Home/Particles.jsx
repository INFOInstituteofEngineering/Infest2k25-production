import React, { useEffect } from 'react';

const ParticleComponent = () => {
  useEffect(() => {
    const loadScripts = () => {
      const particlesScript = document.createElement('script');
      particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      particlesScript.async = true;
      particlesScript.onload = initializeParticles;
      document.body.appendChild(particlesScript);

      const statsScript = document.createElement('script');
      statsScript.src = 'https://threejs.org/examples/js/libs/stats.min.js';
      statsScript.async = true;
      document.body.appendChild(statsScript);
    };

    const initializeParticles = () => {
      window.particlesJS('particles-js', {
        "particles": {
          "number": { "value": 100 },
          "color": { "value": "#0d47a1" },
          "shape": { "type": "edge" },
          "opacity": { "value": 0.5, "random": true },
          "size": { "value": 2, "random": true },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#5dcad1",
            "opacity": 5,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "repulse" },
            "resize": true
          },
          "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
            "repulse": { "distance": 100, "duration": 0.4 }
          }
        },
        "retina_detect": true
      });
    };

    loadScripts();

    return () => {
      const particlesScript = document.querySelector('script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]');
      const statsScript = document.querySelector('script[src="https://threejs.org/examples/js/libs/stats.min.js"]');
      particlesScript && particlesScript.remove();
      statsScript && statsScript.remove();
    };
  }, []);

  return <div id="particles-js" className="absolute inset-0 bg-white-500"></div>;
};

export default ParticleComponent;
