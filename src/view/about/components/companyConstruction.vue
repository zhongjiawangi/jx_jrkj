<template>
  <div class="construction">
    <div class="box">
      <div class="left animate__animated animate__fadeInTopLeft">
        <div class="child" v-for="(child, index) in children.slice(0, 3)" :key="index">
          {{ child }}
        </div>
      </div>
      <div class="center">
        <div class="hierarchyName">{{ info.data.hierarchyName }}</div>
      </div>
      <div class="right animate__animated animate__fadeInBottomRight">
        <div class="child" v-for="(child, index) in children.slice(-3)" :key="index">
          {{ child }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'constructionPage',
  props: {
    info: {
      type: Object,
      default: () => { },
    }
  },
  computed: {
    children() {
      return this.info?.data?.children || []
    }
  }
}
</script>

<style lang="less" scoped>
* {
  display: flex;
  align-items: center;
  justify-content: center;
}

.construction {
  height: 50vh;

  .box {
    height: 100%;
    width: 100%;
    .hierarchyName,
    .child {
      padding: 10px 15px;
      white-space: nowrap;
      background-color: rgb(111, 156, 230);
      color: #fff;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
    .child:hover {
      box-shadow: 0px 0px 10px rgb(111, 156, 230);
    }
    .left, .center, .right{
      flex: 1 0 0;
      height: 100%;
    }
    .left, .right {
      flex-direction: column;
      justify-content: space-around;
    }
    .hierarchyName {
      background-color: rgb(28, 102, 222);
    }
  }
}
</style>