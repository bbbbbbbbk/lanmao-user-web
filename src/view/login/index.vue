<template>
  <div>
  <div>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入手机号" />
      <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <div class="center-me">
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);

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
.center-me { margin: 0 auto; }
</style>
