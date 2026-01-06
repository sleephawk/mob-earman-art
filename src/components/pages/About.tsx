export default function About() {
  return (
    <section
      aria-label="the about page with a bio of the artist and some details around the work"
      style={{
        justifyContent: "center",
        alignSelf: "center",
        justifySelf: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        border: "4px black solid",
        position: "relative",
      }}
    >
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

          padding: "30px",
        }}
      >
        <h1 hidden={true}>ABOUT</h1>
        <div
          aria-hidden={true}
          style={{ fontSize: "40px", textAlign: "center", padding: "30px" }}
        >
          <div aria-hidden={true}>A</div>
          <div aria-hidden={true}>B</div>
          <div aria-hidden={true}>O</div>
          <div aria-hidden={true}>U</div>
          <div aria-hidden={true}>T</div>
        </div>
        <p>
          I, Matt, an abstract cartoon artist under the monika Mob Earman. My
          focus on fun and expression combine with perspective and composition
          play to make unique geometric oddscapes, critters, knots &,
          ultimately, <em>earmen</em>,<br></br>
          <br></br>
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
