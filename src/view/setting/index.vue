<template>
  <div>
    <div class="dr_arrow">
      <van-cell title="编辑个人信息" is-link to="edit-userinfo" />
    </div>
    <div class="dr_button">
      <van-button type="default" block round color="#fc524f" @click="logout">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    logout() {
      this.$dialog
        .confirm({
          message: "确定退出?"
        })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dr_arrow {
  margin-top: 30px;
}
.dr_button {
  margin-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
