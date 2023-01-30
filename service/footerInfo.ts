import { IHomeState } from '~~/store/type'
import request, { IResultData } from './index'

export const getFooterInfo = () => {
  return request.get<IResultData<IHomeState>>("/footerInfo", {
    baseURL: 'http://192.168.0.25:3000/api',

  })
}
