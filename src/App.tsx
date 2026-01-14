import { useEffect, useState } from "react";
import "./App.scss";
import { Home } from "./Home";
import ScreenSizeContext from "./screenSizeContext";

function App() {
  const [background, setBackground] = useState<string | undefined>("#362f2a");
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleCB(bg: string): void {
    setBackground(bg);
  }

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      <div
        className="root-dork"
        style={{ height: "100vh", backgroundColor: background }}
        id="app"
      >
        <Home cb={handleCB} />
      </div>
    </ScreenSizeContext.Provider>
  );
}

export default App;
