<template>
  <section id="greenvinyl-base" class="container px-5 py-16 bg-white md:px-0">
    <div>
      <h2 class="text-6xl text-green-500">{{ isBase ? "Base" : "Touch" }}</h2>
      <div class="flex flex-col justify-between lg:flex-row">
        <p class="mt-0 text-2xl">{{ isBase ? "Klassisch und Zeitlos" : "Ungewöhnlich und Modern" }}</p>
        <p class="mt-0 text-2xl">{{ isBase ? "1290 x 173 x 3,8 mm" : "638 x 310 x 4 mm / 1290 x 173 x 4 mm" }}</p>
      </div>
    </div>

    <div class="flex flex-wrap mt-10 -mx-5">
      <div v-for="collection in isBase ? baseCollection : touchCollection" :key="collection.sap" class="px-5 mt-5 card">
        <nuxt-link
          class="block"
          :to="`/products/${collection.collection}/${collection.name.toLowerCase()}-${collection.sap}`"
        >
          <div
            class="flex-1 block bg-center bg-cover image"
            :style="
              // eslint-disable-next-line max-len
              `background-image: url(https://classen-group.test/assets/products/decors/_800x600_crop_center-center_90_none/${collection.featuredImage})`
            "
          ></div>
          <div class="mt-1 text-sm text-gray-800">
            <h3 class="text-base">{{ collection.name }}</h3>
            <h4 class="text-sm">{{ collection.optics }}</h4>
            <p class="text-xs text-gray-600">Art.Nr: {{ collection.sap }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>

    <!-- TODO: Use "v-for" for this section -->
    <div class="flex flex-col mt-10 lg:justify-between lg:flex-row">
      <div class="mt-10">
        <div class="flex flex-wrap justify-center text-sm md:justify-start md:-ml-8">
          <div class="w-32">
            <figure>
              <img
                class="block m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_garantie_10jahre.svg"
                alt="Landhausdiele"
                style=" width:70px;height:70px;"
              />
              <figcaption class="mt-5 text-center">
                10 Jahre
              </figcaption>
            </figure>
          </div>
          <div class="w-32">
            <figure>
              <img
                class="block m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_oberflaeche_strukturiert.svg"
                alt="Landhausdiele"
                style=" width:70px;height:70px;"
              />
              <figcaption class="mt-5 text-center">
                strukturiert
              </figcaption>
            </figure>
          </div>
          <div class="w-32">
            <figure>
              <img
                class="block m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_fase_4v.svg"
                alt="Landhausdiele"
                style=" width:70px;height:70px;"
              />
              <figcaption class="mt-5 text-center">
                umlaufende Fase
              </figcaption>
            </figure>
          </div>
          <div class="w-32">
            <figure>
              <img
                class="block m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_nk_31.svg"
                alt="Landhausdiele"
                style=" width:70px;height:70px;"
              />
              <figcaption class="mt-5 text-center">
                NK31/AC3
              </figcaption>
            </figure>
          </div>
          <div class="w-32">
            <figure>
              <img
                class="block m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_format_landhausdiele.svg"
                alt="Landhausdiele"
                style=" width:70px;height:70px;"
              />
              <figcaption class="mt-5 text-center">
                Landhausdiele
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div class="pt-4 mt-10 text-center">
        <a
          class="btn btn-outline-dark btn-lg"
          href="https://classen-group.test/assets/mediacenter/catalogues/Greenvinyl2020.pdf"
          target="_blank"
        >
          <i class="fas fa-file-download"></i>Katalog downloaden
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

import Products from "@/data/products.json"

@Component
export default class LandingProducts extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isBase!: Boolean

  get baseCollection() {
    return Products.filter(product => product.collection === "base")
  }

  get touchCollection() {
    return Products.filter(product => product.collection === "touch")
  }

  get allCollections() {
    return Products
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
