export default defineEventHandler((event) => {
  const { req } = event.node

  console.log(req.method)
  console.log(req.url)

  return {
    code: 200,
    data: {
      name: 'juejin',
      duration: 30,
    }
  }
})