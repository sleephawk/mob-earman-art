import MobCanvas from "./components/core/mobCanvas.tsx";
import { ModeContext } from "./ModeContext.js";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import Button from "./components/basic/Button.tsx";
import { ClipNameContext } from "./ClipNameContext.ts";
import About from "./components/pages/About.tsx";
import Art from "./components/pages/Art.tsx";
import Shop from "./components/pages/Shop.tsx";
import Events from "./components/pages/Events.tsx";
import Lore from "./components/pages/Lore.tsx";
import Contact from "./components/pages/Contact.tsx";
import Anchor from "./components/basic/Anchor.tsx";
import Nav from "./components/core/Nav.tsx";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [debug, setDebug] = useState(true);
  const [activePage, setActivePage] = useState<
    "about" | "art" | "shop" | "events" | "lore" | "contact" | null
  >(null);
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("primary");

  const handleNavClick = (pageName: string) => {
    setActivePage(pageName as any);
  };

  useEffect(() => {
    const backgrounds = {
      paper: "black",
      primary: "#c28335",
      paint: "#379f79",
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
    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        <Nav
          aria={"main menu"}
          anchors={[
            <Anchor cb={handleNavClick} link={"about"} />,
            <Anchor cb={handleNavClick} link={"art"} />,
            <Anchor cb={handleNavClick} link={"shop"} />,
            <Anchor cb={handleNavClick} link={"events"} />,
            <Anchor cb={handleNavClick} link={"lore"} />,
            <Anchor cb={handleNavClick} link={"contact"} />,
          ]}
          content={
            <>
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
              <div className="theme-box , cssStandardBorder">
                <Button
                  color={"white"}
                  round={true}
                  event={() => setMode("paper")}
                ></Button>
                <Button
                  color={"#379f79"}
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
            </>
          }
        ></Nav>

        <About flag={activePage === "about"} />
        <Art flag={activePage === "art"} />
        <Shop flag={activePage === "shop"} />
        <Events flag={activePage === "events"} />
        <Lore flag={activePage === "lore"} />
        <Contact flag={activePage === "contact"} />

        <ClipNameContext.Provider value={clipName}>
          {!debug && <MobCanvas />}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
