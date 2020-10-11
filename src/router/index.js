import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import VideoDetail from "@/views/VideoDetail";
import ChannelDetail from "@/views/ChannelDetail";

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
