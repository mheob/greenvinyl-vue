import Vuex from "vuex"
import { extractVuexModule, createProxy } from "vuex-class-component"

import { RetailerStore } from "./retailer"

// Create all vuex modules here
export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(RetailerStore)
  }
})

// Create proxies for an easy usage
export const vxm = {
  retailer: createProxy(store, RetailerStore)
}
