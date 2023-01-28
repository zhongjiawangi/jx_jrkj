<template>
  <div class="home-mobile">
    <!-- 加入我们 -->
    <div class="join-us" @click="goManpower" v-show="!showJoin">
      <img src="@/assets/icon_join.png" alt="">
    </div>
    <!-- 顶部 -->
    <div class="top">
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <span>江若科技</span>
      </div>
      <div class="query" @click="showQuery = true">
        保函查询
      </div>
      <van-action-sheet v-model="showQuery" :actions="actions" cancel-text="取消" close-on-click-action @select="onSelect"
        @cancel="showQuery = false" />
    </div>
    <!-- 扫码 -->
    <div class="popup">
      <van-popup v-model="show">
        <div>
          <img :src="contactCodeImg" alt="">
          <p v-show="showAskingText">微信扫码咨询</p>
        </div>
      </van-popup>
    </div>
    <!-- 轮播图 -->
    <div class="carousel margin">
      <h1 class="text1">{{ carousel.text1 }}</h1>
      <h3 class="text2">{{ carousel.text2 }}</h3>
      <div class="flex-box">
        <div class="left">
          <img :src="carousel.imgurl" alt="图片未加载">
        </div>
        <div class="right">
          <div class="btn round" @click="asking(0)">立即咨询</div>
        </div>
      </div>

    </div>
    <!-- 产品 -->
    <div class="production margin">
      <h3 class="title">产品介绍</h3>
      <div class="item" v-for="(item, index) in productions" :key="index">
        <div><img :src="item.icon" alt=""></div>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <!-- 关于我们 -->
    <!-- <div class="about margin">
      <div class="title">关于我们</div>
      <div class="nav">
        <div class="nav-item" :class="active === item.title ? 'active' : ''" v-for="(item, index) in aboutList"
          :key="index" @click="active = item.title">
          {{ item.title }}
        </div>
      </div>
      <div class="contant-box">
        <div v-for="(item, index) in aboutList" :key="index" :style="active === item.title ? 'height:100%' : ''">
          <AboutItem v-if="active === item.title" :title='item.title' :text="item.text" :text1="item.text1"
            :contant="item.contant">
            <template v-if="item.title === '联系我们'" #top>
              <h1>ConectUs</h1>
              <div class="slot">
                <div class="center">
                  <img src="@/assets/about_img/telephone.png" alt="">
                </div>
                <div>
                  <p>客服热线:0791-8853610 / 13407938888</p>
                  <p>邮箱:23778989@qq.com</p>
                </div>
              </div>
            </template>
            <template v-if="item.title === '联系我们'" #contant>
              <div class="slot">
                <div class="center">
                  <img src="@/assets/about_img/address.png" alt="">
                </div>
                <div>
                  <p>公司名称:江西江若科技有限公司</p>
                  <p>联系地址:江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室</p>
                </div>
              </div>
            </template>
          </AboutItem>
        </div>
      </div>
    </div> -->
    <div class="conpany-info">
      <!-- 公司介绍 -->
      <div class="introduce m-20">
        <div class="title">{{ conpanyInfo.introduce.title }}</div>
        <div class="contant">
          <div class="item" v-for="(item, index) in conpanyInfo.introduce.data" :key="index">
            <div class="left">
              <div class="content">
                <h3>{{ item.companyName }}</h3>
                <p>{{ item.text }}</p>
                <div class="index">{{ '0' + (index + 1) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 公司情况 -->
      <div class="condition m-20">
        <div class="title">{{ conpanyInfo.condition.title }}</div>
        <div class="contant">
          <p>人员数量： 100+</p>
          <p>对外合作： 8家</p>
          <p>服务企业： 10000+</p>
        </div>
      </div>
      <!-- 公司结构 -->
      <!-- <div class="construction m-20">
        <div class="title">{{ conpanyInfo.construction.title }}</div>
        <div class="contant">
          <div class="hierarchy">
            <span>{{ conpanyInfo.construction.data.hierarchyName }}</span>
          </div>
          <div class="department" v-for="(child, index) in conpanyInfo.construction.data.children" :key="index">
            <span>{{ child }}</span>
          </div>
        </div>
      </div> -->
      <!-- 公司定位 -->
      <div class="position m-20">
        <div class="title">{{ conpanyInfo.position.title }}</div>
        <div class="content">
          <p>1.电子保函系统：从投标保函系统向担保公司核心业务系统延申</p>
          <p>2.赣标通：通过数据挖掘、分析等，深度服务建筑企业，同时营销保函</p>
          <p>3.金融监管系统：服务金融监督管理部门，建设行业管理软件</p>
        </div>
      </div>
      <!-- 理念与模式 -->
      <!-- <div class="concept-model m-20">
        <div class="title">{{ conpanyInfo.conceptModel.title }}</div>
        <div class="contant">
          <van-collapse v-model="activeName" accordion>
            <van-collapse-item :title="item.title" :name="index" v-for="(item, index) in conpanyInfo.conceptModel.data" :key="index">
              {{ item.content }}
            </van-collapse-item>
          </van-collapse>
        </div>
      </div> -->
    </div>
    <!-- 合作机构 -->
    <div class="partner margin">
      <div class="title">合作机构</div>
      <div class="item-box">
        <div class="partner-item" v-for="(item, index) in partners" :key="index">
          <!-- <img v-lazyload="item.imgUrl" :key="item.imgUrl" alt=""> -->
          <img v-lazyload="item.imgUrl" v-if="item.imgUrl" />
          <div class="partner-name" v-else>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="footer margin">
      <div class="contant">
        <h3>联系我们</h3>
        <div class="address item">
          <div class="left">
            <i :class="address.icon"></i>地址：
          </div>
          <div class="right">
            {{ address.address }}
          </div>
        </div>
        <div class="telephone item">
          <div class="left">
            <i :class="telephone.icon"></i>电话：
          </div>
          <div class="right">
            {{ telephone.telephone }}
          </div>
        </div>
        <div class="email item">
          <div class="left"><i :class="email.icon"></i>邮箱：</div>
          <div class="right">{{ email.email }}</div>
        </div>
      </div>
      <div class="code-box">
        <div class="code-item">
          <van-image :src="gongzhonghaoImg">
          </van-image>
          <p>扫描微信公众号</p>
        </div>
        <div class="code-item">
          <van-image :src="contactCodeImg">
          </van-image>
          <p>添加微信咨询</p>
        </div>
      </div>
      <div class="filing-information">
        <div>Copyright ©2022 江西江若科技有限公司 版权所有</div>
        <a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2022005510号-1</a>
      </div>
    </div>
  </div>
</template>

<script>
import imgurl1 from '@/assets/home_img/img1.png'
import contactCode from '@/assets/home_img/contactCode.jpg'
import gongzhonghao from '@/assets/QRCode.jpg'
// 合作机构logo
import { partnerList, queryList, productionList, conpanyInfo } from '@/info'


// import AboutItem from './components/aboutItem.vue'

export default {
  name: "HomeMobile",
  // components: {
  //   AboutItem,
  // },
  data() {
    return {
      show: false,
      showQuery: false,
      showJoin: false,
      showAskingText: true,
      contactCodeImg: contactCode,
      gongzhonghaoImg: gongzhonghao,
      // active: "公司介绍",
      actions: queryList,
      conpanyInfo: conpanyInfo,
      activeName: '',
      carousel: {
        imgurl: imgurl1,
        text1: "江若科技是专业金融科技公司",
        text2: "为金融机构提供电子投标保函系统、金融担保审批系统，赣标通",
      },
      productions: productionList,
      aboutList: [
        {
          title: "公司介绍",
          text: "Introduce",
          text1: "政策合规、综合服务",
          contant: "江若科技是一家为金融机构提供电子投标保函系统、金融担保审批系统的专业金融科技公司。",
        },
        {
          title: "公司文化",
          text: "Culture",
          text1: "真诚、实干、创新、责任",
          contant: "江若科技一直秉承“真诚、实干、创新、责任”的企业理念，在科技服务领域不断创新和改进，增强了电子招标的标准化程度，提高了企业资金运作效率，并有效地降低了承保项目的各类风险。",
        },
        {
          title: "联系我们",
          text: "Contant",
          text1: "",
          contant: "江若科技是专业金融科技公司，为金融机构提供电子投标保函系统、金融担保审批系统。",
        },
      ],
      partners: partnerList,
      address: {
        icon: "el-icon-location-outline",
        address: "江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室",
      },
      telephone: {
        icon: "el-icon-phone",
        telephone: "0791-8853610 / 13407938888",
      },
      email: {
        icon: "el-icon-message",
        email: "23778989@qq.com",
      },
    };
  },
  methods: {
    goManpower() {
      this.$router.push({ path: "/mobile/manpower" })
    },
    asking(url) {
      if (url) {
        this.contactCodeImg = url
        this.showAskingText = false
      } else {
        this.contactCodeImg = contactCode
        this.showAskingText = true
      }
      this.show = true;
    },
    onSelect(item) {
      location.assign(item.url)
      this.showQuery = false
    },

  },
}
</script>

<style lang="less" scoped>
@keyframes round {
  to {
    transform: rotate(360deg)
  }
}

.home-mobile {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(64, 158, 255, .5), rgba(245, 245, 245, 1));

  .margin {
    margin-bottom: 20px;
    padding: 20px;
  }

  .title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 40px;
  }

  .join-us {
    position: fixed;
    top: 60%;
    right: 20px;
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #dedede;

    img {
      width: 50px;
    }

    // overflow: hidden;
  }

  /deep/.van-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    .personnel-management {
      background-color: #fff;

      .title {
        font-size: 24px;
        padding: 10px 16px;
        margin: 0;
      }

      .tip {
        font-size: 14px;
        padding: 10px 16px;
      }
    }
  }

  .round::before {
    content: "";
    position: absolute;
    width: calc(100% - 3px);
    height: calc(100% - 3px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #efefef;
    border-radius: 999px;
    z-index: -1;
  }

  .round::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: orange;
    transform-origin: 0 0;
    animation: round 2s linear infinite;
    z-index: -2;
  }

  .top {
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 20px;
      width: 120px;
      img {
        width: 30px;
      }
    }

    .query {
      padding: 10px;
      font-size: 16px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid #efefef;
      overflow: hidden;
    }
  }

  .popup {
    font-size: 18px;
    text-align: center;

    div {
      width: 80%;
      background-color: transparent;
      margin: 0 auto;
      // height: 50vh;
    }

    img {
      width: 100%;
    }

    p {
      padding-bottom: 10px;
    }
  }

  .carousel {
    padding: 20px;
    min-height: 300px;
    background-color: rgb(28, 102, 222);
    color: white;

    .flex-box {
      display: flex;
      align-items: center;

      .left {
        flex: 4;

        img {
          width: 100%;
        }
      }

      .right {
        flex: 2;
        text-align: center;

        .btn {
          position: relative;
          padding: 10px 0;
          margin: 0 auto;
          width: 100px;
          font-size: 16px;
          // background-color: #fff;
          color: #333;
          border-radius: 999px;
          overflow: hidden;
          z-index: 0;
        }
      }
    }

    h1 {
      font-size: 24px;
      padding: 20px 0;
    }

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  .production {
    padding: 20px 40px;

    .item {
      padding: 20px;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, .1);
      font-size: 16px;

      img {
        width: 50px;
      }
    }

    .item:last-child {
      margin-bottom: 0;
    }
  }

  .conpany-info {
    padding: 0 20px;
    font-size: 14px;

    .m-20 {
      margin: 40px 0;
    }

    .introduce {
      .item {
        margin-bottom: 40px;

        .left {
          // width: 50%;

          .content {
            position: relative;
            box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
            border-radius: 20px;
            padding: 10px 40px;
            margin-left: 20px;

            h3 {
              color: rgb(105, 150, 228);
              margin: 10px 0;
              font-size: 18px;
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

    .condition {
      padding: 0 20px;

      .contant {
        margin-bottom: 30px;
        padding: 10px;
        text-align: center;
        box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
        border-radius: 20px;
        p:nth-child(2n) {
          margin: 10px 0;
        }
      }
    }

    .construction {
      text-align: center;

      span {
        padding: 5px 10px;
        display: inline-block;
        border-radius: 5px;
        border: 1px solid rgba(255, 255, 255, .5);
      }

      .hierarchy {
        font-size: 18px;
        margin-bottom: 20px;

        span {
          padding: 10px 20px;
        }
      }

      .department {
        display: inline-block;
        width: 50%;
        margin-bottom: 15px;
      }
    }

    .position {
      text-align: center;
      padding: 0 20px;

      .content {
        box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
        border-radius: 20px;
        padding: 20px;

        h3 {
          margin-bottom: 15px;
          font-size: 24px;
          white-space: nowrap;
        }

        p {
          margin-top: 20px;
          font-size: 14px;
          // white-space: nowrap;
        }
      }
    }

    .concept-model {
      padding: 0 20px;

      /deep/ .van-cell,
      /deep/.van-collapse-item__content {
        background-color: transparent;
      }

      /deep/ .van-collapse-item__content {
        color: 666;
      }

      .contant {
        // border: 1px solid #fff;
        box-shadow: 2px 2px 15px rgba(105, 150, 228, .5);
        // border-radius: 10px;
      }
    }
  }

  // .about {
  //   min-height: 350px;

  //   .center {
  //     display: flex;
  //     align-items: center;
  //     margin-right: 5px;
  //   }

  //   .nav {
  //     display: flex;
  //     justify-content: space-around;
  //     color: #fff;

  //     .nav-item {
  //       padding: 20px 5px;
  //       font-size: 20px;
  //     }

  //     .active {
  //       display: flex;
  //       align-items: center;
  //       color: #ce8a3c;
  //       transform: scale(1.1)
  //     }

  //     .active::before {
  //       content: '';
  //       margin-right: 10px;
  //       width: 6px;
  //       height: 6px;
  //       border: 3px solid #ce8a3c;
  //       border-radius: 50%;
  //     }
  //   }

  //   .contant-box {
  //     flex: 1;

  //     .slot {
  //       display: flex;
  //       margin: 15px 0;

  //       * {
  //         margin: 0;
  //       }

  //       img {
  //         width: 35px;
  //       }

  //       p {
  //         margin: 5px 0;
  //         // text-align: center;
  //       }
  //     }
  //   }
  // }

  .partner {
    .item-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .partner-item {
        margin-bottom: 30px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 95px;
        background-color: #fff;
        border-radius: 10px;

        img {
          max-width: 100%;
          max-height: 100%;
        }

        .partner-name {
          font-size: 14px;
          font-weight: 800;
        }
      }
    }
  }

  .footer {
    color: #fff;
    background-color: rgb(48, 48, 48);
    position: relative;
    margin-bottom: 0;

    .contant {
      .item {
        display: flex;
        font-size: 14px;

        .left {
          width: 70px;
        }

        .right {
          flex: 1;
        }
      }

      h3 {
        font-size: 20px;
        margin-bottom: 30px;
      }

      div {
        margin-bottom: 0.25rem;
      }

      i {
        padding-right: 5px;
      }
    }

    .code-box {
      display: flex;
      justify-content: space-around;
      margin-top: 45px;

      .code-item {
        width: 130px;

        p {
          font-size: 14px;
          text-align: center;
        }
      }
    }

    .filing-information {
      margin-top: 40px;
      padding: 20px;
      padding-bottom: 0;
      font-size: 12px;
      text-align: center;
      border-top: 2px solid #dedede;

      div {
        margin-bottom: 10px;
      }

      a {
        color: #999;
      }
    }
  }
}
</style>