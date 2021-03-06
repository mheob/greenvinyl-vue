export interface Retailer {
  shortName?: string
  company?: string
  street1?: string
  street2?: string
  zip?: number
  city?: string
  country?: string
  tel?: string
  telBranch?: string
  fax?: string
  mail?: string
  web?: string
  oez?: string
  lat?: number
  lng?: number
  key?: string
  name?: string
  distance?: number
}

export interface Coordinates {
  latitude: number
  longitude: number
}
