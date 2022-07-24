<template>
  <TopNav />
  <SwpierTopVue />
  <iconList />
  <MusicList />
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
import SwpierTopVue from '@/components/home/SwpierTop.vue'
import iconList from '@/components/home/iconList.vue'
import MusicList from '@/components/home/MusicList.vue'

export default {
  name: 'HomeView',
  components: {
    TopNav,SwpierTopVue,iconList,MusicList
  }
}
</script>
