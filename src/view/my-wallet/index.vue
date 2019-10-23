<template>
  <div>
    <div class="dr_container">
      <p>账户余额(元)</p>
      <p>¥{{balance}}</p>
    </div>
    <div class="dr_button">
      <van-button type="default" block color="#fc524f" @click="goCharge">充值</van-button>
      <!-- <van-button type="default" block color="#fc524f" @click="goCharge">交易记录</van-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      balance: null
    };
  },
  mounted() {
    const self = this;
    this.$http.get(this.$api.MyWallet.GetBalance, {}, false)
    .then(res => {
      const resultData = res.data;
      if (resultData.code == 0) {
        self.balance = resultData.data;
      }
    })
  },
  methods: {
    goCharge() {
      this.$router.push({
        path: "/charge"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dr_button {
}

.dr_container {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 20px;
}
.dr_container p {
  margin: 10px;
}
</style>
