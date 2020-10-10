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
            <p class="category-title">Dollie Blair</p>
          </template>
        </video-list-header>
      </div>
      <video-list :videos="userVideos" id="userVideos" />
    </div>

    <div class="recommended-videos">
      <div class="video-list__header-wrapper">
        <video-list-header
          @swipe-left="swipeLeft('recommendedVideos')"
          @swipe-right="swipeRight('recommendedVideos')"
        >
          <template #content>
            <h1 class="category-title">Recommended</h1>
          </template>
        </video-list-header>
      </div>
      <video-list :videos="recommendedVideos" id="recommendedVideos" />
    </div>

    <div class="recommended-category-videos">
      <div class="video-list__header-wrapper">
        <video-list-header
          @swipe-left="swipeLeft('categoryVideos')"
          @swipe-right="swipeRight('categoryVideos')"
        >
          <template #content>
            <img class="category-img" src="@/assets/images/food.png" alt="" />
            <h1 class="category-title">Food & Drink</h1>
            <p class="category-info">Recommended channel for you</p>
          </template>

          <template #extra-control>
            <base-button variant="primary" styles="marginRight: 40px;"
              >Subscribe 2.8M</base-button
            >
          </template>
        </video-list-header>
      </div>
      <video-list :videos="userVideos" id="categoryVideos" />
    </div>
  </div>
</template>

<script>
import VideoList from "@/components/video-list";
import VideoListHeader from "@/components/video-list-header";

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
    };
  },
  methods: {
    /* eslint no-inner-declarations: 0 */

    /**
     * scrollTo - Horizontal Scrolling
     * @param {(HTMLElement ref)} element - Scroll Container
     * @param {number} scrollPixels - pixel to scroll
     * @param {number} duration -  Duration of scrolling animation in millisec
     */
    scrollTo(element, scrollPixels, duration) {
      const scrollPos = element.scrollLeft;
      // Condition to check if scrolling is required
      if (
        !(
          (scrollPos === 0 || scrollPixels > 0) &&
          (element.clientWidth + scrollPos === element.scrollWidth ||
            scrollPixels < 0)
        )
      ) {
        // Get the start timestamp
        const startTime =
          "now" in window.performance
            ? performance.now()
            : new Date().getTime();

        function scroll(timestamp) {
          //Calculate the timeelapsed
          const timeElapsed = timestamp - startTime;
          //Calculate progress
          const progress = Math.min(timeElapsed / duration, 1);
          //Set the scrolleft
          element.scrollLeft = scrollPos + scrollPixels * progress;
          //Check if elapsed time is less then duration then call the requestAnimation, otherwise exit
          if (timeElapsed < duration) {
            //Request for animation
            window.requestAnimationFrame(scroll);
          } else {
            return;
          }
        }
        //Call requestAnimationFrame on scroll function first time
        window.requestAnimationFrame(scroll);
      }
    },
    swipeLeft(refName) {
      const content = document.getElementById(refName);
      this.scrollTo(content, -300, 200);
    },
    swipeRight(refName) {
      const content = document.getElementById(refName);

      this.scrollTo(content, 300, 200);
    },
  },
};
</script>
<style lang="scss"></style>
