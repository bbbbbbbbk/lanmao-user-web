<template>
  <div class="mm">
    <div class="order-status">
      <img src="../../assets/pay_success.png" alt />
      <p>支付成功</p>
      <p>请静候懒猫到家的服务</p>
      <p @click="goOrder">查看订单</p>
    </div>
    <div class="order-q">
        <p>感谢您对懒猫服务品质的监督，邀请您协助抽查以下内容：技师首次为您服务，有没有主动向您进行自我介绍？服务结束24小时内在评价页面反馈得28元红包~</p>
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
  methods: {
      goOrder() {
          this.$router.push({
              path: '/my-order'
          })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"scoped>
.mm {
    margin: 5px;
    .order-status {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #fff;
        padding: 10px;
        margin: 10px;
        font-size: 15px;
        >img {
            width: 73px;
            height: 92px;
        }
        >p:nth-child(2) {
            margin-top: 10px;
        }
        >p:nth-child(3) {
            margin-top: 10px;
        }
        >p:nth-child(4) {
            background: rgba(102,199,42,1);
            line-height: 25px;
            font-size: 18px;
            color: #fff;
            border-radius: 20px;
            width: 220px;
            height: 28px;
            text-align: center;
            margin-top: 10px;
        }
    } 
    .order-q {
        background: #fff;
        padding: 10px;
        margin: 10px;
        >p {
            color: #FF6633 !important;
            text-align: center;
            font-size: 13px;
        }
    }
}
</style>
