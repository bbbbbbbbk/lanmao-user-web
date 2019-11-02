<template>
  <div>
    <!-- main -->
    <div class="main">
      <!-- 技师资料 -->
      <div class="dr_cell">
        <!-- 左边 -->
        <div class="dr_wl fl">
          <van-image width="60" height="60" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <h5>在线接单中</h5>
        </div>

        <!-- 右边 -->
        <div class="dr_wr fl">
          <!-- 上边 -->
          <div>
            <span class="m_name">小雪</span>
            <span class="w_dz fr">1043km</span>
          </div>
          <!-- 中间 -->
          <div class="w_job_c">
            <span class="w_job fl">保健按摩师</span>
            <van-rate v-model="value" class="fr" :size="10" />
          </div>
          <!-- 下边 -->
          <h6>
            <span>湖南</span>
            <span>3年经验</span>
            <span>11单</span>
          </h6>
        </div>
      </div>
      <div class="js_desc1b">
				<p>热情，待人真诚，手法专业，喜欢交朋友，开拓眼界，</p>
			</div>
      <!-- 用户评价 -->
      <div class="js_desc3t">
				<h4 class="txtdot fix">用户评价
					<span class="conr fr">
						<a href="/supplier/index/comment/massage_id/1146.html">3人评论</a>
					</span>
				</h4>
			</div>
      <!-- 技师项目 -->
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div v-for="item in list" :key="item.id" :title="item" class="dr_cell" @click="goProduct">
          <!-- 左边图片-->
          <div class="pic">
            <img
              src="https://www.33oncall.com/upload/goods/20190704/6a44dac1e138f45c5b59fc4d6334246e.jpg"
              alt
            />
          </div>
          <!-- 右边文字 -->
          <div class="dr_right">
            <h4>上品全身经络推油</h4>
            <h5>
              <span>总订单数: 61</span>
              <span>好评: 90%</span>
            </h5>
            <p class="txtdot">接单时间: 0:00～24:00 全天</p>
            <h6 class="txtdot">
              价格：
              <font>￥399.00/100分钟</font>
            </h6>
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
      finished: false,
      show: true,
      value: 3
    };
  },
  mounted() {

  },
  methods: {
    onLoad() {
      console.log(this.$route.query)
      var id = this.$route.query.id;
      var self = this;
      var params = {
        id: id
      }
      this.$http.post(this.$api.Mech.SelectProduct, params, false) 
      .then(res => {
        var resData = res.data;
        self.loading = false;
        self.finished = true;
        if (resData.code == 0) {
          var data = resData.data;
          self.list = data;
        }
      })
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
body {
  background: chocolate;
}
.main {
  width: 100%;
  height: 100%;
  background: #999;
}
.footer {
  width: 100%;
  height: 45px;
  background: #fc514e;
  position: fixed;
  bottom: 0;
  z-index: 101;
}
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
  font-size: 0.8em;
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
  font-size: 0.6em;
}
.dr_right h5 span:first-child {
  margin-right: 20px;
}
.dr_right h6 {
  font-size: 0.6em;
  color: #999;
}
.txtdot {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
