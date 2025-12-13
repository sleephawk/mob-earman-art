import Mob3d from "../models/Mob3d.js";
import { Canvas } from "@react-three/fiber";

export default function MobCanvas() {
  return (
    <div
      style={{ border: "solid 10px white", height: "100%" }}
      id="canvas-container"
    >
      <Canvas>
        <mesh>
          <Mob3d />
        </mesh>
      </Canvas>
    </div>
  );
}
