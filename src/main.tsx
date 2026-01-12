// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { useContext } from "react";
import { ModeContext } from "./ModeContext.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <>
    <App />
  </>
);
