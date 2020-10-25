import VideoList from "@/components/VideoList.vue";

export default {
  title: "Example/VideoList",
  component: VideoList,
  argTypes: {
    horizontal: {
      control: { type: "select", options: [true, false] },
    },
    swipeable: {
      control: { type: "select", options: [true, false] },
    },
  },
};

const videos = [
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
];

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VideoList },
  template: `<video-list :horizontal="horizontal" :videos="videos" :swipeable="swipeable" />`,
});

export const VideoListHorizontal = Template.bind({});
VideoListHorizontal.args = {
  videos,
  horizontal: true,
  swipeable: true,
};

export const VideoListVertical = Template.bind({});
VideoListVertical.args = {
  videos,
  horizontal: false,
};
