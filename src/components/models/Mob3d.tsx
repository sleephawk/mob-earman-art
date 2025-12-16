import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { Group } from "three";
import type { GroupProps } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Mob3d(props: GroupProps) {
  const groupRef = useRef<Group>(null);

  /**workflow for debug helpers:
   * 1) Create a reference to store the light so it doent change with state
   * useHelper, the drei hook, allows us to pass in the ref and make a pointer
   * we pass the  ref the pointlight helper and the size.
   * then we pass the ref into the component
   */
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  const { scene, animations } = useGLTF("/assets/glb/ART3.glb");
  const glbForLog = useGLTF("/assets/glb/ART3.glb");
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);

  console.log(glbForLog);

  // Debug helpers (safe, non-visual unless debugging)
  useHelper(light1Ref, THREE.PointLightHelper, 1.5);
  useHelper(light2Ref, THREE.PointLightHelper, 1.5);

  useEffect(() => {
    mixerRef.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => {
      mixerRef.current!.clipAction(clip).play();
    });
    return () => {
      animations.forEach((clip) => {
        mixerRef.current?.clipAction(clip).stop();
      });
    };
  }, [scene, animations]);

  useFrame((_, delta) => {
    mixerRef.current?.update(delta);
  });

  return (
    <>
      <pointLight ref={light1Ref} position={[15, 5, 0]} intensity={100} />
      <EffectComposer>
        <Bloom
          intensity={5.5} // strength of bloom
          luminanceThreshold={0.3} // what brightness blooms
          luminanceSmoothing={1}
          mipmapBlur
        />
      </EffectComposer>
      <pointLight ref={light2Ref} position={[-12, 20, 4]} intensity={500} />

      <primitive ref={groupRef} object={scene} {...props} />

      <PerspectiveCamera makeDefault position={[70, 30, -10]} fov={50} />
      <OrbitControls enableZoom={false} />
    </>
  );
}

useGLTF.preload("/assets/glb/ART3.glb");
