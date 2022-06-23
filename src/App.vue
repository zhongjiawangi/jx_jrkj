<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="top">
      <!-- 导航栏 -->
      <div class="container w_c">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
          <span class="test">剑邑快保</span>
        </div>
        <nav class="nav">
          <a
            v-for="(item, index) in menulist"
            :key="index"
            class="menu-item"
            @click="jump(item)"
          >
            {{ item.name }}
          </a>
        </nav>
      </div>
    </div>
    <router-view />
    <div class="filing-information">123</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menulist: [
        {
          name: "首页",
          id: "carousel",
        },
        {
          name: "服务",
          id: "serve",
        },
        {
          name: "投标电子保函",
          id: "guarantee",
        },
        {
          name: "公司简介",
          url: "/introduction",
        },
        {
          name: "联系我们",
          url: "/contact",
        },
      ],
    };
  },
  methods: {
    jump(item) {
        if (item.url && this.$route.path !== item.url) {
          this.$router.push({ path: item.url })
        }
        if (item.id) {
          if (this.$route.path === '/') {
            var top = document.querySelector(`.${item.id}`).offsetTop
            window.scroll(0,top)
            return 
          }
          this.$router.push({ path: '/' })
        }
    },
    scroll() {
      var scroll_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      console.log(scroll_top);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scroll)
  }
};
</script>
<style lang="less" scoped>
#app {
  overflow-y: hidden;
  margin-bottom: 0.375rem;
  .top {
    background-color: rgb(28, 102, 222);
    .container {
      display: flex;
      justify-content: space-around;
      height: 1.25rem;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.625rem;
        }
        span {
          font-size: 0.3rem;
          color: #fff;
        }
      }
      .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100px;
        .menu-item {
          display: block;
          margin: 0 0.25rem;
          height: 0.5rem;
          line-height: 0.5rem;
          cursor: pointer;
          font-size: 0.225rem;
          color: #fff;
          transition: all 0.5s;
        }
        .menu-item:hover {
          color: #999;
        }
      }
    }
  }

  .filing-information {
    position: fixed;
    bottom: 0;
    height: 0.375rem;
    width: 100%;
    background-color: #999;
    text-align: center;
    line-height: 0.375rem;
    color: #fff;
    opacity: 0.5;
  }
}
</style>
