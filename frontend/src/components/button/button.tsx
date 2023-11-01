import { ButtonProps } from "./button.props";

export const Button = ({ handleOnChangeSlide, direction }: ButtonProps) => {
  return (
    <button onClick={handleOnChangeSlide} className={`slide-btn slide-btn-${direction}`}>
      {direction}
    </button>
  );
};
