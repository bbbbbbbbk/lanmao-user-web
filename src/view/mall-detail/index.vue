<template>
  <div>
    <van-swipe class="swipe-container">
      <van-swipe-item v-for="(banner, index) in banners" :key="index">
        <img fit="cover" v-lazy="banner.imageUrl" />
      </van-swipe-item>
    </van-swipe>
    <div class="goods_info bg_white">
      <p>麦冬桑叶菊花陈皮茶饮</p>
      <p>
        <!---->
        <!---->
        <span>58元</span>
      </p>
      <p>
        <span>每人限购100</span>
        <span>库存28</span>
      </p>
    </div>
    <div class="goods_desc bg_white">
      <p>商品详情</p>
      <div class="goods_desc_div">
        <p>
          规格：每袋共12小包，每包12克（±0.5g），独立包装。
          <br />原料与配料：麦冬 3g、桑叶 3g、菊花 3g、陈皮 2g。
          <br />使用方法：沸水冲泡。冲泡前应迅速过一下水以去杂质、除尘。茶具应选择带盖大口杯（最好是大口保温杯），沸水泡药10～30分钟即可代茶饮，每人每日一剂多次泡服至无味为止，效果最佳。
          <br />配方说明：依据“北京市中医管理局发布《北京市新型冠状病毒感染的肺炎防治方案（第二版）》 （2020年1月29日）第三条的第1项。
          <br />本产品快递费用为到付；
        </p>
      </div>
    </div>
    <div class="goods_pay bg_white">
      <p @click="goPay">商品购买</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      banners: [
        {
          imageUrl:
            "https://mcdn.yishengdaojia.cn/upload/20200224/60be38d9af85180ca61bc36d5144e95d.jpg"
        },
        {
          imageUrl:
            "https://mcdn.yishengdaojia.cn/upload/20200225/373c9df8ac7fe6b87e529382a10fb50e.jpg"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    goPay() {
      this.$router.push({
        path: "/mall-confirm"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swipe-container {
  width: 100%;
  height: 180px;
}
.goods_info {
  padding: 10px 10px;
  background: #ffff;
  > p:nth-child(1) {
    font-size: 18px;
    color: rgba(51, 51, 51, 1);
  }
  > p:nth-child(2) {
    font-size: 16px;
    color: rgba(245, 64, 41, 1);
    margin: 10px 0;
  }
  > p:nth-child(3) {
    font-size: 12px;
    color: rgba(153, 153, 153, 1);
    > span:nth-child(1) {
    }
    > span:nth-child(2) {
      float: right;
    }
  }
}
.goods_desc {
  margin-top: 10px;
  background: #ffff;
  padding: 10px 10px;
  p {
    color: rgba(102, 102, 102, 1);
    font-size: 15px;
  }
  .goods_desc_div {
    color: rgba(51, 51, 51, 1);
    white-space: pre-line;
    font-size: 15px;
  }
}
.goods_pay {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  p {
    background: rgba(102, 199, 42, 1);
    color: rgba(255, 255, 255, 1);
    width: 200px;
    height: 30px;
    font-size: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  }
}
.center-me {
  margin: 0 auto;
}
</style>
