import Artwork from "../core/Artwork";
import { srcCatalogue } from "../../constants/srcCatalogue";
import Spotli from "../core/Spotli";
import { useState } from "react";
export default function Art() {
  const [spotli, setSpotli] = useState<boolean>(false);
  const [name, setName] = useState<string>("rocky");
  const turnOnSpotlight = (nameArg: string) => {
    setSpotli(true);
    setName(nameArg);
  };

  return (
    <section aria-label="a catalogue of Mob Earman named original pieces.">
      <div className="artworkPage page">
        <h1>ARTWORK</h1>
        <p>
          Each piece is hand painted or penned, summoning earmen around existing
          structures all garbled in rawest form.
        </p>
        <p>Prices on request via email. Commissions considered.</p>
        <button onClick={() => setSpotli(false)}>Home</button>
      </div>
      <div
        style={{
          display: "flex",
          padding: "60px 10px 60px 10px",
          margin: "20px",
          objectFit: "contain",
          flexWrap: "wrap",
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
              src={srcCatalogue.topo.noFrame}
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

      {/* context */}
    </section>
  );
}
