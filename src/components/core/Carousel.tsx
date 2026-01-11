import { useRef, useState } from "react";
import type { CarouselObject } from "../../types";
import { CSSTransition, SwitchTransition } from "react-transition-group";

type Direction = "left" | "right";

export default function Carousel({ images }: { images: CarouselObject[] }) {
  const imageRef = useRef(null);
  const length = images.length;
  const deltaPlus = 1;
  const deltaMinus = -1;
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const buttonHandle = (direction: Direction) => {
    setCurrentImageIndex(
      (prev) =>
        (prev + (direction === "left" ? deltaMinus : deltaPlus) + length) %
        length
    ); //this is a common pattern to remember: (prev + delta + length) % length
  }; // delta = the amount of change
  return (
    <div className="carousel">
      <button
        onClick={() => buttonHandle("left")}
        className="carousel__button carousel__button--left"
      >
        &lsaquo;
      </button>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentImageIndex}
          nodeRef={imageRef}
          timeout={300}
          classNames={"fade"}
          unmountOnExit
        >
          <img
            ref={imageRef}
            className="carousel__image"
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
          ></img>
        </CSSTransition>
      </SwitchTransition>
      <button
        onClick={() => {
          buttonHandle("right");
        }}
        className="carousel__button carousel__button--right"
      >
        &rsaquo;
      </button>
    </div>
  );
}
