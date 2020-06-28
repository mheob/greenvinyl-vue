<template>
  <section class="px-4 pt-4 lg:pt-8 lg:px-8">
    <AccordionFrame>
      <TheProductDetailsTechnical :product="product" />
      <TheProductDetailsDownloads />
    </AccordionFrame>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

import AccordionFrame from "~/components/UI/Accordion/AccordionFrame.vue"
import TheProductDetailsTechnical from "~/components/Product/Details/TheProductDetailsTechnical.vue"
import TheProductDetailsDownloads from "~/components/Product/Details/TheProductDetailsDownloads.vue"
import { Product } from "~/models"

@Component({ components: { AccordionFrame, TheProductDetailsTechnical, TheProductDetailsDownloads } })
export default class TheProductDetails extends Vue {
  @Prop({ type: Object, required: true }) readonly product!: Product
}
</script>
