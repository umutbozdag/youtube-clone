import VideoListCardItem from "@/components/VideoListCardItem.vue";

export default {
  title: "Example/VideoListCardItem",
  component: VideoListCardItem,
  argTypes: {
    size: {
      control: { type: "select", options: ["big", "small"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { VideoListCardItem },
  template: `<video-list-card-item :size="size" :duration="duration" 
              :title="title" :owner="owner" 
              :time="time" :views="views" 
              :swipeable="swipeable" />`,
});

const cardItem = {
  title: "Test Title",
  owner: "Owner",
  duration: "3.14",
  views: "1.5K views",
  time: "2 days ago",
};

export const Big = Template.bind({});
Big.args = {
  ...cardItem,
  size: "big",
  swipeable: true,
};

export const Small = Template.bind({});
Small.args = {
  ...cardItem,
  size: "small",
  swipeable: true,
};
