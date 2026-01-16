import MobCanvas from "./components/core/mobCanvas.tsx";
import { ModeContext } from "./ModeContext.js";
import {
  useContext,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import { ClipNameContext } from "./ClipNameContext.ts";
import { ScreenSizeContext } from "./ScreenSizeContext.ts";
import About from "./components/pages/About.tsx";
import Art from "./components/pages/Art.tsx";
import Shop from "./components/pages/Shop.tsx";
import Lore from "./components/pages/Lore.tsx";
import Contact from "./components/pages/Contact.tsx";
import Anchor from "./components/basic/Anchor.tsx";
import Nav from "./components/core/Nav.tsx";

import { Backgrounds } from "./constants/Backgrounds.ts";
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

  const [burgMenu, setBurgMenu] = useState<boolean>(false);

  const nodeRef = useRef<HTMLDivElement>(null);
  const burgRef = useRef<HTMLDivElement>(null);
  const burgButtonRef = useRef<HTMLImageElement | null>(null);
  const screenWidth = useContext(ScreenSizeContext);

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
  const handleBurgNav = () => {
    setBurgMenu(false);
    setBurgOrientation("normal");
  };

  useEffect(() => {
    if (!burgMenu) return; // only attach listeners when menu is open

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleBurgNav(); // closes menu
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      // ignore clicks on the nav button itself
      if (burgButtonRef.current?.contains(e.target as Node)) {
        return;
      }
      if (burgRef.current && !burgRef.current.contains(e.target as Node)) {
        handleBurgNav(); // closes menu if click is outside
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgMenu]); // only re-run when burgMenu changes

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
                  className="nav__icon nav__icon--2d"
                  src={srcCatalogue.icons.TwoD}
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
                  ref={burgButtonRef}
                  className={`nav__icon--burg ${
                    burgOrientation === "turn" ? "turn" : ""
                  }`}
                  src="/assets/mini-burg.png"
                  alt="burger icon"
                  onClick={() => {
                    setBurgOrientation(
                      burgOrientation === "normal" ? "turn" : "normal"
                    );
                    setBurgMenu(burgMenu ? false : true);
                  }}
                />
              </div>
            </>
          }
        >
          <></>
        </Nav>
        {screenWidth && screenWidth > 820 && (
          <div className={`home `}>
            <Nav
              className={` main-menu ${mode === "2d" && "darkText"}`}
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
        )}

        <div>
          {screenWidth && screenWidth < 820 && (
            <MobilePages>
              <CSSTransition
                in={burgMenu}
                timeout={400}
                classNames="fade"
                unmountOnExit
                nodeRef={burgRef}
              >
                <div ref={burgRef}>
                  <Nav
                    aria="burger menu for mobile pages"
                    className="burg-menu"
                    border={false}
                    anchors={[
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#eye"
                        link="Home"
                      />,
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#about"
                        link="About"
                      />,
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#art"
                        link="Art"
                      />,
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#shop"
                        link="Shop"
                      />,
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#lore"
                        link="Lore"
                      />,
                      <Anchor
                        cb={() => handleBurgNav()}
                        href="#contact"
                        link="Contact"
                      />,
                    ]}
                  />
                </div>
              </CSSTransition>
            </MobilePages>
          )}
        </div>
        <ClipNameContext.Provider
          value={{ clip: clipName, setClip: setClipName }}
        >
          {screenWidth && screenWidth > 820 && <MobCanvas page={activePage} />}
        </ClipNameContext.Provider>
      </div>
    </ModeContext.Provider>
  );
}
