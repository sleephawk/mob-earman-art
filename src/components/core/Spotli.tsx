import { useRef } from "react";
import { srcCatalogue } from "../../constants/srcCatalogue";

export default function Spotli({
  onClick,

  name,
  target,
  alt,
  em,
  desc,
}: {
  onClick: () => void;
  name: string;
  target: string;
  alt: string;
  em: string;
  desc: string;
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
          <p className="spotliCopyContainer__copy">
            <em>THIS IS SOME EM</em>
            <br></br>
            <br></br>
          </p>
          <button className="spotliCopyContainer__button" onClick={onClick}>
            RETURN
          </button>
        </div>
      </div>
    </>
  );
}
