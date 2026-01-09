export default function Button({
  content,
  event,
  round,
  color,
  className,
}: {
  content?: string;
  event?: () => void;
  round?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <button
      className={className}
      onClick={event}
      style={{
        position: "relative",
        borderRadius: round ? "100%" : "20%",
        zIndex: 10,
        backgroundColor: color,
      }}
    >
      {content}
    </button>
  );
}
