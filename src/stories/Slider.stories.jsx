import { fn } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";
import Slider from "./Slider";

export default {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  args: { onChange: fn() },
};

export const Continuous = {
  args: {
    label: "Continuous Slider",
    rangeValue: 0,
    min: 0,
    max: 100,
    step: 1,
  },
  render: function Render(args) {
    const [{ rangeValue }, updateArgs] = useArgs();
    function onChange(newValue) {
      updateArgs({ rangeValue: newValue });
    }
    return <Slider {...args} onChange={onChange} rangeValue={rangeValue} />;
  },
};
export const Range = {
  args: {
    label: "Range Slider",
  },
};
export const Descrete = {
  args: {
    label: "Descrete Slider",
  },
};
