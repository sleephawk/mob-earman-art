import { Canvas } from "@react-three/fiber";
import useElementOnScreen from "../../hooks/useElementOnScreen";
import About from "../pages/About";
import Art from "../pages/Art";
import Contact from "../pages/Contact";
import Lore from "../pages/Lore";
import Shop from "../pages/Shop";
import MobMini3d from "../models/MobMini3d";
import type { ReactNode } from "react";

export default function MobilePages({ children }: { children: ReactNode }) {
  const [eyeRef, eyeVisible] = useElementOnScreen({ threshold: 0.01 });
  const [aboutRef, aboutVisible] = useElementOnScreen({ threshold: 0.1 }); // these are hooks using the
  const [artRef, artVisible] = useElementOnScreen({ threshold: 0.1 }); //    intersection observer
  const [shopRef, shopVisible] = useElementOnScreen({ threshold: 0.1 });
  const [loreRef, loreVisible] = useElementOnScreen({ threshold: 0.1 });
  const [contactRef, contactVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div className="mobile-pages">
      <div
        id="eye"
        ref={eyeRef}
        className="phoneSized opacityTransition"
        style={{ opacity: eyeVisible ? 1 : 0 }}
      >
        <Canvas>
          <mesh>
            <MobMini3d />
          </mesh>
        </Canvas>
      </div>
      <h1 className="main-heading-mobile">MOB EARMAN</h1>
      <h2 className="sub-heading-mobile">Geometric Oddscapes & Earmen</h2>
      {children}
      <div
        ref={aboutRef}
        className="opacityTransition"
        style={{ opacity: aboutVisible ? 1 : 0 }}
      >
        <About />
      </div>
      <div
        ref={artRef}
        className="opacityTransition"
        style={{ opacity: artVisible ? 1 : 0 }}
      >
        <Art />
      </div>
      <div
        ref={shopRef}
        className="opacityTransition"
        style={{ opacity: shopVisible ? 1 : 0 }}
      >
        <Shop />
      </div>
      <div
        ref={loreRef}
        className="opacityTransition"
        style={{ opacity: loreVisible ? 1 : 0 }}
      >
        <Lore />
      </div>
      <div
        ref={contactRef}
        className="opacityTransition"
        style={{ opacity: contactVisible ? 1 : 0 }}
      >
        <Contact />
      </div>
    </div>
  );
}
