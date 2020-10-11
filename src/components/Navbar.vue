<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__brand">
        <icon-menu @click="handleOnMenuClicked" class="menu-icon" />
        <img class="brand-logo" src="@/assets/logo.png" alt="YouTube" />
      </div>
      <div class="navbar__search">
        <base-input show-icon styles="backgroundColor: red; width: 800px;" />
      </div>

      <div class="navbar__controls">
        <ul class="controls-list">
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
    <navbar-mobile />
  </div>
</template>

<script>
import BaseInput from "./BaseInput";
import NavbarMobile from "@/components/NavbarMobile";

import { mapActions, mapState } from "vuex";
export default {
  components: {
    BaseInput,
    NavbarMobile,
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
