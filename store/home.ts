import { defineStore } from "pinia"
import { getFooterInfo } from "~~/service/footerInfo";
import { getHomeInfoData, IHomeInfoType } from "~~/service/home";
import { IHomeState } from "./type";

export const useHomeStore = defineStore('home', {
  state: (): IHomeState => {
    return {
      navbars: [],
      banners: [],
      categorys: [],
      footerInfo: [],
      footerIcon: []
    }
  },
  actions: {
    //获取首页的数据
    async fetchHomeInfoData(type: IHomeInfoType) {
      const { data } = await getHomeInfoData(type)

      this.navbars = data.value?.data.navbars || []
      this.banners = data.value?.data.banners || []
      this.categorys = data.value?.data.categorys || []
    },
    async fetchFooterInfo() {
      const { data } = await getFooterInfo()
      this.footerInfo = data.value?.data.footerInfo || []
      this.footerIcon = data.value?.data.footerIcon || []
    }

  },
})

