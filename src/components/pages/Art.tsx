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
        <Artwork src={srcCatalogue.rocky} alt="" />
        <Artwork src={srcCatalogue.oddSignal} alt="" />
        <Artwork src={srcCatalogue.topo} alt="" />
        <Artwork src={srcCatalogue.autumn} alt="" />
        <Artwork src={srcCatalogue.jellyfish} alt="" />
        <Artwork src={srcCatalogue.warthog} alt="" />
      </div>
      <button>RETURN</button> // need the context for this
    </section>
  );
}
