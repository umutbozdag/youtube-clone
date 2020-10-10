<template>
  <div class="video-list">
    <div class="video-list__videos" ref="videos" :id="id">
      <video-card
        v-for="video in videos"
        :key="video.id"
        :title="video.title"
        :owner="video.owner"
        :time="video.time"
        :duration="video.duration"
        :views="video.views"
        :size="video.size"
      />
    </div>
  </div>
</template>

<script>
import VideoCard from "./video-card";

export default {
  components: {
    VideoCard,
  },
  props: {
    videos: {
      type: Array,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style></style>
