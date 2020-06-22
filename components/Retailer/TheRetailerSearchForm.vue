<template>
  <div class="mt-10">
    <form class="flex flex-col text-black md:flex-row">
      <input
        name="zipcode"
        type="text"
        class="mb-2 rounded-none shadow-md md:mr-px md:w-40 form-input"
        placeholder="PLZ oder Ort ..."
        :value="zipCode"
      />

      <select v-model="selected" name="range" class="mb-2 rounded-none shadow-md form-select">
        <option v-for="radius in radiuses" :key="radius" :value="radius">Umkreis {{ radius }} km</option>
      </select>

      <AppButton type="submit" is-button no-transform class="mb-2 text-white bg-green-900 shadow-md hover:opacity-75">
        Suchen
      </AppButton>
    </form>

    <p class="mt-2 text-sm leading-normal tracking-wide md:mt-4">
      Es wurden 7 CLASSEN Greenvinyl-Partner in Ihrer Nähe gefunden.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import AppButton from "@/components/UI/AppButton.vue"

@Component({ components: { AppButton } })
export default class TheRetailerSearchForm extends Vue {
  selected = "30"
  radiuses = ["10", "15", "30", "50", "75", "100"]
  zipCode = ""

  async fetchGeoCode(coords: { latitude: number; longitude: number }) {
    const googleBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json"
    const googleUrlParameter = {
      latlng: `?latlng=${coords.latitude},${coords.longitude}`,
      apiKey: `&key=${process.env.GOOGLE_API}`
    }
    const geoCodeData = await this.$axios.$get(googleBaseUrl + googleUrlParameter.latlng + googleUrlParameter.apiKey)
    return geoCodeData
  }

  beforeCreate() {
    if (process.client && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async pos => {
          const geoCodeData = await this.fetchGeoCode(pos.coords)
          this.zipCode = geoCodeData.results[0].address_components[6].long_name
        },
        err => {
          throw new Error("Geolocation error: " + err)
        }
      )
    }
  }
}
</script>
