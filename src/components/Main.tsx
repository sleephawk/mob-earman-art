import Template from "./Template";
import Nav from "./Nav";
import { useState } from "react";
import Contact from "./Contact";
import Bio from "./Bio";
import Art from "./Art";
import Events from "./Events";

export function Main() {
  console.log("main is awake");
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
      content={
        <div
          className="main"
          style={{
            position: "relative",
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
          <video
            className="main__video"
            autoPlay
            loop
            muted
            playsInline // could only render this way
            style={{ transform: `${zoom}` }}
          >
            <source src="./assets/mob.webm" type="video/webm" />
          </video>
        </div>
      }
    />
  );
}
