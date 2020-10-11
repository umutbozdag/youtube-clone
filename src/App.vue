<template>
  <div id="app">
    <navbar />
    <div class="sidebar-main-wrapper grid" style="display: flex;">
      <the-sidebar />
      <navbar-mobile />
      <router-view class="route-wrapper"></router-view>
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/the-sidebar";
import Navbar from "@/components/navbar";
import NavbarMobile from "@/components/navbar-mobile";

export default {
  components: {
    TheSidebar,
    Navbar,
    NavbarMobile,
  },
};
</script>

<style lang="scss"></style>
