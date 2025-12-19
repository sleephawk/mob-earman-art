import MobCanvas from "./components/core/mobCanvas.js";
import { SkinRefContext } from "./skinRefContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./components/basic/Button.js";
import { ClipNameContext } from "./ClipNameContext.js";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [path, setPath]: [string, Dispatch<SetStateAction<string>>] = useState(
    "/assets/glb/ART3.glb"
  );

  const [clipName, setClipName] = useState("Idle");
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("paint");

  useEffect(() => {
    const skins = {
      paper: "/assets/glb/MobPaper.glb",
      primary: "/assets/glb/MobPrimary.glb",
      paint: "/assets/glb/TEST2.glb",
    };

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

    const handleCase = (p: string, c: string, cn: string) => {
      setPath(p);
      cb(c);
      setClipName(cn);
    };

    switch (mode) {
      case "paint":
        handleCase(skins.paint, backgrounds.paint, animations.checkout);
        break;
      case "paper":
        handleCase(skins.paper, backgrounds.paper, animations.checkout);
        break;
      case "primary":
        handleCase(skins.primary, backgrounds.primary, animations.checkout);
        break;
    }
  }, [mode, cb]);

  return (
    <SkinRefContext.Provider value={path}>
      <div style={{ position: "relative" }}>
        <Button content={"PAPER"} event={() => setMode("paper")}></Button>
        <Button content={"PAINT"} event={() => setMode("paint")}></Button>
        <Button content={"PRIMARY"} event={() => setMode("primary")}></Button>
        <ClipNameContext.Provider value={clipName}>
          <MobCanvas />
        </ClipNameContext.Provider>
      </div>
    </SkinRefContext.Provider>
  );
}
