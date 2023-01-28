import { defineStore } from "pinia"
import { getHomeInfoData, IHomeInfoType } from "~~/service/home";

export interface INavbar {
  id?: string,
  title?: string,
  type?: string,
  link?: string
}
export interface IBanner {
  id?: string,
  picStr?: string,
  link?: string
}

export interface Icategory {
  id?: string,
  picStr?: string,
  link?: string,
  title?: string,
  type?: string,
  url?: string,
  productDetailss?:any[]
}

export interface IHomeState {
  navbars?: INavbar[],
  banners?: IBanner[],
  category?: Icategory[]
}

export const useHomeStore = defineStore('home', {
  state: (): IHomeState => {
    return {
      navbars: [],
      banners: [],
      category: []

    }
  },
  actions: {
    //获取首页的数据
    async fetchHomeInfoData(type: IHomeInfoType) {
      const { data } = await getHomeInfoData(type)
      this.navbars = data.value?.data.navbars || []
      this.banners = data.value?.data.banners || []
      this.category = data.value?.data.category || []
      console.log(data.value?.data)
    }

  },
})