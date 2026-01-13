import Mob3d from "../models/Mob3d.js";
import { Canvas } from "@react-three/fiber";
import { ModeContext } from "../../ModeContext.js";
import { useContext, useRef, type ReactNode } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";


export default function MobCanvas({ page }: { page: string | null }) {
  const mode = useContext(ModeContext);
  const ref = useRef(null);
  console.log(mode);
  console.log(page);

const handleMode = (): ReactNode => {
  switch(mode) {
    case "primary": 
    return <BackgroundVideo src={}>
  }
}

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={page}
        nodeRef={mode}
        timeout={100}
        classNames="fade"
        unmountOnExit
      >
        <div ref={ref}>
          {page && page.includes("home") && (
            <div className="background-file" id="canvas-container">
              <Canvas>
                <mesh>
                  <Mob3d />
                </mesh>
              </Canvas>
            </div>
          )}
          {page && !page?.includes("home") && }
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
}
