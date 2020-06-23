<template>
  <div class="mt-10">
    <form class="flex flex-col text-black md:flex-row" @submit.prevent="">
      <input
        v-model="userPosition"
        name="zipcode"
        type="text"
        class="mb-2 rounded-none shadow-md md:mr-px md:w-40 form-input"
        placeholder="PLZ oder Ort ..."
        @change="onSearchInputChange"
      />

      <select
        v-model="selectedRadius"
        name="range"
        class="mb-2 rounded-none shadow-md form-select"
        @change="onSearchInputChange"
      >
        <option v-for="radius in radiuses" :key="radius" :value="radius">Umkreis {{ radius }} km</option>
      </select>

      <AppButton
        type="submit"
        is-button
        no-transform
        class="mb-2 text-white bg-green-900 shadow-md focus:outline-none hover:opacity-75"
      >
        Suchen
      </AppButton>
    </form>

    <p class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
      Es wurden {{ retailerCount || "keine" }} CLASSEN Greenvinyl-Partner in Ihrer Nähe gefunden.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

// TODO: Move some components (like this) to the nuxt plugin section
import AppButton from "@/components/UI/AppButton.vue"
import { getLocationInRange, getSwitchedGeoCode } from "@/utils"
import { Retailer } from "@/models/location"
import retailer from "@/data/retailer.json"

@Component({ components: { AppButton } })
export default class TheRetailerSearchForm extends Vue {
  selectedRadius = "30"
  radiuses = ["10", "15", "30", "50", "75", "100"]
  userPosition = ""
  retailerCount = 0

  onSearchInputChange() {
    this.filterRetailer()
  }

  async filterRetailer() {
    const retailerList = await getLocationInRange(retailer as Retailer[], this.userPosition, +this.selectedRadius)
    this.retailerCount = retailerList.length
  }

  beforeCreate() {
    if (!this.userPosition && process.client && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          const geoCodeData = await getSwitchedGeoCode(pos.coords)
          const addressComponents = geoCodeData.results[0].address_components
          this.userPosition = addressComponents[1].long_name
          await this.filterRetailer()
        },
        err => {
          throw new Error("Geolocation error: " + err)
        }
      )
    }
  }
}
</script>
