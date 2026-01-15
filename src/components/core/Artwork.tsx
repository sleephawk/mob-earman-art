export default function Artwork({
  width,
  height,
  src,
  alt,
  onClick,
}: {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="artwork"
      style={{
        objectFit: "contain",
        width: width ? width : "40%",
        height: height ? height : "auto",
      }}
    >
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{
          display: "block",
          maxWidth: "100%",
          objectFit: "contain",
          boxSizing: "border-box",
          border: "10px solid black",
        }}
      />
    </div>
  );
}
