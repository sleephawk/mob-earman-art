import MobCanvas from "./components/core/mobCanvas.js";
import { SkinRefContext } from "./skinRefContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./components/basic/Button.js";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [path, setPath]: [string, Dispatch<SetStateAction<string>>] = useState(
    "/assets/glb/ART3.glb"
  );
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("paint");

  useEffect(() => {
    const skins = {
      paper: "/assets/glb/MobPaper.glb",
      primary: "/assets/glb/MobPrimary.glb",
      paint: "/assets/glb/MobPaint.glb",
    };

    const backgrounds = {
      paper: "black",
      primary: "#c28335",
      paint: "whitesmoke",
    };

    switch (mode) {
      case "paint":
        setPath(skins.paint);
        cb(backgrounds.paint);
        break;
      case "paper":
        setPath(skins.paper);
        cb(backgrounds.paper);
        break;
      case "primary":
        setPath(skins.primary);
        cb(backgrounds.primary);
        break;
    }
  }, [mode, cb]);

  return (
    <SkinRefContext.Provider value={path}>
      <div style={{ position: "relative" }}>
        <Button content={"PAPER"} event={() => setMode("paper")}></Button>
        <Button content={"PAINT"} event={() => setMode("paint")}></Button>
        <Button content={"PRIMARY"} event={() => setMode("primary")}></Button>
        <MobCanvas />
      </div>
    </SkinRefContext.Provider>
  );
}
