import type { CarouselObject } from "../../types";

export default function Carousel({ images }: { images: CarouselObject[] }) {
  //so the carousel objects have a name a src and
  return (
    <div className="carousel">
      <button className="carousel__button carousel__button--left">
        <>&#8701</> {/* left */}
      </button>

      <button className="carousel__button carousel__button--right">
        <>&#8702</> {/* right */}
      </button>
    </div>
  );
}
