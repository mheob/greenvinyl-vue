import { getterTree, mutationTree } from "nuxt-typed-vuex"
// import Cookie from "js-cookie"

import { Retailer } from "~/models"
import retailerData from "~/data/retailer.json"

export const state = () => ({
  mapCenter: { lat: 50.237882, lng: 7.1626233 },
  retailerList: retailerData as Retailer[],
  retailerInRange: [] as Retailer[],
  selectedRadius: 30,
  userPosition: ""
})

export type RetailerState = ReturnType<typeof state>

export const getters = getterTree(state, {
  retailerCount: state => state.retailerInRange.length
})

export const mutations = mutationTree(state, {
  setMapCenter(state, value: { lat: number; lng: number }) {
    state.mapCenter = value
  },
  setRetailerInRange(state, value: Retailer[]) {
    state.retailerInRange = value
  },
  setRadius(state, value: number) {
    state.selectedRadius = value
  },
  setUserPosition(state, value: string) {
    state.userPosition = value
  }
})
