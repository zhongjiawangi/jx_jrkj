<template>
  <div class="list">
    <h1>招聘</h1>
    <div class="item" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <div class="content">
        <h3 class="job-name">{{ item.jobName }}</h3>
        <div class="salary">{{ item.simple.salary }}</div>
      </div>
      <div class="tips">
        <div class="tip">
          {{ item.simple.workExperience }}
        </div>
        <div class="tip">
          {{ item.simple.education }}
        </div>
        <div class="tip" v-for="I in 3" :key="I">
          {{ item.simple.keywords[I - 1] }}
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import { manpowerInfo } from '@/info'

export default {
  name: 'ListPage',
  data() {
    return {
      list: manpowerInfo.list
    }
  },
  methods: {
    goDetail(id) {
      console.log(id);
      this.$router.push({ path: '/mobile/manpower/detail', query: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: #333;
  h1 {
    margin: 20px;
    font-size: 40px;
  }

  .item {
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    font-size: 12px;
    padding: 15px;
    margin-bottom: 10px;
    .content {
      display: flex;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .salary {
        color: #f67b4e;
      }
    }
    .tips {
      display: flex;
      margin-top: 20px;
      color: #666;
      .tip {
        background-color: #f5f5f5;
        padding: 3px 5px;
        border-radius: 5px;
        margin-right: 10px;
      }
    }
  }
}
</style>