import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Camera, Eye, RotateCw, Wind, Palette, Sparkles, Image as ImageIcon } from 'lucide-react';
import { ASSETS } from '../utils/coffeeData';

interface CoffeeScene3DProps {
  onStaticFallbackToggle?: (useStatic: boolean) => void;
  isStaticView?: boolean;
}

export const CoffeeScene3D: React.FC<CoffeeScene3DProps> = ({
  onStaticFallbackToggle,
  isStaticView = false
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [glAvailable, setGlAvailable] = useState<boolean>(true);
  const [activeGlaze, setActiveGlaze] = useState<'terracotta' | 'obsidian' | 'sandstone'>('sandstone');
  const [steamActive, setSteamActive] = useState<boolean>(true);
  const [cameraPreset, setCameraPreset] = useState<'hero' | 'top' | 'close'>('hero');
  const [controlsCollapsed, setControlsCollapsed] = useState<boolean>(false);

  // References for dynamic 3D updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cupMaterialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const steamParticlesRef = useRef<THREE.Points | null>(null);
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 2.2, 4.2));
  const currentCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 2.2, 4.2));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.4, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.4, 0));
  const pointerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const animFrameRef = useRef<number>(0);

  // Glaze presets
  const glazePalette = {
    sandstone: {
      color: 0xEAE2D5,
      roughness: 0.38,
      metalness: 0.05,
      clearcoat: 0.6,
      clearcoatRoughness: 0.25,
      label: 'Sandstone Glaze'
    },
    terracotta: {
      color: 0xC35B34,
      roughness: 0.45,
      metalness: 0.02,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
      label: 'Terracotta Ember'
    },
    obsidian: {
      color: 0x1F1A17,
      roughness: 0.25,
      metalness: 0.15,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      label: 'Obsidian Matte'
    }
  };

  useEffect(() => {
    if (isStaticView || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 480;
    const height = container.clientHeight || 480;

    // Software WebGL guard
    let isSoftware = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setGlAvailable(false);
        return;
      }
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const rendererName = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        isSoftware = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(rendererName);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    } catch {
      setGlAvailable(false);
      return;
    }

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 4.2);

    // 3. Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftware,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setGlAvailable(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftware ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftware;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xFFF6EE, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFE4CA, 2.4);
    keyLight.position.set(3.5, 5, 3.5);
    keyLight.castShadow = !isSoftware;
    if (!isSoftware) {
      keyLight.shadow.mapSize.width = 1024;
      keyLight.shadow.mapSize.height = 1024;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xC35B34, 1.6);
    rimLight.position.set(-3, 3, -3);
    scene.add(rimLight);

    const fillLight = new THREE.DirectionalLight(0x9BB2CC, 0.6);
    fillLight.position.set(-2, 1, 3);
    scene.add(fillLight);

    // 5. Procedural Textures (Crema & Latte Art)
    const latteCanvas = document.createElement('canvas');
    latteCanvas.width = 512;
    latteCanvas.height = 512;
    const ctx = latteCanvas.getContext('2d')!;

    // Rich espresso brown crema gradient base
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
    grad.addColorStop(0, '#D28543');
    grad.addColorStop(0.35, '#A65522');
    grad.addColorStop(0.7, '#643217');
    grad.addColorStop(1, '#3B1B0E');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    // Microfoam swirl ring
    ctx.strokeStyle = 'rgba(255, 238, 218, 0.4)';
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.arc(256, 256, 200, 0, Math.PI * 2);
    ctx.stroke();

    // Rossetta latte art leaf drawing
    ctx.fillStyle = '#FFF8EE';
    ctx.shadowColor = 'rgba(80, 40, 15, 0.5)';
    ctx.shadowBlur = 8;

    // Heart top
    ctx.beginPath();
    ctx.ellipse(256, 175, 28, 20, 0, 0, Math.PI * 2);
    ctx.fill();

    // Leaf tiers
    const leafTiers = [
      { y: 215, rx: 42, ry: 18 },
      { y: 255, rx: 50, ry: 20 },
      { y: 295, rx: 46, ry: 18 },
      { y: 335, rx: 36, ry: 15 },
      { y: 370, rx: 24, ry: 12 },
    ];

    leafTiers.forEach(tier => {
      ctx.beginPath();
      ctx.ellipse(256 - tier.rx * 0.45, tier.y, tier.rx * 0.55, tier.ry, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(256 + tier.rx * 0.45, tier.y, tier.rx * 0.55, tier.ry, 0.2, 0, Math.PI * 2);
      ctx.fill();
    });

    // Central stem cut
    ctx.strokeStyle = '#93461E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(256, 160);
    ctx.lineTo(256, 400);
    ctx.stroke();

    const latteTexture = new THREE.CanvasTexture(latteCanvas);
    latteTexture.colorSpace = THREE.SRGBColorSpace;

    // Speckled ceramic noise texture
    const ceramicCanvas = document.createElement('canvas');
    ceramicCanvas.width = 256;
    ceramicCanvas.height = 256;
    const cCtx = ceramicCanvas.getContext('2d')!;
    cCtx.fillStyle = '#FFFFFF';
    cCtx.fillRect(0, 0, 256, 256);
    // Dark speckles
    for (let i = 0; i < 400; i++) {
      const sx = Math.random() * 256;
      const sy = Math.random() * 256;
      const r = Math.random() * 1.5 + 0.5;
      cCtx.fillStyle = Math.random() > 0.4 ? 'rgba(50, 30, 20, 0.4)' : 'rgba(195, 91, 52, 0.35)';
      cCtx.beginPath();
      cCtx.arc(sx, sy, r, 0, Math.PI * 2);
      cCtx.fill();
    }
    const ceramicNoiseTex = new THREE.CanvasTexture(ceramicCanvas);
    ceramicNoiseTex.wrapS = THREE.RepeatWrapping;
    ceramicNoiseTex.wrapT = THREE.RepeatWrapping;
    ceramicNoiseTex.repeat.set(4, 4);

    // 6. 3D Model Group Assembly
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;

    // A. Cup Body (Sculptural Lathe)
    const cupPoints: THREE.Vector2[] = [];
    cupPoints.push(new THREE.Vector2(0, 0));
    cupPoints.push(new THREE.Vector2(0.68, 0));
    cupPoints.push(new THREE.Vector2(0.72, 0.08));
    cupPoints.push(new THREE.Vector2(0.85, 0.4));
    cupPoints.push(new THREE.Vector2(1.02, 0.9));
    cupPoints.push(new THREE.Vector2(1.08, 1.22));
    cupPoints.push(new THREE.Vector2(1.06, 1.26)); // rim outer
    cupPoints.push(new THREE.Vector2(1.02, 1.26)); // rim inner
    cupPoints.push(new THREE.Vector2(0.96, 0.9));
    cupPoints.push(new THREE.Vector2(0.78, 0.4));
    cupPoints.push(new THREE.Vector2(0.62, 0.14));
    cupPoints.push(new THREE.Vector2(0, 0.14));

    const cupGeom = new THREE.LatheGeometry(cupPoints, 48);
    cupGeom.computeVertexNormals();

    const currentPalette = glazePalette[activeGlaze];
    const cupMat = new THREE.MeshPhysicalMaterial({
      color: currentPalette.color,
      roughness: currentPalette.roughness,
      metalness: currentPalette.metalness,
      clearcoat: currentPalette.clearcoat,
      clearcoatRoughness: currentPalette.clearcoatRoughness,
      map: ceramicNoiseTex,
      bumpMap: ceramicNoiseTex,
      bumpScale: 0.004
    });
    cupMaterialRef.current = cupMat;

    const cupMesh = new THREE.Mesh(cupGeom, cupMat);
    cupMesh.castShadow = !isSoftware;
    cupMesh.receiveShadow = !isSoftware;
    modelGroup.add(cupMesh);

    // B. Handle
    const handleGeom = new THREE.TorusGeometry(0.38, 0.09, 20, 36, Math.PI * 0.95);
    const handleMesh = new THREE.Mesh(handleGeom, cupMat);
    handleMesh.position.set(0.98, 0.65, 0);
    handleMesh.rotation.z = -Math.PI * 0.52;
    handleMesh.castShadow = !isSoftware;
    modelGroup.add(handleMesh);

    // C. Coffee Liquid with Crema Surface
    const coffeeGeom = new THREE.CircleGeometry(0.99, 48);
    const coffeeMat = new THREE.MeshStandardMaterial({
      map: latteTexture,
      roughness: 0.22,
      metalness: 0.05
    });
    const coffeeMesh = new THREE.Mesh(coffeeGeom, coffeeMat);
    coffeeMesh.position.y = 1.14;
    coffeeMesh.rotation.x = -Math.PI / 2;
    coffeeMesh.receiveShadow = !isSoftware;
    modelGroup.add(coffeeMesh);

    // D. Slate Platter Coaster
    const coasterGeom = new THREE.CylinderGeometry(1.6, 1.68, 0.1, 48);
    const coasterMat = new THREE.MeshStandardMaterial({
      color: 0x221D1A,
      roughness: 0.85,
      metalness: 0.1
    });
    const coasterMesh = new THREE.Mesh(coasterGeom, coasterMat);
    coasterMesh.position.y = -0.05;
    coasterMesh.receiveShadow = !isSoftware;
    modelGroup.add(coasterMesh);

    // E. Realistic 3D Roasted Coffee Beans on Platter
    const beanGeom = new THREE.SphereGeometry(0.12, 16, 16);
    beanGeom.scale(1.5, 0.8, 1.0);
    const beanMat = new THREE.MeshStandardMaterial({
      color: 0x382015,
      roughness: 0.5,
      metalness: 0.05
    });

    const beanCoords = [
      { x: 1.15, z: 0.8, rotY: 0.8, rotZ: 0.15 },
      { x: 1.35, z: 0.55, rotY: 2.1, rotZ: -0.1 },
      { x: -1.05, z: 0.9, rotY: -1.2, rotZ: 0.2 },
      { x: -1.25, z: 0.65, rotY: 0.4, rotZ: -0.15 },
      { x: 0.2, z: 1.35, rotY: 1.7, rotZ: 0.05 }
    ];

    beanCoords.forEach(pos => {
      const beanMesh = new THREE.Mesh(beanGeom, beanMat);
      beanMesh.position.set(pos.x, 0.05, pos.z);
      beanMesh.rotation.set(0.1, pos.rotY, pos.rotZ);
      beanMesh.castShadow = !isSoftware;
      modelGroup.add(beanMesh);
    });

    // F. Procedural Rising Steam Particles
    const steamCount = 45;
    const steamGeo = new THREE.BufferGeometry();
    const steamPositions = new Float32Array(steamCount * 3);
    const steamVelocities: { x: number; y: number; z: number; life: number; maxLife: number }[] = [];

    for (let i = 0; i < steamCount; i++) {
      const r = Math.random() * 0.45;
      const angle = Math.random() * Math.PI * 2;
      steamPositions[i * 3] = Math.cos(angle) * r;
      steamPositions[i * 3 + 1] = 1.2 + Math.random() * 0.8;
      steamPositions[i * 3 + 2] = Math.sin(angle) * r;

      steamVelocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: 0.005 + Math.random() * 0.006,
        z: (Math.random() - 0.5) * 0.003,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 50
      });
    }

    steamGeo.setAttribute('position', new THREE.BufferAttribute(steamPositions, 3));

    // Particle sprite canvas
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d')!;
    const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    pGrad.addColorStop(0, 'rgba(255, 245, 235, 0.6)');
    pGrad.addColorStop(0.5, 'rgba(255, 240, 225, 0.25)');
    pGrad.addColorStop(1, 'rgba(255, 240, 225, 0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 64, 64);
    const pTexture = new THREE.CanvasTexture(pCanvas);

    const steamMat = new THREE.PointsMaterial({
      size: 0.5,
      map: pTexture,
      transparent: true,
      opacity: 0.45,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const steamParticles = new THREE.Points(steamGeo, steamMat);
    steamParticlesRef.current = steamParticles;
    modelGroup.add(steamParticles);

    // Initial offset to center comfortably
    modelGroup.position.set(0, -0.5, 0);
    scene.add(modelGroup);

    // Pointer movement listener
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      pointerPos.current = { x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) };
    };

    container.addEventListener('mousemove', handlePointerMove);

    // Resize listener
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let time = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      time += delta;

      // Camera preset smooth transition
      currentCamPos.current.lerp(targetCamPos.current, 0.04);
      currentLookAt.current.lerp(targetLookAt.current, 0.04);
      camera.position.copy(currentCamPos.current);
      camera.lookAt(currentLookAt.current);

      // Subtle responsive model sway with pointer
      if (modelGroupRef.current) {
        const targetRotY = pointerPos.current.x * 0.35 + (cameraPreset === 'hero' ? 0.3 : 0);
        const targetRotX = -pointerPos.current.y * 0.15;
        modelGroupRef.current.rotation.y = THREE.MathUtils.damp(modelGroupRef.current.rotation.y, targetRotY, 4, delta);
        modelGroupRef.current.rotation.x = THREE.MathUtils.damp(modelGroupRef.current.rotation.x, targetRotX, 4, delta);
      }

      // Steam Particle simulation
      if (steamParticlesRef.current && steamActive) {
        const posAttr = steamGeo.attributes.position as THREE.BufferAttribute;
        const positions = posAttr.array as Float32Array;

        for (let i = 0; i < steamCount; i++) {
          const vel = steamVelocities[i];
          vel.life += 1;

          // Float upward with subtle drift
          positions[i * 3] += vel.x + Math.sin(time * 2 + i) * 0.001;
          positions[i * 3 + 1] += vel.y;
          positions[i * 3 + 2] += vel.z + Math.cos(time * 2 + i) * 0.001;

          if (vel.life > vel.maxLife || positions[i * 3 + 1] > 2.8) {
            vel.life = 0;
            const r = Math.random() * 0.45;
            const angle = Math.random() * Math.PI * 2;
            positions[i * 3] = Math.cos(angle) * r;
            positions[i * 3 + 1] = 1.15;
            positions[i * 3 + 2] = Math.sin(angle) * r;
          }
        }
        posAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cupGeom.dispose();
      handleGeom.dispose();
      coffeeGeom.dispose();
      coasterGeom.dispose();
      beanGeom.dispose();
      steamGeo.dispose();
      latteTexture.dispose();
      ceramicNoiseTex.dispose();
      pTexture.dispose();
    };
  }, [isStaticView]);

  // Handle Glaze Switch
  useEffect(() => {
    if (!cupMaterialRef.current) return;
    const chosen = glazePalette[activeGlaze];
    cupMaterialRef.current.color.setHex(chosen.color);
    cupMaterialRef.current.roughness = chosen.roughness;
    cupMaterialRef.current.metalness = chosen.metalness;
    cupMaterialRef.current.clearcoat = chosen.clearcoat;
    cupMaterialRef.current.clearcoatRoughness = chosen.clearcoatRoughness;
    cupMaterialRef.current.needsUpdate = true;
  }, [activeGlaze]);

  // Handle Camera Presets
  const applyPreset = (preset: 'hero' | 'top' | 'close') => {
    setCameraPreset(preset);
    if (preset === 'hero') {
      targetCamPos.current.set(0.6, 2.1, 3.8);
      targetLookAt.current.set(0, 0.4, 0);
    } else if (preset === 'top') {
      targetCamPos.current.set(0, 3.8, 0.2);
      targetLookAt.current.set(0, 0.9, 0);
    } else if (preset === 'close') {
      targetCamPos.current.set(0.8, 1.4, 2.2);
      targetLookAt.current.set(0.2, 0.8, 0);
    }
  };

  // Handle Steam Toggle
  const toggleSteam = () => {
    setSteamActive(prev => {
      const next = !prev;
      if (steamParticlesRef.current) {
        steamParticlesRef.current.visible = next;
      }
      return next;
    });
  };

  if (!glAvailable || isStaticView) {
    return (
      <div className="relative w-full aspect-square max-w-[540px] mx-auto rounded-3xl overflow-hidden border border-[#E8DEC8] shadow-2xl bg-[#EBE3D5]">
        <img
          src={ASSETS.heroCup}
          alt="Ember & Origin handmade ceramic coffee cup with latte art on slate"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E29547] font-semibold">Artisanal Ceramic Craft</p>
              <p className="text-white font-editorial text-lg">Single-Origin Ember Pour</p>
            </div>
            {glAvailable && (
              <button
                onClick={() => onStaticFallbackToggle && onStaticFallbackToggle(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C35B34] text-white text-xs font-medium hover:bg-[#A54420] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Launch 3D Cup
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto rounded-3xl overflow-hidden border border-[#E4D8C4] bg-gradient-to-b from-[#FAF4EA] to-[#EDE1CD] shadow-2xl group">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Interactive 3D Ceramic Cup: Move pointer to inspect angles"
      />

      {/* Subtle Top Spec Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#DACBB0] text-[11px] font-medium text-[#423028] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C35B34]" />
          Interactive 3D Craft
        </span>
      </div>

      {/* Top Right Static / 3D Switch */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => onStaticFallbackToggle && onStaticFallbackToggle(true)}
          title="Switch to High-Resolution Photography"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#DACBB0] text-[11px] font-medium text-[#423028] hover:bg-white transition-colors shadow-sm"
        >
          <ImageIcon className="w-3.5 h-3.5 text-[#C35B34]" />
          <span>Photo View</span>
        </button>
      </div>

      {/* Ergonomic Collapsible Bottom Control Dock (Three.js skill directive) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-[480px]">
        {/* Toggle bar */}
        <div className="flex justify-center mb-1">
          <button
            onClick={() => setControlsCollapsed(!controlsCollapsed)}
            className="text-[10px] tracking-wider uppercase font-semibold text-[#665042] bg-white/80 backdrop-blur-sm border border-[#DACBB0] px-3 py-0.5 rounded-full hover:bg-white hover:text-[#211612] transition-colors"
          >
            {controlsCollapsed ? '▾ Customizer' : '▴ Hide'}
          </button>
        </div>

        {/* Dock panel */}
        {!controlsCollapsed && (
          <div className="bg-white/95 backdrop-blur-md border border-[#D8C7AC] rounded-2xl p-2.5 shadow-xl transition-all duration-300">
            <div className="grid grid-cols-3 gap-2 text-center">
              {/* Angle Presets */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A6354] mb-1">Angle</span>
                <div className="flex items-center gap-1 bg-[#F5EFE6] p-1 rounded-lg">
                  <button
                    onClick={() => applyPreset('hero')}
                    className={`px-2 py-1 text-[11px] rounded font-medium transition-colors ${cameraPreset === 'hero' ? 'bg-[#C35B34] text-white shadow-xs' : 'text-[#5A453A] hover:text-[#211612]'}`}
                    title="Hero 45° Angle"
                  >
                    Hero
                  </button>
                  <button
                    onClick={() => applyPreset('top')}
                    className={`px-2 py-1 text-[11px] rounded font-medium transition-colors ${cameraPreset === 'top' ? 'bg-[#C35B34] text-white shadow-xs' : 'text-[#5A453A] hover:text-[#211612]'}`}
                    title="Top Down Latte Art View"
                  >
                    Crema
                  </button>
                  <button
                    onClick={() => applyPreset('close')}
                    className={`px-2 py-1 text-[11px] rounded font-medium transition-colors ${cameraPreset === 'close' ? 'bg-[#C35B34] text-white shadow-xs' : 'text-[#5A453A] hover:text-[#211612]'}`}
                    title="Close Glaze Detail"
                  >
                    Rim
                  </button>
                </div>
              </div>

              {/* Glaze Finish */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A6354] mb-1">Ceramic Glaze</span>
                <div className="flex items-center gap-1.5 p-1 bg-[#F5EFE6] rounded-lg">
                  <button
                    onClick={() => setActiveGlaze('sandstone')}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${activeGlaze === 'sandstone' ? 'border-[#C35B34] scale-110 shadow-xs' : 'border-transparent'}`}
                    style={{ backgroundColor: '#EAE2D5' }}
                    title="Sandstone Glaze"
                  />
                  <button
                    onClick={() => setActiveGlaze('terracotta')}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${activeGlaze === 'terracotta' ? 'border-[#C35B34] scale-110 shadow-xs' : 'border-transparent'}`}
                    style={{ backgroundColor: '#C35B34' }}
                    title="Terracotta Ember Glaze"
                  />
                  <button
                    onClick={() => setActiveGlaze('obsidian')}
                    className={`w-6 h-6 rounded-full border-2 transition-transform ${activeGlaze === 'obsidian' ? 'border-[#C35B34] scale-110 shadow-xs' : 'border-transparent'}`}
                    style={{ backgroundColor: '#1F1A17' }}
                    title="Obsidian Matte Glaze"
                  />
                </div>
              </div>

              {/* Steam toggle */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A6354] mb-1">Steam</span>
                <button
                  onClick={toggleSteam}
                  className={`flex items-center gap-1 px-3 py-1.5 text-[11px] font-medium rounded-lg transition-colors ${steamActive ? 'bg-[#58644A] text-white shadow-xs' : 'bg-[#E5DCD0] text-[#695447]'}`}
                >
                  <Wind className="w-3.5 h-3.5" />
                  <span>{steamActive ? 'Active' : 'Paused'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
