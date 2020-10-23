<template>
  <div class="video-detail">
    <div class="video-detail__content">
      <iframe
        id="ytplayer"
        type="text/html"
        width="560"
        height="349"
        src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"
      />

      <div class="video-info">
        <base-heading size="1" class="video-info__title"
          >Dude You Re Getting A Telescope</base-heading
        >
        <div class="video-info__stats">
          <span class="video-views">123k views</span>
          <base-button variant="light" class="stats-button">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.24"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11.7329C0 12.4323 0.596816 12.998 1.33303 12.998C1.33303 12.998 8.04913 13.0025 9.00292 12.998C11.0812 13.0194 12.3926 12.4547 12.9582 10.9982C13.11 10.6258 13.9501 7.41689 13.9574 7.38101C14.1966 6.31709 13.4012 5.38783 12.2412 5.38783L9.83527 5.38768C9.64957 5.38767 9.5284 5.24849 9.5647 5.07611C9.5647 5.07611 9.74339 4.23206 9.78223 4.02284C9.92755 3.23995 10.0069 2.62439 9.99953 2.2066C10.012 1.54647 9.63906 0.992714 9.04973 0.55583C8.73233 0.320535 8.24694 0.101358 8.24694 0.101358C7.74148 -0.141148 7.13599 0.0682933 6.90137 0.550712C6.90137 0.550712 4.98706 4.51167 4.82791 4.81413C4.66876 5.11658 4.25203 5.38803 3.88249 5.38803H1.33303C0.597467 5.38803 0 5.95447 0 6.65321V11.7329ZM9.01732 11.7298C10.4976 11.745 11.231 11.4606 11.6047 10.7784H11.3349C10.9656 10.7784 10.6663 10.497 10.6663 10.1443C10.6663 9.79404 10.9618 9.51011 11.3349 9.51011H12.0027C12.0577 9.30901 12.1167 9.09296 12.1758 8.87595H11.6682C11.2989 8.87595 10.9996 8.59446 10.9996 8.24178C10.9996 7.89154 11.2951 7.60761 11.6682 7.60761H12.5203C12.5978 7.32142 12.6492 7.1312 12.6517 7.12138C12.715 6.84298 12.5544 6.65617 12.2411 6.65617L9.83518 6.65602C8.81064 6.65595 8.05528 5.78677 8.25766 4.82571C8.26457 4.79306 8.45663 3.87033 8.46926 3.80229C8.60705 3.05999 8.67174 2.52963 8.66643 2.22779L8.66646 2.18372C8.67005 1.99438 8.54896 1.79258 8.23018 1.55626C8.19435 1.5297 7.95995 1.39474 7.95995 1.39474L6.03797 5.34669C5.68177 6.07909 4.84873 6.60806 3.99985 6.65323V11.7323C6.11497 11.7318 8.75851 11.7309 9.01732 11.7298ZM2.66657 6.65636H1.33303L1.33328 11.7329L2.66657 11.7326V6.65636Z"
                fill="black"
              />
            </svg>

            123k</base-button
          >

          <base-button variant="light" class="stats-button">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.24"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11.7329C0 12.4323 0.596816 12.998 1.33303 12.998C1.33303 12.998 8.04913 13.0025 9.00292 12.998C11.0812 13.0194 12.3926 12.4547 12.9582 10.9982C13.11 10.6258 13.9501 7.41689 13.9574 7.38101C14.1966 6.31709 13.4012 5.38783 12.2412 5.38783L9.83527 5.38768C9.64957 5.38767 9.5284 5.24849 9.5647 5.07611C9.5647 5.07611 9.74339 4.23206 9.78223 4.02284C9.92755 3.23995 10.0069 2.62439 9.99953 2.2066C10.012 1.54647 9.63906 0.992714 9.04973 0.55583C8.73233 0.320535 8.24694 0.101358 8.24694 0.101358C7.74148 -0.141148 7.13599 0.0682933 6.90137 0.550712C6.90137 0.550712 4.98706 4.51167 4.82791 4.81413C4.66876 5.11658 4.25203 5.38803 3.88249 5.38803H1.33303C0.597467 5.38803 0 5.95447 0 6.65321V11.7329ZM9.01732 11.7298C10.4976 11.745 11.231 11.4606 11.6047 10.7784H11.3349C10.9656 10.7784 10.6663 10.497 10.6663 10.1443C10.6663 9.79404 10.9618 9.51011 11.3349 9.51011H12.0027C12.0577 9.30901 12.1167 9.09296 12.1758 8.87595H11.6682C11.2989 8.87595 10.9996 8.59446 10.9996 8.24178C10.9996 7.89154 11.2951 7.60761 11.6682 7.60761H12.5203C12.5978 7.32142 12.6492 7.1312 12.6517 7.12138C12.715 6.84298 12.5544 6.65617 12.2411 6.65617L9.83518 6.65602C8.81064 6.65595 8.05528 5.78677 8.25766 4.82571C8.26457 4.79306 8.45663 3.87033 8.46926 3.80229C8.60705 3.05999 8.67174 2.52963 8.66643 2.22779L8.66646 2.18372C8.67005 1.99438 8.54896 1.79258 8.23018 1.55626C8.19435 1.5297 7.95995 1.39474 7.95995 1.39474L6.03797 5.34669C5.68177 6.07909 4.84873 6.60806 3.99985 6.65323V11.7323C6.11497 11.7318 8.75851 11.7309 9.01732 11.7298ZM2.66657 6.65636H1.33303L1.33328 11.7329L2.66657 11.7326V6.65636Z"
                fill="black"
              />
            </svg>

            123k</base-button
          >

          <base-button variant="light" class="stats-button">
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.24"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 11.7329C0 12.4323 0.596816 12.998 1.33303 12.998C1.33303 12.998 8.04913 13.0025 9.00292 12.998C11.0812 13.0194 12.3926 12.4547 12.9582 10.9982C13.11 10.6258 13.9501 7.41689 13.9574 7.38101C14.1966 6.31709 13.4012 5.38783 12.2412 5.38783L9.83527 5.38768C9.64957 5.38767 9.5284 5.24849 9.5647 5.07611C9.5647 5.07611 9.74339 4.23206 9.78223 4.02284C9.92755 3.23995 10.0069 2.62439 9.99953 2.2066C10.012 1.54647 9.63906 0.992714 9.04973 0.55583C8.73233 0.320535 8.24694 0.101358 8.24694 0.101358C7.74148 -0.141148 7.13599 0.0682933 6.90137 0.550712C6.90137 0.550712 4.98706 4.51167 4.82791 4.81413C4.66876 5.11658 4.25203 5.38803 3.88249 5.38803H1.33303C0.597467 5.38803 0 5.95447 0 6.65321V11.7329ZM9.01732 11.7298C10.4976 11.745 11.231 11.4606 11.6047 10.7784H11.3349C10.9656 10.7784 10.6663 10.497 10.6663 10.1443C10.6663 9.79404 10.9618 9.51011 11.3349 9.51011H12.0027C12.0577 9.30901 12.1167 9.09296 12.1758 8.87595H11.6682C11.2989 8.87595 10.9996 8.59446 10.9996 8.24178C10.9996 7.89154 11.2951 7.60761 11.6682 7.60761H12.5203C12.5978 7.32142 12.6492 7.1312 12.6517 7.12138C12.715 6.84298 12.5544 6.65617 12.2411 6.65617L9.83518 6.65602C8.81064 6.65595 8.05528 5.78677 8.25766 4.82571C8.26457 4.79306 8.45663 3.87033 8.46926 3.80229C8.60705 3.05999 8.67174 2.52963 8.66643 2.22779L8.66646 2.18372C8.67005 1.99438 8.54896 1.79258 8.23018 1.55626C8.19435 1.5297 7.95995 1.39474 7.95995 1.39474L6.03797 5.34669C5.68177 6.07909 4.84873 6.60806 3.99985 6.65323V11.7323C6.11497 11.7318 8.75851 11.7309 9.01732 11.7298ZM2.66657 6.65636H1.33303L1.33328 11.7329L2.66657 11.7326V6.65636Z"
                fill="black"
              />
            </svg>

            123k</base-button
          >

          <svg
            class="stats-button--more"
            width="28"
            height="6"
            viewBox="0 0 28 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6ZM14 6C15.6569 6 17 4.65685 17 3C17 1.34315 15.6569 0 14 0C12.3431 0 11 1.34315 11 3C11 4.65685 12.3431 6 14 6ZM28 3C28 4.65685 26.6569 6 25 6C23.3431 6 22 4.65685 22 3C22 1.34315 23.3431 0 25 0C26.6569 0 28 1.34315 28 3Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div class="channel-info-wrapper">
        <div class="channel-info">
          <div>
            <img
              class="channel-img"
              src="@/assets/images/food.png"
              alt="Food & Drink"
            />
          </div>

          <div>
            <base-heading size="2" class="channel-info__title"
              >Food & Drink</base-heading
            >
            <p class="channel-info__create">Published on 14 Jun 2019</p>
            <p class="video-desc">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.
            </p>
            <a href="#" class="video-show-more">
              Show more
            </a>
          </div>
        </div>

        <base-button class="sub-button" variant="primary"
          >Subscribe 2.3m</base-button
        >
      </div>
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
