export default defineNuxtPlugin((nuxtApp) => {
  //监听App的生命周期
  nuxtApp.hook("app:created", () => {
    console.log("app:created")
  })
  nuxtApp.hook("app:beforeMount", () => {
    console.log("app:beforeMount")
  })
  nuxtApp.hook("vue:setup", () => {
    console.log("vue:setup")
  })
})