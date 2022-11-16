<template>
    <div class="about">
        <div class="w_c container">
            <el-tabs type="border-card" tabPosition="left" @tab-click="tabClick">
                <el-tab-pane v-for="(item, index) in list" :key="index" :label="item.label">
                    <component ref="keys" :info="conpanyInfo[item.value]" :is="showComponent"></component>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
// import Detail from './components/detail.vue'
import { conpanyInfo } from '@/info'
import companyConceptModel from './components/companyConceptModel.vue'
import companyIntroduce from './components/companyIntroduce.vue'
import companyPosition from './components/companyPosition.vue'
import companyCondition from './components/companyCondition.vue'
import companyConstruction from './components/companyConstruction.vue'

export default {
    name: "aboutPage",
    components: {
        companyConceptModel,
        companyIntroduce,
        companyPosition,
        companyCondition,
        companyConstruction
    },
    data() {
        return {
            activeValue: 0,
            conpanyInfo,
            list: conpanyInfo.list,
            introduce: conpanyInfo.introduce,
            condition: conpanyInfo.condition,
            construction: conpanyInfo.construction,
            position: conpanyInfo.position,
            conceptModel: conpanyInfo.conceptModel,
            // active: '公司介绍',
            // list: [
            //     {
            //         title: "公司介绍",
            //         text: 'Introduce',
            //         text1: '政策合规、综合服务',
            //         contant: '江若科技是一家为金融机构提供电子投标保函系统、金融担保审批系统的专业金融科技公司。',
            //     },
            //     {
            //         title: "公司文化",
            //         text: 'Culture',
            //         text1: '真诚、实干、创新、责任',
            //         contant: '江若科技一直秉承“真诚、实干、创新、责任”的企业理念，在科技服务领域不断创新和改进，增强了电子招标的标准化程度，提高了企业资金运作效率，并有效地降低了承保项目的各类风险。',
            //     },
            //     {
            //         title: "联系我们",
            //         text: 'Contant',
            //         text1: '',
            //         contant: '江若科技是专业金融科技公司，为金融机构提供电子投标保函系统、金融担保审批系统。',
            //     },
            // ]
        }
    },
    computed: {
        showComponent() {
            switch (this.activeValue) {
                case 0:
                    return 'companyIntroduce';
                case 1:
                    return 'companyCondition';
                case 2:
                    return 'companyConstruction';
                case 3:
                    return 'companyPosition';
                case 4:
                    return 'companyConceptModel';

                default:
                    return 'companyIntroduce';
            }
        }
    },
    methods: {
        tabClick(el) {
            this.activeValue = Number(el.index)
        },
    }
}
</script>

<style lang="less" scoped>
.about {
    padding-top: 120px;
    height: calc(100vh - 100px);
    background-image: linear-gradient(to bottom left, rgba(245, 245, 245, 1), rgba(64, 158, 255, .5), rgba(255, 255, 255, 1));


    .container {
        min-height: 50vh;
        display: flex;
        align-content: center;

        .el-tabs {
            width: 100%;
        }
    }
}
</style>