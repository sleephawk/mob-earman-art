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
            I, Matt, an abstract cartoon artist under the monika Mob Earman. My
            focus on fun and expression combine with perspective and composition
            play to make unique geometric oddscapes, critters, knots &,
            ultimately
          </em>
          ,
        </p>
        <p>
          My approach is therapeutic, using them as a coping mechanism for the
          daily symptoms of ADHD and Autism, which have been the subject of a
          life of searching for relief. Since diagnosis, I changed my approach
          to creating art, since I found the pressure of perfectionism is
          debilitating, whilst creating these pieces is a form of low pressure
          meditation that yields unique, insightful results every time.
          <br></br>
          <br></br>
          They are experimental, with the simple motif of large, often green,
          set of googly, puppet-like eyes keeping the characters consistent. My
          ifluences span from art nouveau to the muppets, Kandinsky and
          Adventure Time; whilst a deep love for many creative ventures feed
          into them, these are often accidental drivers of what is seen on the
          page. I wants you to find what lives in them for yourself.
          <br></br>
          <br></br>
          Why Mob? Why Earman and earmen? Well, this is the beginning of all my
          creative worlds colliding under the banner of Snoozecrow Studio. Mob
          has a story that's intertwined with the character Snoozecrow, and will
          be soundtracked by my music persona Sleephawk. Yes, I am three birds
          in a trenchcoat. Needless to say, this is only gonna grow, however
          slow or chaotically. For now, enjoy the strange world of the earmen,
          created via the soothing of my central nervous system.
        </p>
      </article>
    </section>
  );
}
