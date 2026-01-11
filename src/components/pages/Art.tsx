import Artwork from "../core/Artwork";
import { srcCatalogue } from "../../constants/srcCatalogue";
import Spotli from "../core/Spotli";
import { use, useState } from "react";
export default function Art() {
  const [spotli, setSpotli] = useState<boolean>(false);
  const [name, setName] = useState<string>("rocky");
  const [target, setTarget] = useState<string>("noFrame");
  const [altA, setAltA] = useState<string>("alt");
  const turnOnSpotlight = (
    nameArg: string,
    targetArg: string,
    altArg: string
  ) => {
    setSpotli(true);
    setName(nameArg);
    setTarget(targetArg);
    setAltA(altArg);
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
              onClick={() =>
                turnOnSpotlight("rocky", "woodNFrame", srcCatalogue.rocky.alt)
              }
              src={srcCatalogue.rocky.noFrame}
              alt={srcCatalogue.rocky.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight(
                  "oddSignal",
                  "woodNFrame",
                  srcCatalogue.oddSignal.alt
                )
              }
              src={srcCatalogue.oddSignal.noFrame}
              alt={srcCatalogue.oddSignal.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight("topo", "frame", srcCatalogue.topo.alt)
              }
              src={srcCatalogue.topo.noFrame}
              alt={srcCatalogue.topo.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight("autumn", "woodNFrame", srcCatalogue.autumn.alt)
              }
              src={srcCatalogue.autumn.noFrame}
              alt={srcCatalogue.autumn.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight(
                  "jellyfish",
                  "woodNFrame",
                  srcCatalogue.jellyfish.alt
                )
              }
              src={srcCatalogue.jellyfish.noFrame}
              alt={srcCatalogue.jellyfish.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight(
                  "october",
                  "woodNFrame",
                  srcCatalogue.october.alt
                )
              }
              src={srcCatalogue.october.noFrame}
              alt={srcCatalogue.october.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight("saturn", "woodNFrame", srcCatalogue.saturn.alt)
              }
              src={srcCatalogue.saturn.noFrame}
              alt={srcCatalogue.saturn.alt}
            />
            <Artwork
              onClick={() =>
                turnOnSpotlight("sucker", "woodNFrame", srcCatalogue.saturn.alt)
              }
              src={srcCatalogue.sucker.noFrame}
              alt={srcCatalogue.sucker.alt}
            />
          </>
        )}
        {spotli && (
          <Spotli
            name={name}
            target={target}
            alt={altA}
            onClick={() => setSpotli(false)}
          />
        )}
      </div>

      {/* context */}
    </section>
  );
}
