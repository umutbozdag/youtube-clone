import Vue from "vue";
import { storiesOf } from "@storybook/vue";
import Button from "@/components/Button.vue";

storiesOf("Button", module).add("Button as a component", () => ({
  components: { "the-button": Button },
  template: "<the-button>button as component</the-button>",
}));
