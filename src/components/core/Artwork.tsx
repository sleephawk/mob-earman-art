export default function Artwork({
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
    <div className="artwork">
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
