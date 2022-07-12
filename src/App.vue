<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    fIsMobile() {
      return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    }
  },
  // mounted() {
  //   if (this.fIsMobile()) {
  //     this.$router.push({ path: '/mobile' })
  //     return;
  //   }
  //   this.$router.push({ path: '/' })
  // }
}
</script>
<style lang="less" scoped>
</style>
