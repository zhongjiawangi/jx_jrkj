<template>
  <div class="introduce">
    <div class="item" :class="{
      'animate__animated animate__lightSpeedInLeft': index == 0,
      'animate__animated animate__lightSpeedInRight': index == 1,
    }" v-for="(item, index) in info.data" :key="index">
      <div class="left">
        <div class="content">
          <h3>{{ item.companyName }}</h3>
          <p>{{ item.text }}</p>
          <div class="index">{{ '0' + (index + 1) }}</div>
        </div>
      </div>
      <div class="right">
        <img :src="item.pic" alt="">
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
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.introduce {
  .item {
    display: flex;
    align-items: center;
    .left {
      width: 50%;

      .content {
        position: relative;
        box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
        border-radius: 20px;
        padding: 10px 40px;
        margin-left: 20px;
        h3 {
          color: rgb(105, 150, 228);
          margin: 10px 0;
          font-size: 24px;
        }
        p {
          font-size: 14px;
        }
      }

      .index {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        color: #fff;
        border-radius: 50%;
        background-color: rgb(101, 147, 227);
      }
    }

    .right {
      flex: 1;
      padding: 20px;

      img {
        width: 100%;
        border-radius: 5px;
      }
    }
  }
}
</style>