<template>
  <div>
    <div class="mall_title">
      <i></i>
      <span>健康商城</span>
      <i></i>
    </div>
    <div class="mall_con">
      <div class="mall_li" v-for="good in goods" :key="good" @click="goDetail(good)">
        <div class="goods_img">
          <img
            src="https://mcdn.yishengdaojia.cn/upload/20200221/f0ea9637bc9d33f6310d085fd5298a30.jpg"
            alt
          />
        </div>
        <div class="goods_info">
          <p>麦冬桑叶菊花陈皮茶饮</p>
          <p>
            <span>58元</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      goods: [1, 2, 3, 4, 5, 7, 8, 9]
    };
  },
  mounted() {},
  methods: {
    goDetail(good) {
      this.$router.push({
        path: "/mall-detail"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mall_title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 10px;
  i {
    display: inline-block;
    width: 6px;
    height: 10px;
    background: url("../../assets/shop_12.png") no-repeat;
    background-size: 100% 100%;
  }
  span {
    color: rgba(50, 50, 50, 1);
    font-size: 16px;
    margin: 0 10px;
  }
}
.mall_con {
  margin-top: 10px;
  .mall_li {
    width: 160px;
    float: left;
    margin-left: 15px;
    margin-bottom: 10px;
    .goods_img {
      width: 100%;
      height: 160px;
      background: rgba(247, 247, 248, 1);
      border-radius: 0.08rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .goods_info {
      margin-top: 10px;
      p {
        width: 100%;
        text-align: center;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        span {
          color: rgba(245, 64, 41, 1);
        }
      }
    }
  }
}
</style>
