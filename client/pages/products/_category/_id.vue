<template>
  <div class="pb-12 bg-white lg:pt-20">
    <TheProductHeader :product="product" />
    <TheProductDetails :product="product" />
    <TheProjectSlider class="mt-12" />
    <ProductList class="mt-12" :is-base="isBaseCollection" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import TheProductHeader from "~/components/Product/TheProductHeader.vue"
import TheProductDetails from "~/components/Product/TheProductDetails.vue"
import TheProjectSlider from "~/components/Product/TheProjectSlider.vue"
import ProductList from "~/components/Product/ProductList.vue"
import { Product } from "~/models"
import productsData from "~/data/products.json"

@Component({
  components: { TheProductHeader, TheProductDetails, TheProjectSlider, ProductList },
  asyncData({ params }) {
    const sapFromUrl = params.id.substr(params.id.lastIndexOf("-") + 1, params.id.length)
    return {
      product: (productsData.articleList as Product[]).find(({ sap }) => sap === +sapFromUrl)
    }
  }
})
export default class ProductsCategoryId extends Vue {
  product: Product = {}

  get isBaseCollection() {
    return this.product.collection === "base"
  }
}
</script>
