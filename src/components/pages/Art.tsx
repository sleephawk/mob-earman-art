import Artwork from "../core/Artwork";
import { srcCatalogue } from "../../constants/srcCatalogue";
import Spotli from "../core/Spotli";
import { useState } from "react";

//could maybe make a src catalogue as an enum somewhere.....
export default function Art() {
  const [spotli, setSpotli] = useState<boolean>(false);
  const [name, setName] = useState<string>("rocky");
  const turnOnSpotlight = (nameArg: string) => {
    setSpotli(true);
    setName(nameArg);
  };

  return (
    <section
      aria-label="a catalogue of Mob Earman named original pieces."
      className="page"
    >
      <h1>Art</h1>

      <div
        style={{
          display: "flex",
          padding: "20px",
          objectFit: "contain",
          flexWrap: "wrap",
          maxWidth: "80%",
          gap: "40px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!spotli && (
          <>
            <Artwork
              onClick={() => turnOnSpotlight("rocky")}
              src={srcCatalogue.rocky.noFrame}
              alt={srcCatalogue.rocky.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("oddSignal")}
              src={srcCatalogue.oddSignal.noFrame}
              alt={srcCatalogue.oddSignal.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("topo")}
              src={srcCatalogue.topo.whiteWall}
              alt={srcCatalogue.topo.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("autumn")}
              src={srcCatalogue.autumn.noFrame}
              alt={srcCatalogue.autumn.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("jellyfish")}
              src={srcCatalogue.jellyfish.noFrame}
              alt={srcCatalogue.jellyfish.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("october")}
              src={srcCatalogue.october.noFrame}
              alt={srcCatalogue.october.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("saturn")}
              src={srcCatalogue.saturn.noFrame}
              alt={srcCatalogue.saturn.alt}
            />
            <Artwork
              onClick={() => turnOnSpotlight("sucker")}
              src={srcCatalogue.sucker.noFrame}
              alt={srcCatalogue.sucker.alt}
            />
          </>
        )}
        {spotli && <Spotli name={name} onClick={() => setSpotli(false)} />}
      </div>
      <button onClick={() => setSpotli(false)}>RETURN</button>
      {/* context */}
    </section>
  );
}
