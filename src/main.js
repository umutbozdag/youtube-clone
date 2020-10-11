import Vue from "vue";
import app from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/styles/main.scss";

import IconHome from "@/assets/icons/icon-home.svg";
import IconMenu from "@/assets/icons/icon-menu.svg";
import IconCamera from "@/assets/icons/icon-camera.svg";
import IconGrid from "@/assets/icons/icon-grid.svg";
import IconNotification from "@/assets/icons/icon-notification.svg";

import BaseButton from "@/components/BaseButton";

Vue.component("base-button", BaseButton);
Vue.component("icon-home", IconHome);
Vue.component("icon-menu", IconMenu);
Vue.component("icon-camera", IconCamera);
Vue.component("icon-grid", IconGrid);
Vue.component("icon-notification", IconNotification);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount("#app");
