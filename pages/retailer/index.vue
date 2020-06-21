<template>
  <div>
    <ContentHeader title="Händlersuche">
      Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
      umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.

      <TheRetailerSearchForm slot="additional" class="mt-10" />
    </ContentHeader>

    <GMap
      ref="gMap"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: retailerList[0].lat, lng: retailerList[0].lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: true,
        zoomControl: true,
        gestureHandling: 'cooperative'
      }"
      :zoom="11"
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

    <section class="container grid gap-8 mx-auto mt-8 md:mt-12 md:grid-cols-2 lg:max-w-6xl xl:grid-cols-3 xl:max-w-8xl">
      <RetailerCard v-for="retailer in retailerList" :key="retailer.key" :retailer="retailer" class="p-8 lg:p-16" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import ContentHeader from "@/components/UI/ContentHeader.vue"
import RetailerCard from "@/components/Retailer/RetailerCard.vue"
import TheRetailerGMapInfoCard from "@/components/Retailer/TheRetailerGMapInfoCard.vue"
import TheRetailerSearchForm from "@/components/Retailer/TheRetailerSearchForm.vue"
import { Retailer as RetailerModel } from "@/models/locations"

import dummyRetailer from "@/data/dummy_retailer.json"

@Component({ components: { ContentHeader, RetailerCard, TheRetailerGMapInfoCard, TheRetailerSearchForm } })
export default class Retailer extends Vue {
  /* eslint-disable lines-between-class-members */
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
  currentLocation = {}
  locationsVisibleOnMap = ""
  retailerList = dummyRetailer as RetailerModel[]
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
  /* eslint-enable lines-between-class-members */
}
</script>

<style scoped>
.icon {
  width: 2rem;
  color: #007d52;
  opacity: 0.8;
}

.content {
  width: calc(100% - 2rem);
}
</style>
