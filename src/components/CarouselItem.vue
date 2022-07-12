<template>
  <div class="CarouselItem w_c">
      <div class="left">
          <h1 class="text1">{{ text1 }}</h1>
          <h3 class="text2">{{ text2 }}</h3>
          <!-- <p class="text3">{{ text3 }}</p> -->
          <el-button round @click="asking" >立即咨询</el-button>
      </div>
      <div class="right">
          <!-- <img src="@/assets/img1.png" alt="图片未加载"> -->
          <img :src="imgurl" alt="图片未加载">
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'CarouselItem',
    props:['imgurl', 'text1', 'text2'],
    methods: {
      asking() {
        this.$store.commit('changeDialog');
      },
      fideIn() {
        setTimeout(() => {
          $('.text1').fadeIn('3000').hide();
        },1000)
      }
    },
    mounted() {
      // this.fideIn()
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
            font-size: .75rem;
        }
        h3 {
            margin-bottom: .25rem;
            font-size: .4rem;
        }
        p {
            margin-bottom: .25rem;
            font-size: .3rem;
        }
        .el-button {
            margin-top: .25rem;
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