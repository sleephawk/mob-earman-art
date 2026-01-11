import { srcCatalogue } from "../../constants/srcCatalogue";
export default function Spotli({
  onClick,
  name,
  target,
  alt,
}: {
  onClick: () => void;
  name: string;
  target: string;
  alt: string;
}) {
  return (
    <div className="spotliContainer">
      <img
        className="spotliContainer__spotli"
        src={srcCatalogue[name][target]}
        onClick={onClick}
        alt={alt}
      />
    </div>
  );
}
