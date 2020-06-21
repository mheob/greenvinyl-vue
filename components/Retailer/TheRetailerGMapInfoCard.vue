<template>
  <div>
    <div class="flex mt-4">
      <div class="icon" aria-label="Adresse">
        <HeroIcons :type="Icon.LOCATION_MARKER" width-class="w-5" aria-hidden="true" />
      </div>
      <div class="content">{{ retailer.street1 }}<br />{{ retailer.zip }} {{ retailer.city }}</div>
    </div>
    <div v-if="retailer.mail" class="flex mt-4">
      <div class="icon" aria-label="E-Mail">
        <HeroIcons :type="Icon.MAIL" width-class="w-5" aria-hidden="true" />
      </div>
      <div class="content">{{ retailer.mail }}</div>
    </div>
    <div v-if="retailer.telBranch" class="flex mt-4">
      <div class="icon" aria-label="Telefon">
        <HeroIcons :type="Icon.PHONE" width-class="w-5" aria-hidden="true" />
      </div>
      <div class="content">
        <a class="underline" :href="'tel:' + retailer.telBranch.replace(/ /g, '')">{{ retailer.telBranch }}</a>
      </div>
    </div>
    <div v-if="retailer.fax" class="flex mt-4">
      <div class="icon" aria-label="Fax">
        <HeroIcons :type="Icon.PRINTER" width-class="w-5" aria-hidden="true" />
      </div>
      <div class="content">{{ retailer.fax }}</div>
    </div>
    <div class="flex mt-4">
      <div class="icon" aria-label="Fax"></div>
      <div class="content">
        <a
          class="underline"
          :href="'http://www.google.com/maps/place/' + retailer.lat + ',' + retailer.lng"
          target="_blank"
        >
          Route auf Google Maps berechnen
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import HeroIcons, { Icon } from "@/components/Icons/HeroIcons.vue"
import { Retailer } from "@/models/locations"

export default Vue.extend({
  components: {
    HeroIcons
  },

  props: {
    retailer: {
      type: Object as () => Retailer,
      default: null,
      required: true
    }
  },

  data() {
    return {
      Icon
    }
  }
})
</script>

<style scoped>
a:hover {
  opacity: 0.75;
}

.retailer-card {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #ecf6e7;
}

.retailer-card:first-of-type {
  margin-top: 0;
}

.icon {
  width: 2rem;
  opacity: 0.67;
}

.content {
  width: calc(100% - 2rem);
}
</style>
