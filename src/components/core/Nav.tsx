import type { ReactNode } from "react";

type NavProps = {
  anchors: ReactNode[];
  content: ReactNode[];
  aria: string;
};

export default function Nav({ content, anchors, aria }: NavProps) {
  return (
    <nav className="main-menu cssStandardBorder" aria-label={aria}>
      <ul
        style={{
          listStyle: "none",
          textDecoration: "none",
          fontSize: "3rem",
        }}
      >
        {anchors.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
      {content}
    </nav>
  );
}
