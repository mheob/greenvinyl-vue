<template>
  <GMap
    :key="componentKey"
    :cluster="{ options: { styles: clusterStyle } }"
    :center="mapCenter"
    :options="{
      fullscreenControl: false,
      streetViewControl: false,
      mapTypeControl: true,
      zoomControl: true,
      gestureHandling: 'cooperative'
    }"
    :zoom="10"
    @click="currentLocation = {}"
  >
    <GMapMarker
      v-for="retailer in retailerList"
      :key="retailer.key"
      :position="{ lat: retailer.lat, lng: retailer.lng }"
      :options="{ icon: retailer === currentLocation ? pins.selected : pins.notSelected }"
      @click="currentLocation = retailer"
    >
      <GMapInfoWindow>
        <h4 class="text-lg font-bold text-green-500">{{ retailer.name }}</h4>
        <TheRetailerGMapInfoCard :retailer="retailer" />
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "nuxt-property-decorator"

import TheRetailerGMapInfoCard from "~/components/Retailer/TheRetailerGMapInfoCard.vue"

@Component({ components: { TheRetailerGMapInfoCard } })
export default class TheRetailerGMap extends Vue {
  @Prop(Number) timestamp?: number

  componentKey = this.timestamp
  currentLocation = {}
  marker = {
    path:
      // eslint-disable-next-line max-len
      "M40 0C26.191 0 15 11.194 15 25c0 23.87 25 55 25 55s25-31.13 25-55C65 11.194 53.807 0 40 0zm0 38.8c-7.457 0-13.5-6.044-13.5-13.5S32.543 11.8 40 11.8c7.455 0 13.5 6.044 13.5 13.5S47.455 38.8 40 38.8z",
    fillColor: "#ecc94b",
    fillOpacity: 0.6,
    scale: 0.5,
    strokeColor: "#030104",
    strokeWeight: 1
  }

  pins = {
    selected: this.marker,
    notSelected: {
      ...this.marker,
      fillOpacity: 0.9
    }
  }

  clusterStyle = [
    {
      url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m2.png",
      width: 56,
      height: 56,
      textColor: "#000"
    }
  ]

  get mapCenter() {
    return this.$accessor.retailer.mapCenter
  }

  set mapCenter(value) {
    this.$accessor.retailer.setMapCenter(value)
  }

  get retailerList() {
    return (
      this.$accessor.retailer.retailerInRange ??
      JSON.parse(localStorage.getItem("retailerInRange")!) ?? [this.$accessor.retailer.mapCenter]
    )
  }

  created() {
    this.componentKey = Date.now()
  }

  @Watch("retailerList") getTimestamp() {
    this.componentKey = Date.now()
  }
}
</script>
