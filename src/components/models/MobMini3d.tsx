import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

const MobMini = React.lazy(() => import("./MobMini"));

export default function Mob3d() {
  return (
    <>
      <ambientLight intensity={2} />
      <Suspense fallback={null}>
        <MobMini scale={6}></MobMini>
      </Suspense>

      <OrbitControls autoRotate={true} enableZoom={false} />
    </>
  );
}

useGLTF.preload("/assets/glb/MobPaper.glb");
