<template>
  <div class="searchTop">
    <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
    <input
      type="text"
      name=""
      id=""
      placeholder="陈奕迅"
      @keydown.enter="enterkey"
      v-model="searchKey"
    />
  </div>
  <div class="searchHistory">
    <div class="historyLeft">
      <span class="history">历史</span>
      <span
        class="historyName"
        v-for="item in keyList"
        key="item"
        @click="searchHis(item)"
        >{{ item }}</span
      >
    </div>
    <i class="iconfont icon-icon" @click="delHistory"></i>
  </div>
  <div class="music">
    <div class="singleMusic" v-for="(item, i) in searchList" :key="i">
      <div class="mucisname" @click="pushMusic(item)">
        <div class="serial">{{ i + 1 }}</div>
        <div class="nametop">
          <div class="name van-ellipsis">{{ item.name }}</div>
          <div class="anthor van-ellipsis">
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
      </div>
      <div class="musicright">
        <i class="iconfont icon-shipin" v-if="item.mvid != 0"></i>
        <i class="iconfont icon-31liebiao"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearch } from "@/request/api/home.js";
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      keyList: [],
      searchKey: "",
      searchList: [],
    };
  },
  computed: {
    ...mapState(["playList"]),
  },
  mounted() {
    this.keyList = JSON.parse(localStorage.getItem("keyList"))
      ? JSON.parse(localStorage.getItem("keyList"))
      : []; //当数组被清除后无法进行unshift操作，若无数组则赋值为[]
  },

  methods: {
    enterkey: async function () {
      if (this.searchKey !== " ") {
        this.keyList.unshift(this.searchKey); //放数组的最前面
        this.keyList = [...new Set(this.keyList)]; //去重
        //固定历史的长度 不超过8
        if (this.keyList.length > 8) {
          this.keyList.splice(this.keyList.length - 1, 1);
        }
        localStorage.setItem("keyList", JSON.stringify(this.keyList)); //刷新后还保留
        let res = await getSearch(this.searchKey);
        console.log(res);
        this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyList");
      this.keyList = [];
    },
    searchHis: async function (item) {
      let res = await getSearch(item);
      console.log(res);
      this.searchList = res.data.result.songs;
    },
    pushMusic:function(item) {
        item.al = item.album
        item.al.picUrl = item.album.artist.img1v1Url
        this.$store.commit("pushPlayList", item)
        this.$store.commit("updateMusicListIndex", this.$store.state.playList.length -1)
    },
    ...mapMutations(["pushPlayList","updateMusicListIndex"])
  },
};
</script>

<style lang="less">
.searchTop {
  display: flex;
  align-items: center;
  margin: 0.2rem;
  .iconfont {
    font-size: 0.5rem;
  }
  input {
    border: none;
    border-bottom: 0.02rem solid #999;
    margin-left: 0.1rem;
    padding: 0.2rem;
    width: 85%;
  }
}
.searchHistory {
  margin: 0.5rem 0.2rem 0.2rem;
  display: flex;
  align-items: center;
  .historyLeft {
    width: 90%;
    .history {
      font-weight: 600;
      margin-right: 0.2rem;
    }
    .historyName {
      font-size: 0.24rem;
      padding: 0.07rem 0.09rem;
      background-color: rgb(191, 191, 191);
      border-radius: 0.2rem;
      margin: 0 0.08rem 0.18rem;
      display: inline-block;
    }
  }
  .icon-icon {
    font-size: 0.4rem;
  }
}
.music {
  padding: 0.2rem;
  .singleMusic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    padding: 0.1rem;
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
        .name {
          font-weight: 700;
          font-size: 0.3rem;
          margin-bottom: 0.1rem;
        }
        .anthor {
          font-size: 0.24rem;
          color: rgb(173, 169, 169);
        }
      }
    }
    .musicright {
      .iconfont {
        font-size: 0.4rem;
        color: rgb(151, 149, 149);
      }
      .icon-31liebiao {
        margin-left: 0.2rem;
      }
    }
  }
}
</style>
