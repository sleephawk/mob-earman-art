export default function Button({
  content,
  event,
}: {
  content: string;
  event?: () => void;
}) {
  return (
    <button
      onClick={event}
      style={{
        position: "relative",
        height: "100px",
        left: "10px",
        top: "10px",
        zIndex: 10,
      }}
    >
      {content}
    </button>
  );
}
