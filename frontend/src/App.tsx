import { Slides } from "./components/slides/slides";
import { useFetchSlides } from "./components/slides/slides.effect";

function App() {
  const slides = useFetchSlides();

  return <Slides slides={slides} />;
}

export default App;
