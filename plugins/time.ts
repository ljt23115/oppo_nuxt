export default defineNuxtPlugin(() => {
  return {
    provide: {
      formTime: (time: string) => {
        return time
      }
    }
  }
})