<template>
  <div class="retailer">
    <ContentHeader title="Händlersuche">
      Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
      umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.

      <TheRetailerSearchForm slot="additional" class="mt-10" />
    </ContentHeader>

    <client-only style="display: block; min-height: 50vh;">
      <TheRetailerGMap :timestamp="Date.now()" />

      <section
        class="container grid gap-8 mx-auto my-8 md:my-12 md:grid-cols-2 lg:max-w-6xl xl:grid-cols-3 xl:max-w-8xl"
      >
        <RetailerCard
          v-for="retailer in retailerInRange"
          :key="retailer.key"
          :retailer="retailer"
          class="p-8 lg:p-16"
        />
      </section>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import TheRetailerSearchForm from "~/components/Retailer/TheRetailerSearchForm.vue"
import TheRetailerGMap from "~/components/Retailer/TheRetailerGMap.vue"
import RetailerCard from "~/components/Retailer/RetailerCard.vue"

@Component({
  components: { TheRetailerSearchForm, TheRetailerGMap, RetailerCard }
})
export default class RetailerPage extends Vue {
  get retailerInRange() {
    return this.$accessor.retailer.retailerInRange
  }
}
</script>
