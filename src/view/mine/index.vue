<template>
  <div>
    <!-- 头像 -->
    <div>
      <p class="dr_avatar">
        <van-image width="100" height="100" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
      </p>
      <p class="dr_name">{{userInfo.name}}</p>
    </div>
    <!-- 资产 -->
    <div class="dr_assert">
      <van-grid :column-num="2">
        <!-- <van-grid-item icon="like-o" text="我的收藏" is-link to="my-collect" /> -->
        <van-grid-item icon="coupon-o" text="优惠券" is-link to="my-coupon" />
        <van-grid-item icon="balance-pay" text="我的钱包" is-link to="my-wallet" />
      </van-grid>
    </div>
    <!-- 箭头 -->
    <!-- <div class="dr_others">
      <van-cell title="我的地址" is-link to="my-address"/>
      <van-cell title="关于我们" is-link to="about-us" />
      <van-cell title="常见问题" is-link to="issues" />
      <van-cell title="设置" is-link to="setting" />
      <van-cell title="售后服务" is-link to="after-service" />
    </div>-->
    <div class="user_menu">
      <ul>
        <li>
          <a href="/#/charge">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_1.png" alt />
            <p>特惠充值</p>
          </a>
        </li>
        <!-- <li>
          <a href="/#/my-address">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_7.png" alt />
            <p>地址管理</p>
          </a>
        </li> -->
        <!-- <li>
          <a href="//w2.iyishengyuan.com/common_mall_index/1.html">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_4.png" alt />
            <p>健康商城</p>
          </a>
        </li> -->
        <!-- <li>
          <a href="//w2.iyishengyuan.com/common_user_collectList/1.html">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_6.png" alt />
            <p>我的关注</p>
          </a>
        </li>
        <li>
          <a href="//w2.iyishengyuan.com/common_expert_index/1.html">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_5.png" alt />
            <p>健康管理</p>
          </a>
        </li> -->
        <li>
          <a href="tel:4006168080">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_3.png" alt />
            <p>联系客服</p>
          </a>
        </li>
        <li>
          <a href="//w2.iyishengyuan.com/index_h5.html?type=5">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_4.png" alt />
            <p>服务范围</p>
          </a>
        </li>
        <li>
          <a href="//w2.iyishengyuan.com/index_h5.html?type=6">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_2.png" alt />
            <p>用户协议</p>
          </a>
        </li>
        <li>
          <a href="//w2.iyishengyuan.com/common_share_appshare/1.html">
            <img src="http://w2.iyishengyuan.com/wechath5/img/menu_9.png" alt />
            <p>邀请有礼</p>
            <i class="new_icon"></i>
          </a>
        </li>
        <div style="clear: both;"></div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    }
  },
  mounted() {
    const self = this;
    this.$http.get(this.$api.Mine.GetUserInfo, null, true)
    .then(res => {
      console.log(res);
      const resultData = res.data;
      if (resultData.code == 0) {
        self.$store.commit("loadUserInfo", resultData.data);
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.dr_avatar {
  vertical-align: middle;
  padding: 10px;
  position: relative;
  height: 100px;
  text-align: center;
  margin: 10px;
}
.dr_name {
  vertical-align: middle;
  padding: 10px;
  text-align: center;
  margin: 5px;
}
.dr_others {
  margin-top: 20px;
}
.dr_assert {
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 20px;
}
.user_menu {
  margin-top: 10px;
  background: #fff;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  color: rgba(51,51,51,1);
  padding-top: 10px;
  li {
    float: left;
    width: 33%;
    list-style: none;
    text-align: center;
    padding: 5px;
    margin-bottom: 10px;
    a {
      display: inline-block;
      position: relative;
      color: inherit;
      width: 100%;
      height: 100%;
      text-decoration: none;
    }
    img {
      width: 40px;
      height: 40px;
      vertical-align: top;
      display: inline-block;
    }
    p {
      margin-top: 5px;
    }
  }
}
</style>
