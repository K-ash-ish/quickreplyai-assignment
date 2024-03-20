import PropTypes from "prop-types";
import "./slider.css";

function Slider({
  onChange,
  label,
  status,
  size,
  type,
  rangeValue,
  min,
  max,
  step,
}) {
  console.log(rangeValue);
  function handleChange(e) {
    const { value } = e.target;
    onChange(+value);
  }
  return (
    <>
      <h3 className="">{label}</h3>
      <div className="bg-gray-100 h-2 rounded-md relative flex items-center">
        <input
          type="range"
          className="slider-range  appearance-none bg-transparent w-full z-20 "
          min={min}
          max={max}
          value={rangeValue}
          onChange={handleChange}
          step={step}
        />
        <div
          style={{ width: rangeValue + "%" }}
          className={`absolute  bg-green-400 h-2 rounded `}
        ></div>
      </div>
    </>
  );
}

export default Slider;

Slider.propTypes = {
  size: PropTypes.oneOf([24, 32]),
  status: PropTypes.oneOf(["Default", "Actice", "Focus"]),
  type: PropTypes.oneOf(["Continuous", "Range", "Discrete"]),
};

// proptypes = {
//   size: PropTypes.oneOf(["24", "32"]),
// };
Slider.defaultProps = {
  size: 24,
  type: "Continuous",
};
