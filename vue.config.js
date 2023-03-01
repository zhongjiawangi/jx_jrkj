/*
 * @Author: Zhong JiaWang(1290489015@qq.com)
 * @Date: 2022-09-15 17:58:53
 * @LastEditTime: 2023-02-27 10:46:20
 * @LastEditors: Zhong JiaWang(1290489015@qq.com)
 * @Description: 配置文件
 * @FilePath: \jx_jrkj\vue.config.js
 */
const path = require("path");
const { defineConfig } = require("@vue/cli-service");
// const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // plugins: [
  //     new webpack.ProvidePlugin({
  //         $: 'jquery',
  //         jQuery: 'jquery',
  //     }),
  // ],
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("api", resolve("./src/api"))
      .set('img', resolve('./public/img'))
      .set("utils", resolve("./src/utils"));
    config.plugin("html").tap((args) => {
      args[0].title = "江若科技";
      return args;
    });
  },
});
