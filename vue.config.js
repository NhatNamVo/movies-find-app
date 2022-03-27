const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/template/_mixin.scss";
          @import "~@/template/_variable.scss";
      `
      }
    }
  }
})
