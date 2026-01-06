import { srcCatalogue } from "../../constants/srcCatalogue";
export default function Spotli({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  return (
    <div
      className="spotliContainer"
      style={{ width: "100vw", position: "relative" }}
    >
      <img
        className="spotli"
        src={srcCatalogue[name].noFrame}
        onClick={onClick}
        alt=""
      />
      <img
        className="spotli"
        src={srcCatalogue[name].woodNFrame}
        onClick={onClick}
        alt=""
      />
    </div>
  );
}
