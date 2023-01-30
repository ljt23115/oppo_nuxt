import { IHomeState } from '~~/store/type'
import request, { IResultData } from './index'

export const getFooterInfo = () => {
  return request.get<IResultData<IHomeState>>("/footerInfo", {
    baseURL: 'http://localhost:9090/api',

  })
}
