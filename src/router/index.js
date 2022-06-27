import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('@/view/home/index.vue')
const Introduction = () => import('@/view/introduction/index.vue')
const Contact = () => import('@/view/contact/index.vue')

const routes = [
    {
        path: '/',
        name: '主页',
        component: Home,
    },
    {
        path: '/contact',
        name: '联系我们',
        component: Contact,
    },
    {
        path: '/introduction',
        name: '公司简介',
        component: Introduction,
    },
]

const router = new VueRouter({
    routes,
})
router.beforeEach((to, from, next) => {
    if (window.timer) {
        clearInterval(window.timer)
    }
    next()
})

export default router
