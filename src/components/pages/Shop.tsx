import { useContext } from "react";
import { srcCatalogue } from "../../constants/srcCatalogue";
import ShopItem from "../core/ShopItem";
import { ModeContext } from "../../ModeContext";

export default function Shop() {
  const mode = useContext(ModeContext);
  return (
    <section
      id="shop"
      aria-label="the shop front for all of Mob Earman's current pieces"
      className="page shop"
    >
      <h1
        className={`shop__heading ${
          mode === "2d" && "cssStandardBorder cssStandardBg"
        }`}
      >
        SHOP
      </h1>
      <p className="cssStandardBorder cssStandardBg shop__copy">
        Brand new shop over here, passionate about not filling your houses up
        with junk, so taking the time to make some meaningful products for you
        all, starting out with a year full of summons, in calendar form.
        <br></br> For any or all original pieces,{" "}
        <a
          style={{ textAlign: "center" }}
          href="mailto:mob.earman.art@gmail.com"
        >
          email me
        </a>{" "}
        or drop a DM on{" "}
        <a
          href="https://www.instagram.com/mob.earman.art/"
          aria-label="instagram profile of Mob Earman represented by icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram.
        </a>
      </p>
      <div className="shop-container">
        <ShopItem
          src={srcCatalogue.calendar.composite}
          spotlightSrc={srcCatalogue.calendar.front}
          spotlightAlt={srcCatalogue.calendar.alt}
          productName="2026 Calendar"
          desc={srcCatalogue.calendar.info}
          href="https://mobearman.etsy.com/uk/listing/4433019455/calendar-2026"
          button="Buy on Etsy"
        />
        <ShopItem
          src={srcCatalogue.calenDigiMini.src}
          spotlightSrc={srcCatalogue.calenDigi.src}
          spotlightAlt={srcCatalogue.calenDigi.alt}
          productName="PDF Calendar"
          desc={srcCatalogue.calenDigi.info}
          href="https://mobearman.etsy.com/uk/listing/4433153595/digital-calendar-pdf-download"
          button="Buy on Etsy"
        />
      </div>
    </section>
  );
}
