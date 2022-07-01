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
                    <div v-for="(item, index) in menulist" :key="index" class="menu-item" @click="jump(item)" @mouseenter="enter(item)" @mouseleave="leave(item)">
                        <p>{{ item.name }}</p>
                        <div class="children" style="display: none">
                            <div class="item" v-for="(item, index) in item.children" :key="index"
                                @click="query(item.url)">
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <router-view />
        <div class="filing-information">这里是备案信息</div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'layOut',
    data() {
        return {
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
                    children: [
                        {
                            name: '剑邑快保',
                            url: 'https://www.ee.jxjrtech.com/#/query'
                        },
                        {
                            name: '九江工担',
                            url: 'https://ee.jjgdgs.com.cn/#/query'
                        }
                    ]
                },
                {
                    name: '公司简介',
                    url: '/introduction',
                },
                {
                    name: '联系我们',
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
        scroll() {
            var scroll_top =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0
            // var scrool_bottom = document.documentElement
            return scroll_top
        },
        animate(obj, target, callback) {
            // console.log(callback);  callback = function() {}  调用的时候 callback()

            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.timer)
            obj.timer = setInterval(function () {
                // 窗口高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                // 页面高度
                var documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
                // 滚动条位置
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                // 步长值写到定时器的里面
                // 把我们步长值改为整数 不要出现小数的问题
                // var step = Math.ceil((target - obj.offsetLeft) / 10);
                var step = (target - window.pageYOffset) / 10
                step = step > 0 ? Math.ceil(step) : Math.floor(step)
                if ((scrollTop + windowHeight >= documentHeight) || window.pageYOffset == target) {
                    // 停止动画 本质是停止定时器
                    clearInterval(obj.timer)
                    // 回调函数写到定时器结束里面
                    // if (callback) {
                    //     // 调用函数
                    //     callback();
                    // }
                    callback && callback()
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
                // obj.style.left = window.pageYOffset + step + 'px';
                window.scroll(0, window.pageYOffset + step)
            }, 15)
        },
        query(url) {
            window.location.href = url
        },
        enter(item) {
            if (item.children) {
                $('.children').fadeIn(1000)
            }
        },
        leave(item) {
            if (item.children) {
                $('.children').fadeOut(1000)
            }
        }
    },
    mounted() {
        // window.addEventListener('scroll', this.scroll)
    }
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

        .container {
            display: flex;
            justify-content: space-around;
            height: 1.25rem;

            .logo {
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: .8rem;
                }

                span {
                    font-size: 0.3rem;
                    color: #fff;
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
                    font-size: 0.225rem;
                    color: #fff;
                    transition: all 0.5s;

                    .item {
                        background-color: rgb(28, 102, 222);
                    }
                    .item:hover {
                        color: #999;
                    }
                    p:hover {
                        color: #999;
                    }
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
