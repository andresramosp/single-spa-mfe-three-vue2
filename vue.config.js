const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: 9995 },
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    },
    externals: [
      'moment'
    ]
  }
})
