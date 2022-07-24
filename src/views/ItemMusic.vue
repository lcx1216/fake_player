<template>
  <ItemMusicTop :playlist="state.playlist" />
  <ItemMusicList
    :musicList="state.musicList"
    :subscribedCount="state.playlist.subscribedCount"
  />
</template>
<script>
//获取路由参数
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getItemmusic, getMusicList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/ItemMusic/ItemMusicTop.vue";
import ItemMusicList from "@/components/ItemMusic/ItemMusicList.vue";

export default {
  components: {
    ItemMusicTop,
    ItemMusicList,
  },
  setup() {
    const state = reactive({
      playlist: {}, //歌单top数据
      musicList: [], // 歌单歌曲列表
    });

    onMounted(async () => {
      // 路由拿到页面的id
      let id = useRoute().query.id;
      // console.log(id);
      // 获取页面top的数据
      let res = await getItemmusic(id);
      state.playlist = res.data.playlist;
      let result = await getMusicList(id);
      state.musicList = result.data.songs;
      // console.log(res);
      // 如果数据丢失，将数据存储到sessionStorage中
      sessionStorage.setItem("itemDetail", JSON.stringify(state));
    });
    return { state };
  },
};
</script>
