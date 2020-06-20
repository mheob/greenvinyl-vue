<template>
  <article>
    <ContentHeader title="Händlersuche">
      Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
      umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.

      <TheRetailerSearchForm slot="additional" class="mt-10" />
    </ContentHeader>

    <GMap
      ref="gMap"
      :cluster="{ options: { styles: clusterStyle } }"
      :center="{ lat: locations[1].lat, lng: locations[1].lng }"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative'
      }"
      :zoom="8"
    >
      <GMapMarker
        v-for="(location, i) in locations"
        :key="i"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{ icon: location === currentLocation ? pins.selected : pins.notSelected }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <b>{{ location.name }}</b>
          <br />
          <br />
          <code>
            Lat: {{ location.lat }},
            <br />
            Lng: {{ location.lng }}
          </code>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </article>
</template>

<script lang="ts">
import Vue from "vue"

import ContentHeader from "@/components/UI/ContentHeader.vue"
import TheRetailerSearchForm from "@/components/Page/Retailer/TheRetailerSearchForm.vue"

export default Vue.extend({
  components: {
    ContentHeader,
    TheRetailerSearchForm
  },

  data() {
    const marker = {
      path:
        // eslint-disable-next-line max-len
        "M40 0C26.191 0 15 11.194 15 25c0 23.87 25 55 25 55s25-31.13 25-55C65 11.194 53.807 0 40 0zm0 38.8c-7.457 0-13.5-6.044-13.5-13.5S32.543 11.8 40 11.8c7.455 0 13.5 6.044 13.5 13.5S47.455 38.8 40 38.8z",
      fillColor: "#ecc94b",
      fillOpacity: 0.6,
      scale: 0.5,
      strokeColor: "#030104",
      strokeWeight: 1
    }

    return {
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: [
        {
          lat: 47.497913,
          lng: 19.040236,
          name: "Budapest"
        },
        {
          lat: 48.210033,
          lng: 16.363449,
          name: "Vienna"
        },
        {
          lat: 52.520008,
          lng: 13.404954,
          name: "Berlin"
        }
      ],
      pins: {
        selected: marker,
        notSelected: {
          ...marker,
          fillOpacity: 0.9
        }
      },
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m2.png",
          width: 56,
          height: 56,
          textColor: "#000"
        }
      ]
    }
  }
})
</script>
