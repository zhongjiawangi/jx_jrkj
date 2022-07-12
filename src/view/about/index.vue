<template>
    <div class="about">
        <div class="w_c container">
            <div class="left">
                <dl>
                    <dt>关于我们</dt>
                    <!-- <dd @click="active = 1" :class="active === 1 ? 'active' : ''">公司介绍</dd>
                    <dd @click="active = 2" :class="active === 2 ? 'active' : ''">公司文化</dd>
                    <dd @click="active = 3" :class="active === 3 ? 'active' : ''">运营定位</dd>
                    <dd @click="active = 4" :class="active === 4 ? 'active' : ''">产品服务</dd>
                    <dd @click="active = 5" :class="active === 5 ? 'active' : ''">联系我们</dd> -->
                    <dd v-for="(item, index) in list" :key="index" @click="active = item.title"
                        :class="active === item.title ? 'active' : ''">{{ item.title }}</dd>
                </dl>
            </div>
            <div class="right">
                <div v-for="(item, index) in list" :key="index">
                    <Detail v-if="active === item.title" :title="item.title" :text="item.text" :text1="item.text1"
                        :contant="item.contant">
                        <template v-if="item.title === '联系我们'" #top>
                            <div class="slot">
                                <div>
                                    <img src="@/assets/about_img/telephone.png" alt="">
                                </div>
                                <div>
                                    <p>客服热线:0791-8853610 / 13407938888</p>
                                    <p>邮箱:23778989@qq.com</p>
                                </div>
                            </div>
                        </template>
                        <template v-if="item.title === '联系我们'" #contant>
                            <div class="slot">
                                <div>
                                    <img src="@/assets/about_img/address.png" alt="">
                                </div>
                                <div>
                                    <p>公司名称:江西江若科技有限公司</p>
                                    <p>联系地址:江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室</p>
                                </div>
                            </div>
                        </template>
                    </Detail>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Detail from './components/detail.vue'
export default {
    name: "aboutPage",
    components: { Detail },
    data() {
        return {
            active: '公司介绍',
            list: [
                {
                    title: "公司介绍",
                    text: 'Introduce',
                    text1: '政策合规、综合服务',
                    contant: '江若科技是一家为金融机构提供电子投标保函系统、金融担保审批系统的专业金融科技公司。',
                },
                {
                    title: "公司文化",
                    text: 'Culture',
                    text1: '真诚、实干、创新、责任',
                    contant: '江若科技一直秉承“真诚、实干、创新、责任”的企业理念，在科技服务领域不断创新和改进，增强了电子招标的标准化程度，提高了企业资金运作效率，并有效地降低了承保项目的各类风险',
                },
                {
                    title: "联系我们",
                    text: 'Contant',
                    text1: '',
                    contant: '江若科技是专业金融科技公司，为金融机构提供电子投标保函系统、金融担保审批系统',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.about {
    padding-top: 1.5rem;
    color: #fff;
    height: calc(100vh - 1.25rem);
    // background: url('@/assets/about_img/bg1.jpg') no-repeat top center;
    // background-size: cover;
    // background-image: linear-gradient(rgba(28, 102, 222, 1), rgba(28, 102, 222, .1));
    background-image: linear-gradient(to bottom left, rgba(245, 245, 245, 1), rgba(64, 158, 255, .5), rgba(255, 255, 255, 1));


    .container {
        height: 50vh;
        // background-color: #dedede;
        display: flex;
        align-content: center;

        .left {
            width: 20%;
            margin-top: 1rem;

            dl {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-content: center;
                justify-content: flex-start;
            }

            dd,
            dt {
                padding-left: .125rem;
                height: .625rem;
                line-height: .625rem;
                font-size: .35rem;
            }

            dd {
                cursor: pointer;
                font-size: .3rem;
                vertical-align: middle;
            }

            .active {
                color: #ce8a3c;
                font-size: .3rem;
            }

            .active::before {
                content: '';
                display: inline-block;
                margin-right: .0625rem;
                width: .08rem;
                height: .08rem;
                border: .06rem solid #ce8a3c;
                border-radius: 50%;
            }

            .active::after {
                content: '——';
                margin-left: .05rem;
                color: #ce8a3c;
            }
        }

        .right {
            flex: 1;

            .slot {
                display: flex;
                margin: .25rem;

                img {
                    margin-right: .125rem;
                }
            }
        }
    }
}
</style>