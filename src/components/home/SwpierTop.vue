<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getBanner } from "@/request/api/home.js";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      images: [
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
        "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
      ],
    });
    onMounted(async () => {
      // axios.get('http://localhost:3000/banner?type=2').then(res => {
      //     console.log(res);
      //     state.images = res.data.banners;
      //     console.log(state.images)
      // })
      let res = await getBanner();
      console.log(res);
      state.images = res.data.banners;
    });
    return { state };
  },
};
</script>
<style lang="less">
#swiperTop {
  .van-swipe {
    // width: 100%;
    padding: 0.15rem;
      img {
        width: 96%;
        height: 3rem;
        border-radius: 0.35rem;
      }
    .van-swipe__indicator--active {
      background-color: rgba(218, 3, 3, 0.81);
    }
  }
}
</style>
