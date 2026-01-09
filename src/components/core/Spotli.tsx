import { srcCatalogue } from "../../constants/srcCatalogue";
export default function Spotli({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  return (
    <div className="spotliContainer">
      <img
        className="spotliContainer__spotli"
        src={
          srcCatalogue[name].woodNFrame
            ? srcCatalogue[name].woodNFrame
            : srcCatalogue[name].frame
        }
        onClick={onClick}
        alt=""
      />
    </div>
  );
}
