import type { ReactNode } from "react";

type NavProps = {
  anchors?: ReactNode[];
  content?: ReactNode[];
  aria: string;
  border: boolean;
};

export default function Nav({ border, content, anchors, aria }: NavProps) {
  return (
    <nav
      className={`main-menu ${border && "cssStandardBorder"}`}
      aria-label={aria}
    >
      <ul
        style={{
          listStyle: "none",
          textDecoration: "none",
          fontSize: "3rem",
        }}
      >
        {anchors && anchors.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
      {content}
    </nav>
  );
}
