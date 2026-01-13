export default function HeadingVertical({
  heading,
  classes,
}: {
  heading: string;
  classes?: string;
}) {
  const headingL = heading.toUpperCase();
  const arr: string[] = headingL.split("");
  return (
    <>
      <h1 className="reg-heading">{headingL}</h1>
      <div
        className={`vertical-heading ${classes}`}
        aria-hidden={true}
        style={{ fontSize: "40px", textAlign: "center", padding: "30px" }}
      >
        {arr.map((l) => (
          <div aria-hidden={true}>{l}</div>
        ))}
      </div>
    </>
  );
}
// in progress!!
