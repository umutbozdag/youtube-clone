<template>
  <div class="search-input row">
    <input class="search-input__field" type="text" placeholder="Search" />
    <icon-search class="search-input__icon" />
  </div>
</template>

<script>
import IconSearch from "@/assets/icons/icon-search.svg";
export default {
  components: {
    IconSearch,
  },
};
</script>

<style></style>
