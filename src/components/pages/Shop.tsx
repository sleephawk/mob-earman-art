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
      <h1>SHOP</h1>

      <div className="calendar" style={{ display: "flex" }}>
        <div>
          <p>{srcCatalogue.calendar.info}</p>
          <button>GET IT ON ETSY</button>
          <button>RETURN</button>
        </div>
        <div style={{ width: "80%", maxHeight: "800px", display: "flex" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={srcCatalogue.calendar.front}
            alt={srcCatalogue.calendar.alt}
          />
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={srcCatalogue.calendar.jan}
            alt={srcCatalogue.calendar.altFront}
          />
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={srcCatalogue.calendar.feb}
            alt={srcCatalogue.calendar.altFront}
          />
        </div>
      </div>
    </section>
  );
}
