import { useRef } from "react";
import { srcCatalogue } from "../../constants/srcCatalogue";
import { descCatalogue } from "../../constants/DescCatalogue";

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
  const ref = useRef(null);
  return (
    <>
      <div ref={ref} className="spotliContainer">
        <img
          className="spotliContainer__spotli"
          src={srcCatalogue[name][target]}
          onClick={onClick}
          alt={alt}
        />
        <div className="spotliCopyContainer">
          <h2>{descCatalogue[name].name.toUpperCase()}</h2>
          <p className="spotliCopyContainer__copy">
            <br></br>
            <br></br>
            <span className="smaller-font">
              <em>{descCatalogue[name].desc}</em>
            </span>
          </p>
          <button className="spotliCopyContainer__button" onClick={onClick}>
            RETURN
          </button>
        </div>
      </div>
    </>
  );
}
