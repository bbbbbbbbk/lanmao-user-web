<template>
  <div>
    <div>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/main" icon="search">首页</van-tabbar-item>
      <van-tabbar-item replace to="/mech" icon="home-o">技师</van-tabbar-item>
      <van-tabbar-item replace to="/book" icon="home-o">预约</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },

  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  .van-tabbar {
    height: calc(50px + 10px);
    padding-bottom: 10px;
  }
}
</style>
