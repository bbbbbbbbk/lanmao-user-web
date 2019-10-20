<template>
  <div>
    <!-- 头像 -->
    <div>
      <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />你好
    </div>
    <!-- 资产 -->
    <div>
      <van-grid :column-num="3">
        <van-grid-item icon="like-o" text="我的收藏" is-link to="my-collect"/>
        <van-grid-item icon="coupon-o" text="优惠券" is-link to="my-coupon"/>
        <van-grid-item icon="balance-pay" text="我的钱包" />
      </van-grid>
    </div>
    <!-- 箭头 -->
    <div>
      <van-cell title="我的订单" is-link to="my-order" />
      <van-cell title="我的地址" is-link to="my-address"/>
      <van-cell title="关于我们" is-link to="about-us" />
      <van-cell title="常见问题" is-link to="issues" />
      <van-cell title="设置" is-link to="setting" />
      <van-cell title="售后服务" is-link to="after-service" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  margin: 0 auto;
}
</style>
