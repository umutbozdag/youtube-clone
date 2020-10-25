import "../src/styles/main.scss";
import Vue from "vue";

// Icons
import IconHome from "@/assets/icons/icon-home.svg";
import IconMenu from "@/assets/icons/icon-menu.svg";
import IconCamera from "@/assets/icons/icon-camera.svg";
import IconGrid from "@/assets/icons/icon-grid.svg";
import IconNotification from "@/assets/icons/icon-notification.svg";
import IconSearch from "@/assets/icons/icon-search.svg";

import BaseButton from "@/components/BaseButton";
import BaseHeading from "@/components/BaseHeading";

Vue.component("icon-home", IconHome);
Vue.component("icon-menu", IconMenu);
Vue.component("icon-camera", IconCamera);
Vue.component("icon-grid", IconGrid);
Vue.component("icon-notification", IconNotification);
Vue.component("icon-search", IconSearch);

Vue.component("base-button", BaseButton);
Vue.component("base-heading", BaseHeading);
