<template>
  <div class="home">
    <div class="user-video-list">
      <div class="video-list__header-wrapper">
        <video-list-header
          @swipe-left="swipeLeft('userVideos')"
          @swipe-right="swipeRight('userVideos')"
        >
          <template #content>
            <img
              class="category-img"
              src="@/assets/images/avatar-user.png"
              alt=""
            />
            <base-heading size="2">Dollie Blair</base-heading>
          </template>
        </video-list-header>
      </div>
      <video-list :videos="userVideos" id="userVideos" horizontal swipeable />
    </div>

    <div class="recommended-videos">
      <div class="video-list__header-wrapper">
        <video-list-header
          @swipe-left="swipeLeft('recommendedVideos')"
          @swipe-right="swipeRight('recommendedVideos')"
        >
          <template #content>
            <base-heading size="2">Recommended</base-heading>
          </template>
        </video-list-header>
      </div>
      <video-list
        :videos="recommendedVideos"
        id="recommendedVideos"
        horizontal
        swipeable
      />
    </div>

    <div class="recommended-category-videos">
      <div class="video-list__header-wrapper">
        <video-list-header
          @swipe-left="swipeLeft('categoryVideos')"
          @swipe-right="swipeRight('categoryVideos')"
        >
          <template #content>
            <img class="category-img" src="@/assets/images/food.png" alt="" />
            <base-heading size="2">Food & Drink</base-heading>

            <p class="category-info">Recommended channel for you</p>
          </template>

          <template #extra-control>
            <base-button variant="primary" styles="marginRight: 40px;"
              >Subscribe 2.8M</base-button
            >
          </template>
        </video-list-header>
      </div>
      <video-list
        :videos="userVideos"
        id="categoryVideos"
        horizontal
        swipeable
      />
    </div>
  </div>
</template>

<script>
import VideoList from "@/components/VideoList";
import VideoListHeader from "@/components/VideoListHeader";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

export default {
  name: "Home",
  components: {
    VideoList,
    VideoListHeader,
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

      recommendedVideos: [
        {
          id: 0,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
          size: "big",
        },
        {
          id: 1,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
          size: "big",
        },
        {
          id: 2,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
          size: "big",
        },
        {
          id: 3,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
          size: "big",
        },
        {
          id: 4,
          title: "A Brief History Of Creation",
          owner: "Dollie Blair",
          time: "3 days ago",
          duration: "4:15",
          views: "80k views",
          size: "big",
        },
      ],
      swiper: null,
      width: null,
      swiperSettings: {
        slidesPerView: "auto",
        grabCursor: true,
        mousewheel: {
          enabled: true,
        },
        keyboard: {
          enabled: true,
        },
      },
    };
  },
  methods: {
    swipeLeft(refName) {
      let clickedSwiperIdx = this.swiper.findIndex(
        (s) => s.wrapperEl.id === refName
      );

      this.swiper[clickedSwiperIdx].slidePrev();
    },
    swipeRight(refName) {
      let clickedSwiperIdx = this.swiper.findIndex(
        (s) => s.wrapperEl.id === refName
      );

      this.swiper[clickedSwiperIdx].slideNext();
    },
  },

  watch: {},

  mounted() {
    this.swiper = new Swiper(".swiper-container", this.swiperSettings);
  },
};
</script>
<style lang="scss"></style>
