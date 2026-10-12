import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeHeroCanvasProps {
  className?: string;
  interactive?: boolean;
}

export const ThreeHeroCanvas: React.FC<ThreeHeroCanvasProps> = ({ className = '', interactive = true }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.3);
    mainLight.position.set(8, 12, 10);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xfff5ea, 0.6);
    fillLight.position.set(-8, -6, 6);
    scene.add(fillLight);

    // Colorful Point Accent Rim Lights
    const purpleLight = new THREE.PointLight(0xB98CF2, 1.4, 20);
    purpleLight.position.set(-6, 4, 4);
    scene.add(purpleLight);

    const orangeLight = new THREE.PointLight(0xFF6A2A, 1.4, 20);
    orangeLight.position.set(6, -4, 4);
    scene.add(orangeLight);

    // Material Helper
    const createMaterial = (color: string, roughness = 0.2, metalness = 0.08) => {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        roughness,
        metalness,
        flatShading: false,
      });
    };

    // Array of 3D Objects matching Cohesion design system
    const objects: {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: { x: number; y: number; z: number };
      bobSpeed: number;
      bobOffset: number;
    }[] = [];

    // 1. Warm Orange Pyramid (Top Left)
    const pyramidGeo = new THREE.ConeGeometry(0.85, 1.4, 4);
    const pyramidMat = createMaterial('#FF6A2A', 0.18, 0.05);
    const pyramid = new THREE.Mesh(pyramidGeo, pyramidMat);
    const pyramidPos = new THREE.Vector3(-4.8, 3.2, 0.5);
    pyramid.position.copy(pyramidPos);
    pyramid.rotation.set(0.3, 0.4, 0.2);
    scene.add(pyramid);
    objects.push({ mesh: pyramid, basePos: pyramidPos, rotSpeed: { x: 0.006, y: 0.008, z: 0.003 }, bobSpeed: 1.8, bobOffset: 0 });

    // 2. Purple/Lilac Sphere (Top Right)
    const sphereGeo = new THREE.SphereGeometry(0.9, 32, 32);
    const sphereMat = createMaterial('#B98CF2', 0.15, 0.05);
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    const spherePos = new THREE.Vector3(4.8, 3.0, -0.5);
    sphere.position.copy(spherePos);
    scene.add(sphere);
    objects.push({ mesh: sphere, basePos: spherePos, rotSpeed: { x: 0.003, y: 0.005, z: 0.002 }, bobSpeed: 1.5, bobOffset: 1.2 });

    // 3. Vivid Blue Cylinder (Middle Left)
    const cylGeo = new THREE.CylinderGeometry(0.55, 0.55, 1.5, 32);
    const cylMat = createMaterial('#4D8DFF', 0.2, 0.1);
    const cyl = new THREE.Mesh(cylGeo, cylMat);
    const cylPos = new THREE.Vector3(-5.5, -0.8, -1.0);
    cyl.position.copy(cylPos);
    cyl.rotation.set(0.8, 0.2, -0.4);
    scene.add(cyl);
    objects.push({ mesh: cyl, basePos: cylPos, rotSpeed: { x: 0.005, y: 0.007, z: 0.004 }, bobSpeed: 2.1, bobOffset: 2.5 });

    // 4. Turquoise Star / Octahedron (Middle Right)
    const starGeo = new THREE.OctahedronGeometry(0.85, 0);
    const starMat = createMaterial('#76DAD5', 0.22, 0.05);
    const star = new THREE.Mesh(starGeo, starMat);
    const starPos = new THREE.Vector3(5.2, -0.6, 0.8);
    star.position.copy(starPos);
    scene.add(star);
    objects.push({ mesh: star, basePos: starPos, rotSpeed: { x: 0.008, y: 0.006, z: 0.005 }, bobSpeed: 1.7, bobOffset: 0.8 });

    // 5. Lime Green Rounded Ring / Torus (Bottom Left)
    const ringGeo = new THREE.TorusGeometry(0.7, 0.28, 16, 32);
    const ringMat = createMaterial('#C7E95A', 0.25, 0.05);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    const ringPos = new THREE.Vector3(-3.8, -3.2, 0.2);
    ring.position.copy(ringPos);
    ring.rotation.set(1.1, 0.3, 0);
    scene.add(ring);
    objects.push({ mesh: ring, basePos: ringPos, rotSpeed: { x: 0.004, y: 0.009, z: 0.003 }, bobSpeed: 2.3, bobOffset: 3.1 });

    // 6. Soft Yellow Cube (Bottom Right)
    const cubeGeo = new THREE.BoxGeometry(0.95, 0.95, 0.95);
    const cubeMat = createMaterial('#F4D56A', 0.2, 0.05);
    const cube = new THREE.Mesh(cubeGeo, cubeMat);
    const cubePos = new THREE.Vector3(4.2, -3.2, 0.4);
    cube.position.copy(cubePos);
    cube.rotation.set(0.6, 0.8, 0.2);
    scene.add(cube);
    objects.push({ mesh: cube, basePos: cubePos, rotSpeed: { x: 0.007, y: 0.005, z: 0.006 }, bobSpeed: 1.9, bobOffset: 1.8 });

    // 7. Coral Capsule (Far Top Center)
    const capsuleGeo = new THREE.CapsuleGeometry(0.35, 0.8, 8, 16);
    const capsuleMat = createMaterial('#FF5B3D', 0.2, 0.05);
    const capsule = new THREE.Mesh(capsuleGeo, capsuleMat);
    const capsulePos = new THREE.Vector3(0.5, 4.2, -2.0);
    capsule.position.copy(capsulePos);
    capsule.rotation.set(0.5, 0, 0.8);
    scene.add(capsule);
    objects.push({ mesh: capsule, basePos: capsulePos, rotSpeed: { x: 0.005, y: 0.004, z: 0.007 }, bobSpeed: 1.6, bobOffset: 0.4 });

    // Mouse Tracking Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 1.8;
      targetMouseY = -y * 1.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive position scaling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      const isMobile = width < 768;
      const scale = isMobile ? 0.65 : 1;

      pyramid.position.set(-3.2 * scale, 3.4 * scale, 0.5);
      sphere.position.set(3.2 * scale, 3.2 * scale, -0.5);
      cyl.position.set(-3.5 * scale, -0.8 * scale, -1.0);
      star.position.set(3.5 * scale, -0.6 * scale, 0.8);
      ring.position.set(-2.5 * scale, -3.2 * scale, 0.2);
      cube.position.set(2.8 * scale, -3.2 * scale, 0.4);
      capsule.position.set(0.2 * scale, 4.0 * scale, -2.0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.9;
      camera.position.y = mouseY * 0.9;
      camera.lookAt(0, 0, 0);

      // Rotate & Float objects
      objects.forEach(({ mesh, basePos, rotSpeed, bobSpeed, bobOffset }) => {
        mesh.rotation.x += rotSpeed.x;
        mesh.rotation.y += rotSpeed.y;
        mesh.rotation.z += rotSpeed.z;

        // Sinewave bobbing
        const bob = Math.sin(elapsedTime * bobSpeed + bobOffset) * 0.18;
        mesh.position.y = basePos.y + bob;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      renderer.dispose();
      objects.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      });
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
