import type { AsyncData, UseFetchOptions } from "nuxt/dist/app/composables"

const BASE_URL = ''

class Request {
  request<T = any>(url: string, options: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions:UseFetchOptions<T> = {
        baseURL: BASE_URL,
        ...options,

      }

      useFetch<T>(url, newOptions as any,).then(res => {
        resolve(res as AsyncData<T, Error>)
      }).catch(err => {
        reject(err)
      })
    })
  }
  get<T = any>(url: string, options?: UseFetchOptions<T>) {
    return this.request(url, { method: 'GET', ...options})
  }
  post<T = any>(url: string, options?: UseFetchOptions<T>) {
    return this.request(url, { method: 'POST', ...options})
  }
}

export default new Request()