import { useEffect, useState } from "react";
import "./App.scss";
import { Home } from "./Home";
function App() {
  const [background, setBackground] = useState<string | undefined>("#c28335");
  function handleCB(bg: string): void {
    setBackground(bg);
  }
  return (
    <div style={{ height: "100%", backgroundColor: background }} id="app">
      <Home cb={handleCB} />
    </div>
  );
}

export default App;
