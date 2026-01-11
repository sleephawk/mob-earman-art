import { useState } from "react";

export default function ShopItem({
  src,
  alt,
  productName,
  desc,
  href,
}: {
  src: string;
  alt: string;
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
        style={{ display: `${shopHighlight ? "none" : "flex"}` }}
      >
        <div className="shop-image-box">
          <img
            onClick={() => setShopHighlight(true)}
            src={src}
            alt={alt}
            className="shop-item__image"
          />
        </div>
        <h2 onClick={() => setShopHighlight(true)}>{productName}</h2>
        <div aria-hidden="true" className="button-flex-box">
          <a
            className="shop-item__button shop-item__button--view"
            role="button"
            style={{ textDecoration: "none" }}
            onClick={() => setShopHighlight(true)}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
          <a
            className="shop-item__button shop-item__button--buy"
            role="button"
            style={{ textDecoration: "none" }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy
          </a>
        </div>
      </div>
      <div
        className="shop-highlight"
        style={{ display: `${shopHighlight ? "block" : "none"}` }}
      >
        <img src="" alt="" />
        <p className="shop-highlight__description">{desc}</p>
      </div>
    </>
  );
}
