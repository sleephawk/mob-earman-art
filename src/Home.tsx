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
import { CSSTransition, SwitchTransition } from "react-transition-group";
export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [activePage, setActivePage] = useState<
    "home" | "about" | "art" | "shop" | "events" | "lore" | "contact" | null
  >(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  function renderPage(page: typeof activePage) {
    switch (page) {
      case "home":
        setActivePage(null);
        return null;
      case "about":
        return <About />;
      case "art":
        return <Art />;
      case "shop":
        return <Shop />;
      case "events":
        return <Events />;
      case "lore":
        return <Lore />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  }
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
        <div style={{ display: "flex" }}>
          <Nav
            className={"cssStandardBorder"}
            aria={"main menu"}
            anchors={[
              <Anchor cb={handleNavClick} link={"home"} />,
              <Anchor cb={handleNavClick} link={"about"} />,
              <Anchor cb={handleNavClick} link={"art"} />,
              <Anchor cb={handleNavClick} link={"shop"} />,
              <Anchor cb={handleNavClick} link={"events"} />,
              <Anchor cb={handleNavClick} link={"lore"} />,
              <Anchor cb={handleNavClick} link={"contact"} />,
            ]}
            content={
              <>
                <div className="theme-box , cssStandardBorder">
                  <Button
                    className="theme-box__button theme-box__button--white"
                    color={"white"}
                    round={true}
                    event={() => setMode("paper")}
                  ></Button>
                  <Button
                    className="theme-box__button theme-box__button--green"
                    color={"#379f79"}
                    round={true}
                    event={() => setMode("paint")}
                  ></Button>
                  <Button
                    className="theme-box__button theme-box__button--orange"
                    color={"orange"}
                    round={true}
                    event={() => setMode("primary")}
                  ></Button>
                </div>
              </>
            }
          ></Nav>
          {activePage ? (
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={activePage}
                nodeRef={nodeRef}
                timeout={800}
                classNames="fade"
                unmountOnExit
              >
                <div ref={nodeRef} className="page">
                  {renderPage(activePage)}
                </div>
              </CSSTransition>
            </SwitchTransition>
          ) : (
            renderPage(activePage)
          )}
        </div>
        <ClipNameContext.Provider value={clipName}>
          {/* <MobCanvas /> */}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
