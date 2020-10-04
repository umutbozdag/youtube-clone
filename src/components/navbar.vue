<template>
  <div class="navbar">
    <div class="navbar__container row">
      <div class="navbar__brand row">
        <icon-menu @click="handleOnMenuClicked" class="menu-icon" />
        <img class="brand-logo" src="@/assets/logo.png" alt="YouTube" />
      </div>
      <div class="navbar__search">
        <search-input />
      </div>

      <div class="navbar__controls">
        <ul class="controls-list row">
          <li class="controls-list__item">
            <icon-camera />
          </li>
          <li class="controls-list__item">
            <icon-grid />
          </li>
          <li class="controls-list__item">
            <icon-notification />
          </li>
          <li class="controls-list__item">
            <img
              class="list-item-avatar"
              src="../assets/images/avatar-user.png"
              loading="lazy"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from "@/assets/icons/icon-menu.svg";
import IconCamera from "@/assets/icons/icon-camera.svg";
import IconGrid from "@/assets/icons/icon-grid.svg";

import IconNotification from "@/assets/icons/icon-notification.svg";
import SearchInput from "./search-input";

import { mapActions, mapState } from "vuex";
export default {
  components: {
    IconMenu,
    IconCamera,
    IconGrid,
    IconNotification,
    SearchInput,
  },
  computed: {
    ...mapState(["isSidebarOpen"]),
  },
  methods: {
    ...mapActions(["setIsSidebarOpen"]),
    handleOnMenuClicked() {
      this.setIsSidebarOpen(!this.isSidebarOpen);
    },
  },
};
</script>

<style></style>
