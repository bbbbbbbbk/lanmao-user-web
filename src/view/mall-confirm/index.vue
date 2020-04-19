<template>
  <div>
    <div id="mallConfirm" style="padding-top: 1rem;">
      <div class="mall_con">
        <div>
          <div class="order-address">
            <p class="order-user-info">
              <span></span>
              <span></span>
            </p>
            <div class="order-user-add">
              <i></i>
              <div>
                <a href="javascript:void(0)">
                  <p>点击去填写地址</p>
                  <i></i>
                </a>
              </div>
            </div>
          </div>
          <div class="goods_info">
            <div class="goods_info_div">
              <img
                src="https://mcdn.yishengdaojia.cn/upload/20200221/f0ea9637bc9d33f6310d085fd5298a30.jpg"
                alt
              />
              <div class="goods_name">
                <p>麦冬桑叶菊花陈皮茶饮</p>
                <p>
                  <!---->
                  <!---->
                  <span>58元</span>
                </p>
              </div>
            </div>
            <div class="goods_num">
              <span>购买数量</span>
              <p>
                <span class="no_click">
                  <img src="../../assets/jian_hui.png" alt />
                </span>
                <input type="text" />
                <span>
                  <img src="../../assets/add.png" alt />
                </span>
              </p>
            </div>
          </div>
          <div class="order_info">
            <div class="order_msg">
              <span>备注</span>
              <input type="text" placeholder="如有其它需要请留言" />
            </div>
          </div>
        </div>
        <div class="pay_type">
          <p>支付方式</p>
          <div class="pay_type_info" @click="payType = 1">
            <div>
              <img src="../../assets/payicon-5.png" />
              <span>微信支付</span>
            </div>
            <img v-show="payType == 1" src="../../assets/checked.png" />
            <img v-show="payType != 1" src="../../assets/no-checked.png" />
          </div>
          <div class="pay_type_info" @click="payType = 2">
            <div>
              <img src="../../assets/payicon-4.png" />
              <span>支付宝支付</span>
            </div>
            <img v-show="payType == 2" src="../../assets/checked.png" />
            <img v-show="payType != 2" src="../../assets/no-checked.png" />
          </div>
        </div>
      </div>
      <div class="pay-btn">
        <span>
          应付金额:
          <span>58元</span>
        </span>
        <a>
          <span>立即支付</span>
        </a>
      </div>
    </div>
    <van-popup v-model="show" closeable>
      <div class="back_con_alert">
        <div class="reg_info">
          <p class="modal_title">修改收货地址</p>
          <input type="text" placeholder="请输入收货人姓名" class="user_text" />
          <input type="text" placeholder="请输入收货人手机号" class="user_text" />
          <input type="text" placeholder="XX省XX市XX区/县XXX" class="user_text" />
          <input type="text" placeholder="X号楼X单元XXX" class="user_text" />
          <div class="alert_btn">
            <p>取消</p>
            <p>保存</p>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      show: false,
      payType: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mall_con {
  padding: 0 10px;
  padding-bottom: 20px;
  .order-address {
    background: #fff;
    padding: 10px 10px 20px 10px;
    .order-user-info {
      font-size: 16px;
      > span:nth-child(1) {
        font-size: 16px !important;
      }
    }
    .order-user-add {
      display: flex;
      margin-top: 10px;
    }
  }
  .goods_info {
    padding: 10px 10px;
    background: #fff;
    margin-top: 10px;
    .goods_info_div {
      display: flex;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .goods_name {
      margin-left: 20px;
      > p:nth-child(1) {
        font-size: 16px;
      }
      > p:nth-child(2) {
        color: rgba(245, 64, 41, 1);
        font-size: 16px;
        margin-top: 10px;
      }
    }
    .goods_num {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      font-size: 13px;
      p {
        display: flex;
        align-items: center;
        input {
          width: 40px;
          background: rgba(246, 246, 246, 1);
          margin: 0 10px;
        }
      }
      img {
        width: 10px;
        height: 10px;
      }
    }
  }
  .order_info {
    margin-top: 10px;
    padding: 10px 10px;
    background: #fff;
    font-size: 14px;
    .order_msg {
      display: flex;
      align-items: center;
      input {
        margin-left: 10px;
      }
    }
  }
  .pay_type {
    margin-top: 10px;
    padding: 10px 10px;
    background: #fff;
    > p:nth-child(1) {
      font-size: 16px;
    }
    .pay_type_info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 16px;
      margin-top: 20px;
      img {
        height: 20px;
        width: 20px;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          height: 20px;
          height: 18px;
        }
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
.pay-btn {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background: #fff;
  width: 100%;
  height: 50px;
  > span:nth-child(1) {
    font-size: 18px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    > span {
      font-size: 16px;
      color: #ff6633 !important;
      margin-left: 10px;
    }
  }
  > a {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #66c72a;
    font-size: 18px;
    color: #fff;
  }
}
</style>
