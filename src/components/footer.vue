<template>
  <footer class="footerComponent">
    <div class="foot w_c">
      <div class="left">
        <h3>联系我们</h3>
        <div class="address">
          <i :class="address.icon"></i>地址：{{ address.address }}
        </div>
        <div class="telephone">
          <i :class="telephone.icon"></i>电话：{{
              telephone.telephone
          }}
        </div>
        <div class="email">
          <i :class="email.icon"></i>邮箱：{{ email.email }}
        </div>
      </div>
      <div class="right">
        <!-- <el-image :src="'@/assets/QRCode.jpg'">
                </el-image> -->
        <img src="@/assets/QRCode.jpg" alt="">
        <p>扫描微信公众号关注我们</p>
      </div>
    </div>
    <div class="filing-information">
      <span>Copyright ©2022 江西江若科技有限公司 版权所有</span>
      <a href="https://beian.miit.gov.cn/" target="_blank">赣ICP备2022005510号-1</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent',
  data() {
    return {
      address: {
        icon: 'el-icon-location-outline',
        address:
          '江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室',
      },
      telephone: {
        icon: 'el-icon-phone',
        telephone: '0791-8853610 / 13407938888',
      },
      email: {
        icon: 'el-icon-message',
        email: '23778989@qq.com',
      },
    }
  }
}
</script>

<style lang="less" scoped>
.footerComponent {
  padding: 1rem 0 0.9rem;
  color: #fff;
  background-color: rgba(40, 40, 40, 1);
  position: relative;

  .foot {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .left {
      h3 {
        font-size: 0.3rem;
        margin-bottom: 0.4rem;
      }

      div {
        margin-bottom: 0.25rem;
        font-size: .175rem;
      }

      i {
        padding-right: .0625rem;
      }
    }

    .right {
      img {
        width: 2.6875rem;
      }

      p {
        text-align: center;
        margin-top: .125rem;
        font-size: .2rem;
      }
    }
  }

  .filing-information {
    position: absolute;
    bottom: 0;
    height: 0.375rem;
    width: 100%;
    background-color: rgba(48, 48, 48, 1);
    text-align: center;
    line-height: 0.375rem;
    font-size: .15rem;
    color: #fff;
    // opacity: 0.7;

    a {
      color: #fff;
      margin-left: .25rem;
    }

    a:hover {
      color: red;
      text-decoration: underline;
      opacity: 0.7;
    }
  }
}
</style>
