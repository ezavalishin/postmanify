// const path = require('path');

module.exports = {
  css: {
    extract: false,
  },
  lintOnSave: true,
  filenameHashing: false,
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
}
