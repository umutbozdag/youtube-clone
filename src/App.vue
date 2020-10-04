<template>
  <div id="app">
    <navbar />
    <div class="sidebar-main-wrapper" style="display: flex;">
      <sidebar />
      <router-view class="route-wrapper"></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
export default {
  components: { Sidebar, Navbar },
};
</script>

<style lang="scss"></style>
