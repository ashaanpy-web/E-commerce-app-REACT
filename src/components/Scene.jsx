import React, { useRef, useMemo, useEffect } from 'react'; // 👈 useEffect add kiya
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Stars, Sphere } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { editable as e, SheetProvider } from '@theatre/r3f';

const project = getProject('Hero3D');
const sheet = project.sheet('HeroScene');

const Scene = ({ quality }) => {
  const coreRef = useRef();

  // ⚡ FIX: Theatre.js Sequence ko useEffect mein dala takay Memory Leak khatam ho
  useEffect(() => {
    let animationControls;

    project.ready.then(() => {
      // Animation ko handle mein save kiya
      animationControls = sheet.sequence.play({ iterationCount: Infinity, range: [0, 10] });
    });

    // Cleanup Function: Jab user doosre page par jaye to animation memory free ho
    return () => {
      if (sheet && sheet.sequence) {
        sheet.sequence.pause();
      }
    };
  }, []); // Empty dependency array yaani sirf aik dafa chalega

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const sphereSegments = quality < 0.8 ? 24 : 64;
  const torusSegments = quality < 0.8 ? 32 : 100;

  return (
    <SheetProvider sheet={sheet}>
      {/* Lights */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <e.pointLight theatreKey="CyanLight" position={[-5, 5, -5]} color="#00f0ff" intensity={5} distance={20} />
      <e.pointLight theatreKey="PurpleLight" position={[5, -5, 5]} color="#8a2be2" intensity={5} distance={20} />

      {/* Particles */}
      {quality > 0.5 && (
        <>
          <Stars radius={100} depth={50} count={quality < 0.8 ? 500 : 2000} factor={4} saturation={0} fade speed={1} />
          <Sparkles count={quality < 0.8 ? 30 : 100} scale={12} size={2} speed={0.4} opacity={0.2} color="#00f0ff" />
        </>
      )}

      {/* Core */}
      <Float speed={quality < 0.8 ? 0.5 : 2} rotationIntensity={1} floatIntensity={2}>
        <e.group theatreKey="TechCore">
          <Sphere ref={coreRef} args={[1, sphereSegments, sphereSegments]} scale={1.2}>
            {quality < 0.8 ? (
              <meshStandardMaterial
                color="#020617"
                emissive="#00f0ff"
                emissiveIntensity={1.2}
                wireframe={true}
                roughness={0.1}
                metalness={0.9}
              />
            ) : (
              <MeshDistortMaterial
                color="#000000"
                emissive="#00f0ff"
                emissiveIntensity={1}
                distort={0.4}
                speed={2}
                roughness={0.2}
                metalness={1}
              />
            )}
          </Sphere>

          <e.mesh theatreKey="Ring1" rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.5, 0.015, 8, torusSegments]} />
            <meshStandardMaterial color="#8a2be2" emissive="#8a2be2" emissiveIntensity={1.5} />
          </e.mesh>

          <e.mesh theatreKey="Ring2" rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[3, 0.015, 8, torusSegments]} />
            <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={1.5} />
          </e.mesh>
        </e.group>
      </Float>
    </SheetProvider>
  );
};

export default Scene;