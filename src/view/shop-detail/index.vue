<template>
  <div>
      <van-swipe class="swipe-container">
        <van-swipe-item v-for="(banner, index) in banners" :key="index">
          <img fit="cover" v-lazy="banner.imageUrl" />
        </van-swipe-item>
      </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-me {
  margin: 0 auto;
}
.swipe-container {
  width: 100%;
  height: 200px;
}
</style>
