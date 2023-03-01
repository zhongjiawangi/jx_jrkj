<!--
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2023-02-28 09:26:42
 * @LastEditTime: 2023-02-28 10:35:43
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 登录组件
 * @FilePath: \jx_jrkj\src\components\login.vue
-->
<template>
  <div class="login">
    <el-dialog title="登录" :visible.sync="show" width="30%" append-to-body :close-on-click-modal="false"
      :close-on-press-escape="false" :destroy-on-close="true">
      <span>这是一段信息</span>
      <div>
        <!-- <wxlogin :appid="wxlogin.appid" :scope="wxlogin.scope" :theme="wxlogin.theme" :redirect_uri="wxlogin.redirectUrl"
          :href="wxlogin.href" rel="external nofollow">
        </wxlogin> -->
      </div>
      <span slot="footer">
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import wxlogin from 'vue-wxlogin'
export default {
  name: 'loginComponent',
  // components: { wxlogin },
  data() {
    return {
      show: false,
      wxlogin: {
        appid: '',
        redirectUrl: '',
        href: 'data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxlIHsNCiAgZGlzcGxheTogbm9uZTsNCn0NCi5pbXBvd2VyQm94IC5zdGF0dXMuc3RhdHVzX2Jyb3dzZXIgew0KICBkaXNwbGF5OiBub25lOw0KfQ0KLmltcG93ZXJCb3ggLnFyY29kZSB7DQogIGJvcmRlcjogbm9uZTsNCiAgd2lkdGg6IDIwMHB4Ow0KICBoZWlnaHQ6IDIwMHB4Ow0KfQ0KLmltcG93ZXJCb3ggLnN0YXR1c3sNCiAgZGlzcGxheTogbm9uZQ0KfQ==',
        scope: 'snsapi_login',
        theme: 'black'
      }
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.className = 'un-scroll'
      } else {
        document.body.className = ''
      }
    }
  }
}
</script>

<style lang='less' scoped></style>
