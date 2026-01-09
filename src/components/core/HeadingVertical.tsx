export default function HeadingVertical({ heading }: { heading: string }) {
  const headingL = heading.toUpperCase();
  const arr: string[] = headingL.split("");
  return (
    <>
      <h1 hidden={true}>{heading}</h1>
      <div
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
