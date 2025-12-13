export default function Page({
  cb,
  classN,
  visible,
  h,
  content,
}: {
  cb: () => void;
  h: string;
  content: React.ReactNode;
  classN: string;
  visible: boolean;
}) {
  return (
    <div
      className={`${classN} page`}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <h2>{h}</h2>
      <div>{content}</div>
      <button onClick={cb}>BACK</button>
    </div>
  );
}
