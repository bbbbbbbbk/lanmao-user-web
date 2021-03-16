<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  mounted: function() {
    console.log('mounted');
    this.$http.get(this.$api.WxRedirectURL, {}, false)
    .then(res => {
      const resultData = res.data;
      if (resultData && resultData.data) {
        localStorage.setItem('WxDirectURL', resultData.data);
      }
    });
  }
};
</script>