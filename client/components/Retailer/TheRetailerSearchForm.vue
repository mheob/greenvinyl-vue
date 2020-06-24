<template>
  <div class="mt-10">
    <form class="flex flex-col text-black md:flex-row" @submit.prevent="">
      <input
        v-model="userPosition"
        name="zipcode"
        type="text"
        class="mb-2 rounded-none shadow-md md:mr-px md:w-40 form-input"
        placeholder="PLZ oder Ort ..."
        @change="onUserPositionChange($event)"
      />

      <select
        v-model="selectedRadius"
        name="range"
        class="mb-2 rounded-none shadow-md form-select"
        @change="onSelectedRadiusChange($event)"
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

    <p v-if="retailerCount" class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
      Es wurden {{ retailerCount > 1 ? "wurden" : "wurde" }}
      <strong>{{ retailerCount }} CLASSEN Greenvinyl-Partner</strong> in Ihrer Nähe gefunden.
    </p>
    <p v-else class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
      Die Postleitzahl oder der Ort konnten nicht gefunden werden. Bitte überprüfen.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import { getLocationInRange, getSwitchedGeoCode } from "@/utils"
import { store } from "@/store"

@Component
export default class TheRetailerSearchForm extends Vue {
  radiuses = ["10", "15", "30", "50", "75", "100"]

  get selectedRadius() {
    return store.retailer.selectedRadius
  }

  set selectedRadius(value) {
    store.retailer.selectedRadius = value
  }

  get userPosition() {
    return store.retailer.userPosition
  }

  set userPosition(value) {
    store.retailer.userPosition = value
  }

  get retailerCount() {
    return store.retailer.retailerCount
  }

  onUserPositionChange(event: InputEvent) {
    store.retailer.userPosition = (event.target as HTMLInputElement).value
    this.filterRetailer()
  }

  onSelectedRadiusChange(event: InputEvent) {
    store.retailer.selectedRadius = (event.target as HTMLInputElement).value
    this.filterRetailer()
  }

  async filterRetailer() {
    store.retailer.retailerInRange = await getLocationInRange(
      store.retailer.retailerList,
      store.retailer.userPosition,
      +store.retailer.selectedRadius
    )
  }

  beforeCreate() {
    if (!store.retailer.userPosition && process.client && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          const geoCodeData = await getSwitchedGeoCode(pos.coords)
          const addressComponents = geoCodeData.results[0].address_components
          store.retailer.userPosition = addressComponents[1].long_name
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
