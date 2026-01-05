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
      style={{
        position: "relative",

        width: "100vw",
        height: "100vh",
        display: "flex",
        margin: 0,
        padding: 0,
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        overflow: "auto",
      }} // maybe chonk into css
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
              src={srcCatalogue.rocky.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("oddSignal")}
              src={srcCatalogue.oddSignal.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("topo")}
              src={srcCatalogue.topo.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("autumn")}
              src={srcCatalogue.autumn.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("jellyfish")}
              src={srcCatalogue.jellyfish.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("warthog")}
              src={srcCatalogue.warthog.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("october")}
              src={srcCatalogue.october.whiteWall}
              alt=""
            />
            <Artwork
              onClick={() => turnOnSpotlight("saturn")}
              src={srcCatalogue.saturn.whiteWall}
              alt=""
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
