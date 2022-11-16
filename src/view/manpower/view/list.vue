<template>
  <div class="list w_c">
    <h1>招聘</h1>
    <div class="item" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
      <div class="content">
        <h3 class="job-name">{{ item.jobName }}</h3>
        <div class="job-info">
          <div class="salary">{{ item.simple.salary }}</div>
          <div class="work-experience">{{ item.simple.workExperience }}</div>
          <div class="education">{{ item.simple.education }}</div>
        </div>
      </div>
      <div class="tips">
        <div class="keywords">
          <div class="keyword" v-for="(keyword, i) in item.simple.keywords" :key="keyword">
            <span>{{ keyword }}</span>
            <i v-if="i < item.simple.keywords.length - 1">|</i>
          </div>
        </div>
        <div class="welfare">{{ item.simple.welfare }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { manpowerInfo } from '@/info'

export default {
  name: 'infoList',
  data() {
    return {
      list: manpowerInfo.list
    }
  },
  methods: {
    goDetail(id) {
      this.$router.push({ path: '/manpower/detail', query: { id } })
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .item {
    margin-top: 20px;
    width: 70%;
    min-width: 800px;
    background-color: #fff;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    transition: all .2s;
    box-shadow: 0 0 2px 0 hsla(0, 0%, 60%, .3);
  }

  .item:hover {
    box-shadow: 0 10px 20px 0 hsla(0, 0%, 60%, .3);
  }

  .item:hover .job-name {
    color: rgba(64, 158, 255, 1);
  }

  .content {
    padding: 15px 20px;

    .job-name {
      font-size: 18px;
      transition: all .2s;
    }

    .job-info {
      margin-top: 12px;

      div {
        display: inline-block;
      }

      .salary {
        color: #fe574a;
        font-size: 16px;
        font-weight: 500;
      }

      .work-experience,
      .education {
        padding: 2px 8px;
        background: #f8f8f8;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 400;
        color: #666;
        line-height: 18px;
        margin-left: 10px;
      }
    }
  }

  .tips {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    // background-color: #f6fdfd;
    background-color: rgba(64, 158, 255, .2);
    color: #414a60;

    .welfare {
      flex: 1 0 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .keywords {
      flex: 1 0 0;

      .keyword {
        display: inline;

        i {
          padding: 0 8px;
        }
      }
    }
  }
}
</style>