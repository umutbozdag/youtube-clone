<template>
  <div id="app">
    <navbar />
    <div class="sidebar-main-wrapper grid" style="display: flex;">
      <the-sidebar />
      <router-view class="route-wrapper"></router-view>
    </div>
  </div>
</template>

<script>
import TheSidebar from "@/components/TheSidebar";
import Navbar from "@/components/Navbar";

export default {
  components: {
    TheSidebar,
    Navbar,
  },
};
</script>

<style lang="scss"></style>
