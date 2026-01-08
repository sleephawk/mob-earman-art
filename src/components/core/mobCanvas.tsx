import Mob3d from "../models/Mob3d.js";
import { Canvas } from "@react-three/fiber";

export default function MobCanvas() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "100vh",
        border: "solid blue",
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
