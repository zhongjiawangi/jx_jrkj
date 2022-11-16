import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Layout = () => import("@/layout");
const Home = () => import("@/view/home/index.vue");
const About = () => import("@/view/about/index.vue");
const Manpower = () => import("@/view/manpower/index.vue");
const ManpowerList = () => import("@/view/manpower/view/list");
const Mobile = () => import("@/view/mobile/index.vue");
const Query = () => import("@/view/mobile/view/query");
const Info = () => import("@/view/mobile/view/query/info.vue");
const MainQuery = () => import("@/view/mobile/view/query/query.vue");
const HomeMobile = () => import("@/view/mobile/view/home/index.vue");

const routes = [
  {
    path: "/",
    // name: "layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "主页",
        component: Home,
      },
      {
        path: "/manpower",
        // name: "人力资源",
        component: Manpower,
        children: [
          {
            path: "/",
            name: "信息列表",
            component: ManpowerList,
          },
          {
            path: "/manpower/detail",
            name: "信息详情",
            component: () => import("@/view/manpower/view/detail"),
          }
        ]
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
    redirect: "/mobile/home",
    children: [
      {
        path: "/mobile/home",
        component: HomeMobile
      },
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
