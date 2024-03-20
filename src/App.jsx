import { useState } from "react";
import "./App.css";
import Slider from "./stories/Slider";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="w-[200px] ml-11">
        Hello
        <Slider
          min={0}
          max={100}
          rangeValue={value}
          onChange={(v) => {
            setValue(v);
          }}
          step={1}
        />
      </div>
    </>
  );
}

export default App;
