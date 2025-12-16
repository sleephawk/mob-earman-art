import Mob3d from "../models/Mob3d.js";
import { Canvas } from "@react-three/fiber";

export default function MobCanvas() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "fixed",
      }}
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
