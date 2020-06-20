<template>
  <article>
    <ContentHeader title="Händlersuche">
      Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
      umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.

      <TheRetailerSearchForm slot="additional" class="mt-10" />
    </ContentHeader>
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
  }
})
</script>
