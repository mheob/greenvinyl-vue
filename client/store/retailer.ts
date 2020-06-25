import { createModule } from "vuex-class-component"

import { Retailer } from "~/models"
import retailerData from "~/data/retailer.json"

type Coords = { lat: number; lng: number }

export class RetailerStore extends createModule({ namespaced: "retailer", strict: false, target: "nuxt" }) {
  mapCenter: Coords = { lat: 50.237882, lng: 7.1626233 }
  retailerList = retailerData as Retailer[]
  retailerInRange: Retailer[] = []
  selectedRadius = 30
  userPosition = ""

  get retailerCount() {
    return this.retailerInRange.length
  }
}
