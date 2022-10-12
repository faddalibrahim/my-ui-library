//libraries

// components
import Button from "../components/button/Button";

// styles

// utils

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
    icon: {
      options: ["icon", "no Icon"],
      mapping: {
        icon: "",
        "no Icon": "",
      },
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click Me",
  style: {},
};
