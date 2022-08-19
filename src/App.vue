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
    },
    resizeHander() {
      let lastPixelRatio = window.devicePixelRatio;
      const _this = this;
      window.addEventListener('resize', function () {
        let currentPixelRatio = window.devicePixelRatio;
        if (currentPixelRatio !== lastPixelRatio) {
          _this.push()
        }
        lastPixelRatio = currentPixelRatio;
      });
    },
    push() {
      if (this.fIsMobile()) {
        this.$router.push({ path: '/mobile' })
        return;
      }
      this.$router.push({ path: '/' })
    },
  },
  mounted() {
    this.push()
  }
}
</script>
<style lang="less" scoped>
</style>
