//this is a mess but it is directly from the react 3 fibre website:
// https://r3f.docs.pmnd.rs/tutorials/loading-models#loading-models

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

export default function Mob3d(props: object | null) {
  const groupRef = useRef<Group>(null);
  const gltf = useGLTF("/assets/glb/brokenBakeryMob.glb");

  return (
    <primitive ref={groupRef} object={gltf.scene} {...props} dispose={null} />
  );
}

useGLTF.preload("/glb/brokenBakeryMob.glb");
