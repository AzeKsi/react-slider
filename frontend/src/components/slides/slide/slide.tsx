import { SlideProps } from "./slide.props";
import { API_URL } from "../../../constants/config.const";

export const Slide = ({ id, text, imageURL, imageIndex }: SlideProps) => {
  return (
    <div key={id} className="slide" style={{ translate: `${-100 * imageIndex}%` }}>
      <h1>{text}</h1>
      <img className="slide-img" src={`${API_URL}${imageURL}`} alt="Slide img" />
    </div>
  );
};
