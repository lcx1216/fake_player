<template>
  <div class="musiclist">
    <div class="listTop">
      <div class="topLeft">
        <i class="iconfont icon-bofang"></i>
        <span class="topname">播放全部</span>
        <span class="totalnum">(共{{ musicList.length }}首)</span>
      </div>
      <div class="topRight">
        <div class="subblock">
          <i class="iconfont icon-jiahao"></i>
          <span class="sub">收藏 ({{ subscribedCount }})</span>
        </div>
      </div>
    </div>
    <div class="music">
      <div class="singleMusic" v-for="(item, i) in musicList" :key="i">
        <div class="mucisname" @click="playMusic(i)">
          <div class="serial">{{ i + 1 }}</div>
          <div class="nametop">
            <div class="name van-ellipsis">{{ item.name }}</div>
            <div class="anthor van-ellipsis">
<span
              
              v-for="(item1, index) in item.ar"
              :key="index"
              >{{ item1.name }}</span
            >
            </div>
            
          </div>
        </div>
        <div class="musicright">
          <i class="iconfont icon-shipin" v-if="item.mv != 0"></i>
          <i class="iconfont icon-31liebiao"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  setup(props) {
    console.log(props);

    function numcut(str) {
        if(str.length > 18) {
            str = str.substr(0,16) + "..."
        }
        return str
    }
    return { numcut}
  },
  props: ["musicList", "subscribedCount"],
  methods: {
    playMusic:function(i) {
        this.updateMusicList(this.musicList)
        this.updateMusicListIndex(i)
    },
    ...mapMutations(['updateMusicList','updateMusicListIndex'])
  }
};
</script>

<style lang="less">
.musiclist {
  height: 8rem;
  background-color: #fff;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  padding: 0.16rem;
  .listTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.3rem;
    .topLeft {
      width: 4rem;
      .icon-bofang {
        font-size: 0.42rem;
        margin-right: 0.3rem;
      }
      .topname {
        font-weight: 700;
        text-align: center;
      }
      .totalnum {
        font-size: 0.2rem;
        color: rgb(174, 173, 173);
      }
    }
    .topRight {
      .subblock {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: red;
        border-radius: 0.4rem;
        // height: .6rem;
        color: #fff;
        font-size: 0.28rem;
        padding: 0.18rem 0.15rem;
        .icon-jiahao {
          font-size: 0.28rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .singleMusic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: .1rem;
    .mucisname {
        width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .serial {
        width: 0.4rem;
      }
      .nametop {
        width: 5rem;
        .name{
            font-weight: 700;
            font-size: .3rem;
            margin-bottom: .1rem;
        }
        .anthor{
            font-size: .24rem;
            color: rgb(173, 169, 169);
        }
      }
    }
    .musicright{
        .iconfont{
            font-size: .4rem;
            color: rgb(151, 149, 149);
        }
        .icon-31liebiao{
            margin-left: .2rem;
        }
    }
  }
}
</style>
