// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  // 这里是配置nuxt3的扩展的库
  modules: ["@pinia/nuxt"],
  css: ["normalize.css", "@/assets/css/global.less"],
  build: {
    // 使用Babel 进行语法转换
    transpile: ["element-plus/es"],
    // styleResources: {
    //   less: './assets/css/variable.less'
    // }
  },
  vite: {
    //配置自动导入样式
    plugins: [ElementPlus()],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/css/variables.less";'
        }
      }
    }
  },
  

})
