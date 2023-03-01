<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-27 15:42:56
 * @LastEditTime: 2023-02-27 17:06:38
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 项目公告组件
 * @FilePath: \jx_jrkj\src\view\project\components\announcement.vue
-->
<template>
  <div class="announcement">
    <img :src="info.announcementLink" alt="">
  </div>
</template>
<script>
export default {
  name: 'announcementComponent',
  props: {
    info: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style lang='less' scoped>
.announcement {
  img {
    width: 100%;
    // height: 1000px;
    object-fit: scale-down;
    // object-position: center;
  }
}
</style>
