import CSSTransitionCom from "../core/CSSTransitionCom";

export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "60px",
      }}
    >
      <h1>CONTACT</h1>
      <a
        href="https://www.instagram.com/mob.earman.art/"
        aria-label="instagram profile of Mob Earman represented by icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          style={{ width: "30px" }}
          src="./assets/insta.svg"
          alt="instagram icon"
        />
      </a>
      <a style={{ textAlign: "center" }} href="mailto:mob.earman.art@gmail.com">
        Questions? Commissions? Collaborations? Click to email
      </a>
      <button>HOME</button>
    </div>
  );
}
