import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor, Loader, Stats } from '@react-three/drei'; // 👈 Stats import kiya
import Scene from './Scene';

const Background3D = () => {
  const [dpr, setDpr] = useState(1.5);
  const [quality, setQuality] = useState(1);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 bg-slate-950 overflow-hidden pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          dpr={dpr}
          gl={{ antialias: false, powerPreference: "high-performance", precision: "lowp" }}
          camera={{ position: [0, 0, 8], fov: 45 }}
        >

          <Stats />

          <PerformanceMonitor
            onIncline={() => {
              console.log("FPS stable! Increasing quality to 1.0 (DPR: 2)");
              setDpr(2);
              setQuality(1);
            }}
            onDecline={() => {
              console.log("FPS dropped! Lowering quality to 0.5 (DPR: 1)");
              setDpr(1);
              setQuality(0.5);
            }}
          >
            <Scene quality={quality} />
          </PerformanceMonitor>
        </Canvas>
      </Suspense>
      {/* Optional Loader, can be removed if you want seamless transitions without loading screen jumping in */}
      {/* <Loader /> */}
    </div>
  );
};

export default Background3D;