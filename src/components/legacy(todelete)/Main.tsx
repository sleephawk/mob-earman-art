import Template from "./Template";
import Nav from "./Nav";
import { useState } from "react";
import Contact from "./Contact";
import Bio from "./Bio";
import Art from "./Art";
import Events from "./Events";
import { Canvas } from "@react-three/fiber";

import Mob3d from "./models/Mob3d.js";

export function Main() {
  const initialScale: number = 0.4;
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
    setTimeout(() => {
      setOp(1);
      bigFalseButton();
    }, 500);
  }
  function handleClickFromNav(value: string, cl: string): void {
    setTimeout(() => {
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


      }
    />
  );
}
