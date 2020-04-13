<template>
  <div class="main">
    <!-- 首页 -->
    <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img fit="cover" v-lazy="banner.imageUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="main_menu">
        <ul>
          <li>
            <a href="/#/book">
              <img
                src="https://mcdn.yishengdaojia.cn/upload/20190815/06a5161b4fd38d4e09cb1e1f88dab6ef.png"
              />
              <span>服务项目</span>
            </a>
          </li>
          <li>
            <a href="/#/charge">
              <img
                src="https://mcdn.yishengdaojia.cn/upload/20190815/a956bce9c3f70b3defa1a141e10ce966.png"
              />
              <span>特惠充值</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- <div class="dr_grid">
        <van-grid :column-num="3">
          <van-grid-item icon="photo-o" text="服务项目" is-link to="book" />
          <van-grid-item icon="photo-o" text="预约技师" is-link to="mech" />
          <van-grid-item icon="photo-o" text="领券中心" is-link to="coupon-center" />
        </van-grid>
      </div>-->
      <div class="main_list">
        <h5>-- 推荐门店 --</h5>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div
            v-for="item in list"
            :key="item.id"
            :title="item"
            class="dr_cell"
          >
            <!-- 左边图片-->
            <div class="pic">
              <img :src="item.logo" alt />
            </div>
            <!-- 右边文字 -->
            <div class="dr_right">
              <h4>{{item.name}}</h4>
              <h5>
                <span>总订单数: 61</span>
                <span>好评: 90%</span>
              </h5>
              <p class="txtdot">接单时间: 10:00～23:00 全天</p>
              <h6 class="txtdot">
                价格：
                <font>￥{{item.sellPrice}}/{{item.duration}}分钟</font>
                <button class="book" @click.stop="goBook(item)">预定</button>
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
import utils from "../../utils";

export default {
  data() {
    return {
      active: 0,
      banners: [],
      list: [],
      loading: false,
      finished: false,
      show: false,
      pageParams: {
        page: 1,
        pageSize: 10,
        params: {
          isRec: "Y"
        }
      }
    };
  },
  mounted() {
    this.getUserInfo();
    console.log(utils.getUrlKey("code"));
    var code = utils.getUrlKey("code");
    if (code) {
      //拿到了code
      this.$http.get(this.$api.Mine.GetOpenId,
          {
            params: {
              code: code
            }
          },
          true
        )
        .then(res => {
          const resData = res.data;
          if (resData.code == 0 && resData.data.openid) {
            utils.setItem("openId", resData.data.openid);
          }
        });
    } else {
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx648f6696cf60ebf0&redirect_uri=http://user.weizispa.com&response_type=code&scope=snsapi_base&state=0#wechat_redirect';
    }
    this.queryBanners();
  },

  methods: {
    getUserInfo() {
      const self = this;
      this.$http.get(this.$api.Mine.GetUserInfo, null, true)
      .then(res => {
        console.log(res);
        const resultData = res.data;
        if (resultData.code == 0) {
          self.$store.commit("loadUserInfo", resultData.data);
        }
      });
    },
    onLoad() {
      // 异步更新数据
      this.getShops();
    },
    queryBanners() {
      var self = this;
      this.$http
        .get(this.$api.Index.QueryBanners, {}, false)
        .then(res => {
          var resData = res.data;
          if (resData.code === 0) {
            self.banners = resData.data;
          }
        })
    },
    goShopDetail(shop) {
      this.$router.push({
        path: "/shop-detail",
        query: {
          shopId: shop.id
        }
      });
    },
    goBook(shop) {
      this.$store.commit("initState");
      this.$router.push({
        path: "/appoint",
        query: {
          shopId: shop.id 
        }
      });
    },
    getShops() {
      this.loading = true;
      var self = this;
      this.$http
        .post(this.$api.Shop.List, self.pageParams, false)
        .then(res => {
          self.loading = false;
          var resData = res.data;
          if (resData.code == 0) {
            self.list = resData.data;
            // self.list = self.list.concat(data.list);
            // var totalCount = data.totalCount;
            self.finished = true;
            // if (totalCount <= self.pageParams.page * self.pageParams.pageSize) {
            //   //加载完了
            //   self.finished = true;
            // } else {
            //   //还有下一页
            //   self.pageParams.page++;
            // }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
}
.swipe-container {
  width: 100%;
  height: 180px;
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
  width: 110px;
  height: 80px;
}
.dr_right {
  margin-left: 10px;
  font-size: 10px;
  > h5:nth-child(1) {
    text-align: left;
  }
  > h5 {
    >span{

    }
  }
  >h4 {
    font-size: 1.2em;
  }
  .book {
    position: relative;
    margin-left: 50px;
    float: right;
    display: inline-block;
    background-color: #e64340;
    padding: 5px 10px 5px 10px;
    color: #fff;
    padding: 10px;
  }
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
  > h5:nth-child(1) {
    text-align: center;
    font-size: 1.4em;
  }
}
.main_menu {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  height: 80px;
  > ul {
    color: #333333;
    > li {
      list-style: none;
      float: left;
      width: 50%;
      text-align: center;
      a {
        color: inherit;
        text-align: center;
        display: inline-block;
      }
      img {
        height: 40px;
        width: 40px;
        vertical-align: top;
      }
    }
  }
}
</style>
