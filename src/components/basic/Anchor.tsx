export default function Anchor({
  cb,
  link,
}: {
  cb: (l: string) => void;
  link: string;
}) {
  return (
    <a
      style={{ textDecoration: "none" }}
      onClick={(e) => {
        e.preventDefault();
        cb(link);
      }}
      href=""
    >
      {link}
    </a>
  );
}
