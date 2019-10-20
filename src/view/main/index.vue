<template>
  <div>
    <!-- 首页 -->
    <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img fit="cover" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div>
        <van-grid :column-num="2">
          <van-grid-item icon="photo-o" text="服务项目" />
          <van-grid-item icon="photo-o" text="预约技师" />
        </van-grid>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </div>
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
