"use client";
import { View } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const ViewCanvas = () => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          pointerEvents: "none",
        }}
        camera={{ fov: 30 }}
        shadows
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
      >
        {/* <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
        {/* all code slice/hero/scene.tsx e newa hoiche & slice/hero/index.tsx e render kora hoiche */}
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
    </>
  );
};

export default ViewCanvas;
