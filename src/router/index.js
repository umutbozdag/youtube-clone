import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/home";
import VideoDetail from "@/views/video-detail";
import ChannelDetail from "@/views/channel-detail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/watch",
    name: "VideoDetail",
    component: VideoDetail,
  },
  {
    path: "/channel",
    name: "ChannelDetail",
    component: ChannelDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
