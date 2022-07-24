<template>
  <router-view/>
  <FooterMusic v-show="$store.state.isFootershow"/> 
  <!-- 底部是否显示 使用了路由守卫 -->
</template>

<script>
import FooterMusic from './components/ItemMusic/FooterMusic.vue'
export default {
  components: {
    FooterMusic,
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
a{
  color: black;
}
</style>
