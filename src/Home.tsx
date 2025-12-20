import MobCanvas from "./components/core/mobCanvas.js";
import { ModeContext } from "./ModeContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./components/basic/Button.js";
import { ClipNameContext } from "./ClipNameContext.js";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("paint");

  useEffect(() => {
    //need an interval which is running in the background - maybe I can track three js's time?
    //need to randomly select one of the animations

    const backgrounds = {
      paper: "black",
      primary: "#c28335",
      paint: "whitesmoke",
    };
    const animations = {
      idle: "Idle",
      checkout: "checkout",
    };

    const handleCase = (c: string, cn: string) => {
      cb(c);
      setClipName(cn);
    };

    switch (mode) {
      case "paint":
        handleCase(backgrounds.paint, animations.idle);
        break;
      case "paper":
        handleCase(backgrounds.paper, animations.idle);
        break;
      case "primary":
        handleCase(backgrounds.primary, animations.idle);
        break;
    }
  }, [mode, cb]);

  return (
    //COMPONENT

    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        <Button content={"PAPER"} event={() => setMode("paper")}></Button>
        <Button content={"PAINT"} event={() => setMode("paint")}></Button>
        <Button content={"PRIMARY"} event={() => setMode("primary")}></Button>
        <ClipNameContext.Provider value={clipName}>
          <MobCanvas />
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
