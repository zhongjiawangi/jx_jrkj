<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-27 10:10:43
 * @LastEditTime: 2023-02-28 11:06:27
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 项目介绍
 * @FilePath: \jx_jrkj\src\view\project\components\project.vue
-->
<template>
  <div class="project" @click="goDetail">
    <div class="project-icon">
      <img :src="find(projectTypeList, info.projectType, 'icon')" alt="">
    </div>
    <div class="project-info">
      <div class="project-info-name">
        <span @click.stop="">{{ info.projectName }}</span>
      </div>
      <div class="project-info-tags">
        <div class="tag tag-city">
          <span>{{ findCity() }}</span>
        </div>
        <div class="tag tag-type">
          <span>{{ find(projectTypeList, info.projectType, 'name') }}</span>
        </div>
        <div class="tag" :class="info.bidStatus == 1 ? 'tag-status-open' : 'tag-status-unopen'">
          <span>{{ info.bidStatus == 1 ? '已开标' : '未开标' }}</span>
        </div>
        <div class="tag tag-status-bids" v-show="info.bidCondition">
          <span>{{ find(bidStatusList, info.bidCondition, 'name') }}</span>
        </div>
        <div class="tag tag-new" v-show="isNew(info.createTime)">
          <span>今日上新</span>
        </div>
        <div class="tag tag-new" v-show="todayBids">
          <span>今日开标</span>
        </div>
        <div class="tag tag-new" v-show="tomorrowBid">
          <span>明日开标</span>
        </div>
        <div class="tag tag-new" v-show="threeDaysBid">
          <span>三天内开标</span>
        </div>
        <div class="tag tag-new" v-show="weekBid">
          <span>一周内开标</span>
        </div>
      </div>
      <div class="project-info-content">
        <slot>
          <div class="container" v-if="info.haveTenderFile">
            <div class="project-info-content-item" v-for="(value, key) in infoDic" :key="key">
              <span class="project-info-content-item-label">
                <span>
                  {{ value }}
                </span>
              </span>
              <span class="project-info-content-item-value">
                <span v-if="key == 'tenderDeposit' || key == 'projectInvestment'">
                  <span>{{ addUnit(info[key], '万') }}</span>
                </span>
                <span v-else>
                  <span class="value" v-if="info.bidCondition == 1">{{ info.delayTime || '时间待定' }}</span>
                  <span class="value" v-else>{{ info[key] || '' }}</span>
                </span>
              </span>
            </div>
          </div>
          <div class="container" v-else>
            <div class="project-info-content-item">
              <span class="project-info-content-item-label">
                项目投资：
              </span>
              <span class="project-info-content-item-value">
                {{ addUnit(info.projectInvestment, '万') }}
              </span>
            </div>
            <div class="project-info-content-item">
              <span class="project-info-content-item-label">
                标书获取中
              </span>
            </div>
          </div>
          <div class="container">
            <div class="project-info-content-item hide" v-for="(value, key) in infoDic_hide" :key="key">
              <span class="project-info-content-item-label">
                <span>
                  {{ value }}
                </span>
              </span>
              <span class="project-info-content-item-value">
                <span v-if="key == 'tenderDeposit'">
                  {{ addUnit(info[key], '万') }}
                </span>
                <span v-else>
                  {{ info[key] || '' }}
                </span>
              </span>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import house_icon from 'img/house.png'
import traffic_icon from 'img/traffic.png'
import water_icon from 'img/water.png'
import other_icon from 'img/other.png'

