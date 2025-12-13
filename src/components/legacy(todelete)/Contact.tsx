import Page from "./Page";

export default function Contact({
  cb,
  visible,
}: {
  cb: () => void;
  visible: boolean;
}) {
  return (
    <Page
      cb={cb}
      h="Contact"
      classN="contactPage"
      visible={visible}
      content={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.instagram.com/mob.earman.art/"
            aria-label="instagram profile of Mob Earman represented by icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              style={{ width: "30px" }}
              src="./assets/insta.svg"
              alt="instagram icon"
            />
          </a>
          <a
            style={{ textAlign: "center" }}
            href="mailto:mob.earman.art@gmail.com"
          >
            Questions? Commissions? Collaborations? Click to email
          </a>
        </div>
      }
    />
  );
}
