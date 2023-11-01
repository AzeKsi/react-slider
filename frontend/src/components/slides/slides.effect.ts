import { useEffect, useState } from "react";
import { Slide } from "../../models/slide";

export const useSlides = () => {
  const [slides, setSlides] = useState<Slide[]>();

  useEffect(() => {
    const fetchSlides = async () => {
      const request = await fetch("http://localhost:3300/slides");
      const response = await request.json();

      setSlides(response);
    };

    fetchSlides();
  }, []);

  return slides;
};
