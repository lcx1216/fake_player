<template>
  <div class="infoView">
    <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
    <div class="info">
      <div class="img">
        <img :src="user.data.profile.avatarUrl" alt="" />
      </div>
      <div class="nickname">{{ user.data.profile.nickname }}</div>
    </div>
    <div class="back"></div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    console.log(this.user);
  },
};
</script>
<style lang="less">
.infoView {
    height: 6rem;
  position: relative;
  .icon-zuojiantou{
    padding: .2rem;
    font-size: .5rem;
  }
  .info {
    position: absolute;
    top: 60px;
    left: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img {
      width: 1rem;
      height: 1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .nickname {
      margin-top: 0.2rem;
      font-size: 0.35rem;
      font-weight: 600;
    }
  }
  .back {
    width: 7rem;
    height: 2.5rem;
    background-color: rgb(228, 226, 226);
    border-radius: 0.4rem;
    margin-top: 1.5rem;
    margin-left: 0.25rem;
  }
}
</style>
