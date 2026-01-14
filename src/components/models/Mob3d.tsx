import { OrbitControls, useGLTF } from "@react-three/drei";
// import MobPaper from "../MobPaper";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import { MobV6 } from "./MobV6";

export default function Mob3d() {
  /**workflow for debug helpers:
   * 1) Create a reference to store the light so it doent change with state
   * useHelper, the drei hook, allows us to pass in the ref and make a pointer
   * we pass the  ref the pointlight helper and the size.
   * then we pass the ref into the component
   */

  return (
    <>
      <EffectComposer>
        <Bloom
          intensity={3} // strength of bloom
          luminanceThreshold={0.3} // brightness
          luminanceSmoothing={1}
          mipmapBlur
        />
        <ambientLight intensity={2} />
      </EffectComposer>
      <MobV6 scale={6}></MobV6>

      <OrbitControls enableZoom={true} />
    </>
  );
}

useGLTF.preload("/assets/glb/MobPaper.glb");
