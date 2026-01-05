import Artwork from "../core/Artwork";
import { srcCatalogue } from "../../constants/srcCatalogue";
//could maybe make a src catalogue as an enum somewhere.....
export default function Art() {
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
        <Artwork src={srcCatalogue.rocky.whiteWall} alt="" />
        <Artwork src={srcCatalogue.oddSignal.whiteWall} alt="" />
        <Artwork src={srcCatalogue.topo.whiteWall} alt="" />
        <Artwork src={srcCatalogue.autumn.whiteWall} alt="" />
        <Artwork src={srcCatalogue.jellyfish.whiteWall} alt="" />
        <Artwork src={srcCatalogue.warthog.whiteWall} alt="" />
        <Artwork src={srcCatalogue.october.whiteWall} alt="" />
      </div>
      <button>RETURN</button>
      {/* context */}
    </section>
  );
}
