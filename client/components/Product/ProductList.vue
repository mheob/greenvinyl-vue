<template>
  <section id="greenvinyl-base" class="container px-5 py-16 md:px-0">
    <header>
      <h2 class="text-6xl text-green-500">{{ generalInformation.title }}</h2>
      <div class="flex flex-col justify-between lg:flex-row">
        <p class="mt-0 text-2xl">{{ generalInformation.subTitle }}</p>
        <p class="mt-0 text-2xl">{{ generalInformation.dimensions }}</p>
      </div>
    </header>

    <div class="flex flex-wrap mt-10 -mx-5">
      <div v-for="collection in collections" :key="collection.sap" class="px-5 mt-5 card">
        <nuxt-link class="block" :to="productUrl(collection.collection, collection.name, collection.sap)">
          <!-- eslint-disable max-len -->
          <div
            class="flex-1 block bg-center bg-cover image"
            :style="`background-image: url(https://classen-group.com/assets/products/decors/_800x600_crop_center-center_90_none/${collection.featuredImage})`"
          ></div>
          <!-- eslint-enable max-len -->
          <div class="mt-1 text-sm text-gray-800">
            <h3 class="text-base">{{ collection.name }}</h3>
            <h4 class="text-sm">{{ collection.optics }}</h4>
            <p class="text-xs text-gray-600">Art.Nr: {{ collection.sap }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- TODO: Use "v-for" for this section -->
    <footer class="flex flex-col mt-10 lg:justify-between lg:flex-row">
      <div class="flex flex-wrap justify-center mt-10 text-sm md:justify-start md:-ml-8">
        <div v-for="(property, i) in collectionProperties" :key="i" class="w-32">
          <figure>
            <img
              class="block h-16 m-auto"
              :src="`https://classen-group.com/assets/products/icons/features/set2/${property.image}`"
              :alt="property.name"
            />
            <figcaption class="mt-5 text-center">{{ property.name }}</figcaption>
          </figure>
        </div>
      </div>

      <div class="pt-4 mt-10 text-center">
        <AppButton
          class="px-4 py-2 text-2xl"
          to="https://classen-group.com/assets/mediacenter/catalogues/Greenvinyl2020.pdf"
          :brightness="Brightness.DARK"
          :variant="Variant.OUTLINE"
          open-in-new-tab
        >
          <HeroIcons class="inline" :type="Icon.DOCUMENT_DOWNLOAD" width-class="w-8" /> Katalog downloaden
        </AppButton>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

import { Brightness, Variant } from "~/components/UI/AppButton.vue"
import { Icon } from "~/components/Icons/HeroIcons.vue"
import { GeneralInformation, CollectionProperty } from "~/models/product"
import Products from "~/data/products.json"

export enum Collection {
  BASE = "base",
  TOUCH = "touch"
}

@Component
export default class ProductList extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isBase!: Boolean

  Brightness = Brightness
  Variant = Variant
  Icon = Icon

  get selectedCollection(): Collection {
    return this.isBase ? Collection.BASE : Collection.TOUCH
  }

  get generalInformation(): GeneralInformation {
    return Products.general[this.selectedCollection]
  }

  get collectionProperties(): CollectionProperty {
    return Products.collectionProperties[this.selectedCollection]
  }

  get collections() {
    return Products.articleList.filter(product => product.collection === this.selectedCollection)
  }

  productUrl(collection: string, name: string, sap: number) {
    return `/products/${collection}/${name.toLowerCase().replace(" ", "-")}-${sap}`
  }
}
</script>

<style scoped>
.card {
  width: 50%;
}

.card:nth-of-type(6n + 3),
.card:nth-of-type(6n + 4) {
  width: 100%;
}

.image {
  min-height: 300px;
}

@screen lg {
  .card {
    width: 25%;
  }

  .card:nth-of-type(6n + 3),
  .card:nth-of-type(6n + 4) {
    width: 50%;
  }
}
</style>