export default {
  name: 'projectComponent',
  props: {
    info: {
      type: Object,
      default() {
        return {}
      },
      required: true,
    }
  },
  data() {
    return {
      projectTypeList: [
        {
          name: "房建",
          value: 1,
          icon: house_icon
        },
        {
          name: "交通",
          value: 2,
          icon: traffic_icon
        },
        {
          name: "水利",
          value: 3,
          icon: water_icon
        },
        {
          name: "其他",
          value: 10,
          icon: other_icon
        },
      ],
      bidStatusList: [
        { name: "已延期", value: 1 },
        { name: "已流标", value: 2 },
        { name: "暂停开标", value: 3 },
        { name: "终止招标", value: 4 },
        { name: "重新开标", value: 5 },
      ],
      infoDic: {
        projectInvestment: '项目投资：',
        tenderDeposit: '项目保证金：',
        tenderOpeningDate: '开标时间：',
        tenderOpeningDeadlineDate: '保证金截止时间：'
      },
      infoDic_hide: {
        qualificationLevel: '企业资质：',
        tenderOpeningWay: '开标办法：',
        insuredName: '招标单位：',
        constructorLevel: '建造师等级：',
      },
      openDic: {
        winBidderName: '中标单位：',
        // constructorName: '建造师：',
        tenderCompanyCount: '投标家数：',
        insuredName: '招标单位：',
      }
    }
  },
  computed: {
    todayBids() {
      if (this.info.bidCondition) {
        return this.info.delayTime ? new Date(this.info.delayTime).toLocaleDateString() == new Date().toLocaleDateString() : false
      } else {
        return new Date(this.info.tenderOpeningDate).toLocaleDateString() == new Date().toLocaleDateString()
      }
    },
    tomorrowBid() {
      if (this.info.bidCondition) {
        return this.info.delayTime ? new Date(this.info.delayTime).toLocaleDateString() == new Date(new Date().getTime() + 1000 * 3600 * 24).toLocaleDateString() : false
      } else {
        return new Date(this.info.tenderOpeningDate).toLocaleDateString() == new Date(new Date().getTime() + 1000 * 3600 * 24).toLocaleDateString()
      }
    },
    threeDaysBid() {
      const max = new Date(new Date().setHours(0, 0, 0, 0)).getTime() + 1000 * 3600 * 24 * 2
      const min = new Date(new Date().setHours(0, 0, 0, 0)).getTime() + 1000 * 3600 * 24 * 4
      const open = new Date(this.info.delayTime || this.info.tenderOpeningDate).getTime()
      if (this.info.bidCondition) {
        return this.info.delayTime ? min < open && max >= open : false
      } else {
        return min < open && max >= open
      }
    },
    weekBid() {
      const max = new Date(new Date().setHours(0, 0, 0, 0)).getTime() + 1000 * 3600 * 24 * 8
      const min = new Date(new Date().setHours(0, 0, 0, 0)).getTime() + 1000 * 3600 * 24 * 4
      const open = new Date(this.info.delayTime || this.info.tenderOpeningDate).getTime()
      if (this.info.bidCondition) {
        return this.info.delayTime ? min < open && max >= open : false
      } else {
        return min < open && max >= open
      }
    }
  },
  methods: {
    goDetail() {
      // this.$login.install()
      this.$router.push({
        path: '/project/detail',
        query: {
          id: this.info.id
        }
      })
    },
    isNew(time) {
      const now = new Date().getTime()
      const target = new Date(time).getTime()
      return (now - target) <= 1000 * 24 * 3600
    },
    findCity() {
      return this.info.cityCode ? `${this.find(this.provinceList, this.info.provinceCode, 'label')}-${this.find(this.cityList, this.info.cityCode, 'label')}-${this.find(this.areaList, this.info.areaCode, 'label')}` : ''
    },
  },
  created() {
    if (this.info.bidStatus) {
      this.infoDic_hide = this.openDic
    }
  }
}
</script>

<style lang='less' scoped>
.project {
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid #E1E4E6;
  border-radius: 12px;

  &-icon {
    margin-right: 16px;

    img {
      width: 100px;
      height: 100px;
    }
  }

  &-info {
    flex: 1;

    &-name {
      font-size: 26px;
    }

    &-tags {
      margin-top: 10px;
      display: flex;
      align-items: center;

      .tag {
        box-sizing: border-box;
        margin-right: 12px;
        margin-bottom: 10px;
        padding: 5px 12px;
      }

      .tag:last-child {
        margin-right: 0;
      }

      .tag-city {
        // min-width: 180px;
        background-color: rgba(230, 239, 250, 1);
        color: rgba(0, 93, 204, 1);
      }

      .tag-type {
        // min-width: 120px;
        background-color: rgba(250, 241, 230, 1);
        color: rgba(184, 123, 45, 1);
      }

      .tag-status-open {
        // min-width: 96px;
        background-color: rgba(230, 250, 241, 1);
        color: rgba(0, 183, 100, 1);
      }

      .tag-status-unopen {
        // min-width: 96px;
        background-color: rgba(250, 230, 230, 1);
        color: rgba(203, 0, 0, 1);
      }

      .tag-status-bids {
        background-color: rgba(255, 165, 0, 13%);
        color: rgb(255, 165, 0);
      }

      .tag-new {
        background-color: rgba(240, 230, 250, 1);
        color: rgba(110, 43, 178, 1);
      }
    }

    &-content {

      .container {
        display: flex;
        flex-wrap: wrap;
      }

      &-item {
        margin: 5px 0;
        width: 50%;

        &-value {
          padding-right: 10px;
        }
      }
    }
  }
}
</style>
