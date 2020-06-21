<template>
  <article class="bg-green-200">
    <h2 class="text-2xl">{{ retailer.name }}</h2>
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
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

import HeroIcons, { Icon } from "@/components/Icons/HeroIcons.vue"
import { Retailer } from "@/models/locations"

@Component({ components: { HeroIcons } })
export default class RetailerCard extends Vue {
  @Prop({ type: Object, required: true }) readonly retailer!: Retailer

  Icon = Icon
}
</script>

<style scoped>
a:hover {
  opacity: 0.75;
}

.icon {
  width: 2rem;
  opacity: 0.67;
}

.content {
  width: calc(100% - 2rem);
}
</style>
