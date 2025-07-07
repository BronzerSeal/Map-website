import "./customButton.css";

const CustomButton = ({ text, click, isSelected }) => {
  return (
    <label
      className={`custom-radio-label ${isSelected ? "checked" : ""}`}
      onClick={click}
    >
      {text}
    </label>
  );
};

export default CustomButton;
