<template>
  <div>
    <div class="wd_cz">
      <ul>
        <li class="fix">
          <span class="w_l fl txtdot">我的余额</span>
          <span class="w_r fl txtdot">￥{{balance}}</span>
        </li>
        <li class="fix">
          <span class="w_l fl txtdot">充值金额</span>
          <span class="w_r fl txtdot">
            <div v-for="item in moneyList" :key="item.id" class="dr_bb" @click="choose(item)">
              <label :class="item == choosePackage ? 'on' : ''">{{item.chargeAmount}}元</label>
              <label class="pp" :class="item == choosePackage ? 'on' : ''">{{item.packageName}}</label>
            </div>
          </span>
        </li>
      </ul>
    </div>
    <div class="pay_type">
      <p>支付方式</p>
      <div id="payType0" class="pay_icon_div">
        <p>
          <img src="../../assets/payicon-5.png" alt />
          <!---->
          <span>微信支付</span>
        </p>
        <div class="checked_btn">
          <img src="../../assets/checked.png" alt id="checked0" class="yes_checked" />
        </div>
      </div>
    </div>
    <div class="dr_button">
      <van-button type="default" block round color="#fc524f" @click="charge">确认充值</van-button>
      <p>点击立即充值, 即表示您已经同意</p>
      <p>
        <a href="/#/charge-agreement">充值协议</a>
      </p>
    </div>
  </div>
</template>

<script>
import utils from "../../utils";
export default {
  data() {
    return {
      checked: true,
      moneyList: [],
      choosePackage: {},
      bookData: null,
      balance: null
    };
  },
  mounted() {
    const self = this;
    this.$http.get(this.$api.Charge.GetPackages, {}, true).then(res => {
      const resultData = res.data;
      if (resultData.code == 0) {
        self.moneyList = resultData.data;
        if (self.moneyList.length > 0) {
          self.choosePackage = self.moneyList[0];
        }
      }
    });

    this.$Progress.start();
    this.$http.get(this.$api.MyWallet.GetBalance, {}, true).then(res => {
      const resultData = res.data;
      self.$Progress.finish();
      if (resultData.code == 0) {
        self.balance = resultData.data;
      }
    });
  },
  methods: {
    choose(item) {
      this.choosePackage = item;
    },
    charge() {
      var self = this;
      var openId = utils.getItem("openId");
      var requestParams = {};
      if (openId) {
        requestParams.openId = openId;
      }
      requestParams.packageId = this.choosePackage.id;
      requestParams.packageName = this.choosePackage.packageName;
      this.$http
        .post(this.$api.Charge.BookCharge, requestParams, true)
        .then(res => {
          var resData = res.data;
          if (resData.code == 0) {
            var data = resData.data;
            self.bookData = data;
            self.readyPay(data);
          }
        });
    },
    readyPay(payParams) {
      //发起微信支付
      var self = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: payParams.appId, //公众号名称，由商户传入
          timeStamp: payParams.timeStamp, //时间戳，自1970年以来的秒数
          nonceStr: payParams.nonceStr, //随机串
          package: payParams.package,
          signType: payParams.signType, //微信签名方式:
          paySign: payParams.paySign //微信签名
        },
        function(res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            self.$toast('充值成功');
            self.$Progress.start();
            self.$http
              .get(self.$api.MyWallet.GetBalance, {}, false)
              .then(res => {
                const resultData = res.data;
                self.$Progress.finish();
                if (resultData.code == 0) {
                  self.balance = resultData.data;
                }
              });
          }
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.wd_cz {
  margin-top: 20px;
  background: #fff;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}
.wd_cz ul {
  padding: 0 10px;
}
.wd_cz {
  > ul {
    > li:nth-child(1) {
      display: block;
      padding: 10px 0;
      border-bottom: 1px solid #f5f5f5;
    }
    > li:nth-child(2) {
      display: block;
      padding: 10px 0;
    }
  }
}
.wd_cz ul li span {
  display: block;
  font-size: 1.4em;
  color: #333;
  line-height: 1.6em;
}
.wd_cz li span.w_l {
  margin-right: 0.2rem;
}
.wd_cz li span.w_r label {
  border: 1px solid #ddd;
  text-align: center;
  line-height: 1.4em;
  font-size: 1.2em;
  color: #999;
  float: left;
  padding: 10px;
  width: 100%;
}
.wd_cz li span.w_r label.pp {
  font-size: 0.5em;
}
.txtpay {
  display: none;
}
.fix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
  font-size: 0;
  line-height: 0;
}
.wd_cz li span.w_r label.on {
  color: #fff;
  background: #1cbccc;
  border-color: #1cbccc;
}
.dr_button {
  margin: 10px;
  margin-top: 50px;
}
.dr_button p {
  text-align: center;
  margin-top: 10px;
}
.dr_bb {
  float: left;
  width: 120px;
  padding: 10px;
  text-align: center;
  margin-left: 40px;
}
.pay_type {
  background: #fff;
  margin: 10px;
  padding-left: 10px;
  border-radius: 10px;
  > p {
    color: rgba(103, 101, 101, 1);
    font-size: 14px;
    padding: 10px 0;
  }
  .pay_icon_div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    border-top: 1px solid #f5f5f5;
    > p {
      display: flex;
      align-items: center;
      > img {
        width: 20px;
        height: 18px;
      }
      > span {
        color: rgba(51, 51, 51, 1);
        font-size: 15px;
        margin-left: 10px;
      }
    }
    .checked_btn {
      margin-right: 10px;
      > img {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
