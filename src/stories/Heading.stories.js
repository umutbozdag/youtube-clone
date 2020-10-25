import BaseHeading from "@/components/BaseHeading.vue";

export default {
  title: "Example/Heading",
  component: BaseHeading,
  argTypes: {
    size: {
      control: { type: "select", options: ["1", "2", "3", "4", "5", "6"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseHeading },
  template: `<base-heading :size="size">My Heading!</base-heading>`,
});

export const HeadingOne = Template.bind({});
HeadingOne.args = {
  size: "1",
};

export const HeadingTwo = Template.bind({});
HeadingTwo.args = {
  size: "2",
};

export const HeadingThree = Template.bind({});
HeadingThree.args = {
  size: "3",
};

export const HeadingFour = Template.bind({});
HeadingFour.args = {
  size: "4",
};

export const HeadingFive = Template.bind({});
HeadingFive.args = {
  size: "5",
};

export const HeadingSix = Template.bind({});
HeadingSix.args = {
  size: "6",
};
