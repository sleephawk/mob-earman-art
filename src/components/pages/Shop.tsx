import { srcCatalogue } from "../../constants/srcCatalogue";
import CSSTransitionCom from "../core/CSSTransitionCom";

export default function Shop({ flag }: { flag: boolean }) {
  return (
    <CSSTransitionCom show={flag}>
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

        <div
          className="calendar cssStandardBorder"
          style={{
            display: "flex",
            padding: "30px",
            margin: "20px",
            backgroundImage: "url(/assets/bgs/basePaper.png)",
          }}
        >
          <div>
            <p style={{ color: "black", marginTop: "20px" }}>
              {srcCatalogue.calendar.info}
            </p>
            <div
              aria-hidden="true"
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <button>GET IT ON ETSY</button>
              <button>RETURN</button>
            </div>
          </div>
          <div
            className="calendar cssStandardBorder"
            style={{
              width: "80%",
              maxHeight: "800px",
              display: "flex",
              padding: "30px",
              margin: "20px",
              backgroundColor: "#c28335",
            }}
          >
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
    </CSSTransitionCom>
  );
}
