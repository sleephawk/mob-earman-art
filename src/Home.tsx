import MobCanvas from "./components/core/mobCanvas.tsx";
import { ModeContext } from "./ModeContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
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
  const [about, setAbout] = useState(false);
  const [shop, setShop] = useState(false);
  const [art, setArt] = useState(false);
  const [lore, setLore] = useState(false);
  const [contact, setContact] = useState(false);
  const [events, setEvents] = useState(false);
  const [page, setPage] = useState(false);
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("primary");

  const handleNavClick = (pageName: string): void => {
    setPage(true);
    switch (pageName) {
      case "about":
        setAbout(true);
        break;
      case "art":
        setArt(true);
        break;
      case "events":
        setEvents(true);
        break;
      case "shop":
        setShop(true);
        break;
      case "lore":
        setLore(true);
        break;
      case "contact":
        setContact(true);
        break;
      default:
        console.log("argument passed by the button did not match a case");
        break;
    }
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

  useEffect(() => {
    if (!debug) return;
    console.log(
      `about: ${about}, art: ${art}, shop: ${shop}, events: ${events}, lore:${lore}, contact: ${contact}`
    );
  }, [about, art, contact, debug, events, lore, shop]);

  return (
    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        <Nav
          content={
            <a>
              <img></img>
            </a>
          }
        ></Nav>
        {!page && (
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
        )}
        {page && about && <About />}
        {page && art && <Art />}
        {page && shop && <Shop />}
        {page && events && <Events />}
        {page && lore && <Lore />}
        {page && contact && <Contact />}
        <ClipNameContext.Provider value={clipName}>
          {!debug && !page && <MobCanvas />}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
