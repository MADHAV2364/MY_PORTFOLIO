import React, { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, particles, animationFrameId;

    const initThreeJS = () => {
      if (!mountRef.current || !window.THREE) return;
      const THREE = window.THREE;

      // Clean up previous instance if any
      mountRef.current.innerHTML = '';

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      // Create Particle System
      const particleCount = 1500;
      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      for (let i = 0; i < particleCount; i++) {
        vertices.push(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      // Cooling colors: Cyan to Blue
      const material = new THREE.PointsMaterial({
        color: 0x22d3ee, // Tailwind Cyan 400
        size: 0.03,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      camera.position.z = 5;

      // Animation Loop
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        particles.rotation.x += 0.0003;
        particles.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
      };

      animate();

      // Handle Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);
    };

    if (window.THREE) {
      initThreeJS();
    } else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
      script.async = true;
      script.onload = initThreeJS;
      document.body.appendChild(script);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', () => {});
      if (mountRef.current && renderer) {
        mountRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0 pointer-events-none bg-slate-950"
    />
  );
};

export default ThreeBackground;