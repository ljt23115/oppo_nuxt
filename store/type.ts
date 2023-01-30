export interface INavbar extends Array<INavbar> {
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

export interface Icategory extends Array<Icategory> {
  id?: string,
  picStr?: string,
  link?: string,
  title?: string,
  type?: string,
  url?: string,
  productDetailss?:any[]
}

export interface IFooterInfo {
  id?: string,
  title?: string,
  products?: any[]
}

export interface IFooterIcon {
  msg?: string,
  pctUrl?: string
}

export interface IHomeState {
  navbars?: INavbar[],
  banners?: IBanner[],
  categorys?: Icategory[],
  footerInfo?: IFooterInfo[],
  footerIcon?: IFooterIcon[]
}