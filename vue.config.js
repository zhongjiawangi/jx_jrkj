const { defineConfig } = require('@vue/cli-service')
// const webpack = require('webpack')
module.exports = defineConfig({
    transpileDependencies: true,
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         $: 'jquery',
    //         jQuery: 'jquery',
    //     }),
    // ],
    chainWebpack: config => {
        config
          .plugin('html')
          .tap(args => {
            args[0].title= '江若科技'
            return args
          })
      }
})
