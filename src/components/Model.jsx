import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "./Loader";

const Three = () => {
  const computer = useGLTF("./gltf/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={5} />
      <primitive object={computer.scene} scale={0.8} position={[0, -10, -18]} />
    </mesh>
  );
};

const Model = () => {
  return (
    <Canvas
      frameloop="always"
      shadows = "10%"
      camera={{ position: [20, 20, 20], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
      className="absolute overflow-hidden z-40"
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
