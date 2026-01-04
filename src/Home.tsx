import MobCanvas from "./components/core/mobCanvas.js";
import { ModeContext } from "./ModeContext.js";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "./components/basic/Button.js";
import { ClipNameContext } from "./ClipNameContext.js";
import About from "./components/pages/About.js";

export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [debug, setDebug] = useState(false);
  const [about, setAbout] = useState(false);
  const [shop, setShop] = useState(false);
  const [art, setArt] = useState(false);
  const [lore, setLore] = useState(false);
  const [contact, setContact] = useState(false);
  const [events, setEvents] = useState(false);
  const [page, setPage] = useState(false);
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("paint");

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
    //Page is a flag toggle
    //need a div that overlays the whole thing and is fixed, then position things
    //within that context
    //can change debug mode to low res mode
    //could add a theme with 3d pixelated
    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        {!page && (
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
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("about");
                  }}
                  href=""
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("art");
                  }}
                  href=""
                >
                  ART
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("shop");
                  }}
                  href=""
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("events");
                  }}
                  href=""
                >
                  EVENTS
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("lore");
                  }}
                  href=""
                >
                  LORE
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                  href=""
                >
                  CONTACT
                </a>
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
          </nav> // collapsed for ease of reading
        )}
        {page && about && <About />}
        {page && art && <Art />}
        {page && shop && <Shop />}
        {page && events && <Events />}
        {page && lore && <Lore />}
        {page && contact && <Contact />}
        <ClipNameContext.Provider value={clipName}>
          {!debug && <MobCanvas />}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
