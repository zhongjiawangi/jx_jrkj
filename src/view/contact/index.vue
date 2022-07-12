<template>
    <div class="contactUs">
        <div class="box">
            <div class="bg" ref="bg"></div>
            <div class="contant w_c">
                <h1>开发负责人（南昌）</h1>
                <p>开发负责人（南昌）| 1名 | 8k-15k（14薪）</p>
                <p>【岗位职责】</p>
                <p v-for="(item, index) in duty" :key="item">
                    {{ index + 1 }}.{{ item }}
                </p>
                <p>【任职要求】</p>
                <p v-for="(item, index) in Require" :key="item">
                    {{ index + 1 }}.{{ item }}
                </p>
                <p>【工作地址】</p>
                <p>江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1003室</p>
                <p>【联系方式】</p>
                <p>简历投递邮箱：23778989@qq.com 投递格式：意向岗位名称-姓名-联系方式-了解到该岗位的渠道（官网）</p>
            </div>
            <!-- <div class="contant">
                <h2>
                    这里是一段文字
                </h2>
                <p>
                    联系电话：{{ telephone }} 微信：{{ wechat }} 地址：{{
                        address
                    }}
                </p>
                <div class="contact-information">
                    <div
                        class="item"
                        v-for="(item, index) in contactInfo"
                        :key="index"
                    >
                        <el-tooltip
                            :content="item.value"
                            placement="top"
                            effect="light"
                        >
                            <div class="icon"><img :src="item.img" alt="" /></div>
                        </el-tooltip>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import qq from '@/assets/contact_img/QQ.png'
import email from '@/assets/contact_img/email.png'
import wechat from '@/assets/contact_img/wechat.png'
import weibo from '@/assets/contact_img/weibo.png'
export default {
    name: 'contactUs',
    data() {
        return {
            timer: null,
            step: 10,
            index: 1,
            duty: [
                '负责公司技术部人员管理，分配任务，制定计划；',
                '负责公司信息化软件的管理（主要技术已经给第三方公司做，加入项目组接手项目）；',
                '负责公司信息化软件的开发，根据需要迭代升级系统。',
                '根据公司业务发展，开发其他系统、网站等。',
            ],
            Require: [
                '熟悉Java开发语言，掌握Java基础、IO,多线程、集合、JVM等，熟悉面向对象程序设计；',
                '熟练使用Springboot，Mybatis,Dubbo,Springcloud等主流框架；',
                '熟悉Redis等常用的中间件；熟悉Mysql，Linux等；',
                '有一定的项目管理经验。',
            ],
            // contactInfo: [QQ, wechat, email, weibo],
            contactInfo: [
                {
                    name: 'QQ',
                    img: qq,
                    value: '这是QQ'
                },
                {
                    name: '微信',
                    img: wechat,
                    value: '这是微信'
                },
                {
                    name: '邮箱',
                    img: email,
                    value: '这是邮箱'
                },
                {
                    name: '微博',
                    img: weibo,
                    value: '这是微博'
                },
            ],
            telephone: '0791-8853610 / 13407938888',
            wechat: '13407938888',
            address:
                '江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1003室',
        }
    },
    methods: {
        bgScroll() {
            var { bg } = this.$refs
            if (this.index < 500) {
                this.index++
            } else {
                this.index = 0
            }
            const left = (-this.index * this.step) / 80 + 'rem'
            bg.style.left = left
        },
        stop() {
            clearInterval(this.timer)
        },
    },
    mounted() {
        this.timer = setInterval(() => {
            this.bgScroll()
        }, 200)
    },
    beforeDestroy() {
        this.stop()
    },
}
</script>

<style lang="less" scoped>
.contactUs {
  background-image: linear-gradient(to bottom right, rgba(255, 255, 255, 1), rgba(64, 158, 255, .5), rgba(245, 245, 245, 1));

    // overflow: hidden;
    .box {
        position: relative;
        width: 100%;
        height: calc(100vh - 1.25rem);
        overflow: hidden;

        // .bg {
        //     position: absolute;
        //     z-index: -1;
        //     width: 350%;
        //     height: 100%;
        //     background-image: url('@/assets/contact_img/contact_bg.jpg');
        //     background-repeat: repeat-x;
        //     transition: all 0.5s;
        // }

        .contant {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #333;
            font-size: 0.2rem;

            h1 {
                font-size: 0.5rem;
                margin-bottom: .8rem;
            }

            p {
                width: 50%;
                margin: 0.0625rem 0;
                // opacity: 0.6;
            }

            .contact-information {
                display: flex;
                margin-top: 0.25rem;

                .item {
                    margin: 0 0.15rem;
                    cursor: pointer;

                    .icon {
                        width: 0.75rem;
                        height: 0.75rem;
                        border-radius: 50%;
                        border: 0.0125rem solid #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img {
                            width: .5rem;
                        }
                    }
                }
            }
        }
    }
}
</style>
