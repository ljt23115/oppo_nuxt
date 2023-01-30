// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  // 这里是配置nuxt3的扩展的库
  modules: ["@pinia/nuxt"],
  css: ["normalize.css", "@/assets/css/global.less","@/assets/css-font/iconfont.css"],
  build: {
    // 使用Babel 进行语法转换
    transpile: ["element-plus/es"],
  },
  app: {
    // 可以给所有的页面添加SEO信息
    head: {
      title: "OPPO 商城",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no' },
        {
          name: "description",
          content: "OPPO专区，官方正品"
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区，OPPO手机，OPPO配件，OPPO，OPPO官网商城"
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      noscript: [{ children: "Javascript is required"}]
    }
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
