<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-23 14:32:24
 * @LastEditTime: 2023-02-27 16:24:15
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 
 * @FilePath: \jx_jrkj\src\view\project\view\detail.vue
-->
<template>
  <div class="detail w_c">
    <div class="detail-top">
      <Project :info="info">
        <div class="project-info-content-item">
          <span class="project-info-content-item-label">
            开标时间：
          </span>
          <span class="project-info-content-item-value">
            <span class="value" v-if="info.bidCondition == 1">{{ info.delayTime || '时间待定' }}</span>
            <span class="value" v-else>{{ info.tenderOpeningDate || '' }}</span>
          </span>
        </div>
      </Project>
    </div>
    <el-tabs v-model="active" @tab-click="handleClick">
      <el-tab-pane label="项目介绍" name="1"></el-tab-pane>
      <el-tab-pane label="文件下载" name="2"></el-tab-pane>
      <el-tab-pane label="项目公告" name="3"></el-tab-pane>
    </el-tabs>
    <keep-alive>
      <components :is="activeComponent" :info="info" />
    </keep-alive>
  </div>
</template>
<script>
import { projectDetail } from 'api'
import Introduce from '../components/introduce'
import Download from '../components/download'
import Announcement from '../components/announcement'
import Project from '../components/project'

export default {
  name: 'bidsDeatil',
  components: {
    Introduce,
    Download,
    Announcement,
    Project
  },
  data() {
    return {
      id: '',
      active: "1",
      info: {}
    }
  },
  computed: {
    activeComponent() {
      let name = ''
      switch (Number(this.active)) {
        case 1:
          name = 'Introduce'
          break;
        case 2:
          name = 'Download'
          break;
        case 3:
          name = 'Announcement'
          break;
        default:
          name = 'Introduce'
          break;
      }
      return name
    }
  },
  methods: {
    handleClick() { }
  },
  created() {
    const { id } = this.$route.query
    this.id = id
    projectDetail({ id }).then((res) => {
      console.log(res);
      this.info = res
    })
  }
}
</script>

<style lang='less' scoped>
.detail {
  margin-top: 24px;
  padding: 12px 32px;
  background-color: #fff;
  border-radius: 12px;
  font-size: 16px;

  /deep/.el-tabs__item {
    font-size: 16px;
  }

  &-top {
    margin-bottom: 10px;
  }
}
</style>
