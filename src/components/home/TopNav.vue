<template>
  <div class="topNav">
    <div class="topLeft">
      <i class="iconfont icon-31liebiao"></i>
      </div>
    <div class="topContent">
      <span @click="$router.push('/peopleInfo')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <i class="iconfont icon-sousuo" @click="$router.push('/SearchView')"></i>
      </div>
  </div>
</template>

<style lang="less" scoped>
.topNav{
  // width: 100%;
  height: .8rem;
  padding: .1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topContent{
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: .34rem;
  }
  .active{
    font-weight: 900;
  }
}
.iconfont{
  margin: 0 .15rem;
  font-size: .4rem;
}
</style>