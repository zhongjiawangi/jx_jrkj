<template>
  <div class="detail-box">
    <div class="detail">
      <div class="top">
        <h3 class="title">
          职位描述
        </h3>
        <div class="keywords">
          <span class="keyword" v-for="item in info.simple.keywords" :key="item">
            {{ item }}
          </span>
        </div>
      </div>
      <van-cell :title="value" v-for="(value, key) in detailDic" :key="key">
        <template #label>
          <p v-for="(item, index) in info.detail[key]" :key="index">
            {{ index + 1 + '.' + item }}
          </p>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { manpowerInfo } from '@/info'

export default {
  name: 'DetailPage',
  data() {
    return {
      info: {},
      detailDic: {
        jobDescription: '职责描述',
        jobRequirements: '任职要求',
        workAddress: '工作地址',
        contactWay: '联系方式'
      }
    }
  },
  created() {
    const id = this.$route.query.id
    this.info = manpowerInfo.list.filter(item => item.id == id)[0]
  }
}
</script>

<style lang="less" scoped>
.detail-box {
  padding: 10px;
  .detail {
    background-color: #fff;
    font-size: 14px;

    .top {
      padding: 10px 16px;

      .title {
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 14px;
      }

      .keyword {
        display: inline-block;
        margin-right: 15px;
        margin-top: 10px;
        padding: 3px 8px;
        background: #f8f8f8;
        border-radius: 4px;
        color: #666;
        line-height: 20px;
      }
    }
  }
}
</style>