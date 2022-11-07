<template>
  <div class="condition">
    <div class="item" :class="{
      'animate__animated animate__slideInLeft': index == 0,
      'animate__animated animate__slideInDown': index == 1,
      'animate__animated animate__slideInRight': index == 2
    }" v-for="(item, index) in info.data" :key="index">
      <div class="index">{{ "0" + (index + 1) }}</div>
      <div class="content">
        <h3>{{ item.title }}</h3>
        <p v-for="text in item.children" :key="text">
          {{ text }}
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
.condition {
  display: flex;
  justify-content: space-around;

  .item {
    position: relative;
    margin-top: 100px;
    padding: 0 20px;
    flex: 1;
    text-align: center;
    border-right: 1px solid #dedede;

    .index {
      position: absolute;
      left: 50%;
      top: -60px;
      transform: translateX(-50%);
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      border-radius: 50%;
      background-color: rgb(101, 147, 227);
    }

    .content {
      * {
        margin: 10px 0;
      }

      h3 {
        margin: 10px 0;
        font-size: 24px;
      }

      p {
        font-size: 14px;
      }
    }
  }

  .item:last-child {
    border: none;
  }
}
</style>