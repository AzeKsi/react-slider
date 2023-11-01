import { Slide } from "./slide/slide";
import { Button } from "../button/button";
import { SlidesProps } from "./slides.props";
import { useSlides } from "./slides.effect";
import { API_URL } from "../../constants/config.const";

export const Slides = ({ slides }: SlidesProps) => {
  const { imageIndex, audioRef, showNextImage, showPrevImage } = useSlides(slides);
  const NotSupportingBrowser = "Your browser does not support the audio element.";

  return (
    <div className="slides">
      <div className="slides-container">
        {slides.length && (
          <audio controls className="slide-audio" ref={audioRef}>
            <source src={`${API_URL}${slides[imageIndex].audioURL}`} type="audio/mpeg" />
            {NotSupportingBrowser}
          </audio>
        )}
        {slides.map((slide) => (
          <Slide
            key={slide.id}
            id={slide.id}
            text={slide.text}
            imageURL={slide.imageURL}
            imageIndex={imageIndex}
          />
        ))}
      </div>
      <Button handleOnChangeSlide={showPrevImage} direction="left" />
      <Button handleOnChangeSlide={showNextImage} direction="right" />
    </div>
  );
};
