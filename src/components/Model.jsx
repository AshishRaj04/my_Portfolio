import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Three = () => {
  const computer = useGLTF("./3dModel/gltf/");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene} 
        scale={0.80}
        position={[0,-10 , -18]}
        
          />
    </mesh>
  );
};

const Model = () => {
  return (
    
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 20, 20], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
      className="absolute overflow-hidden z-50"
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Three />
      </Suspense>

      <Preload all />
    </Canvas>
    
  );
};

export default Model;


//public\3dModel\free_merc_hovercar.glb