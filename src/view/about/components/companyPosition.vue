<template>
  <div class="porsition">
    <img class="left" :src="info.pic" alt="">
    <div class="right">
      <div class="content">
        <h3>{{ info.data.title }}</h3>
        <p v-for="item in info.data.children" :key="item">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => { },
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.porsition {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;

  .left,
  .right {
    flex: 1;
    margin: 5px 10px;
    height: 60%;
    border-radius: 10px;
    box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
  }

  .right {
    padding: 20px 40px;
    display: flex;
    align-items: center;
  }

  .content {
    padding: 10px 40px 1px;
    border-left: 1px solid #999;

    h3 {
      margin-bottom: 15px;
      font-size: 24px;
      white-space: nowrap;
    }

    p {
      margin-bottom: 20px;
      font-size: 14px;
      white-space: nowrap;
    }
  }
}
</style>