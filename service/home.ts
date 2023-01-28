import { IHomeState } from '~~/store/home'
import request, { IResultData } from './index'
type IHomeInfoType = "oppo" | "onePlus" | "intelligent"
export const getHomeInfoData = (type?: IHomeInfoType) => {
  return request.get<IResultData<IHomeState>>("/home/info", {
    params: {
      type: type || "oppo"
    }
  })
}
export { IHomeInfoType }