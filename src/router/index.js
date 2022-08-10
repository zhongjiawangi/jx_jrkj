import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Layout = () => import("@/layout");
const Home = () => import("@/view/home/index.vue");
const About = () => import("@/view/about/index.vue");
// const Introduction = () => import("@/view/introduction/index.vue");
const Contact = () => import("@/view/contact/index.vue");
const Mobile = () => import("@/view/mobile/index.vue");
const Query = () => import("@/view/mobile/view/query");
const Info = () => import("@/view/mobile/view/query/info.vue");
const MainQuery = () => import("@/view/mobile/view/query/query.vue");

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "主页",
        component: Home,
      },
      {
        path: "/contact",
        name: "联系我们",
        component: Contact,
      },
      {
        path: "/introduction",
        name: "公司简介",
        component: About,
      },
    ],
  },
  {
    path: "/mobile",
    name: "手机端",
    component: Mobile,
    redirect: "/mobile/query",
    children: [
      {
        path: "/mobile/query",
        component: Query,
        children: [
          {
            path: "/",
            component: MainQuery,
          },
          {
            path: "/mobile/query/info",
            component: Info,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (window.timer) {
    clearInterval(window.timer);
  }
  next();
});

export default router;
