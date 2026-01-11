import { srcCatalogue } from "../../constants/srcCatalogue";
import ShopItem from "../core/ShopItem";

export default function Shop() {
  return (
    <section
      aria-label="the shop front for all of Mob Earman's current pieces"
      className="page shop"
    >
      <h1>SHOP</h1>
      <div className="shopContainer">
        <ShopItem
          src={srcCatalogue.calendar.front}
          alt={srcCatalogue.calendar.altFront}
          productName="2026 Printed Calendar"
          desc={`My 2026 calendar! Let the earmen guide you through the strange corners of the year with their odd spirit architecture. \n
            Gelato Print Details: \n
            High-Quality Printing: Printed in vibrant, full-color on 250gsm coated silk paper (100 lb cover) with professional packaging for a flawless delivery. \n
            Eco-Friendly: Made with FSC/PESC-certified papers and local production to minimize our environmental impact. `}
          href="https://mobearman.etsy.com/uk/listing/4433019455/calendar-2026"
          button="Buy on Etsy"
        />
        <ShopItem
          src={srcCatalogue.calenDigi1.src}
          alt={srcCatalogue.calenDigi1.alt}
          productName="2026 Digital Calendar (PDF Download)"
          desc={`A digital download for those who want or need to print something themselves, be it cause Gelato doesn't post there (e.g. untuk teman-temanku di Indonesia) \n
            or because you gotta keep that budget on a leash, I got you covered! \n
          Featuring 12 earmen summons for you enthusiasts or curiosity chasers. `}
          href="https://mobearman.etsy.com/uk/listing/4433153595/digital-calendar-pdf-download"
          button="Buy on Etsy"
        />
      </div>
    </section>
  );
}
