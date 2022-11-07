<template>
  <div class="construction">
    <div class="box" v-for="(item, index) in info.data" :key="index">
      <div class="left">
        <div class="child" v-for="index in 3" :key="index">
          {{ item.children[index] }}
        </div>
      </div>
      <div class="center">
        <div class="hierarchyName">{{ item.hierarchyName }}</div>
      </div>
      <div class="right">
        <div class="child" v-for="index in 3" :key="index">
          {{ item.children[index] }}
        </div>
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