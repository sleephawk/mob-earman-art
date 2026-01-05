import { srcCatalogue } from "../../constants/srcCatalogue";

export default function Shop() {
  return (
    <section
      aria-label="a catalogue of Mob Earman named original pieces."
      className="page"
      style={{
        position: "relative",

        display: "flex",
        margin: 0,
        padding: 0,
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        overflow: "auto",
      }} // maybe chonk into css
    >
      <h1>Shop</h1>

      <div className="calendar" style={{ display: "flex" }}>
        <div>
          <p>{srcCatalogue.calendar.info}</p>
          <button>GET IT ON ETSY</button>
        </div>
        <div>
          <img
            src={srcCatalogue.calendar.src}
            alt={srcCatalogue.calendar.alt}
          />
        </div>
      </div>
      <button>RETURN</button>
    </section>
  );
}
