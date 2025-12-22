export default function Button({
  content,
  event,
  round,
  color,
}: {
  content?: string;
  event?: () => void;
  round?: boolean;
  color?: string;
}) {
  return (
    <button
      onClick={event}
      style={{
        position: "relative",
        height: "50px",
        width: "50px",
        borderRadius: round ? "100%" : "20%",
        zIndex: 10,
        backgroundColor: color,
      }}
    >
      {content}
    </button>
  );
}
