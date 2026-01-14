import MobCanvas from "./components/core/mobCanvas.tsx";
import { ModeContext } from "./ModeContext.js";
import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ClipNameContext } from "./ClipNameContext.ts";
import About from "./components/pages/About.tsx";
import Art from "./components/pages/Art.tsx";
import Shop from "./components/pages/Shop.tsx";
import Lore from "./components/pages/Lore.tsx";
import Contact from "./components/pages/Contact.tsx";
import Anchor from "./components/basic/Anchor.tsx";
import Nav from "./components/core/Nav.tsx";
import { Backgrounds } from "./constants/backgrounds.ts";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { srcCatalogue } from "./constants/srcCatalogue.ts";
import ThemeMenu from "./components/core/ThemeMenu.tsx";
import MobilePages from "./components/core/MobilePages.tsx";
export function Home({ cb }: { cb: (bg: string) => void }) {
  const [clipName, setClipName] = useState("Idle");
  const [activePage, setActivePage] = useState<
    "home" | "about" | "art" | "shop" | "lore" | "contact" | null
  >("home");
  const [burgOrientation, setBurgOrientation] = useState<
    "normal" | "turn" | null
  >("normal");
  const nodeRef = useRef<HTMLDivElement>(null);

  function renderPage(page: typeof activePage) {
    switch (page) {
      case "home":
        return null;
      case "about":
        return <About />;
      case "art":
        return <Art />;
      case "shop":
        return <Shop />;
      case "lore":
        return <Lore />;
      case "contact":
        return <Contact />;
      default:
        return;
    }
  }
  const [mode, setMode]: [string, Dispatch<SetStateAction<string>>] =
    useState("primary");

  const handleNavClick = (pageName: string) => {
    setActivePage(pageName as any);
  };

  useEffect(() => {
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
        handleCase(Backgrounds.PAINT, animations.idle);
        break;
      case "paper":
        handleCase(Backgrounds.PAPER, animations.idle);
        break;
      case "primary":
        handleCase(Backgrounds.PRIMARY, animations.idle);
        break;
    }
  }, [mode, cb]);

  console.log(activePage);
  return (
    <ModeContext.Provider value={mode}>
      <div style={{ position: "relative" }}>
        <Nav
          aria="nav-bar"
          className="nav"
          border={false}
          content={
            <>
              <div className="nav__container nav__container--left">
                <img
                  className="nav__icon nav__icon--snoozy"
                  src={srcCatalogue.icons.snoozy}
                />
                <img
                  className="nav__icon nav__icon--mob"
                  src={srcCatalogue.icons.mob}
                  onClick={() => {
                    setClipName("checkout");
                  }}
                />
                <img
                  className="nav__icon nav__icon--mob"
                  src={srcCatalogue.icons.mob}
                  onClick={() => {
                    setMode("2d");
                  }}
                />
                <ThemeMenu
                  cb={setMode}
                  themes={[
                    { color: Backgrounds.PAPER, theme: "paper" },
                    { color: Backgrounds.PAINT, theme: "paint" },
                    { color: Backgrounds.PRIMARY, theme: "primary" },
                  ]}
                />
              </div>
              <div className="nav__container nav___container--right">
                <img
                  className={`nav__icon--burg ${
                    burgOrientation === "turn" ? "turn" : ""
                  }`}
                  src="/assets/mini-burg.png"
                  alt="burger icon"
                  onClick={() =>
                    setBurgOrientation(
                      burgOrientation === "normal" ? "turn" : "normal"
                    )
                  }
                />
              </div>
            </>
          }
        >
          <></>
        </Nav>
        <div className={"home"}>
          <Nav
            className={"main-menu"}
            aria={"main menu"}
            border={false}
            anchors={[
              <Anchor cb={handleNavClick} link={"home"} />,
              <Anchor cb={handleNavClick} link={"about"} />,
              <Anchor cb={handleNavClick} link={"art"} />,
              <Anchor cb={handleNavClick} link={"shop"} />,
              <Anchor cb={handleNavClick} link={"lore"} />,
              <Anchor cb={handleNavClick} link={"contact"} />,
            ]}
          ></Nav>
          {activePage ? (
            <SwitchTransition mode="out-in">
              <CSSTransition
                key={activePage}
                nodeRef={nodeRef}
                timeout={100}
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
        <div>
          <MobilePages></MobilePages>
        </div>
        <ClipNameContext.Provider
          value={{ clip: clipName, setClip: setClipName }}
        >
          <MobCanvas page={activePage} />
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
