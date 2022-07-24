import { createStore } from "vuex";
import { getMusicLyric } from "@/request/api/item.js";
import { getLoginData } from '@/request/api/home.js'

export default createStore({
  state: {
    playList: [
      //播放列表
      {
        al: {
          id: 495165,
          pic: 5969248627378980,
          picUrl:
            "https://p2.music.126.net/sFaDJLA1YZtp1rhHFwgjsA==/5969248627378980.jpg",
        },
        name: "青空アスレチック",
        id: 4960496,
        ar: [
          {
            name: "横田真人",
          },
        ],
      },
    ],
    musicIndex: 0, //播放列表下标
    isbtnShow: true, //播放按钮显示
    isDetailShow: false, //歌曲详情页显示
    lyricList:{}, //歌词
    currentTime:0,//当前歌词时间
    duration:0,//歌曲总时长
    isLogin:false,//是否登录，默认未登录
    isFootershow:true,//底部是否展示
    token:'',//登录后显示的token值
    user:{} //用户信息
  },
  getters: {},
  mutations: {
    playChange: function (state, value) {//是否播放
      state.isbtnShow = value;
    },
    updateMusicList: function (state, value) {
      state.playList = value;
      console.log(state.playList);
    },
    pushPlayList:function(state, value) {
      state.playList.push(value)
    },
    updateMusicListIndex: function (state, value) {
      state.musicIndex = value;
    },
    updateDetailshow: function (state) {//歌词详情页显示
      state.isDetailShow = !state.isDetailShow;
    },
    updateLyriclist: function(state,value){//歌词更改
      state.lyricList = value
    },
    updateTime:function(state, value){
      console.log(state.currentTime);
      state.currentTime = value
    },
    updateDuration:function(state, value) {
      state.duration = value
    },
    updateIsLogin:function(state, value) {
      state.isLogin = value
    },
    updateToken:function(state,value){
      state.token = value
      localStorage.setItem('token',state.token)
    },
    updateUser:function(state,value) {
      state.user = value
    }
  },
  actions: {
    getLyric: async function (context, value) {
      let res = await getMusicLyric(value);
      console.log(res);
      context.commit("updateLyriclist",res.data.lrc)
    },
    getLogin: async function(context, value) {
      let res = await getLoginData(value)
      // console.log(res);
      return res
    }
  },
  modules: {},
});
