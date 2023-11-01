import { Slide } from "./slide/slide";
import { useSlides } from "./slides.effect";

export const Slides = () => {
  const slides = useSlides();

  return (
    <div className="slides">
      {slides?.map((slide) => (
        <Slide key={slide.id} id={slide.id} text={slide.text} imageURL={slide.imageURL} />
      ))}
    </div>
  );
};
