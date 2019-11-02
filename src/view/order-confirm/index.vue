<template>
  <div>
    <div class="order-address">
      <p class="order-user-info">
        <span>莫胜磊</span>
        <span>17521250205</span>
      </p>
      <div class="order-user-add">
        <i></i>
        <div>
          <a href="javascript:void(0)">
            <p>上海 张杨路628弄4-10号 繁荣昌盛小区 9号楼901</p>
          </a>
        </div>
      </div>
      <div class="order_time">
        <span>预约时间</span>
        <p>
          <span>{{appointTime}}</span>
        </p>
      </div>
    </div>
    <div>预约人数</div>
    <div class="order-guest" v-for="guest in guestList" :key="guest.id">
      <p>{{guest.name}}:</p>
      <div class="order-project">
        <div class="order-pro-info">
          <img
            src="https://mcdn.yishengdaojia.cn/upload/20170830/04c7785db10ac5f0561868519e1e5932.jpg"
            alt
          />
          <div>
            <p>中医对症金牌调理</p>
            <p>中医对症，金牌调理</p>
            <p>60分钟</p>
          </div>
        </div>
      </div>
      <div class="order_jishi_info">
        <div class="jishi_li">
          <div class="jishi_con">
            <div class="jishi_head">
              <img
                src="https://mcdn.yishengdaojia.cn/upload/20190925/f34114665356581fbcafd9f7c1745b6c.jpg"
                alt
              />
              <i
                class="person-hot"
                style="width: 0.5rem; height: 0.3rem; background-image: url(&quot;https://mcdn.yishengdaojia.cn/upload/20190717/a72a8229f4e2c32fe24f48fd0d99b0af.png&quot;);"
              ></i>
            </div>
            <div class="jishi_info">
              <p class="jishi_juli"></p>
              <p class="jishi_name">
                <span>顾根俊</span>
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
      <input type="text" placeholder="如有其它需要请留言" />
    </div>
    <div class="price_con">
      <p>
        <span>平台优惠券</span>
        <span>
          30元代金券
          <i></i>
        </span>
      </p>
      <p>
        <span>技师优惠券</span>
        <span>无</span>
      </p>
      <div>
        合计
        <span>158元</span>
      </div>
    </div>
    <div class="pay_type">
      <p>支付方式</p>
      <div id="payType0" class="pay_icon_div" @click="payType = 1">
        <p>
          <img src="../../assets//payicon-5.png" alt />
          <span>微信支付</span>
        </p>
        <div class="checked_btn">
          <img src="../../assets/no-checked.png" alt :class="payType == 1 ? 'no_checked' : 'yes_checked' " />
          <img src="../../assets/checked.png" alt :class="payType == 1 ? 'yes_checked' : 'no_checked' " />
        </div>
      </div>
      <div id="payType1" class="pay_icon_div" @click="payType = 2">
        <p>
          <!---->
          <img src="../../assets/payicon-4.png" alt />
          <!---->
          <!---->
          <span>支付宝支付</span>
        </p>
        <div class="checked_btn">
          <img src="../../assets/no-checked.png" alt :class="payType == 2 ? 'no_checked' : 'yes_checked' " />
          <img src="../../assets/checked.png" alt :class="payType == 2 ? 'yes_checked' : 'no_checked' " />
        </div>
      </div>
    </div>
    <div class="pay-btn">
      <span>
        应付金额:
        <span>¥66</span>
      </span>
      <span @click="goPay">
        <a class="order_btn_now">立即支付</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      appointTime: "请选择您的预约时间",
      guestList: [
        {
          name: "预约人1"
        },
        {
          name: "预约人2"
        },
        {
          name: "预约人3"
        }
      ],
      payType: 1
    };
  },
  methods: {
    goPay() {
        
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.order-guest {
}
.order-address {
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  .order-user-info {
    color: #333;
    padding-left: 35px;
    font-size: 12px;
    span:nth-child(1) {
      font-size: 16px !important;
      margin-right: 10px;
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
      margin-left: 30px;
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
    > div p:nth-child(1) {
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
  >div {
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
  >p {
      padding-bottom: 10px;
      padding-left: 10px;
      font-size: 15px;
      color: rgba(103,101,101,1);
  }
  >div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(246,244,245,1);
      font-size: 15px;
      padding: 10px;
      >p {
          display: flex;
          align-items: center;
          >img {
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
