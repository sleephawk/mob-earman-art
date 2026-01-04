import Artwork from "../core/Artwork";
import { srcCatalogue } from "../../constants/srcCatalogue";
//could maybe make a src catalogue as an enum somewhere.....
export default function Art() {
  return (
    <section
      aria-label="a catalogue of Mob Earman named original pieces."
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <h1>Art</h1>
      <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "80%" }}>
        <Artwork src={srcCatalogue.rocky} alt="" />
        <Artwork src={srcCatalogue.octoberLocks} alt="" />
        <Artwork src={srcCatalogue.oddSignal} alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
        <Artwork src="" alt="" />
      </div>
    </section>
  );
}
