<template>
  <div>
    <div>
      <div class="dr_logo">
        <a href="#">
          <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt />
        </a>
      </div>
      <div class="dr_phone">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入手机号" />
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
      </div>
      <dl class="dr_agreement">
        <a href="/#/user-agreement">
          <dd>· 登陆即”表示客户同意 33上门服务协议</dd>
        </a>
        <dd>· 登陆后未注册手机号将自动注册</dd>
      </dl>
      <p class="dr_button">
        <input type="button" value="登陆" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
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
  margin-top: 20px;
}
.dr_agreement {
  margin: 10px;
}
</style>
