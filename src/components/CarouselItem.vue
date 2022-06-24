<template>
  <div class="CarouselItem">
      <div class="left">
          <h1>{{ text1 }}</h1>
          <h3>{{ text2 }}</h3>
          <p>{{  text3 }}</p>
          <el-button round @click="asking">立即咨询</el-button>
      </div>
      <div class="right">
          <!-- <img src="@/assets/img1.png" alt="图片未加载"> -->
          <img :src="imgurl" alt="图片未加载">
      </div>
  </div>
</template>

<script>
export default {
    name: 'CarouselItem',
    props:['imgurl', 'text1', 'text2', 'text3'],
    methods: {
      asking() {
        console.log(1);
      }
    }
}
</script>

<style lang="less" scoped>
.CarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .left {
        color: #fff;
        h1 {
            margin-bottom: .375rem;
            font-size: 1rem;
        }
        h3 {
            margin-bottom: .25rem;
            font-size: .45rem;
        }
        p {
            margin-bottom: .25rem;
            font-size: .25rem;
        }
        .el-button {
            margin-top: .25rem;
            width: 1.875rem;
            height: .625rem;
            font-size: .2rem;
            color: rgb(28, 102, 222);
            font-weight: 800;
        }
    }
    .right {
        img {
            width:9.0375rem;
        }
    }
}
</style>