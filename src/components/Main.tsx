import Template from "./Template";
import Nav from "./Nav";
import { useState } from "react";
import Contact from "./Contact";
import Bio from "./Bio";
import Art from "./Art";
import Events from "./Events";
import { Canvas } from "@react-three/fiber";
import * as METHODS from "../curveHelpers/CurveMethods.js";
import Mob3d from "./models/Mob3d.js";

export function Main() {
  const initialScale: number = 0.4;
  const [zoom, setZoom] = useState<string>(
    `translate(0, 0) scale(${initialScale})`
  );
  const [op, setOp] = useState<number>(1);
  const [bioSwitch, setBioSwitch] = useState(false);
  const [artSwitch, setArtSwitch] = useState(false);
  const [eventsSwitch, setEventsSwitch] = useState(false);
  const [contactSwitch, setContactSwitch] = useState(false);

  const bigFalseButton = () => {
    setBioSwitch(false);
    setArtSwitch(false);
    setEventsSwitch(false);
    setContactSwitch(false);
  };

  function handleClickFromButton(): void {
    setZoom("scale(0.2)");
    setTimeout(() => {
      setZoom(`translate(0, 0) scale(${initialScale})`);
      setOp(1);
      bigFalseButton();
    }, 500);
  }
  function handleClickFromNav(value: string, cl: string): void {
    setZoom("translate(0, 0) scale(0.2)");
    setTimeout(() => {
      setZoom(value);
      setOp(0);
    }, 500);
    setTimeout(() => {
      switch (cl) {
        case "bio": {
          setBioSwitch(true);
          break;
        }
        case "art": {
          setArtSwitch(true);
          break;
        }
        case "events": {
          setEventsSwitch(true);
          break;
        }
        case "contact": {
          setContactSwitch(true);
          break;
        }
      }
    }, 1500);
  }
  return (
    <Template
      height="100%"
      content={
        <div
          className="main"
          style={{
            // position: "relative",
            height: "100%",
          }}
        >
          <Nav
            visible={!!op}
            onNavClick={handleClickFromNav}
            opFromParent={op}
          />

          <Bio
            cb={() => {
              handleClickFromButton();
            }}
            visible={bioSwitch}
          />
          <Art
            cb={() => {
              handleClickFromButton();
            }}
            visible={artSwitch}
          />
          <Events
            cb={() => {
              handleClickFromButton();
            }}
            visible={eventsSwitch}
          />
          <Contact
            cb={() => {
              handleClickFromButton();
            }}
            visible={contactSwitch}
          />

          <div id="canvas-container">
            <Canvas>
              <mesh>
                <Mob3d />
              </mesh>
            </Canvas>
          </div>
        </div>
      }
    />
  );
}
