import Page from "./Page";
import Piece from "./Piece";

export default function Art({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <Page
      cb={cb}
      h="Art"
      classN="artPage"
      visible={visible}
      content={
        <div id="piecesContainer" aria-label="container for all art pieces">
          {/* <p>
            It exists, just not here yet. Watch the beautiful animation and wait
            for it to appear organically. There is a little something something
            on here though:
          </p> */}
          <Piece
            title="October Locks"
            desc="..."
            imgSrc="public/assets/og-img.png"
          ></Piece>
          <Piece title="" desc="" imgSrc=""></Piece>
          <Piece title="" desc="" imgSrc=""></Piece>
          <Piece title="" desc="" imgSrc=""></Piece>
          <Piece title="" desc="" imgSrc=""></Piece>
          <a
            href="https://www.instagram.com/mob.earman.art/"
            aria-label="instagram profile of Mob Earman represented by icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{ width: "30px" }}
              src="./assets/insta.svg"
              alt="instagram icon"
            />
          </a>
        </div>
      }
    />
  );
}
