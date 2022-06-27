<template>
    <div class="introduction">
        <div class="w_c">
            <!-- 关于我们 -->
            <div class="about">
                <div class="left">
                    <div class="title">
                        <p>ABOUT US</p>
                        <h2>关于我们</h2>
                    </div>
                    <div class="text">
                        <p v-for="(item, index) in aboutInfo.text" :key="index">
                            {{ item }}
                        </p>
                    </div>
                </div>
                <div class="right">
                    <el-image :src="aboutInfo.imgurl"></el-image>
                </div>
            </div>
        </div>
        <!-- 企业文化 -->
        <div id="culture">
            <div class="w_c">
                <div class="culture">
                    <div class="left">
                        <el-image :src="cultureinfo.imgurl"></el-image>
                    </div>
                    <div class="right">
                        <div class="title">
                            <p>CORPORATE CULTURE</p>
                            <h2>企业文化</h2>
                        </div>
                        <div class="contant" v-for="(item, index) in cultureinfo.cultures" :key="index">
                            <div class="img">
                                <el-image :src="item.img"></el-image>
                            </div>
                            <div class="text">
                                <p>{{ item.name }}</p>
                                <p>
                                    <span>{{ item.explain }}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 员工福利 -->
        <div class="welfare ">
            <MenuTitle :title="'员工福利'" />
            <div class="photo_box">
                <el-carousel :interval="3000" type="card" height="6rem">
                    <el-carousel-item v-for="(item, index) in welfareInfo" :key="index">
                        <el-card>
                            <div class="photo">
                                <img :src="item.imgurl" alt="">
                                <p>{{ item.text }}</p>
                            </div>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- <div class="box">
                <img src="@/assets/introduction_img/next.png" class="next" alt="">
                <img src="@/assets/introduction_img/next.png" class="prev" alt="">
                <div class="photo-box">
                    <div class="photos">
                        <el-card v-for="(item, index) in welfareInfo" :key="index">
                                <img :src="item.imgurl" alt="">
                                <p class="text_box">
                                    {{ item.text }}
                                </p>
                        </el-card>
                    </div>
                </div>
            </div> -->
        </div>
        <Footer />
    </div>
</template>

<script>
import about_img from '@/assets/introduction_img/about_img.png';
import culture_img from '@/assets/introduction_img/culture_img.png'
import position_img from '@/assets/introduction_img/position.png'
import mission_img from '@/assets/introduction_img/mission.png'
import value_img from '@/assets/introduction_img/value.png'
import MenuTitle from '@/components/menuTitle.vue'
import Footer from '@/components/footer.vue';
export default {
    name: 'companyIntroduction',
    data() {
        return {
            aboutInfo: {
                imgurl: about_img,
                text: [
                    '这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介',
                    '这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介',
                    '这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介这是公司简介',
                ],
            },
            cultureinfo: {
                imgurl: culture_img,
                cultures: [
                    {
                        img: position_img,
                        name: '企业定位',
                        explain: '做金融保函行业领军品牌。',
                    },
                    {
                        img: mission_img,
                        name: '企业使命',
                        explain:
                            '使数十万承包人卸下资金紧缺的包袱，保障发包人的合法权益。',
                    },
                    {
                        img: value_img,
                        name: '企业价值观',
                        explain: '求精、创新、崇德、共赢 。',
                    },
                ],
            },
            welfareInfo: [
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
                {
                    text: '这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍',
                    imgurl: culture_img
                },
            ]
        }
    },
    components: { MenuTitle, Footer },
    created() {
        window.scroll(0, 0)
    }
}
</script>

<style lang="less" scoped>
.introduction {
    .title {
        border-left: 0.025rem solid rgb(28, 102, 222);
        padding: 0.125rem 0;
        padding-left: 0.25rem;
        margin: 0.375rem 0;
        font-size: 0.35rem;

        p {
            color: #999;
            opacity: 0.5;
        }

        h2 {
            font-size: 0.35rem;
            font-weight: 800;
        }
    }

    .about,
    .culture {
        display: flex;
        justify-content: space-around;
        padding: 0.625rem 0;

        .left,
        .right {
            flex: 1;
        }
    }

    .about {
        .left {
            margin-right: 0.375rem;

            .text {
                p {
                    // height: .225rem;
                    line-height: 0.35rem;
                    font-size: 0.2rem;
                    color: #333;
                    text-indent: 2em;
                }
            }
        }
    }

    .welfare {
        padding: 0 1rem;

        .photo_box {
            margin: 1.5rem 0;
            margin-top: 1rem;

            /deep/.el-carousel__arrow {
                background-color: rgba(31, 45, 61, 0.3);
                width: .5rem;
                height: .5rem;
                font-size: .2rem;
            }

            .el-card {
                // height: 50px;
                font-size: .3rem;

                .photo {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    p {
                        padding: 0 .2rem;
                    }
                }
            }
        }
    }

    #culture {
        background: url('@/assets/introduction_img/introduction_bg.jpg') no-repeat center, top;
    }

    .culture {

        // height: 560px;
        .right {
            .contant {
                display: flex;
                align-items: center;
                margin-bottom: 0.25rem;

                .text {
                    padding-left: 0.25rem;

                    p {
                        margin: 0.0625rem 0;
                        font-size: 0.2rem;
                        font-weight: 800;

                        span {
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
}
</style>
