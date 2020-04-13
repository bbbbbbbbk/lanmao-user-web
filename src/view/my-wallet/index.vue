<template>
  <div>
    <div class="my_account">
      <p>余额（元）</p>
      <p>{{balance}}</p>
      <p>
        <span @click="goCharge">充值</span>
      </p>
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
    this.$Progress.start();
    this.$http.get(this.$api.MyWallet.GetBalance, {}, true)
    .then(res => {
      const resultData = res.data;
      self.$Progress.finish();
      if (resultData.code == 0) {
        self.balance = resultData.data;
      }
    });
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

<style lang="scss" scoped>
.my_account {
  background: linear-gradient(148deg,rgba(255,168,33,1),rgba(255,100,33,1));
  color: #fff;
  border-radius: 10px;
  padding: 10px 10px 10px 20px;
  margin: 10px;
  >p:nth-child(1) {
    font-size: 15px;
    margin-top: 20px;
  }
  >p:nth-child(2) {
    font-size: 20px;
    margin-top: 20px;
  }
  >p:nth-child(3) {
    display: flex;
    justify-content: flex-end;
    >span {
      background: rgba(255,175,50,1);
      font-size: 16px;
      width: 60px;
      text-align: center;
      border-radius: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
