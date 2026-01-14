import { Canvas } from "@react-three/fiber";
import { MobMini } from "../models/MobMini.tsx";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

export default function MobMiniCanvas() {
  const ref = useRef(null);
  return (
    <div ref={ref}>
      <div>
        <Canvas>
          <mesh>
            <MobMini scale={100} />
            <OrbitControls></OrbitControls>
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}
