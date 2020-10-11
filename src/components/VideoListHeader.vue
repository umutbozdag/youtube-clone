<template>
  <div class="video-list-header">
    <div class="video-list-header__content">
      <slot name="content"></slot>
    </div>

    <div class="video-list-header__controls">
      <slot name="extra-control"></slot>
      <base-button
        variant="secondary"
        @click="$emit('swipe-left')"
        rounded
        as-icon
        styles="marginRight: 10px;"
      >
        <icon-left-arrow />
      </base-button>
      <base-button
        variant="secondary"
        @click="$emit('swipe-right')"
        rounded
        as-icon
      >
        <icon-right-arrow />
      </base-button>
    </div>
  </div>
</template>

<script>
import IconLeftArrow from "@/assets/icons/icon-left-arrow.svg";
import IconRightArrow from "@/assets/icons/icon-right-arrow.svg";

export default {
  name: "VideoListHeader",
  components: {
    IconLeftArrow,
    IconRightArrow,
  },
};
</script>

<style></style>
