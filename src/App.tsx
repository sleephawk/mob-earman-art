import { useState } from "react";
import "./App.scss";
import { Home } from "./Home";

function App() {
  const [background, setBackground] = useState<string | undefined>("#362f2a");
  function handleCB(bg: string): void {
    setBackground(bg);
  }
  return (
    <div
      className="root-dork"
      style={{ height: "100vh", backgroundColor: background }}
      id="app"
    >
      <Home cb={handleCB} />
    </div>
  );
}

export default App;
