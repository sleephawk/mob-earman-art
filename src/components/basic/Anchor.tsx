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
        const id = href?.replace("#", "");
        const el = document.getElementById(id!);

        el?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      // href={href ?? ""}
    >
      {link}
    </a>
  );
}

// type AnchorProps = {
//   href: string;
//   link: string;
// };

// export default function Anchor({ href, link }: AnchorProps) {
//   return (
//     <a
//       href={href}
//       onClick={(e) => {
//         e.preventDefault();

//         const id = href.replace("#", "");
//         const el = document.getElementById(id);

//         el?.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }}
//     >
//       {link}
//     </a>
//   );
// }
