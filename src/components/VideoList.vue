<template>
  <div class="video-list" :class="{ 'swiper-container': swipeable }">
    <div
      class="video-list__videos"
      :class="{
        'video-list__videos--horizontal': horizontal,
        'video-list__videos--vertical': !horizontal,
        'swiper-wrapper': swipeable,
      }"
      ref="videos"
      :id="id"
    >
      <video-list-card-item
        v-for="video in videos"
        :key="video.id"
        :title="video.title"
        :owner="video.owner"
        :time="video.time"
        :duration="video.duration"
        :views="video.views"
        :size="video.size"
        :swipeable="swipeable"
      />
    </div>
  </div>
</template>

<script>
import VideoListCardItem from "./VideoListCardItem";

export default {
  components: {
    VideoListCardItem,
  },
  props: {
    videos: {
      type: Array,
    },
    id: {
      type: String,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    swipeable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.swiper-container {
}
</style>
