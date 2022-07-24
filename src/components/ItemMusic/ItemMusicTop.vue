<template>
  <div class="itemmusictop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
    <div class="musictop2">
      <div class="topleft">
        <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
        <span class=""> 歌单 </span>
      </div>
      <div class="topright">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-31liebiao"></i>
      </div>
    </div>
    <div class="musictopmid">
      <img :src="playlist.coverImgUrl" alt="" class="midimg" />
      <div class="topmidright">
        <span class="musictopname">{{ playlist.name }}</span>
        <div class="namedes" v-if="playlist.creator">
          <img :src="playlist.creator.avatarUrl" alt="" class="avatar" />
          <span class="nickname">{{ playlist.creator.nickname }}</span>
          <i class="iconfont icon-youjiantou"></i>
        </div>
        <span class="description van-multi-ellipsis--l2">{{ playlist.description }}</span>
      </div>
    </div>
    <div class="musictopbot">
        <div class="iconnum">
            <i class="iconfont icon-shouye"></i>
            <span class="des">{{ playlist.commentCount }}</span>
        </div>
        <div class="iconnum">
            <i class="iconfont icon-fenxiang1"></i>
            <span class="des">{{ playlist.shareCount }}</span>
        </div>
        <div class="iconnum">
            <i class="iconfont icon-xiazai1"></i>
            <span class="des">下载</span>
        </div>
        <div class="iconnum">
            <i class="iconfont icon-duoxuan"></i>
            <span class="des">多选</span>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {
  //拿到父页面中的数据
  setup(props) {
    console.log(props);
    // 获取存到本地的数据
    if(props.playlist.creator = ""){
        props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
    }
  },
  props: ["playlist"],
};
</script>

<style lang="less">
.itemmusictop {
  // width: 100%;
  height: 5.8rem;
  position: relative;
  .bgimg {
    width: 100%;
    height: 6rem;
    z-index: -1;
    position: absolute;
    filter: blur(30px);
  }
  .musictop2 {
    height: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 0.35rem;
    .topleft,
    .topright {
      width: 28%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0.3rem 0.2rem 0;
      .iconfont {
        font-size: 0.44rem;
      }
    }
  }
  .musictopmid {
    height: 3.2rem;
    margin-top: .2rem;
    display: grid;
    grid-template-columns: 40% 60%;
    .midimg {
      width: 80%;
      height: 80%;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
      border-radius: 0.3rem;
    }
    .topmidright {
      margin: 0.4rem 0.2rem 0;
      .musictopname {
        color: #fff;
        font-weight: 600;
      }
      .namedes{
        height: .8rem;
        display: flex;
        align-items: center;
        margin-top: .2rem;
        .avatar{
            width: 15%;
            border-radius: 50%;
        }
        .nickname{
            margin-left: .2rem;
            color: rgb(125, 122, 122);
        }
        .icon-youjiantou{
            color: rgb(144, 144, 144);
            font-size: .24rem;
        }
      }
      .description{
        color: rgb(144, 144, 144);
        font-size: .24rem;
        margin-top: .4rem;
      }
    }
  }
  .musictopbot{
    height: 1.6rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconnum{
        i,span {
            display: block;
            color: rgba(251, 247, 247, 0.919);
        }
        .iconfont{
            font-size: .5rem;
        }
        .des{
            margin-top: .2rem;
            font-size: .3rem;
            text-align: center;
            opacity: 0.8;
        }
    }
  }
}
</style>
