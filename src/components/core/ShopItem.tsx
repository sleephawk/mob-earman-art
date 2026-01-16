import { useEffect, useState } from "react";

export default function ShopItem({
  src,
  spotlightSrc,
  spotlightAlt,
  productName,
  desc,
  href,
}: {
  src: string;
  spotlightSrc: string;
  spotlightAlt: string;
  productName: string;
  desc: string;
  button: string;
  href: string;
}) {
  const [shopHighlight, setShopHighlight] = useState<boolean>(false);

  return (
    <>
      <div
        className={"shop-item cssStandardBorder"}
        style={{
          display: `${shopHighlight ? "none" : "flex"}`,
        }}
      >
        <div
          onClick={() => setShopHighlight(true)}
          className="shop-item__image-box"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        <h2
          className="shop-item__heading"
          onClick={() => setShopHighlight(true)}
        >
          {productName}
        </h2>
        <div aria-hidden="true" className="button-flex-box">
          <a
            className="shop-item__button shop-item__button--view"
            role="button"
            style={{ textDecoration: "none" }}
            onClick={() => setShopHighlight(true)}
          >
            VIEW
          </a>
          <a
            className="shop-item__button shop-item__button--buy"
            role="button"
            style={{ textDecoration: "none" }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </a>
        </div>
      </div>
      <div
        className="shop-highlight"
        style={{
          display: `${shopHighlight ? "flex" : "none"}`,
        }}
      >
        <img
          className="shop-highlight__image"
          src={spotlightSrc}
          alt={spotlightAlt}
        />
        <div aria-hidden="true" className="button-flex-box">
          <a
            className="shop-item__button shop-item__button--view"
            role="button"
            style={{ textDecoration: "none" }}
            onClick={() => setShopHighlight(false)}
          >
            BACK
          </a>
          <a
            className="shop-item__button shop-item__button--buy"
            role="button"
            style={{ textDecoration: "none" }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY
          </a>
        </div>
        <p className="shop-highlight__description">{desc}</p>
      </div>
    </>
  );
}
