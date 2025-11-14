import Page from "./Page";

export default function Bio({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <Page
      cb={cb}
      h="Bio"
      classN="bioPage"
      visible={visible}
      content={
        <div
          aria-label="container for the bioPage content"
          style={{ padding: "10px" }}
        >
          <section
            id="quote"
            aria-label="description of Mob Earman by the character Mob Earman himself"
            style={{ fontSize: "1.1rem" }}
          >
            <p>
              <em>
                "I once heard someone at a Buddhist commune call their lifestyle
                'Homeless with Style'. Id like to think I was the same, but
                really, I’m high-functioning chaotic-good as seen on a sofa near
                you.
              </em>
            </p>
            <p>
              <em>
                These strange little oddscapes of warped perspective, wobbly
                geometry and google-y eyes are my therapy whilst I attempt to
                sort it all out. I make them when I'm too stressed to look at
                big list on my phone. It works.
              </em>
            </p>
            <p>
              <em>
                Oh and I’m Mob Earman, don’t ask. I know where the name comes
                from, but it won’t make any sense to explain. Just follow the
                blobs and lines. It’s blobs and lines all the way down."
              </em>
            </p>
          </section>
          <section
            style={{
              border: "solid whitesmoke 2px",
              padding: "10px",
              fontSize: "1rem",
            }}
            aria-label="official bio of Mob Earman as an artist"
          >
            <p>
              Mob Earman is the moniker of an abstract cartoon artist, whose
              focus on fun and expression combine with perspective and
              composition play to make unique so-called 'Geometric Oddscapes,
              Critters, Knots & Earmen.'
            </p>
            <p>
              His approach is therapeutic, using them as a coping mechanism for
              the daily symptoms of ADHD and Autism, which have been the subject
              of a life of searching for relief and have, since diagnosis,
              changed his approach towards coping. Mob finds the pressure of
              perfectionism is a (sometimes debilitating) struggle, and that
              creating these pieces is a form of low pressure meditation that
              yields unique, insightful results every time.
            </p>
            <p>
              They are experimental, with the simple motif of large, often
              green, set of googly, puppet-like eyes keeping the characters
              consistent. Influences span from art nouveau to the muppets,
              Kandinsky and Adventure Time; whilst a deep love for many creative
              ventures feed into them, these are often incidental drivers of
              what is seen on the page. Mob wants you to look at his art like
              clouds and define for yourself what's there.
            </p>
            <p>
              The artist behind Mob wants to build on the play more in the
              future; with a background of theatre, music, web design, and
              puppetry, these open the door to a realm of freeform that could
              extend across different mediums. For now, as people have started
              to show interest in these art pieces, Mob's modus operandi is to
              provide some affordable and playful art to those needing some
              whimsey and expression added to their spaces.
            </p>
          </section>
        </div>
      }
    />
  );
}
