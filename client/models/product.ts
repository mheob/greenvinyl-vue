export interface GeneralInformation {
  title: string
  subTitle: string
  dimensions: string
}

export interface CollectionProperty {
  guarantee?: {
    name: string
    image: string
  }
  surface?: {
    name: string
    image: string
  }
  fase?: {
    name: string
    image: string
  }
  stressClass?: {
    name: string
    image: string
  }
  format?: {
    name: string
    image: string
  }
  optics?: {
    name: string
    image: string
  }
}

export interface Product {
  sap?: number
  artnr?: string
  ean?: string
  name?: string
  name2?: string
  nameEn?: string
  name2En?: string
  groundType?: string
  brand?: string
  collection?: string
  length?: number
  width?: number
  thickness?: string
  optics?: string
  surface?: string
  stressClass?: string
  fase?: string
  puttingSystem?: string
  insurance?: string
  guarantee?: string
  certificate1?: string
  certificate2?: string
  certificate3?: string
  decor?: string
  featuredImage?: string
  basePriceGross?: string
  basePriceUnit?: string
  packagingUnitContent?: string
  packagingUnitUnit?: string
  packagingUnit?: string
  features?: string
}
