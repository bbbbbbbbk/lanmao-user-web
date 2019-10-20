<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="item in list" :key="item" @click="goDetail">
        <!-- 左边 -->
      <div>
        <van-image width="80" height="80" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        在线接单中
      </div>

      <!-- 右边 -->
      <div>
        <!-- 上边 -->
        <div>
          小雪 <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
        </div>
        <!-- 中间 -->
        <div>
          <van-rate v-model="value" />
        </div>
        <!-- 下边 -->
        <div>
          湖南  3年经验   11单
        </div>
      </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      list: [],
      loading: false,
      finished: false,
      value: 3
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
    },

    goDetail() {
      this.$router.push({
        path: "/mech-detail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  margin: 0 auto;
}
</style>
