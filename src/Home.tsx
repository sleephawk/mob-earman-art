import MobCanvas from "./components/core/mobCanvas.js";
import { ModeContext } from "./ModeContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./components/basic/Button.js";
import { ClipNameContext } from "./ClipNameContext.js";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [debug, setDebug] = useState(false);
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("paint");

  useEffect(() => {
    //need an interval which is running in the background - maybe I can track three js's time?
    //need to randomly select one of the animations
    //could have all objects as a different ts module

    const backgrounds = {
      paper: "black",
      primary: "#c28335",
      paint: "blue",
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
    //nav needs plumbing out, but will also therefore need to import the context
    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        <nav
          style={{
            zIndex: 10,
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(50%, 25%)",
            color: "black",
            backgroundColor: "rgb(0,0,0, 0.5)",
            paddingRight: "40px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              textDecoration: "none",
              fontSize: "3rem",
            }}
          >
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">ART</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>

            <li>
              <a href="#">EVENTS</a>
            </li>
            <li>
              <a href="#">LORE</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <h2
            style={{
              color: "white",
              width: "100%",
              textAlign: "center",
              paddingLeft: "20px",
            }}
          >
            THEME
          </h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              padding: "20px 20px 30px 20px",
            }}
          >
            <Button
              color={"white"}
              round={true}
              event={() => setMode("paper")}
            ></Button>
            <Button
              color={"blue"}
              round={true}
              event={() => setMode("paint")}
            ></Button>
            <Button
              color={"orange"}
              round={true}
              event={() => setMode("primary")}
            ></Button>
            <Button
              event={() => {
                if (debug) {
                  setDebug(false);
                } else {
                  setDebug(true);
                }
              }}
              content="DEBUG MODE"
            ></Button>
          </div>
        </nav>
        <ClipNameContext.Provider value={clipName}>
          {!debug && <MobCanvas />}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
