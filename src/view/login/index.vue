<template>
  <div>
    <div>
      <div class="dr_logo">
        <a href="#">
          <img src="https://kaola-image.oss-cn-shanghai.aliyuncs.com/1576382620385.jpg" alt />
        </a>
      </div>
      <div class="dr_phone">
        <van-cell-group>
          <van-field 
            v-model="name" 
            placeholder="请输入称呼" 
            type="text" />
          <van-field 
            v-model="mobile" 
            placeholder="请输入手机号" 
            type="number" />
          <van-field
            v-model="smsCode"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            type="number"
          >
            <van-button slot="button" size="small" type="primary" @click="sendCode">{{smsText}}</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <dl class="dr_agreement">
        <a href="/#/user-agreement">
        </a>
        <dd>· 登陆后未注册手机号将自动注册</dd>
      </dl>
      <div class="dr_button">
        <van-button type="default" block round color="#fc524f" @click="login">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import utils from '../../utils';

export default {
  data() {
    return {
      active: 0,
      smsCode: "",
      smsText: "发送验证码",
      mobile: "",
      name: '',
      timer: null
    };
  },

  methods: {
    sendCode() {
      if (this.timer) return;
      var data = {
        mobile: this.mobile
      };
      var self = this;
      this.$http
        .post(this.$api.Login.SmsCode, data, false)
        .then(result => {
          console.log(result);
          var resultData = result.data;
          if (resultData.code == 0) {
            self.$toast("发送成功");
            var count = 60;
            self.timer = setInterval(() => {
              self.smsText = count--;
              if (count <= 0) {
                self.smsText = "发送验证码";
                clearInterval(self.timer);
                self.timer = null;
              }
            }, 1000);
          } else {
            self.$toast(resultData.message);
          }
        });
    },

    login() {
      const self = this;
      var requestData = {
        mobile: this.mobile,
        smsCode: this.smsCode,
        name: this.name
      };
      this.$http
      .post(this.$api.Login.Login, requestData, false)
      .then(res => {
        const resultData = res.data;
        if (resultData.code == 0) {
          utils.setItem('authCode', resultData.data);
          window.location.href = localStorage.getItem('WxDirectURL');
        } else {
          self.$toast(resultData.message);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  position: relative;
  margin: 0 auto;
}
input {
  margin: 0 auto;
  width: 300px;
  height: 36px;
  background: #fc524f;
  border-radius: 30px;
  color: #fff;
  font-size: 0.32rem;
  line-height: 0.92rem;
  display: block;
}
p {
  position: relative;
  padding: 0.1rem 0;
  margin-bottom: 0.4rem;
}
.dr_logo {
  margin-top: 20px;
}
.dr_logo img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  width: auto;
  padding: 10px;
  height: 200px;
}
.dr_phone {
  margin-top: 40px;
}
.dr_button {
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
.dr_agreement {
  margin: 10px;
  margin-top: 10px;
}
.dr_agreement dd {
  color: #e62129;
}
</style>
