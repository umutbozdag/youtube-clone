<template>
  <button
    class="button"
    @click="$emit('click')"
    :class="{
      'button--primary': variant === 'primary',
      'button--light': variant === 'light',
      'button--secondary': variant === 'secondary',
      'button--rounded': rounded,
      'button--as-icon': asIcon,
      'button--transparent': transparent,
    }"
    :style="styles"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      required: true,
    },

    styles: {
      type: String,
    },

    rounded: {
      type: Boolean,
      default: false,
    },

    asIcon: {
      type: Boolean,
      default: false,
    },

    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
