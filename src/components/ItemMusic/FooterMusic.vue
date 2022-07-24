<template>
  <div class="footerMusic">
    <div class="left" @click="updateDetailshow">
      <div class="cover">
        <img :src="playList[musicIndex].al.picUrl" alt="" />
      </div>
      <div class="musicname">
        <div class="name">{{ playList[musicIndex].name }}</div>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="right">
      <i class="iconfont icon-bofang" @click="play" v-if="isbtnShow"></i>
      <i class="iconfont icon-zanting" @click="play" v-else></i>
      <i class="iconfont icon-zu"></i>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[musicIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="isDetailShow"
      position="right"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail
        :musicdetaliList="playList[musicIndex]"
        :play="play"
        :isbtnShow='isbtnShow'
        :addduration ='addduration'
      />
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MusicDetail from "@/components/ItemMusic/MusicDetail.vue";

export default {
    data() {
        return{
            interVal:0
        }
    },
  computed: {
    ...mapState(["playList", "musicIndex", "isbtnShow", "isDetailShow"]),
  },
  mounted() {
    console.log(this.$refs);
  },
  updated() {
    this.$store.dispatch('getLyric',this.playList[this.musicIndex].id)
    this.addduration()
  },
  methods: {
    play: function () {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.playChange(false);
        this.updataCTime()
      } else {
        this.$refs.audio.pause(); //暂停
        this.playChange(true);
        clearInterval(this.interVal) //暂停需要清除定时器
      }
    },
    addduration:function() {
        this.updateDuration(this.$refs.audio.duration)
    },
    updataCTime:function(){
        this.interVal = setInterval(() => {//获取当前歌词时间
            this.updateTime(this.$refs.audio.currentTime)
        }, 1000)
    },
    ...mapMutations(["playChange", "updateDetailshow", "updateTime","updateDuration"]),
  },
  watch: {
    musicIndex: function () {
      // 监听播放列表下标，若发生改变则继续播放
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.playChange(false);
      }
    },
    playList: function () {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.playChange(false);
      }
    },
  },
  components: {
    MusicDetail,
  },
};
</script>

<style lang="less">
.footerMusic {
  width: 100%;
  height: 1.2rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid rgb(176, 173, 173);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    // justify-content: space-around;
    align-items: center;
    padding: 0 0.2rem;
    width: 55%;
    .cover {
      height: 0.8rem;
      width: 0.8rem;
      margin: 0 0.3rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        
      }
    }
    .musicname {
      .name {
        font-size: 0.3rem;
        font-weight: 700;
        margin-bottom: 0.08rem;
      }
      span {
        font-size: 0.24rem;
        color: rgb(130, 130, 130);
      }
    }
  }
  .right {
    margin-right: 0.3rem;
    .iconfont {
      font-size: 0.5rem;
      color: rgb(56, 54, 54);
    }
    .icon-bofang,
    .icon-zanting {
      margin-right: 0.3rem;
    }
  }
}
</style>
