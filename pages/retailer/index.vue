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
      :zoom="10"
    >
      <GMapMarker
        v-for="(location, i) in locations"
        :key="i"
        :position="{ lat: location.lat, lng: location.lng }"
        :options="{ icon: location === currentLocation ? pins.selected : pins.notSelected }"
        @click="currentLocation = location"
      >
        <GMapInfoWindow>
          <h4 class="text-lg font-bold text-green-500">{{ location.company }}</h4>
          <div>
            <div class="flex mt-4">
              <div class="icon" aria-label="Adresse">
                <HeroIcons :type="Icon.LOCATION_MARKER" width-class="w-5" aria-hidden="true" />
              </div>
              <div class="content">{{ location.street1 }}<br />{{ location.zip }} {{ location.city }}</div>
            </div>
            <div v-if="location.mail" class="flex mt-4">
              <div class="icon" aria-label="E-Mail">
                <HeroIcons :type="Icon.MAIL" width-class="w-5" aria-hidden="true" />
              </div>
              <div class="content">{{ location.mail }}</div>
            </div>
            <div v-if="location.tel" class="flex mt-4">
              <div class="icon" aria-label="Telefon">
                <HeroIcons :type="Icon.PHONE" width-class="w-5" aria-hidden="true" />
              </div>
              <div class="content">
                <a class="underline" :href="'tel:' + location.tel.replace(/ /g, '')">{{ location.tel }}</a>
              </div>
            </div>
            <div v-if="location.fax" class="flex mt-4">
              <div class="icon" aria-label="Fax">
                <HeroIcons :type="Icon.PRINTER" width-class="w-5" aria-hidden="true" />
              </div>
              <div class="content">{{ location.fax }}</div>
            </div>
            <div class="flex mt-4">
              <div class="icon" aria-label="Fax"></div>
              <div class="content">
                <a
                  class="underline"
                  :href="'http://www.google.com/maps/place/' + location.lat + ',' + location.lng"
                  target="_blank"
                >
                  Route auf Google Maps berechnen
                </a>
              </div>
            </div>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </article>
</template>

<script lang="ts">
import Vue from "vue"

import ContentHeader from "@/components/UI/ContentHeader.vue"
import TheRetailerSearchForm from "@/components/Page/Retailer/TheRetailerSearchForm.vue"
import HeroIcons, { Icon } from "@/components/Icons/HeroIcons.vue"

export default Vue.extend({
  components: {
    ContentHeader,
    TheRetailerSearchForm,
    HeroIcons
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
      Icon,
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: [
        {
          lat: 50.4386,
          lng: 7.49002,
          company: "BAUHAUS Neuwied",
          street1: "Allensteiner Straße 17",
          zip: "56566",
          city: "Neuwied",
          tel: "+49 2631 8374 0",
          fax: "+49 2631 8374 13"
        },
        {
          lat: 50.39614,
          lng: 7.5121,
          company: "BAUHAUS Mülheim-Kärlich",
          street1: "In der Puetzgewann 2",
          zip: "56218",
          city: "Mülheim-Kärlich",
          tel: "+49 2630 9431 0",
          fax: "+49 2630 9431 13"
        },
        {
          lat: 50.39545,
          lng: 7.51375,
          company: "RuckZuck Mülheim-Kärlich",
          street1: "Spitalsgraben 10",
          zip: "56218",
          city: "Mülheim-Kärlich",
          mail: "rzMuelheim@ruckzuck.biz",
          tel: "+49 2630 96247 90",
          fax: "+49 2630 96247 99"
        },
        {
          lat: 50.38997,
          lng: 7.55597,
          company: "Hornbach Koblenz",
          street1: "August-Thyssen-Str. 10",
          zip: "56070",
          city: "Koblenz",
          tel: "+49 261 98458 0",
          fax: "+49 261 98458 480"
        },
        {
          lat: 50.38314,
          lng: 7.57355,
          company: "BAUHAUS Koblenz",
          street1: "Otto-Schönhagen-Straße 1",
          zip: "56070",
          city: "Koblenz",
          tel: "+49 261 983499 0",
          fax: "+49 261 98458 13"
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
