import { configure } from "@storybook/vue";
import Vue from "vue";

// import your vue plugins

// import your custom components

// install your vue plugins

// register your custom components

function loadStories() {
  // you can require as many stories as you need
  require("../src/stories");
}
configure(loadStories, module);
