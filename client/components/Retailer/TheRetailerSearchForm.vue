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

    <client-only>
      <p v-if="retailerCount > 0" class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
        Es wurden {{ retailerCount > 1 ? 'wurden' : 'wurde' }}
        <strong>{{ retailerCount }} CLASSEN Greenvinyl-Partner</strong> in Ihrer Nähe gefunden.
      </p>
      <p v-else class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
        Die Postleitzahl oder der Ort konnten nicht gefunden werden. Bitte überprüfen.
      </p>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { getLocationInRange, getSwitchedGeoCode } from '~/utils'

@Component
export default class TheRetailerSearchForm extends Vue {
  radiuses = [10, 15, 30, 50, 75, 100]

  get selectedRadius() {
    return this.$accessor.retailer.selectedRadius
  }

  set selectedRadius(value) {
    this.$accessor.retailer.setRadius(value)
  }

  get userPosition() {
    return this.$accessor.retailer.userPosition
  }

  set userPosition(value) {
    this.$accessor.retailer.setUserPosition(value)
  }

  get retailerCount() {
    return this.$accessor.retailer.retailerCount
  }

  onUserPositionChange(event: InputEvent) {
    this.$accessor.retailer.setUserPosition((event.target as HTMLInputElement).value)
    this.filterRetailer()
  }

  onSelectedRadiusChange(event: InputEvent) {
    this.$accessor.retailer.setRadius(+(event.target as HTMLInputElement).value)
    this.filterRetailer()
  }

  async filterRetailer() {
    this.$accessor.retailer.setRetailerInRange(
      await getLocationInRange(
        this.$accessor.retailer.retailerList,
        this.$accessor.retailer.userPosition,
        +this.$accessor.retailer.selectedRadius
      )
    )
    if (this.$accessor.retailer.retailerInRange.length > 1) {
      this.$accessor.retailer.setMapCenter({
        lat: this.$accessor.retailer.retailerInRange[0].lat!,
        lng: this.$accessor.retailer.retailerInRange[0].lng!
      })
    }
  }

  initLocalStorage() {
    localStorage.setItem('mapCenter', JSON.stringify(this.$accessor.retailer.mapCenter))
    localStorage.setItem('retailerInRange', JSON.stringify(this.$accessor.retailer.retailerInRange))
    localStorage.setItem('selectedRadius', this.$accessor.retailer.selectedRadius.toString())
    localStorage.setItem('userPosition', this.$accessor.retailer.userPosition)
  }

  created() {
    if (process.client) {
      if (localStorage.getItem('mapCenter')) {
        this.$accessor.retailer.setMapCenter(JSON.parse(localStorage.getItem('mapCenter')!))
      }
      if (localStorage.getItem('retailerInRange')) {
        this.$accessor.retailer.setRetailerInRange(JSON.parse(localStorage.getItem('retailerInRange')!))
      }
      if (localStorage.getItem('selectedRadius')) {
        this.$accessor.retailer.setRadius(+localStorage.getItem('selectedRadius')!)
      }
      if (localStorage.getItem('userPosition')) {
        this.$accessor.retailer.setUserPosition(localStorage.getItem('userPosition')!)
      }

      if (!this.$accessor.retailer.userPosition && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          async pos => {
            const geoCodeData = await getSwitchedGeoCode(pos.coords)
            const addressComponents = geoCodeData.results[0].address_components
            this.$accessor.retailer.setUserPosition(addressComponents[addressComponents.length - 1].long_name)
            await this.filterRetailer()
            this.initLocalStorage()
          },
          err => {
            throw new Error('Geolocation error: ' + err)
          }
        )
      } else {
        this.filterRetailer()
      }
    } else {
      this.filterRetailer()
    }
  }
}
</script>
