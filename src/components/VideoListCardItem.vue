<template>
  <div
    @click="$router.push('/watch')"
    class="video-card swiper-slide"
    :class="{ 'video-card--big': size === 'big' }"
  >
    <div class="video-card__cover">
      <img
        v-if="size !== 'big'"
        class="video-card-thumbnail"
        src="../assets/images/video-cover.png"
        :alt="title"
        tabindex="0"
      />

      <img
        v-else
        src="../assets/images/video-cover-big.png"
        class="video-card-thumbnail video-card-thumbnail--big"
        tabindex="0"
        :alt="title"
      />
      <span class="video-card__duration">{{ duration }}</span>
    </div>
    <div class="video-card__summary">
      <h3 class="video-title">{{ title }}</h3>
      <div class="video-meta">
        <p class="video-meta__info">{{ views }} · {{ time }}</p>
        <p class="video-meta__owner">{{ owner }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoItem",
  props: {
    size: {
      type: String,
    },
    videoSrc: {
      type: String,
    },
    duration: {
      type: String,
    },
    title: {
      type: String,
    },
    owner: {
      type: String,
    },
    time: {
      type: String,
    },
    views: {
      type: String,
    },
  },
};
</script>

<style></style>
