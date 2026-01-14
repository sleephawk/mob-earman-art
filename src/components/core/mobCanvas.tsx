import Mob3d from "../models/Mob3d.js";
import { Canvas } from "@react-three/fiber";
import { ModeContext } from "../../ModeContext.js";
import { useContext, useRef } from "react";
// import { useEffect type ReactNode } from "react";
// import { CSSTransition, SwitchTransition } from "react-transition-group";
import VideoBackground from "./VideoBackground.tsx";
import { srcCatalogue } from "../../constants/srcCatalogue.ts";

export default function MobCanvas({ page }: { page: string | null }) {
  const mode = useContext(ModeContext);
  const ref = useRef(null);
  console.log(mode);
  console.log(page);
  return (
    // <SwitchTransition mode="out-in">
    //   <CSSTransition
    //     key={page}
    //     nodeRef={ref}
    //     timeout={200}
    //     classNames="fade"
    //     unmountOnExit
    //   >
    <div ref={ref} className="webSized">
      {mode?.includes("2d") && (
        <VideoBackground src={srcCatalogue.videoBackgrounds.paper} />
      )}
      {page && page.includes("home") && !mode?.includes("2d") && (
        <div className="background-file" id="canvas-container">
          <Canvas>
            <mesh>
              <Mob3d />
            </mesh>
          </Canvas>
        </div>
      )}
      {page && !page?.includes("home") && mode?.includes("paint") && (
        <VideoBackground src={srcCatalogue.videoBackgrounds.green} />
      )}
      {page && !page?.includes("home") && mode?.includes("primary") && (
        <VideoBackground src={srcCatalogue.videoBackgrounds.orange} />
      )}
      {page && !page?.includes("home") && mode?.includes("paper") && (
        <VideoBackground src={srcCatalogue.videoBackgrounds.black} />
      )}
    </div>
    //   </CSSTransition>
    // </SwitchTransition>
  );
}
