import CSSTransitionCom from "../core/CSSTransitionCom";

export default function Lore() {
  return (
    <section
      style={{
        justifyContent: "center",
        alignSelf: "center",
        justifySelf: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        border: "4px black solid",
        position: "relative",
        overflow: "auto",
      }}
    >
      {/*these are the same style rules as ABOUT so make into page component rulings*/}
      <article
        className="cssStandardBorder"
        style={{
          display: "flex",
          position: "relative",
          top: "50%",
          transform: "translate(-0%,-50%)",
          gap: "10px",
          width: "70%",
          alignContent: "center",
          justifyContent: "center",
          alignSelf: "center",
          justifySelf: "center",
          overflow: "scroll",

          padding: "30px",
        }}
      >
        <h1 hidden={true}>LORE</h1>
        <div
          aria-hidden={true}
          style={{ fontSize: "40px", textAlign: "center", padding: "30px" }}
        >
          <div aria-hidden={true}>L</div>
          <div aria-hidden={true}>O</div>
          <div aria-hidden={true}>R</div>
          <div aria-hidden={true}>E</div>
        </div>
        <p style={{ fontSize: "1.5rem", margin: "30px" }}>
          <em>
            "The night I decided to meet the bird known as Mob Earman was the
            same night the ghost greeted me at 3:15 with a new friend..."
          </em>
        </p>
        <p>
          Snoozecrow is an ambient musician with a strange collaborator; a
          small, relatively friendly, sheet ghost who found him in the nest,
          proceeding to haunt him throughout his 30 years on earth. It's a
          balancing act, living a normal life with an inexplicable, clearly
          visible, sheet ghost on your shoulder, but one adapts. The music
          helped.
          <br></br>
          <br></br>This was all under his wing, he thought, until the ghost
          started arriving with, well, <em>other</em> things. After seeing one
          of these things painted and named an 'earman' on a band poster for a
          local artist known as
          <strong>
            <span style={{ fontSize: "1rem" }}> Mob Earman</span>
          </strong>
          , the rare magpie-wheatear, Snoozy knew his week was going to play out
          more strangely than usual.
          <br></br>
          <br></br>
          This is the story of{" "}
          <strong>
            <span style={{ fontSize: "1rem" }}>Snoozy & Mob</span>
          </strong>
          . It is a story about music, the unknown, and of all things, the
          balancing of those two forces tranquility and chaos.
          <br></br>
          <br></br>
          It is <em>also</em> a story I don't want to tell with one medium. Yes
          yes, you'll get your words, but I want to show you{" "}
          <strong>
            <span style={{ fontSize: "1rem" }}>
              the songs, the summonings, the world in 3d video game form, the
              magic as it happened for them
            </span>
          </strong>
          . You will see this tale from multiple angles, and every follow, sale
          and share will support its creation. If you like the sound of that,
          you're in the right place.
        </p>
      </article>
    </section>
  );
}
