<template>
  <div class="main">
    <!-- 首页 -->
    <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img fit="cover" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="dr_grid">
        <van-grid :column-num="3">
          <van-grid-item icon="photo-o" text="服务项目" is-link to="book" />
          <van-grid-item icon="photo-o" text="预约技师" is-link to="mech" />
          <van-grid-item icon="photo-o" text="领券中心" is-link to="coupon-center" />
        </van-grid>
      </div>
      <div class="main_list">
        <h5>-- 推荐项目 --</h5>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div v-for="item in list" :key="item" :title="item" class="dr_cell" @click="goProduct">
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
    <!-- 优惠券弹出 -->
    <van-popup v-model="show" closeable>
      <div class="yhj_tancon">
        <h4>领取优惠券</h4>
        <div class="pp">
          <ul class="fix">
            <li class="fix">
              <a href="javascript:;">
                <div class="w_l fl">
                  <h3 class="txtdot">￥10</h3>
                  <p class="txtdot">满200使用</p>
                  <p class="txtdot"></p>
                </div>
                <span class="w_r fl">
                  <h5 class="txtdot">立即领取</h5>
                </span>
              </a>
            </li>
            <li class="fix">
              <a href="javascript:;">
                <div class="w_l fl">
                  <h3 class="txtdot">￥10</h3>
                  <p class="txtdot">满200使用</p>
                  <p class="txtdot"></p>
                </div>
                <span class="w_r fl">
                  <h5 class="txtdot">立即领取</h5>
                </span>
              </a>
            </li>
            <li class="fix">
              <a href="javascript:;">
                <div class="w_l fl">
                  <h3 class="txtdot">￥10</h3>
                  <p class="txtdot">满200使用</p>
                  <p class="txtdot"></p>
                </div>
                <span class="w_r fl">
                  <h5 class="txtdot">立即领取</h5>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import utils from '../../utils';

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
      show: true
    };
  },
  mounted() {
    console.log(utils.getUrlKey('code'));
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
.main {
  width: 100%;
  height: 100%;
}
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
.yhj_tancon {
  width: 296px;
  height: 263px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 13px;
}
.yhj_tancon h4 {
  text-align: center;
  color: #333;
  font-size: 1.4em;
  line-height: 1.6em;
}
.yhj_tancon .pp li {
  background: #ef3b38;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
}
.yhj_tancon .pp li .w_l {
  width: calc(100% - 90px);
  border-right: 1px dashed #fff;
  padding: 5px 8px;
}
.yhj_tancon .pp li .w_r {
  width: 90px;
  height: 100%;
  padding: 5px;
}
.yhj_tancon .pp li .w_r h5 {
  text-align: center;
  display: block;
  color: #fff;
  height: 100%;
  font-size: 1.1em;
  line-height: 3.6em;
}
.yhj_tancon .pp {
  padding: 10px;
}
.yhj_tancon li h3 {
  font-size: 1.4em;
  color: #fff;
  line-height: 1.8em;
}
.yhj_tancon li p {
  font-size: 1em;
  color: #fff;
  line-height: 1.4em;
}
.van-popup--center {
  border-radius: 10px;
}
.van-popup__close-icon {
  top: 5px;
}
.main_list {
  margin-bottom: 48px;
}
.main_list h5 {
  text-align: center;
  font-size: 1.4em;
}
</style>
