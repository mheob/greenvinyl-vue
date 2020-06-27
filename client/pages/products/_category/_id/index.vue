<template>
  <div class="pb-12 bg-white lg:pt-20">
    <TheProductHeader />
    <TheProductDetails class="mt-12" />
    <TheProjectSlider class="mt-12" />
    <ProductList class="mt-12" :is-base="true" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import TheProductHeader from "~/components/Product/TheProductHeader.vue"
import TheProductDetails from "~/components/Product/TheProductDetails.vue"
import TheProjectSlider from "~/components/Product/TheProjectSlider.vue"
import ProductList from "~/components/Product/ProductList.vue"

@Component({ components: { TheProductHeader, TheProductDetails, TheProjectSlider, ProductList } })
export default class ProductsCategoryId extends Vue {}
</script>
