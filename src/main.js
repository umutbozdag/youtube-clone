import Vue from "vue";
import app from "./app.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";

import BaseButton from "@/components/base-button";

Vue.component("base-button", BaseButton);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount("#app");
