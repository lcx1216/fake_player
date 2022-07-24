<template>
  <img :src="musicdetaliList.al.picUrl" alt="" class="bgimg" />
  <div class="musicdetail">
    <div class="detailtop">
      <div class="topleft">
        <i class="iconfont icon-zuojiantou" @click="backHome"></i>
        <div class="title">
          <Vue3Marquee style="margin-bottom: 0.1rem">{{
            musicdetaliList.name
          }}</Vue3Marquee>
          <span class="anthor" v-for="item in musicdetaliList.ar" :key="item">{{
            item.name
          }}</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
      </div>
      <div class="topright">
        <i class="iconfont icon-fenxiang"></i>
      </div>
    </div>
    <div class="detailmid" v-show="!isLyricshow">
      <img
        src="@/assets/needle-ab.png"
        alt=""
        class="img_needle"
        :class="{ img_needle_active: !isbtnShow }"
      />
      <img src="@/assets/disc-plus.png" alt="" class="img_cd" />
      <img
        :src="musicdetaliList.al.picUrl"
        alt=""
        class="img_pic"
        @click="isLyricshow = true"
        :class="{ img_pic_active: !isbtnShow, img_pic_paused: isbtnShow }"
      />
    </div>
    <div class="detaillyric" ref="detaillyric" v-show="isLyricshow">
      <p
        class="wordMusic"
        v-for="item in lyric"
        :key="item"
        :class="{
          active:
            currentTime * 1000 > item.time && currentTime * 1000 < item.next,
        }"
      >
        {{ item.lyc }}
      </p>
    </div>
    <div class="detailFooter">
      <div class="footertop">
        <i class="iconfont icon-aixin1"></i>
        <!-- <i class="iconfont icon-aixin"></i> -->
        <i class="iconfont icon-xiazai1"></i>
        <i class="iconfont icon-changpian"></i>
        <i class="iconfont icon-shouye"></i>
        <i class="iconfont icon-liebiao-"></i>
      </div>
      <div class="footermid">
        <input
          type="range"
          class="range"
          min="0"
          :max="duration"
          v-model="currentTime"
          step="0.05"
        />
      </div>
      <div class="footer">
        <i class="iconfont icon-24gl-repeatOnce2"></i>
        <i
          class="iconfont icon-diyiyeshouyeshangyishou"
          @click="goPlay(-1)"
        ></i>
        <i class="iconfont icon-bofang" @click="play" v-if="isbtnShow"></i>
        <i class="iconfont icon-zanting" @click="play" v-else></i>
        <i class="iconfont icon-zuihouyiyemoyexiayishou" @click="goPlay(1)"></i>
        <i class="iconfont icon-31liebiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      isLyricshow: false,
    };
  },
  computed: {
    ...mapState(["lyricList", "currentTime", "musicIndex", "duration"]),
    lyric: function () {
      let arr;
      if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lyc = item.slice(11, item.length);

          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lyc = item.slice(10, item.length);
          }
          let time =
            parseInt(min) * 1000 * 60 + parseInt(sec) * 1000 + parseInt(mill);
          return { min, sec, mill, lyc, time };
        });
        //下一句歌词的时间
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.next = 10000000;
          } else {
            item.next = arr[i + 1].time;
          }
        });
        // console.log(min, sec, mill, lyc, time, pre);
      }
      console.log(arr);
      return arr;
    },
  },
  mounted() {
    // console.log(this.musicdetaliList);
    console.log(this.lyricList.lyric);
    this.addduration();
  },
  props: ["musicdetaliList", "play", "isbtnShow", "addduration"],
  methods: {
    backHome: function () {
      this.isLyricshow = false;
      this.updateDetailshow();
    },
    goPlay: function (num) {
      let index = this.musicIndex + num;
      if (index == -1) {
        index = this.musicIndex.length - 1;
      } else if (index == this.musicIndex.length) {
        index = 0;
      }
      this.updateMusicListIndex(index);
    },
    ...mapMutations(["updateDetailshow", "updateMusicListIndex"]),
  },
  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector("p.active");
      console.log([p]); //找到词距离top的距离
      //   console.log([this.$refs.detaillyric]); //找到滚动条
      if (p !== null && p.offsetTop > 300) {
        this.$refs.detaillyric.scrollTop = p.offsetTop - 260;
      }
      if(newValue === this.duration){
        if(this.musicIndex == this.musicdetaliList.length -1){//先做判断，否则会报找不到al的错
            this.updateMusicListIndex(0)
            this.play()
        }else{
            this.updateMusicListIndex(this.musicIndex +1)
        }
      }
    },
  },
  components: {
    Vue3Marquee,
  },
};
</script>

<style lang="less">
.bgimg {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(1.5rem);
}
.detailtop {
  height: 1rem;
  margin: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(252, 247, 247);
  .topleft {
    width: 70%;
    display: flex;
    align-items: center;
    .icon-zuojiantou {
      font-size: 0.6rem;
      margin-right: 0.2rem;
    }
    .title {
      width: 2.3rem;
      .anthor {
        font-size: 0.28rem;
        color: rgb(130, 129, 129);
      }
      .icon-youjiantou {
        font-size: 0.2rem;
        color: rgb(130, 129, 129);
      }
    }
  }
  .topright {
    .icon-fenxiang {
      font-size: 0.55rem;
    }
  }
}
.detailmid {
  height: 8.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(-15deg);
    transition: all 1s;
  }
  .img_needle_active {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(4deg);
    transition: all 1s;
  }
  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2rem;
    z-index: -1;
  }
  .img_pic {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 2.85rem;
    animation: rotate_pic 10s linear infinite;
  }
  .img_pic_active {
    animation-play-state: running;
  }
  .img_pic_paused {
    animation-play-state: paused;
  }
  @keyframes rotate_pic {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
.detaillyric {
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  margin-top: 0.6rem;
  color: rgb(165, 165, 165);
  line-height: 3;
  .active {
    color: #fff;
    font-size: 0.35rem;
    font-weight: 500;
  }
}
.detailFooter {
  height: 2.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 0.4rem;
  .footertop {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconfont {
      font-size: 0.45rem;
      color: rgb(237, 237, 237);
    }
  }
  .footermid {
    .range {
      width: 100%;
      height: 0.4rem;
    }
  }
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconfont {
      font-size: 0.5rem;
      color: rgb(237, 237, 237);
    }
    .icon-bofang,
    .icon-zanting {
      font-size: 0.7rem;
    }
    .icon-diyiyeshouyeshangyishou,
    .icon-zuihouyiyemoyexiayishou {
      font-size: 0.65rem;
    }
  }
}
</style>
