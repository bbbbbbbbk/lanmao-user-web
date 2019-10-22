<template>
  <div>
    <div class="wd_cz">
      <ul>
        <li class="fix">
          <span class="w_l fl txtdot">我的余额</span>
          <span class="w_r fl txtdot">￥0.00</span>
        </li>
        <li class="fix">
          <span class="w_l fl txtdot">充值金额</span>
          <span class="w_r fl txtdot">
            <label 
            v-for="item in moneyList" 
            :key="item.id" 
            :class="item.id == chooseId ? 'on' : ''"
            @click="choose(item.id)" >
              {{item.value}}元
            </label>
          </span>
        </li>
        <!-- 微信支付 -->
        <label class="paytype" for="pay_6">
          <li class="payclick">
            <img src="https://www.33oncall.com/upload/payment/icon/weixin.png" alt />
            <input type="radio" name="pay_id" class="txtpay" value="6" id="pay_6" />
          </li>
        </label>
      </ul>
    </div>
    <div class="dr_button">
      <van-button type="default" block round color="#fc524f" @click="charge">确认充值</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      moneyList: [
        {
          id: 1,
          value: 100
        },
        {
          id: 2,
          value: 200
        },
        {
          id: 3,
          value: 300
        },
        {
          id: 4,
          value: 400
        },
        {
          id: 5,
          value: 500
        }
      ],
      chooseId: 1
    };
  },

  methods: {
    choose(cId) {
      this.chooseId = cId;
    },
    charge() {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wd_cz ul {
  padding: 0 10px;
}
.wd_cz ul li {
  display: block;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.wd_cz ul li span {
  display: block;
  font-size: 1.4em;
  color: #333;
  line-height: 1.6em;
}
.wd_cz li span.w_l {
    margin-right: .2rem;
}
.payclick img {
    width: 10%;
}
.paytype {
  display: block;
}
.wd_cz li span.w_r label {
    border: 1px solid #ddd;
    text-align: center;
    line-height: 1.2em;
    font-size: 1em;
    color: #999;
    float: left;
    margin-left: 10px;
    margin-top: 10px;
    padding: 15px;
}
.txtpay {
    display: none;
}
.fix:after {
  content:".";
  display:block;
  height:0;
  clear:both;
  visibility:hidden;
  font-size:0;
  line-height:0;
}
.wd_cz li span.w_r label.on {
    color: #fb504d;
    border-color: #fb504d;
}
.dr_button {
  margin: 10px;
  margin-top: 50px;
}
</style>
