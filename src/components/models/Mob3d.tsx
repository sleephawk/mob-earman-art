import { OrbitControls, useGLTF } from "@react-three/drei";
// import MobPaper from "../MobPaper";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import TEST3 from "../TEST3";

export default function Mob3d() {
  /**workflow for debug helpers:
   * 1) Create a reference to store the light so it doent change with state
   * useHelper, the drei hook, allows us to pass in the ref and make a pointer
   * we pass the  ref the pointlight helper and the size.
   * then we pass the ref into the component
   */

  // const gltf = useGLTF(path);

  // const { scene, animations } = gltf;

  // const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  // useEffect(() => {
  //   mixerRef.current = new THREE.AnimationMixer(scene);
  //   animations.forEach((clip) => {
  //     if (!clip.name.includes(clipName)) {
  //       mixerRef.current!.clipAction(clip).stop();
  //     } else {
  //       mixerRef.current!.clipAction(clip).play();
  //     }
  //   });
  //   return () => {
  //     animations.forEach((clip) => {
  //       mixerRef.current?.clipAction(clip).stop();
  //     });
  //   };
  // }, [scene, animations, clipName]);

  // useFrame((_, delta) => {
  //   mixerRef.current?.update(delta);
  // });

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
      <TEST3 scale={2.5} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

useGLTF.preload("/assets/glb/MobPaper.glb");
