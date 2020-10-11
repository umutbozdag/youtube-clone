<template>
  <div class="input row" :style="styles">
    <input class="input__field" type="text" placeholder="Search" />
    <icon-search v-if="showIcon" class="input__icon" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    styles: {
      type: String,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
