<template>
  <section class="flex flex-col px-4 lg:flex-row lg:px-8 lg:h-70vh">
    <aside class="h-40vh lg:w-1/2 lg:h-auto">
      <!-- eslint-disable max-len -->
      <img
        class="object-cover w-full h-full"
        :src="`https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8060&artnr=${product.sap}&w=1280&h=720`"
        :alt="product.name"
      />
      <!-- eslint-enable max-len -->
    </aside>

    <article class="relative bg-green-100 lg:w-1/2">
      <div class="flex items-start justify-start h-full p-4 lg:p-16">
        <div class="max-w-xl">
          <header>
            <h2 class="text-lg lg:text-xl">{{ product.collection | upperFirstChar }}</h2>
            <h1 class="mt-1 text-4xl leading-none text-green-500 lg:text-6xl">{{ product.name }}</h1>
            <p class="mt-4 text-xl lg:text-2xl">
              {{ product.optics }} / {{ product.length }} x {{ product.width }} x {{ product.thickness }} mm /
              {{ product.fase }} / {{ product.stressClass }}
            </p>
          </header>

          <TheProductReservation :product="product" />

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
import { Vue, Component, Prop } from "nuxt-property-decorator"

import TheProductReservation from "~/components/Product/TheProductReservation.vue"
import { Brightness, Variant } from "~/components/UI/AppButton.vue"
import { Product } from "~/models"

@Component({ components: { TheProductReservation } })
export default class TheProductHeader extends Vue {
  @Prop({ type: Object, required: true }) readonly product!: Product

  Brightness = Brightness
  Variant = Variant

  get blueAngelImageUrl() {
    return require("~/assets/images/products/certificates/blauer-engel-uz120d.svg")
  }
}
</script>
