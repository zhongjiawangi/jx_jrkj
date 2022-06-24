<template>
    <div class="home">
        <!-- 轮播图 -->
        <div class="carousel">
            <el-carousel :interval="5000" height="10rem">
                <el-carousel-item
                    v-for="(item, index) in carousel"
                    :key="index"
                >
                    <CarouselItem
                        :text1="item.text1"
                        :text2="item.text2"
                        :text3="item.text3"
                        :imgurl="item.imgurl"
                    />
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- 保函服务 -->
        <div class="serve">
            <div class="w_c">
                <MenuTitle
                    :title="'保函服务'"
                    :tip="'一键申请、最快3分钟出函、全程在线办理'"
                />
                <div class="serve-box">
                    <ul>
                        <li v-for="(item, index) in serveList" :key="index">
                            <div><i :class="item.icon"></i></div>
                            <span>{{ item.title }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 项目流程 -->
        <div class="process">
            <div class="w_c">
                <MenuTitle
                    :title="'项目流程'"
                    :tip="'一键申请、最快3分钟出函、全程在线办理'"
                />
                <div class="step">
                    <div
                        class="step-item"
                        v-for="(item, index) in stepInfo"
                        :key="index"
                    >
                        <el-progress
                            type="dashboard"
                            :percentage="item.percentage"
                            color="rgb(32, 160, 255)"
                            :status="item.status ? item.status : null"
                        ></el-progress>
                        <div class="title">
                            <span>{{ item.step }}</span>
                        </div>
                        <!--  <el-steps :active="2" align-center>
                        <el-step
                            title="步骤1"
                            description="这是一段很长很长很长的描述性文字"
                        ></el-step>
                        <el-step
                            title="步骤2"
                            description="这是一段很长很长很长的描述性文字"
                        ></el-step>
                        <el-step
                            title="步骤3"
                            description="这是一段很长很长很长的描述性文字"
                        ></el-step>
                        <el-step
                            title="步骤4"
                            description="这是一段很长很长很长的描述性文字"
                        ></el-step>
                    </el-steps> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 项目优势 -->
        <div class="advantage">
            <div class="w_c">
                <MenuTitle
                    :title="'项目优势'"
                    :tip="'一键申请、最快3分钟出函、全程在线办理'"
                />
                <ul class="item-box">
                    <li
                        class="advantage-item"
                        v-for="(item, index) in advantageList"
                        :key="index"
                    >
                        <span><i>0</i>{{ index + 1 }}</span>
                        <h3>{{ item.text1 }}</h3>
                        <p>{{ item.text2 }}</p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 合作机构 -->
        <div class="partner">
            <div class="w_c">
                <MenuTitle
                    :title="'合作机构'"
                    :tip="'一键申请、最快3分钟出函、全程在线办理'"
                />
                <div class="partner-box">
                    <el-card
                        shadow="hover"
                        v-for="(item, index) in partnerList"
                        :key="index"
                    >
                        <el-image
                            :src="item.imgUrl"
                            :fit="fit"
                            v-if="item.imgUrl"
                        ></el-image>
                        <div v-else>{{ item.name }}</div>
                    </el-card>
                </div>
            </div>
        </div>
        <!-- footer -->
        <Footer
            :address="contact.address"
            :telephone="contact.telephone"
            :email="contact.email"
        />
    </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem'
import imgurl1 from '@/assets/img1.png'
import MenuTitle from '@/components/menuTitle.vue'
import Footer from '@/components/footer.vue'

export default {
    name: 'homePage',
    components: {
        CarouselItem,
        MenuTitle,
        Footer,
    },
    data() {
        return {
            carousel: [
                {
                    imgurl: imgurl1,
                    text1: '这是第一段内容',
                    text2: '这是第二段内容',
                    text3: '这是第三段内容',
                },
                {
                    imgurl: imgurl1,
                    text1: '这是第一段内容',
                    text2: '这是第二段内容',
                    text3: '这是第三段内容',
                },
                {
                    imgurl: imgurl1,
                    text1: '这是第一段内容',
                    text2: '这是第二段内容',
                    text3: '这是第三段内容',
                },
                {
                    imgurl: imgurl1,
                    text1: '这是第一段内容',
                    text2: '这是第二段内容',
                    text3: '这是第三段内容',
                },
            ],
            serveList: [
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
                {
                    title: '电子投标保函',
                    icon: 'el-icon-s-opportunity',
                },
            ],
            stepInfo: [
                {
                    percentage: 0,
                    step: '第一步',
                },
                {
                    percentage: 25,
                    step: '第二步',
                },
                {
                    percentage: 50,
                    step: '第三步',
                },
                {
                    percentage: 75,
                    step: '第四步',
                },
                {
                    percentage: 100,
                    step: '出函成功',
                    status: 'success',
                },
            ],
            advantageList: [
                {
                    text1: '解决资金问题',
                    text2: '无抵押、无担保、无需冻结资金',
                },
                {
                    text1: '办理流程简便',
                    text2: '材料简单、方便办理、事实出函、高效快捷',
                },
                {
                    text1: '电子信息化',
                    text2: '信息化、线上化，电子留痕可追溯',
                },
                {
                    text1: '防伪性',
                    text2: '真实性、防伪性，方便核验真伪',
                },
            ],
            partnerList: [
                {
                    name: '丰城市剑邑融资担保有限公司',
                    imgUrl: '',
                },
                {
                    name: '九江市工业融资担保有限公司',
                    imgUrl: '',
                },
            ],
            contact: {
                address: {
                    icon: 'el-icon-location-outline',
                    address:
                        '江西省南昌市红谷滩区凤凰中大道1000号南昌万达中心B3写字楼-1004室',
                },
                telephone: {
                    icon: 'el-icon-phone',
                    telephone: '0791-8853610 / 13407938888',
                },
                email: {
                    icon: 'el-icon-message',
                    email: '这是邮箱',
                },
            },
        }
    },
}
</script>

<style lang="less" scoped>
.home {
    .carousel {
        height: 10rem;
        background-color: rgb(28, 102, 222);
        .carousel-item {
            height: 10rem;
            text-align: center;
            background-color: pink;
        }
        /deep/.el-carousel__indicators {
            display: none;
        }
        /deep/.el-carousel__arrow {
            width: 0.75rem;
            height: 0.75rem;
            background-color: rgba(31, 45, 61, 0.3);
            i {
                font-size: 30px;
            }
        }
    }
    .serve {
        // height: 10rem;
        .serve-box {
            margin: 1.65rem 0;
            ul {
                display: flex;
                flex-wrap: wrap;
                li {
                    width: 3.75rem;
                    height: 1.875rem;
                    border: 1px solid #dedede;
                    margin-left: -0.0125rem;
                    margin-bottom: -0.0125rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    div i {
                        font-size: 0.625rem;
                    }
                    span {
                        margin: 0.0625rem 0;
                    }
                }
            }
        }
    }
    .process {
        .step {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1.65rem 0;
            .step-item {
                flex: 1;
                text-align: center;
                .title {
                    margin: 0.45rem 0;
                    font-size: 24px;
                    color: rgb(32, 160, 255);
                }
            }
        }
    }
    .advantage {
        .item-box {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin: 1.65rem 0;
            .advantage-item {
                flex: 1;
                padding: 0.3125rem;
                height: 2.75rem;
                font-size: 0.2rem;
                color: rgb(82, 128, 255);
                background: url('@/assets/border.png') no-repeat left top;
                span {
                    font-size: 0.45rem;
                    font-style: italic;
                    i {
                        opacity: 0.5;
                    }
                }
                h3 {
                    margin-top: 0.25rem;
                    font-size: 0.375rem;
                    font-weight: 800;
                }
                p {
                    margin-top: 0.1rem;
                    color: #999;
                }
            }
        }
    }
    .partner {
        .partner-box {
            display: flex;
            margin: 1.65rem 0;
            min-width: 95px;
            .el-card {
                margin-left: 0.5rem;
                margin-bottom: 0.1875rem;
                width: 4.5rem;
                height: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 0.225rem;
                font-weight: 800;
                cursor: pointer;
            }
        }
    }
}
</style>
