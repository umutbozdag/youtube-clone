<template>
  <div
    class="navbar"
    :class="{ 'navbar--channel-detail': $route.name === 'ChannelDetail' }"
  >
    <div class="navbar__container">
      <div class="navbar__brand row">
        <icon-menu @click="handleOnMenuClicked" class="menu-icon" />
        <img
          class="brand-logo"
          src="@/assets/logo-big.png"
          alt="YouTube logo"
        />
        <template v-if="$route.name === 'ChannelDetail'">
          <img
            src="@/assets/logo-small.png"
            class="brand-logo--small"
            alt="Youtube small logo"
          />
          <h2 class="navbar__user-name">Margaret Phelps</h2>
        </template>
      </div>
      <div class="navbar__search">
        <base-input show-icon icon-component="icon-search" />
      </div>

      <div class="navbar__controls">
        <ul class="controls-list">
          <li class="controls-list__item">
            <icon-camera class="controls-item-icon" />
          </li>
          <li class="controls-list__item">
            <icon-grid class="controls-item-icon" />
          </li>
          <li class="controls-list__item">
            <icon-notification class="controls-item-icon" />
          </li>
          <li class="controls-list__item">
            <img
              class="controls-item-avatar"
              src="../assets/images/avatar-user.png"
              loading="lazy"
              alt=""
            />
          </li>
        </ul>
      </div>

      <div class="navbar__controls--mobile">
        <ul class="controls-list--mobile row">
          <li class="controls-list__item">
            <icon-search
              class="controls-item-icon controls-item-icon--search"
            />
          </li>
          <li class="controls-list__item">
            <img
              class="controls-item-avatar"
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
