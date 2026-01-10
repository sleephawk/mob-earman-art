export default function Contact() {
  return (
    <div className="contact cssStandardBorder">
      <h1 className="contact__heading">CONTACT</h1>
      <div className="contact-link-container">
        <a
          style={{ textAlign: "center" }}
          href="mailto:mob.earman.art@gmail.com"
        >
          Questions? Commissions? Collaborations? Click to email
        </a>
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
      </div>
    </div>
  );
}
