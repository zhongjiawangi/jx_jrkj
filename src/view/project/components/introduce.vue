<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-27 15:41:06
 * @LastEditTime: 2023-02-27 16:47:36
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 项目简介组件
 * @FilePath: \jx_jrkj\src\view\project\components\introduce.vue
-->
<template>
  <div class="introduce">
    <div class="content">
      <div class="content-item" :class="longtext.includes(key) ? 'longtext' : ''" v-for="(value, key) in infoDic"
        :key="key">
        <span class="content-item-label">{{ value }}</span>
        <span class="content-item-value">{{ info[key] || '暂无' }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'introduceComponent',
  props: {
    info: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  watch: {
    info(newVal) {
      if (newVal.bidStatus) {
        this.bidDic = {
          winBidderName: '中标单位',
          // constructorName: '项目负责人',
          // tenderOffer: '投标报价'
        }
      }
      switch (newVal.projectType) {
        case 1:
          this.infoDic = Object.assign(this.bidDic, this.commonDic, this.houseDic)
          break;
        case 2:
          this.infoDic = Object.assign(this.bidDic, this.commonDic, this.trafficDic)
          break;
        case 3:
          this.infoDic = Object.assign(this.bidDic, this.commonDic, this.waterDic)
          break;
        case 10:
          this.infoDic = Object.assign(this.bidDic, this.commonDic, this.otherDic)
          break;
        default:
          this.infoDic = this.commonDic
          break;
      }
    }
  },
  data() {
    return {
      longtext: ['projectPayType', 'performance', 'constructorLevel'],
      infoDic: {},
      commonDic: {
        insuredName: '招标方名称',
        biddingAgency: '招标代理',
        telephone: '联系电话',
        fundImplementation: '资金落实',
        performance: '业绩要求',
        keyRequirements: '关键岗位人员要求',
        projectInvestment: '项目投资(万元)',
        tenderDeposit: '保证金(万元)',
        tenderOpeningDeadlineDate: '保证金截止日期',
      },
      houseDic: {
        constructorWhether: '建造师是否出场',
        tenderOpeningWay: '开标办法',
        qualificationLevel: '资质等级',
        guaranteeLetterWay: '保函方式',
        constructorLevel: '建造师等级',
        projectPayType: '工程款支付方式',
        duration: '工期(天)',
        answeringCount: '答疑次数'
      },
      trafficDic: {
        constructorWhether: '建造师是否出场',
        tenderOpeningWay: '开标办法',
        qualificationLevel: '资质等级',
        guaranteeLetterWay: '保函方式',
        constructorLevel: '建造师等级',
        duration: '工期(天)',
        answeringCount: '答疑次数',
        creditLevel: '信用等级最低要求'
      },
      waterDic: {
        tenderOpeningWay: '开标办法',
        qualificationLevel: '资质等级',
        guaranteeLetterWay: '保函方式',
        constructorLevel: '建造师等级',
        duration: '工期(天)',
        answeringCount: '答疑次数',
      },
      otherDic: {
      },
      bidDic: {}
    }
  },
  created() {
    console.log(this.info);
  }
}
</script>

<style lang='less' scoped>
.introduce {
  .content {
    &-item {
      margin: 10px 0;
      display: inline-block;
      width: 50%;
      line-height: 1.5;

      &-label {
        display: inline-block;
        width: 140px;
        opacity: .7;
      }
    }
  }

  .longtext {
    width: 100%!important;
  }
}</style>
