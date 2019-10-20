<template>
  <div>
    <!-- 首页 -->
    <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img fit="cover" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="dr_grid">
        <van-grid :column-num="2">
          <van-grid-item icon="photo-o" text="服务项目" is-link to="product"/>
          <van-grid-item icon="photo-o" text="预约技师" is-link to="mech"/>
        </van-grid>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="item in list" :key="item" :title="item" class="dr_cell" @click="goProduct">
          <!-- 左边图片-->
          <div class="pic">
            <img src="https://www.33oncall.com/upload/goods/20190704/6a44dac1e138f45c5b59fc4d6334246e.jpg" alt=""/>
          </div>
          <!-- 右边文字 -->
          <div class="dr_right">
            <h4>上品全身经络推油</h4>
            <h5>
              <span>总订单数: 61</span>
              <span>好评: 90%</span>
            </h5>
            <p class="txtdot">接单时间: 0:00～24:00 全天</p>
            <h6 class="txtdot">价格：<font>￥399.00/100分钟</font></h6>
          </div>
        </div>
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
    },

    goProduct() {
      this.$router.push({
        path: "/product-detail"
      });
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
.dr_grid {
  margin-top: 10px;
  margin-bottom: 10px;
}
.dr_cell {
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
  background-color: #fff;
  padding: 5px;
}
.pic {
  /* float: left; */
  display: block;
  margin-left: 10px;
}
.pic img {
  width: 140px;
  height: 80px;
}
.dr_right {
  margin-left: 10px;
}
.dr_right h4 {
  font-size: 1.2em;
}
.dr_right h5 span {
  color: #999;
  font-size: .6em;
}
.dr_right h5 span:first-child {
  margin-right: 20px;
}
.dr_right h6 {
  font-size: .6em;
  color: #999;
}
.txtdot {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
