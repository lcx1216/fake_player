<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        :show-indicators="false"
        class="my-swiper"
      >
        <van-swipe-item v-for="item in state.musiclist" :key="item">
          <!-- 路由跳转 -->
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }"
            ><div class="swipe-item">
              <img :src="item.picUrl" alt="item.name" />
              <span class="playcount ">
                <i class="iconfont icon-zuihouyiyemoyexiayishou"></i>
                {{ changeCount(item.playCount) }}
              </span>
              <span class="name van-multi-ellipsis--l2">{{item.name}}</span>
            </div></router-link
          >
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { getMusicList } from "@/request/api/home";
export default {
  setup() {
    const state = reactive({
      musiclist: [],
    });
    function changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      } else {
        return num;
      }
    }
    // function numcut(str) {
    //     if(str.length > 18) {
    //         str = str.substr(0,16) + "..."
    //     }
    //     return str
    // }
    onMounted(async () => {
      let res = await getMusicList();
      console.log(res);
      state.musiclist = res.data.result;
    });
    return { state, changeCount };
  },
};
</script>
<style lang="less">
.musicList {
  //   width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-weight: 900;
      font-size: 0.4rem;
    }
    .more {
      border: 0.02rem solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      border-radius: 0.4rem;
      padding: 0 0.2rem;
    }
  }
  .musicContent {
    height: 4rem;
    .my-swiper {
      position: relative;
      .van-swipe-item {
        .swipe-item {
          margin: 0.1rem;
          img {
            width: 100%;
            height: 80%;
            border-radius: 0.2rem;
          }
          .playcount {
            display: flex;
            align-items: center;
            justify-content: center;
            top: 10px;
            background-color: rgba(204, 204, 204, 0.652);
            border-radius: 0.4rem;
            position: absolute;
            color: aliceblue;
            right: 0.2rem;
            margin-top: 0.1rem;
            font-size: 0.24rem;
            padding: 0 0.1rem;;
            .icon-zuihouyiyemoyexiayishou {
              font-size: 0.38rem;
            }
          }
        }
      }
    }
  }
}
</style>
