export default function Piece({
  imgSrc,
  title,
  desc,
}: {
  imgSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column" }}
      aria-label="container for an art piece"
    >
      <figure>
        <p>
          <strong>{title}</strong>
        </p>
        <img src={imgSrc} alt={desc}></img>
        <figcaption>{desc}</figcaption>
      </figure>
    </div>
  );
}
