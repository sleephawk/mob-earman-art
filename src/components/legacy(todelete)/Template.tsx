export default function Template({
  classN,
  heading,
  content,
  buttonText,
  height = "100%",
  width = "100%",
  op = 1,
  pos = "relative",
  display = "flex",
  onClick,
}: {
  classN?: string;
  width?: string;
  height?: string;
  heading?: string;
  content: React.ReactNode;
  buttonText?: string;
  op?: number;
  display?: string;
  pos?: React.CSSProperties["position"];
  onClick?: () => void;
}) {
  return (
    <div
      style={{
        display: display,
        width: width,
        height: height,
        flexDirection: "column",
        textAlign: "left",
        opacity: op,
        position: pos,
      }}
      className={`${classN} component`}
    >
      {content}
      {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
}
