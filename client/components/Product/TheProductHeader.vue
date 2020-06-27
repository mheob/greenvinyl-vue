<template>
  <section class="flex flex-col px-4 lg:flex-row lg:px-8 lg:h-70vh">
    <aside class="h-40vh lg:w-1/2 lg:h-auto">
      <!-- eslint-disable max-len -->
      <img
        class="object-cover w-full h-full"
        src="https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&amp;sid=8060&amp;view=0&amp;onam=&amp;rot=0&amp;artnr=48317&amp;mid=&amp;ofit=&amp;overuse=&amp;overorder=&amp;w=1280&amp;h=720&amp;dbg=0"
        alt="Traubeneiche …DYN…"
      />
      <!-- eslint-enable max-len -->
    </aside>

    <article class="relative bg-green-100 lg:w-1/2">
      <div class="flex items-start justify-start h-full p-4 lg:p-16">
        <div class="max-w-lg">
          <header>
            <h2 class="text-lg lg:text-xl">{{ product.collection | upperFirstChar }}</h2>
            <h1 class="mt-1 text-4xl leading-none text-green-500 lg:text-6xl">{{ product.name }}</h1>
            <p class="mt-4 text-xl lg:text-2xl">
              {{ product.optics }} / {{ product.length }} x {{ product.width }} x {{ product.thickness }} mm /
              {{ product.fase }} / {{ product.stressClass }}
            </p>
          </header>

          <section class="mt-12">
            <form class="flex flex-col md:flex-row">
              <div class="flex flex-wrap w-full">
                <!-- eslint-disable max-len -->
                <div
                  class="flex items-center justify-end w-1/2 whitespace-no-wrap border-4 border-r-2 border-green-500 xl:w-auto"
                >
                  <span class="w-20 px-0 text-xl text-right cursor-default">{{ product.basePriceGross }}</span>
                  <span class="pl-2 pr-3 cursor-default">€/{{ product.basePriceUnit }}</span>
                </div>
                <!-- eslint-enable max-len -->

                <!-- eslint-disable max-len -->
                <div class="flex items-center w-1/2 bg-white border-4 border-l-2 border-green-500 xl:w-auto">
                  <input
                    class="w-full pl-2 pr-0 text-xl text-right border-none shadow-none form-input hover:shadow-none focus:shadow-none"
                    type="number"
                    min="0"
                    max="999"
                    autofocus
                    value="…DYN…"
                  />
                  <span class="pl-2 pr-3">{{ product.packagingUnitUnit }}</span>
                </div>
                <!-- eslint-enable max-len -->

                <!-- eslint-disable max-len -->
                <AppButton
                  class="w-full px-4 py-3 text-xl whitespace-no-wrap btn btn-button-dark form-item xl:w-auto"
                  :brightness="Brightness.DARK"
                  :variant="Variant.BUTTON"
                  is-button
                  no-transform
                >
                  Menge eingeben …DYN…
                </AppButton>
                <!-- eslint-enable max-len -->
              </div>
            </form>

            <div class="mt-3 text-sm">
              {{ product.packagingUnit }} à {{ pricePerPackagingUnit | digits(2) }} € (ca.
              {{ product.packagingUnitContent }} {{ product.packagingUnitUnit }}) <span class="font-semibold"></span>
            </div>
          </section>

          <section class="flex mt-12">
            <AppButton
              to="#more-info"
              class="mr-10"
              overwrite-display="hidden md:inline-block"
              :brightness="Brightness.DARK"
              :variant="Variant.LINK"
            >
              Details zeigen
            </AppButton>

            <AppButton :brightness="Brightness.DARK" :variant="Variant.LINK" is-button>
              Muster anfordern
            </AppButton>
          </section>
        </div>
      </div>

      <figure class="absolute right-0 flex justify-end p-4 -top-16 lg:top-auto lg:bottom-0 lg:right-0 lg:p-8">
        <img class="h-20 lg:h-24" :src="blueAngelImageUrl" alt="Blauer Engel" />
      </figure>
    </article>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

import { Brightness, Variant } from "~/components/UI/AppButton.vue"
import { Product } from "~/models"

@Component
export default class TheProductHeader extends Vue {
  @Prop({ type: Object, required: true }) readonly product!: Product

  Brightness = Brightness
  Variant = Variant

  get blueAngelImageUrl() {
    return require("~/assets/images/products/certificates/blauer-engel-uz120d.svg")
  }

  get pricePerPackagingUnit() {
    if (!this.product.basePriceGross || !this.product.packagingUnitContent) return 0
    const basePrice = +this.product.basePriceGross.replace(",", ".")
    const packagingUnitContent = +this.product.packagingUnitContent.replace(",", ".")
    return basePrice * packagingUnitContent
  }
}
</script>
