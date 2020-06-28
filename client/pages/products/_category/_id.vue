<template>
  <div class="pb-12 bg-white lg:pt-20">
    <TheProductHeader :product="product" />
    <TheProductDetails :product="product" />
    <TheProductSlider class="mt-12" />
    <ProductList :is-base="isBaseCollection" is-product-page />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import TheProductHeader from "~/components/Product/TheProductHeader.vue"
import TheProductDetails from "~/components/Product/TheProductDetails.vue"
import TheProductSlider from "~/components/Product/TheProductSlider.vue"
import ProductList from "~/components/Product/ProductList.vue"
import { Product } from "~/models"
import productsData from "~/data/products.json"

@Component({
  components: { TheProductHeader, TheProductDetails, TheProductSlider, ProductList },
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
