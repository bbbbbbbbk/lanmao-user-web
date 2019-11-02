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
      <van-tabs v-model="active">
        <van-tab title="服务项目">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="(product, index) in list" class="pro_info_con">
              <div class="pro_img">
                <img :src="product.imageUrl" alt />
              </div>
              <div class="pro_info">
                <p>{{product.name}}</p>
                <p>放松全身解除慢性疲劳</p>
                <p>
                  <span>
                    <i></i>
                    <span>{{product.duration}}分钟</span>
                  </span>
                  <span></span>
                </p>
                <p>
                  <span>¥{{product.sellPrice}}</span>
                  <span @click="goAppoint(product)">预约</span>
                </p>
              </div>
            </div>
          </van-list>
        </van-tab>
        <van-tab title="顾客评价"></van-tab>
        <van-tab title="资格认证"></van-tab>
      </van-tabs>
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
  mounted() {},
  methods: {
    onLoad() {
      console.log(this.$route.query);
      var id = this.$route.query.id;
      var self = this;
      var params = {
        id: id
      };
      this.$http.post(this.$api.Mech.SelectProduct, params, false).then(res => {
        var resData = res.data;
        self.loading = false;
        self.finished = true;
        if (resData.code == 0) {
          var data = resData.data;
          self.list = data;
        }
      });
    },

    goProduct() {
      this.$router.push({
        path: "/product-detail"
      });
    },
    goAppoint(product) {
      var mechId = this.$route.query.id;
      var productId = product.id;
      this.$router.push({
        path: "/appoint",
        query: {
          productId: productId,
          mechId: mechId
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  .pro_info_con {
    display: flex;
    padding: 5px 10px 5px 10px;
    margin-bottom: 10px;
    background: #fff;
    .pro_img {
      width: 100px;
      height: 100px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .pro_info {
    width: calc(100% - 110px);
    margin-left: 10px;
    background: #fff;
    >p:nth-child(1) {
      font-size: 15px;
      margin-top: 5px;
    }
    >p:nth-child(2) {
      margin-top: 2px;
    }
    >p:nth-child(3) {
      font-size: 12px;
      color: rgba(153,153,153,1);
      margin-top: 2px;
      >span:nth-child(1) {
        >i {
          width: 9px;
          height: 9px;
          display: inline-block;
          background: url(../../assets/url.png) no-repeat;
          background-size: 100%;
          position: relative;
          margin-right: 10px;
        }
      }
    }
    >p:nth-child(4) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      >span:nth-child(1) {
        font-size: 14px;
        color: rgba(255,102,51,1);
      }
      >span:nth-child(2) {
        background: rgba(102,199,42,1) !important;
        color: #fff;
        font-size: 13px;
        border-radius: 15px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
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
