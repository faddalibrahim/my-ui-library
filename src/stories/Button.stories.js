import Button from "../components/button/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "click me",
  style: {},
};
