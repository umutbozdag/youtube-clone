import BaseButton from "@/components/base-button.vue";

export default {
  title: "Example/Button",
  component: BaseButton,
  argTypes: {
    variant: {
      control: { type: "select", options: ["primary", "light", "secondary"] },
    },
    onClick: {
      action: "click",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: `<base-button :variant="variant">Button</base-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Light = Template.bind({});
Light.args = {
  variant: "light",
};

const asIconTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseButton },
  template: `<base-button :variant="variant" :rounded="rounded" :as-icon="asIcon">
    >
  </base-button>`,
});

export const asIcon = asIconTemplate.bind({});
asIcon.args = {
  variant: "secondary",
  rounded: true,
  asIcon: true,
};
