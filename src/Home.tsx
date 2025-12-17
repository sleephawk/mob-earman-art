import MobCanvas from "./components/core/mobCanvas.js";

export function Home() {
  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => {
          console.log("clicks occuring");
        }}
        style={{
          position: "absolute",
          height: "100px",
          left: "10px",
          top: "10px",
          zIndex: 10,
        }}
      >
        CLICK ME
      </button>
      <MobCanvas />
    </div>
  );
}
/** What i need to do:
 *
 * I need to get the scene that's been created in mob up to the
 * top level
 * I could put that in a reference....
 */
