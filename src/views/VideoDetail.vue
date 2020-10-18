<template>
  <div class="video-detail">
    <div class="video-detail__content">
      <iframe
        id="ytplayer"
        type="text/html"
        width="1100"
        height="700"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"
      />
    </div>

    <div class="video-detail__queue">
      <video-list :videos="userVideos" id="queueVideos" vertical />
    </div>
  </div>
</template>

<script>
import VideoList from "@/components/VideoList";

export default {
  name: "VideoDetail",
  components: {
    VideoList,
  },
  data() {
    return {
      userVideos: [
        {
          id: 0,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 1,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 2,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 3,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
        },
      ],
    };
  },
};
</script>

<style></style>
