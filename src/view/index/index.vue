<template>
  <div>
    <div>
        <router-view />
    </div>
    <van-tabbar route v-model="active" safe-area-inset-bottom>
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

  methods: {

  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe-container {
  width: 100%;
  height: 240px;
}
</style>
