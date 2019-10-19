<template>
  <div>
    <div>
        <router-view />
    </div>
    <van-tabbar route v-model="active">
      <van-tabbar-item replace to="/main" icon="search">首页</van-tabbar-item>
      <van-tabbar-item replace to="/book" icon="home-o">预约</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      list: [],
      loading: false,
      finished: false
    };
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  },

  /**
     * tab栏的切换
     */
    change () {
      if (this.active === 0) {
        this.$router.push({
          path: '/main',
          replace: true
        })
      } else if (this.active === 1) {
        this.$router.push({
          path: '/book',
          replace: true
        })
      }
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
