<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="item in list" :key="item" @click="goDetail" class="dr_cell">
        <!-- 左边 -->
        <div class="dr_wl fl">
          <van-image width="80" height="80" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <h5>在线接单中</h5>
        </div>

        <!-- 右边 -->
        <div class="dr_wr fl">
          <!-- 上边 -->
          <div>
            <span>小雪</span>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          </div>
          <!-- 中间 -->
          <div class="w_job_c">
            <span class="w_job fl">保健按摩师</span>
            <van-rate v-model="value" class="fr" :size="10" />
          </div>
          <p>
            我叫小雪 湖南人 常住龙岗区横岗地铁站附近 ，
            从事按摩推拿推油养生行业已经4年了，我非常热爱我这份工作，
            擅长中泰式按摩推拿推油和各种经典组合spa，
            严格要求自己服务好每一位亲爱的客户，您今天的满意是我最大的收获！
          </p>
          <!-- 下边 -->
          <div>湖南 3年经验 11单</div>
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
.dr_wl {
  width: 80px;
}
.dr_wr {
  width: calc(100% - 80px);
  padding-left: 10px;
  padding-top: 10px;
}
.dr_cell {
  width: 100%;
  height: 120px;
  padding: 5px;
  margin-bottom: 5px;
  background: #fff;
}
.dr_wl h5 {
  text-align: center;
}
.w_job {
  width: auto;
  text-align: center;
  color: #e60012;
  border: 1px solid #e60012;
  padding: 2px 8px 2px 8px;
  border-radius: 10px;
}
.w_job_c {
  height: 24px;
}
.dr_wr p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
