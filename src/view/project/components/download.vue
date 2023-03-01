<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-27 15:41:58
 * @LastEditTime: 2023-02-27 18:10:31
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 项目文件下载组件
 * @FilePath: \jx_jrkj\src\view\project\components\download.vue
-->
<template>
  <div class="download">
    <div class="file" v-for="item in fileList" :key="item.fileName">
      <div @click="download(item)">{{ item.fileName }}</div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import { getItem } from 'utils/storeage'
export default {
  name: 'downloadComponent',
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
      fileList: []
    }
  },
  methods: {
    download(item) {
      console.log(item);
      if (item.key == 'tenderFileUrl') {
        const data = {
          unionId: this.info.id,
          dirName: item.dirName,
          fileName: item.fileName
        }
        this.downloadFile('/ossFile/downloadZbFile', data)
      } else {
        const a = document.createElement('a')
        a.href = item.url
        a.click()
      }
    },
    downloadFile(url, data = {}) {
      const token = getItem('token')
      console.log(token);
      axios({
        url: `${process.env.VUE_APP_API_URL}${url}`,
        method: 'post',
        data,
        headers: {
          Authorization: token ? "Bearer " + token : "",
        },
        responseType: 'arraybuffer'
      }).then((res) => {
        const blob = new Blob([res.data])
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = data.fileName;
        a.click();
      })
    }
  },
  created() {
    const fileJson = {
      tenderFileUrl: 'tenderFile',
      reviewFileUrl: 'reviewFile',
      answeringFileUrl: 'answeringFile',
      projectListUrl: 'quantitiesBill',
      attachmentUrl: 'attachment'
    }

    for (const key in fileJson) {
      if (this.info[key]) {
        const list = this.info[key].split(',').map((item) => {
          return {
            dirName: fileJson[key],
            fileName: decodeURIComponent(item.split('project/')[1]),
            url: item,
            key
          }
        })
        this.fileList = [...this.fileList, ...list];
      }
    }
  }
}
</script>

<style lang='less' scoped>
.download {
  .file {
    margin: 10px 0;
    display: inline-block;
    color: #44a3ef;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
