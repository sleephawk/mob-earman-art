export default function Anchor({
  cb,
  link,
  href,
}: {
  cb?: (l: string) => void;
  link: string;
  href?: string;
}) {
  return (
    <a
      style={{ textDecoration: "none" }}
      onClick={(e) => {
        e.preventDefault();
        if (cb) cb(link);
      }}
      href={href ?? ""}
    >
      {link}
    </a>
  );
}
