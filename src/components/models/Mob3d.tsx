import { OrbitControls, useGLTF } from "@react-three/drei";
// import MobPaper from "../MobPaper";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import MobV2 from "../MobV2";
import TEST4 from "../TEST4";

export default function Mob3d() {
  console.dir(MobV2);
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
          luminanceThreshold={0.3} // what brightness blooms
          luminanceSmoothing={1}
          mipmapBlur
        />
        <ambientLight intensity={2} />
      </EffectComposer>
      <TEST4 scale={3}></TEST4>
      {/* <MobV2 scale={2.5} /> */}

      <OrbitControls enableZoom={true} autoRotate={true} />
    </>
  );
}

useGLTF.preload("/assets/glb/MobPaper.glb");
