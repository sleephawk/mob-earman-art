import { div } from "three/tsl";

export default function Artwork({
  width,
  height,
  src,
  alt,
}: {
  width?: number;
  height?: number;
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        objectFit: "contain",
        width: width ? width : "300px",
        height: height ? height : "auto",
      }}
    >
      <img src={src} alt={alt} />
    </div>
  );
}
