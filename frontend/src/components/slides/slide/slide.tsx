import { SlideProps } from "./slide.props";

export const Slide = ({ id, text, imageURL }: SlideProps) => {
  return (
    <div key={id} className="slide">
      <h1>{text}</h1>
      <img className="slide-img" src={`http://localhost:3300${imageURL}`} />
    </div>
  );
};
