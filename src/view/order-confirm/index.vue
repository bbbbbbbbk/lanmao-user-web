<template>
  <div>
    <div class="order-address">
      <p class="order-user-info">
        <span>预约门店</span>
        <span>{{shop.name}}</span>
      </p>
      <div class="order_time">
        <span>预约时间</span>
        <p>
          <span>{{bookData.bookTime}}</span>
          <i></i>
        </p>
      </div>
    </div>
    <div class="order-guest" v-for="(guest,index) in bookData.guests" :key="guest.id">
      <p class="guest-p">
        <span>预约人{{index + 1}}:</span>
      </p>
      <div 
        class="order-project" >
        <div class="order-pro-info">
          <div>
            <p 
              :key="index" 
              v-for="(product, index) in guest.products">
              {{product.name}} x {{product.count}}
            </p>
          </div>
        </div>
      </div>
      <div 
        :key="index" 
        class="order_jishi_info" 
        v-for="(mech, index) in guest.mechList">
        <div class="jishi_li">
          <div class="jishi_con">
            <div class="jishi_head">
              <img :src="mech.avatar" alt />
              <i
                class="person-hot"
                style="width: 0.5rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190717/a72a8229f4e2c32fe24f48fd0d99b0af.png&quot;);"
              ></i>
            </div>
            <div class="jishi_info">
              <p class="jishi_juli"></p>
              <p class="jishi_name">
                <span>{{mech.name}}</span>
                <i
                  style="margin-left: 0.14rem; width: 0.99rem; height: 0.46rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190711/b62750402d0f59184fad0093868b0fe7.png&quot;);"
                ></i>
                <i
                  style="margin-left: 0.14rem; width: 0.81rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190727/a2190c9b93d1f848e7e74fa21fefa974.png&quot;);"
                ></i>
              </p>
              <p class="jishi_type">
                <span>中医</span>
                <span>5年经验</span>
              </p>
              <p class="jishi_pj">
                <span>好评率</span>
                <span class="jishi_pj_active">100%</span>
                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <span>累计服务</span>
                <span class="jishi_pj_active">1k</span>
                <span>次</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-msg">
      <span>备注</span>
      <input type="text" v-model="bookData.remark" placeholder="如有其它需要请留言" />
    </div>
    <div class="pay_type">
      <p>支付方式</p>
      <div id="payType0" class="pay_icon_div" @click="payType = 1">
        <p>
          <img src="../../assets//payicon-5.png" alt />
          <span>微信支付</span>
        </p>
        <div class="checked_btn">
          <img
            src="../../assets/no-checked.png"
            alt
            :class="payType == 1 ? 'no_checked' : 'yes_checked' "
          />
          <img
            src="../../assets/checked.png"
            alt
            :class="payType == 1 ? 'yes_checked' : 'no_checked' "
          />
        </div>
      </div>
      <div id="payType2" class="pay_icon_div" @click="payType = 3">
        <p>
          <img src="../../assets//payicon-5.png" alt />
          <span>余额支付</span>
        </p>
        <div class="checked_btn">
          <img
            src="../../assets/no-checked.png"
            alt
            :class="payType == 3 ? 'no_checked' : 'yes_checked' "
          />
          <img
            src="../../assets/checked.png"
            alt
            :class="payType == 3 ? 'yes_checked' : 'no_checked' "
          />
        </div>
      </div>
      <div id="payType3" class="pay_icon_div" @click="payType = 2">
        <p>
          <img src="../../assets//payicon-5.png" alt />
          <span>到店支付</span>
        </p>
        <div class="checked_btn">
          <img
            src="../../assets/no-checked.png"
            alt
            :class="payType == 2 ? 'no_checked' : 'yes_checked' "
          />
          <img
            src="../../assets/checked.png"
            alt
            :class="payType == 2 ? 'yes_checked' : 'no_checked' "
          />
        </div>
      </div>
    </div>
    <div class="pay-btn">
      <span>
        应付金额:
        <span>¥{{totalPrice}}</span>
      </span>
      <span @click="goPay">
        <a class="order_btn_now">立即支付</a>
      </span>
    </div>
    <van-popup
      v-model="showBalance"
      closeable
      round 
      :style="{ height: '30%' }">

    </van-popup>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      active: 0,
      payType: 1,
      showBalance: false,
      shop: {}
    };
  },
  computed: {
    address() {
      return this.$store.state.appointAddress;
    },
    bookData() {
      return this.$store.state.bookData;
    },
    totalPrice() {
      var guestList = this.$store.state.bookData.guests;
      var totalPrice = 0;
      for (let guest of guestList) {
        var productList = guest.products;
        for (let product of productList) {
          var count = product.count;
          while(count > 0) {
            totalPrice += product.sellPrice;
            count--;
          }
        }
      }
      return totalPrice;
    }
  },
  mounted() {
    var self = this;
    this.$http.get('/api/shop/detail', {'shopId': this.bookData.shopId}, true)
      .then(res => {
        var resData = res.data;
        if (resData.code == 0) {
          self.shop = resData.data;
        }
      });
  },
  methods: {
    goPay() {
      var self = this;
      if (this.payType == 3) {
        this.$http.get('/api/member/getBalance', {}, true)
          .then(res => {
            var resData = res.data;
            if (resData.code == 0) {
              var message = '当前余额: ' + resData.data + "元";
              Dialog.confirm({
                title: '确定余额支付?',
                message: message,
              })
              .then(() => {
                // on confirm
                self.saveAndPay();
              })
              .catch(() => {
                // on cancel
               });
            }
          });
        return;
      } else {
        self.saveAndPay();
      }
    },
    saveAndPay() {
      var self = this;
      var bookData = this.$store.state.bookData;
      bookData.orderType = this.payType;
      var guests = bookData.guests;
      guests.forEach(guest => {
        var productIds = [];
        var products = guest.products;
        products.forEach(product => {
          var count = product.count;
          while(count > 0) {
            productIds.push(product.id);
            count--;
          }
        });
        guest.productIds = productIds;
      });
      this.$http.post(this.$api.Appoint.Book, bookData, {}, true)
      .then(res => {
        var resData = res.data;
        if (resData.code == 0 && self.payType == 1) {
          self.payByWechat(resData.data);
        } else if (resData.code == 0 && self.payType == 2) {
          self.$router.push({
            path: '/order-pay-success',
            query: {
              orderId: resData.data.id
            }
          });
        } else if (resData.code == 0 && self.payType == 3) {
          self.payByDeposit(resData.data.id);
        }
      });
    },
    payByDeposit(orderId) {
      var self = this;
      this.$http.post('/api/pay/payByDeposit', { 'orderId': orderId}, true)
        .then(res => {
          var resData = res.data;
          if (resData.code == 0) {
            self.$router.push({
              path: '/order-pay-success',
              query: {
                orderId: orderId
              }
            });
          } else {
            self.$toast(resData.message);
          }
        })
    },
    payByWechat(orderInfo) {
      var self = this;
      this.$http.post('/api/pay/payByWechat', { 'orderId': orderInfo.id}, true)
        .then(res => {
          var resData = res.data;
          if (resData.code == 0) {
            var payParams = resData.data;
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
                      self.$router.push({
                        path: '/order-pay-success',
                        query: {
                          orderId: orderInfo.id
                        }
                      });
                  }
              }
            );
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.order-guest {
  .guest-p {
    padding: 2px 0 2px 20px;
    font-size: 16px;
  }
}
.order-address {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  .order-user-info {
    color: #333;
    padding-left: 10px;
    font-size: 12px;
    span:nth-child(1) {
      font-size: 16px !important;
      margin-right: 10px;
    }
    span:nth-child(2) {
      font-size: 16px;
      float: right;
    }
  }
  .order-user-add {
    display: flex;
    margin: 10px 0 10px 0;
    > i {
      display: inline-block;
      width: 15px;
      height: 20px;
      background: url(../../assets/order-address.png) no-repeat;
      background-size: 100%;
      position: relative;
      left: 10px;
      top: 5px;
    }
    > div {
      margin-left: 18px;
      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        color: #666;
        font-size: 16px;
      }
      i {
        display: inline-block;
        width: 9.3px;
        height: 14px;
        background: url(../../assets/toadd.png) no-repeat;
        background-size: 100%;
      }
    }
  }
  .order_time {
    display: flex;
    align-items: center;
    margin-top: 10px;
    > span {
      width: 80px;
      font-size: 14px;
      margin-left: 10px;
    }
    > p {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      span {
        font-size: 12px;
        color: rgba(255, 102, 51, 1);
        margin-right: 10px;
      }
      i {
        display: inline-block;
        width: 8px;
        height: 15px;
        background: url(../../assets/toperson.png) no-repeat;
        background-size: 100%;
      }
    }
  }
}
.pay-btn {
  position: fixed;
  bottom: 0;
  max-width: 750px;
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 5;
  align-items: center;
  background: #fff;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  > span:nth-child(1) {
    color: #292621;
    font-size: 16px;
    span {
      color: #ff6633 !important;
      margin-left: 10px;
    }
  }
  > span:nth-child(2) {
    color: #fff;
    background: #66c72a;
    font-size: 16px;
  }
}
.order-msg {
  margin: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 20px;
  span {
    font-size: 15px;
    margin-left: 10px;
  }
  input {
    margin-left: 20px;
    font-size: 15px;
  }
}
.order_jishi_info {
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  .jishi_con {
    display: flex;
    align-items: flex-start;
    .jishi_head {
      width: 90px;
      height: 90px;
      margin: 10px;
    }
    .jishi_info {
      width: calc(100% - 90px);
      p {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      .jishi_name {
        font-size: 15px;
      }
    }
  }
}
.order-project {
  background: #fff;
  border-radius: 10px;
  margin: 10px;
  .order-pro-info {
    display: flex;
    padding: 10px;
    img {
      width: 120px;
      height: 90px;
    }
    > div {
      margin-left: 10px;
    }
    > div p{
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
.price_con {
  border-radius: 10px;
  background: #fff;
  margin: 10px;
  padding: 10px 20px 0 10px;
  font-size: 14px;
  p:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      display: inline-block;
      width: 8px;
      height: 15px;
      background: url(../../assets/toperson.png) no-repeat;
      background-size: 100%;
    }
  }
  p:nth-child(2) {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div {
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: right;
  }
}
.pay_type {
  border-radius: 10px;
  background: #fff;
  margin: 10px;
  margin-bottom: 60px;
  > p {
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 15px;
    color: rgba(103, 101, 101, 1);
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(246, 244, 245, 1);
    font-size: 15px;
    padding: 10px;
    > p {
      display: flex;
      align-items: center;
      > img {
        width: 20px;
        height: 18px;
        margin-right: 20px;
      }
    }
  }
}
.checked_btn {
  display: flex;
  .no_checked {
    display: none;
  }
  .yes_checked {
    display: block;
  }
}
</style>
