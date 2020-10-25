import BaseInput from "@/components/BaseInput.vue";

export default {
  title: "Example/Input",
  component: BaseInput,
  argTypes: {
    size: {
      control: { type: "select", options: ["1", "2", "3", "4", "5", "6"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: `<base-input :show-icon="showIcon" :icon-component="iconComponent" :styles="styles" /> `,
});

export const InputNormal = Template.bind({});

InputNormal.args = {
  showIcon: false,
};

export const InputShowIcon = Template.bind({});
InputShowIcon.args = {
  showIcon: true,
  iconComponent: "icon-search",
};

export const InputCustomStyle = Template.bind({});
InputCustomStyle.args = {
  showIcon: false,
  styles: {
    padding: "8px",
    backgroundColor: "brown",
    color: "red",
    borderRadius: "10px",
  },
};
