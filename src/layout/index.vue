<template>
  <div class="layout">
    <!-- 顶部 -->
    <div class="top" id="top">
      <!-- 导航栏 -->
      <div class="container w_c">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
          <span>江若科技</span>
        </div>
        <nav class="nav">
          <div v-for="(item, index) in menulist" :key="index" class="menu-item" @click="jump(item)"
            @mouseenter="enter(item)" @mouseleave="leave(item)">
            <p>{{ item.name }}</p>
            <el-collapse-transition v-if="item.children">
              <div v-show="show" class="children">
                <div class="item" v-for="(item, index) in item.children" :key="index" @click="query(item.url)">
                  {{ item.name }}
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </nav>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { queryList } from '@/partner'

export default {
  name: 'layOut',
  data() {
    return {
      show: false,
      menulist: [
        {
          name: '首页',
          anchorPoint: 'carousel',
        },
        {
          name: '产品介绍',
          anchorPoint: 'production',
        },
        {
          name: '合作机构',
          anchorPoint: 'partner',
        },
        {
          name: '保函查询',
          children: queryList
        },
        {
          name: '公司简介',
          url: '/introduction',
        },
        {
          name: '人力资源',
          url: '/contact',
        },
      ],
    }
  },
  methods: {
    jump(item) {
      if (item.url && this.$route.path !== item.url) {
        this.$router.push({ path: item.url })
      }
      if (item.anchorPoint) {
        let el = document.querySelector(`.${item.anchorPoint}`)
        let top = document.querySelector('#top')
        if (this.$route.path === '/') {
          if (el) {
            this.animate(window, el.offsetTop - top.offsetHeight)
          }
          return
        }
        this.$router.push({ path: '/' })
        setTimeout(() => {
          let el = document.querySelector(`.${item.anchorPoint}`)
          let top = document.querySelector('#top')
          this.animate(window, el.offsetTop - top.offsetHeight)
        }, 0)
      }
    },
    animate(obj, target, callback) {
      // 先清除以前的定时器，只保留当前的一个定时器执行
      clearInterval(obj.timer)
      obj.timer = setInterval(() => {
        // 窗口高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 页面高度
        var documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // 滚动条位置
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10); Math.abs(window.pageYOffset - target) <= 1
        var step = (target - window.pageYOffset) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (((scrollTop + windowHeight >= documentHeight) && target > window.pageYOffset) || Math.abs(window.pageYOffset - target) <= 1) {
          clearInterval(obj.timer)
          callback && callback()
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        window.scroll(0, window.pageYOffset + step)
      }, 15)
    },
    query(url) {
      window.location.href = url
    },
    enter(item) {
      if (item.children) {
        this.show = true
      }
    },
    leave(item) {
      if (item.children) {
        this.show = false
      }
    }
  },
  // 进入这个页面之前
  // beforeRouteEnter(to, from, next) {
  //   console.log('oiashfal');
  //   next()
  // },
}
</script>
<style lang="less" scoped>
.layout {
  overflow-y: hidden;
  padding-top: 1.25rem;

  .top {
    position: fixed;
    top: 0;
    height: 1.25rem;
    width: 100%;
    z-index: 1000;
    background-color: rgb(28, 102, 222);
    box-shadow: 0px .025rem .15rem rgba(0, 0, 0, .1);

    .container {
      display: flex;
      justify-content: space-around;
      height: 1.25rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: .65rem;
        }

        span {
          font-size: 0.35rem;
          color: #fff;
          // font-weight: bold;
          font-family: '微软雅黑';
        }
      }

      .nav {
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 1.25rem;

        .menu-item {
          flex: 1;
          height: 0.5rem;
          text-align: center;
          line-height: 0.5rem;
          cursor: pointer;
          font-size: 0.25rem;
          color: #fff;
          transition: all 0.5s;

          .item {
            background-color: rgb(28, 102, 222);
          }

          .item:hover {
            color: #ce8a3c;
          }

          p:hover {
            color: #ce8a3c;
          }
        }

      }
    }
  }
}
</style>
