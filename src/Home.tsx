import { useContext } from "react";
import MobCanvas from "./components/core/mobCanvas.js";
import type { Mesh, Object3D } from "three";

export function Home() {
  const meshMaterialIndexMap = new WeakMap<Mesh, number>();
  const reskinCB = (scene: Object3D) => {
    scene.traverse((obj) => {
      if ((obj as Mesh).isMesh) {
        const mesh: Mesh = obj;
        //
        const materialsArray = Array.isArray(mesh.material)
          ? mesh.material
          : [mesh.material];
        //
        let currentIndex = meshMaterialIndexMap.get(mesh) ?? 0;
        currentIndex = (currentIndex + 1) % materialsArray.length;
        meshMaterialIndexMap.set(mesh, currentIndex);
        mesh.material = materialsArray[currentIndex];
      }
    });
  };
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={reskinCB}
        style={{
          position: "absolute",
          height: "100px",
          left: "10px",
          top: "10px",
        }}
      >
        CLICK ME
      </button>
      <MobCanvas />
    </div>
  );
}
