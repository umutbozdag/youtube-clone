<template>
  <h1 v-if="size === '1'" class="heading heading--1">
    <slot></slot>
  </h1>

  <h2 v-else-if="size === '2'" class="heading heading--2">
    <slot></slot>
  </h2>

  <h3 v-else-if="size === '3'" class="heading heading--3">
    <slot></slot>
  </h3>

  <h4 v-else-if="size === '4'" class="heading heading--4">
    <slot></slot>
  </h4>

  <h5 v-else-if="size === '5'" class="heading heading--5">
    <slot></slot>
  </h5>

  <h6 v-else class="heading--6">
    <slot></slot>
  </h6>
</template>

<script>
export default {
  name: "BaseHeading",
  props: {
    size: {
      type: String,
      default: "3",
    },
  },
};
</script>

<style></style>
