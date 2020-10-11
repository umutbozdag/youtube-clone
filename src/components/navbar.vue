<template>
  <div class="navbar">
    <div class="navbar__container">
      <div class="navbar__brand">
        <icon-menu @click="handleOnMenuClicked" class="menu-icon" />
        <img class="brand-logo" src="@/assets/logo.png" alt="YouTube" />
      </div>
      <div class="navbar__search">
        <search-input />
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
  </div>
</template>

<script>
import SearchInput from "./search-input";

import { mapActions, mapState } from "vuex";
export default {
  components: {
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
