import { srcCatalogue } from "../../constants/srcCatalogue";
export default function Spotli({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  return (
    <div style={{ width: "100vw", position: "relative" }}>
      <figure>
        <figcaption></figcaption>
        <img
          className="spotli"
          src={srcCatalogue[name].woodNFrame}
          onClick={onClick}
          alt=""
        />
      </figure>
    </div>
  );
}
