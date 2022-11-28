import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Layout = () => import("@/layout");
const Home = () => import("@/view/home/index.vue");
const About = () => import("@/view/about/index.vue");
const Manpower = () => import("@/view/manpower/index.vue");
const ManpowerList = () => import("@/view/manpower/view/list");
const Mobile = () => import("@/view/mobile/index.vue");
// const Query = () => import("@/view/mobile/view/query");
// const Info = () => import("@/view/mobile/view/query/info.vue");
// const MainQuery = () => import("@/view/mobile/view/query/query.vue");
const HomeMobile = () => import("@/view/mobile/view/home/index.vue");
const ManpowerMobile = () => import("@/view/mobile/view/manpower/index.vue");
const ManpowerListMobile = () => import("@/view/mobile/view/manpower/list.vue");
const ManpowerDetailMobile = () =>
  import("@/view/mobile/view/manpower/detail.vue");

function fIsMobile() {
  return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function checkEquipment(to, from, next) {
  const isMobile = fIsMobile();
  const reg_mobile = /\/mobile/;
  if (isMobile && reg_mobile.test(to.path)) {
    next();
    return;
  }
  if (!isMobile && !reg_mobile.test(to.path)) {
    next();
    return;
  }
  if (isMobile) {
    next({ path: "/mobile" });
  } else {
    next({ path: "/" });
  }
}
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "主页",
        component: Home,
      },
      {
        path: "/manpower",
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
          },
        ],
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
    component: Mobile,
    children: [
      {
        path: "/",
        name: "手机主页",
        component: HomeMobile,
      },
      {
        path: "/mobile/manpower",
        component: ManpowerMobile,
        children: [
          {
            path: "/",
            name: "手机人力列表",
            component: ManpowerListMobile,
          },
          {
            path: "/mobile/manpower/detail",
            name: "移动人力详情",
            component: ManpowerDetailMobile,
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach(checkEquipment);

export default router;
