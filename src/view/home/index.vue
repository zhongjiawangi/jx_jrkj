<template>
  <div class="home">
    <!-- 轮播图 -->
    <div class="carousel">
      <el-carousel :interval="5000" height="10rem">
        <el-carousel-item v-for="(item, index) in carousel" :key="index">
          <!-- <div class="carousel-item">
              <h3>{{ item }}</h3>
            </div> -->
          <CarouselItem
            :text1="item.text1"
            :text2="item.text2"
            :text3="item.text3"
            :imgurl="item.imgurl"
          />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 服务 -->
    <div class="serve">
      <div class="w_c">
        服务
      </div>
    </div>
    <!-- 电子保函 -->
    <div class="Guarantee ">
      <div class="w_c">
        电子保函
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from "@/components/CarouselItem";
import imgurl1 from "@/assets/img1.png";

export default {
  name: "homePage",
  components: {
    CarouselItem,
  },
  data() {
    return {
      carousel: [
        {
          imgurl: imgurl1,
          text1: "这是第一段内容",
          text2: "这是第二段内容",
          text3: "这是第三段内容",
        },
        {
          imgurl: imgurl1,
          text1: "这是第一段内容",
          text2: "这是第二段内容",
          text3: "这是第三段内容",
        },
        {
          imgurl: imgurl1,
          text1: "这是第一段内容",
          text2: "这是第二段内容",
          text3: "这是第三段内容",
        },
        {
          imgurl: imgurl1,
          text1: "这是第一段内容",
          text2: "这是第二段内容",
          text3: "这是第三段内容",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .carousel {
    height: 10rem;
    background-color: rgb(28, 102, 222);
    .carousel-item {
      height: 10rem;
      text-align: center;
      background-color: pink;
    }
    /deep/.el-carousel__indicators {
      display: none;
    }
  }
  .serve {
    height: 10rem;
  }
}
</style>
