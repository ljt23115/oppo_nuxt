import request from './index'
export const fetchHomeInfoData = () => {
  return request.get("/api/homeInfo", {
    onRequest({ request, options }:any) {
      // Set the request headers
      console.log(request)
      console.log(options.method)
    },
  })
}