/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import "./slider.css";
import { useEffect, useRef, useState } from "react";

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
  const sliderRef = useRef();
  const customSliderRef = useRef();
  const [thumbPosition, setThumbPosition] = useState();
  const [progressBar, setProgressBar] = useState(0);

  function updateThumbPosition() {
    const sliderWidth = sliderRef.current.offsetWidth;
    const customThumbWidth = customSliderRef.current.offsetWidth;
    const percentage = ((rangeValue - min) / (max - min)) * 100;
    const position = (percentage / 100) * (sliderWidth - customThumbWidth);
    if (position <= 0) {
      setThumbPosition(0);
    } else setThumbPosition(position);
  }

  function updateProgressBar() {
    const percentage = ((rangeValue - min) / (max - min)) * 100;
    setProgressBar(percentage);
  }

  useEffect(() => {
    updateThumbPosition();
    updateProgressBar();
  }, [rangeValue]);

  function handleChange(e) {
    const { value } = e.target;
    onChange(+value);
    updateThumbPosition();
  }
  return (
    <>
      <h3 className="my-2">{rangeValue}</h3>
      <div className="bg-gray-100 h-2 rounded-md relative flex items-center">
        <input
          ref={sliderRef}
          type="range"
          className="slider-range  appearance-none bg-transparent w-full z-20 cursor-pointer "
          min={min}
          max={max}
          value={rangeValue}
          onChange={handleChange}
          step={step}
        />
        <div
          ref={customSliderRef}
          className="absolute w-6 h-6 rounded-full  z-30 bg-white pointer-events-none shadow-md flex items-center justify-center before:content-[''] before:w-3 before:h-3 before:bg-green-400 before:z-50 before:rounded-full hover:before:cursor-pointer hover:before:w-8 "
          style={{ transform: `translateX(${thumbPosition}px)` }}
        ></div>
        <div
          style={{ width: progressBar + "%" }}
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
