import { OrbitControls, useGLTF } from "@react-three/drei";

import { MobMini } from "./MobMini";

export default function Mob3d() {
  return (
    <>
      <ambientLight intensity={2} />
      <MobMini scale={6}></MobMini>

      <OrbitControls autoRotate={true} enableZoom={false} />
    </>
  );
}

useGLTF.preload("/assets/glb/MobPaper.glb");
