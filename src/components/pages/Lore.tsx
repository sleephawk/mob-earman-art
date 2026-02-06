import HeadingVertical from "../core/HeadingVertical";

export default function Lore() {
  return (
    <section id="lore" className="page lore">
      <article className="cssStandardBorder lore__article">
        <HeadingVertical
          classes="vertical-heading-large"
          heading="lore"
        ></HeadingVertical>
        <p className="lore__quote">
          <em>
            "The night I decided to meet the bird known as Mob Earman was the
            same night the ghost greeted me at 3:15 with a new friend..."
          </em>
        </p>
        <p className="lore__body">
          <a
            aria-label="snoozecrow music: link to bandcamp"
            href="https://sleephawk.bandcamp.com/album/snoozecrow-i-spectre-by-the-sea"
          >
            Snoozecrow
          </a>{" "}
          is an ambient, atmospheric musician. He also happens to be a crow. His
          strange collaborator, a small, relatively friendly sheet ghost,
          hatched in Snoozy’s early days and continued to haunt him ever since.
          The sheet ghost makes Snoozy's life a balancing act, but one adapts.
          The music helps.
          <br />
          <br />
          Mob Earman is a bird of unknown species, though he has
          unscientifically diagnosed himself a 'wheatear magpie'. He is also a
          musician, though his genre is as elusive as his origins, and a painter
          of the spirits he discovered and dubbed the Earmen. The Earmen serve
          as Mob’s muse, and he has always presumed that no one else could
          experience them. That is, until the day he meets a crow named Snoozy
          and his companion, a small friendly sheet ghost...
          <br />
          <br />
          This is the story of Snoozy, Mob and the Other Realms. It is a story
          about the magic of music, the maddening power of the unknown. Above
          all things, it is a story of the balance between those two warring
          states of being: tranquillity and chaos.
          <br />
          <br />
          It is also a story I don't want to tell with one medium. Yes, yes,
          you'll get your words. But I want to show you the songs, the
          summonings, the world in 3D video game form, and the magic as it
          happened for them. This tale will unfold from multiple angles, and
          every follow, sale and share will support its creation. If you want to
          experience the story, follow along.
        </p>
      </article>
    </section>
  );
}
