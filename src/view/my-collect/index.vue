<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="项目">
        <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="loadProduct">
        </van-list>
      </van-tab>
      <van-tab title="技师">
        <van-list v-model="loading2" :finished="findished2" finished-text="没有更多了" @load="loadMech">
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      products: [],
      mechs: [],
      loading1: false,
      loading2: false,
      finished1: false,
      findished2: false
    };
  },
  methods: {
    loadProduct() {

    },
    loadMech() {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.center-me {
  margin: 0 auto;
}
</style>
