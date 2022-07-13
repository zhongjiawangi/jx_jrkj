<template>
  <div class="home">
    <div class="dialog">
      <el-dialog :visible.sync="$store.state.dialogVisible" width="30%">
        <div class="info">
          <p>微信扫码咨询</p>
          <img :src="url" alt="" style="width:100%">
        </div>
      </el-dialog>
    </div>
    <!-- 轮播图 -->
    <div class="carousel">
      <!-- <el-carousel :interval="5000" height="10rem">
        <el-carousel-item v-for="(item, index) in carousel" :key="index">
          <CarouselItem :text1="item.text1" :text2="item.text2" :text3="item.text3" :imgurl="item.imgurl" />
        </el-carousel-item>
      </el-carousel> -->
      <CarouselItem :text1="carousel.text1" :text2="carousel.text2" :imgurl="carousel.imgurl" />
    </div>
    <!-- 产品介绍 -->
    <div class="production">
      <div class="w_c">
        <MenuTitle :title="'产品介绍'" />
        <div class="production-box box">
          <ul>
            <li v-for="(item, index) in serveList" :key="index" @click="asking">
              <div><img :src="item.icon" alt=""></div>
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 项目流程 -->
    <!-- <div class="process">
            <div class="w_c">
                <MenuTitle :title="'项目流程'" :tip="'一键申请、最快3分钟出函、全程在线办理'" />
                <div class="step box">
                    <div class="step-item" v-for="(item, index) in stepInfo" :key="index">
                        <el-progress type="dashboard" :percentage="item.percentage" color="rgb(32, 160, 255)"
                            :status="item.status ? item.status : null"></el-progress>
                        <div class="title">
                            <span>{{ item.step }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    <!-- 项目优势 -->
    <!-- <div class="advantage">
            <div class="w_c">
                <MenuTitle :title="'项目优势'" :tip="'这里是tips'" />
                <ul class="item-box box">
                    <li class="advantage-item" v-for="(item, index) in advantageList" :key="index">
                        <span><i>0</i>{{ index + 1 }}</span>
                        <h3>{{ item.text1 }}</h3>
                        <p>{{ item.text2 }}</p>
                    </li>
                </ul>
            </div>
        </div> -->
    <!-- 合作机构 -->
    <div class="partner">
      <div class="w_c">
        <MenuTitle :title="'合作机构'" :tip="'这里是tips'" />
        <div class="partner-box box">
          <el-card shadow="always" v-for="(item, index) in partnerList" :key="index">
            <el-image :src="item.imgUrl" v-if="item.imgUrl"></el-image>
            <div v-else class="line">{{ item.name }}</div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem'
import imgurl1 from '@/assets/home_img/img1.png'
import MenuTitle from '@/components/menuTitle.vue'
import Footer from '@/components/footer.vue'
import baohanImg from '@/assets/home_img/baohan.png'
import danbaoImg from '@/assets/home_img/danbao.png'
import fcjy from '@/assets/home_img/fcjy.jpg'
import jjrd from '@/assets/home_img/jjrd.jpg'
import jjgd from '@/assets/home_img/jjgd.jpg'
import pxhy from '@/assets/home_img/pxhy.jpg'
import contactCode from '@/assets/home_img/contactCode.jpg'

export default {
  name: 'homePage',
  components: {
    CarouselItem,
    MenuTitle,
    Footer,
  },
  data() {
    return {
      dialogVisible: false,
      url: contactCode,
      carousel:
      {
        imgurl: imgurl1,
        text1: '江若科技是专业金融科技公司',
        text2: '为金融机构提供电子投标保函系统、金融担保审批系统',
      },
      serveList: [
        {
          title: '电子投标保函系统',
          icon: baohanImg,
        },
        {
          title: '金融担保审批系统',
          icon: danbaoImg,
        },
      ],
      // stepInfo: [
      //   {
      //     percentage: 0,
      //     step: '第一步',
      //   },
      //   {
      //     percentage: 25,
      //     step: '第二步',
      //   },
      //   {
      //     percentage: 50,
      //     step: '第三步',
      //   },
      //   {
      //     percentage: 75,
      //     step: '第四步',
      //   },
      //   {
      //     percentage: 100,
      //     step: '出函成功',
      //     status: 'success',
      //   },
      // ],
      // advantageList: [
      //   {
      //     text1: '解决资金问题',
      //     text2: '无抵押、无担保、无需冻结资金',
      //   },
      //   {
      //     text1: '办理流程简便',
      //     text2: '材料简单、方便办理、事实出函、高效快捷',
      //   },
      //   {
      //     text1: '电子信息化',
      //     text2: '信息化、线上化，电子留痕可追溯',
      //   },
      //   {
      //     text1: '防伪性',
      //     text2: '真实性、防伪性，方便核验真伪',
      //   },
      // ],
      partnerList: [
        {
          name: '丰城市剑邑融资担保有限公司',
          imgUrl: fcjy,
        },
        {
          name: '九江市工业融资担保有限公司',
          imgUrl: jjgd,
        },
        {
          name: '九江市融资担保有限公司',
          imgUrl: jjrd,
        },
        {
          name: '萍乡市汇源融资担保有限公司',
          imgUrl: pxhy,
        }
      ],
    }
  },
  methods: {
    asking() {
      this.$store.commit('changeDialog');
    },
  }
}
</script>

<style lang="less" scoped>
.home {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(64, 158, 255, .5), rgba(245, 245, 245, 1));

  .dialog {
    text-align: center;
  }

  .box {
    margin: 1.5rem 0;
  }

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

    /deep/.el-carousel__arrow {
      width: 0.75rem;
      height: 0.75rem;
      background-color: rgba(31, 45, 61, 0.3);

      i {
        font-size: .375rem;
      }
    }
  }

  .production {

    // height: 10rem;
    .production-box {
      // margin: 1.65rem 0;

      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
          width: 30%;
          height: 2.5rem;
          // border: .0125rem solid #dedede;
          // margin-left: -0.0125rem;
          // margin-bottom: -0.0125rem;
          margin: .0625rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: #fff;
          border-radius: .0625rem;
          cursor: pointer;

          div img {
            width: .8rem;
          }

          span {
            margin: 0.1rem 0;
            font-size: .25rem;
          }
        }

      }
    }
  }

  .process {
    .step {
      display: flex;
      justify-content: center;
      align-items: center;
      // margin: 1.65rem 0;

      .step-item {
        flex: 1;
        text-align: center;

        .title {
          margin: 0.45rem 0;
          font-size: .3rem;
          color: rgb(32, 160, 255);
        }

        /deep/.el-progress-circle {
          width: 1.575rem !important;
          height: 1.575rem !important;
        }

        /deep/.el-progress__text {
          font-size: .2rem !important;
        }
      }
    }
  }

  .advantage {
    .item-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      // margin: 1.65rem 0;

      .advantage-item {
        flex: 1;
        padding: 0.3125rem;
        height: 2.75rem;
        font-size: 0.2rem;
        color: rgb(82, 128, 255);
        background: url('@/assets/home_img/border.png') no-repeat left top;
        background-size: contain;

        span {
          font-size: 0.45rem;
          font-style: italic;

          i {
            opacity: 0.5;
          }
        }

        h3 {
          margin-top: 0.25rem;
          font-size: 0.375rem;
          font-weight: 800;
        }

        p {
          margin-top: 0.1rem;
          color: #999;
        }
      }
    }
  }

  .partner {
    .partner-box {
      display: flex;
      min-width: 1.1875rem;
      flex-wrap: wrap;

      .el-card {
        margin-left: 0.4rem;
        margin-bottom: 0.2rem;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.225rem;
        font-weight: 800;
        cursor: pointer;
      }

      .el-card:hover {
        transform: scale(1.1);
      }

      .line {
        white-space: nowrap; // 强制一行显示
        overflow: hidden; // 超出隐藏
        text-overflow: ellipsis; // 省略号
      }
    }
  }
}
</style>
