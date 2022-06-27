<template>
    <div class="contactUs">
        <div class="box">
            <div class="bg" ref="bg"></div>
            <div class="contant">
                <h2>
                    成为一家客户信赖、行业尊重的专业提供保函服务的非融资性担保公司
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
            </div>
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
                '江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室',
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
    // overflow: hidden;
    .box {
        position: relative;
        width: 100%;
        height: calc(100vh - 1.25rem);
        overflow: hidden;
        .bg {
            position: absolute;
            z-index: -1;
            width: 350%;
            height: 100%;
            background-image: url('@/assets/contact_bg.jpg');
            background-repeat: repeat-x;
            transition: all 0.5s;
        }
        .contant {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            h2 {
                font-size: 0.625rem;
            }
            p {
                margin: 0.0625rem 0;
                opacity: 0.6;
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
                        border: 1px solid #fff;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        img {
                          width: 40px;
                        }
                    }
                }
            }
        }
    }
}
</style>
