<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="item in list" :key="item" @click="goDetail(item)" class="dr_cell">
        <!-- 左边 -->
        <div class="dr_wl fl">
          <van-image width="60" height="60" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <h5>在线接单中</h5>
        </div>

        <!-- 右边 -->
        <div class="dr_wr fl">
          <!-- 上边 -->
          <div>
            <span class="m_name">{{item.name}}</span>
            <span class="w_dz fr">1043km</span>
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
          <h6>
            <span>湖南</span>
            <span>3年经验</span>
            <span>11单</span>
          </h6>
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
      value: 3,
      pageParams: {
        page: 1,
        pageSize: 10,
        params: {

        }
      }
    };
  },
  mounted() {

  },
  methods: {
    onLoad() {
      this.getMech();
    },
    getMech() {
      var self = this;
      self.loading = true;
      this.$http.post(this.$api.Mech.List, this.pageParams, false)
      .then(res => {
        var resData = res.data;
        self.loading = false;
        if (resData.code == 0) {
          var data = resData.data;
          self.list = self.list.concat(data.list);
          var totalCount = data.totalCount;
          if (totalCount <= self.pageParams.page * self.pageParams.pageSize) {
            self.finished = true;
          } else {
            self.pageParams.page++;
          }
        }
      })
    },
    goDetail(item) {
      this.$router.push({
        path: "/mech-detail",
        query: {
          id: item.id
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dr_wl {
  width: 60px;
  height: 100%;
  padding-top: 10px;
}
.dr_wr {
  width: calc(100% - 60px);
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
  color: #1479e6;
  font-size: 1em;
  line-height: 1.8em;
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
.w_dz {
  color: #999;
  background: url(../../assets/icon1.png) no-repeat left center;
  background-size: 10px 14px;
  padding-left: 15px;
}
.m_name {
  color: #333;
  background: url(../../assets/women_icon.png) no-repeat right center;
  background-size: 10px 10px;
  padding-right: 12px;
  font-size: 1.2em;
}
.dr_wr h6 span {
  margin-right: 20px;
  color: #999;
  font-size: .8em;
}
</style>
