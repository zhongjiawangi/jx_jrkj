<template>
  <div class="detail">
    <div class="contant w_c">
      <h3 class="title">职位描述</h3>
      <div class="keywords">
        <span class="keyword" v-for="item in info.simple.keywords" :key="item">
          {{ item }}
        </span>
      </div>
      <div class="info">
        <div class="item">
          <p>职责描述:</p>
          <p v-for="(item, index) in info.detail.jobDescription" :key="index">
            {{ index + 1 }}.{{ item }}
          </p>
        </div>
        <div class="item">
          <p>任职要求:</p>
          <p v-for="(item, index) in info.detail.jobRequirements" :key="index">
            {{ index + 1 }}.{{ item }}
          </p>
        </div>
        <div class="item">
          <p>工作地址:</p>
          <p>{{ info.detail.workAddress }}</p>
        </div>
        <div class="item">
          <p>联系方式:</p>
          <p>{{ info.detail.contactWay }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { manpowerInfo } from '@/info'
export default {
  name: "infoDetail",
  data() {
    return {
      info: {},
    };
  },
  methods: {
  },
  created() {
    const id = this.$route.query.id
    if (id) {
      this.info = manpowerInfo.list.filter(i => i.id == id)[0]
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  .title {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .keyword {
    display: inline-block;
    margin-right: 15px;
    margin-top: 10px;
    padding: 6px 14px;
    background: #f8f8f8;
    border-radius: 4px;
    font-size: 14px;
    color: #666;
    line-height: 20px;
  }

  .contant {
    height: 100%;
    width: 50%;
    padding: 20px 30px;
    color: #333;
    font-size: 16px;
    background-color: #fff;
    border-radius: 15px;

    .info {
      margin-top: 20px;
      line-height: 30px;

      p {
        margin: 5px 0;
      }
    }
  }
}
</style>
