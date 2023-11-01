import { useEffect, useRef, useState } from "react";
import { Slide } from "../../models/slide";

export const useFetchSlides = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const request = await fetch("http://localhost:3300/slides");
        const response = await request.json();

        setSlides(response);
      } catch (e) {
        console.log("Error fetching");
      }
    };

    fetchSlides();
  }, []);

  return slides;
};

export const useSlides = (slides: Slide[]) => {
  const [imageIndex, setImageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (audioRef.current) {
    audioRef.current.volume = 0.5;
  }

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
    playAudio();
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return slides.length - 1;
      return index - 1;
    });
    playAudio();
  };

  return { imageIndex, showNextImage, showPrevImage, audioRef };
};
