<template>
  <div class="manpower">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'ManpowerPage',
}
</script>

<style lang="less" scoped>
.manpower {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(64, 158, 255, .5), rgba(245, 245, 245, 1));
  min-height: 100vh;
}
</style>