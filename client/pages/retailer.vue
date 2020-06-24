<template>
  <div class="retailer">
    <ContentHeader title="Händlersuche">
      Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
      umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.

      <TheRetailerSearchForm slot="additional" class="mt-10" />
    </ContentHeader>

    <TheRetailerGMap />

    <section class="container grid gap-8 mx-auto my-8 md:my-12 md:grid-cols-2 lg:max-w-6xl xl:grid-cols-3 xl:max-w-8xl">
      <RetailerCard v-for="retailer in retailerList" :key="retailer.key" :retailer="retailer" class="p-8 lg:p-16" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import TheRetailerSearchForm from "@/components/Retailer/TheRetailerSearchForm.vue"
import TheRetailerGMap from "@/components/Retailer/TheRetailerGMap.vue"
import RetailerCard from "@/components/Retailer/RetailerCard.vue"
import { store } from "@/store"

@Component({ components: { TheRetailerSearchForm, TheRetailerGMap, RetailerCard } })
export default class Retailer extends Vue {
  get retailerList() {
    return store.retailer.retailerInRange
  }
}
</script>
