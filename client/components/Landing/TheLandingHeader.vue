<template>
  <section class="text-white">
    <client-only>
      <flickity ref="flickity" class="product-carousel" :options="flickityOptions">
        <div
          class="relative flex flex-col items-center justify-center w-full py-12 bg-cover h-90vh"
          :style="{ backgroundImage: backgroundImageStyle1 }"
        >
          <div class="max-w-5xl px-5 text-center">
            <header>
              <h2 class="text-lg uppercase lg:text-xl">Für ein gesundes Wohnen</h2>
              <h1 class="mt-5 text-3xl leading-tight uppercase lg:text-6xl">
                Der erste Vinylboden<br />mit dem Blauen Engel
              </h1>
            </header>

            <div class="mt-10">
              <AppButton
                class="w-3/4 mt-2 uppercase md:mx-2 md:w-auto"
                to="/#greenvinyl-base"
                :brightness="Brightness.LIGHT"
                :variant="Variant.BUTTON"
              >
                Produkte anzeigen
              </AppButton>
              <AppButton
                class="w-3/4 mt-2 uppercase md:mx-2 md:w-auto"
                to="/contact"
                :brightness="Brightness.LIGHT"
                :variant="Variant.BUTTON"
              >
                Infos anfordern
              </AppButton>
              <!-- TODO: Use the lightbox here -->
              <AppButton
                class="w-3/4 mt-2 uppercase md:mx-2 md:w-auto"
                to="https://youtu.be/kqod3bSsdy4"
                :brightness="Brightness.LIGHT"
                :variant="Variant.BUTTON"
                open-in-new-tab
              >
                Optimal verlegen
              </AppButton>
            </div>
          </div>

          <aside class="block pt-10 md:m-4 md:absolute md:bottom-0 md:right-0">
            <img class="h-16 md:h-24" :src="blueAngelImageUrl" alt="Blauer Engel" />
          </aside>

          <ProductLinkOnImage to="products/touch/risseiche-natur-49781">
            Vinylboden Touch Risseiche Natur 49781
          </ProductLinkOnImage>
        </div>

        <div
          class="relative flex flex-col items-center justify-center w-full py-12 bg-cover h-90vh"
          :style="{ backgroundImage: backgroundImageStyle2 }"
        >
          <div class="max-w-5xl px-5 text-center">
            <header>
              <h2 class="text-lg uppercase lg:text-xl">Jetzt neu!</h2>
              <h1 class="mt-5 text-3xl leading-tight uppercase lg:text-6xl">
                Produkt-Reservierung und Gratis-Musterbestellung
              </h1>
            </header>

            <div class="mt-10">
              <AppButton
                class="w-3/4 mt-2 uppercase md:mx-2 md:w-auto"
                to="/cart/reservation"
                :brightness="Brightness.LIGHT"
                :variant="Variant.BUTTON"
              >
                Produkt-Reservierung
              </AppButton>
              <AppButton
                class="w-3/4 mt-2 uppercase md:mx-2 md:w-auto"
                to="/cart/sample"
                :brightness="Brightness.LIGHT"
                :variant="Variant.BUTTON"
              >
                Gratis-Musterbestellung
              </AppButton>
            </div>
          </div>

          <aside class="block pt-10 md:m-4 md:absolute md:bottom-0 md:right-0">
            <img class="h-16 md:h-24" :src="blueAngelImageUrl" alt="Blauer Engel" />
          </aside>
        </div>
      </flickity>
    </client-only>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import { Brightness, Variant } from '~/components/UI/AppButton.vue'

@Component
export default class TheLandingHeader extends Vue {
  Brightness = Brightness
  Variant = Variant
  flickityOptions = {
    initialIndex: 3,
    prevNextButtons: true,
    pageDots: false,
    wrapAround: true
  }

  get backgroundImageStyle1() {
    const url = require('~/assets/images/home/greenvinyl-home-header-2.jpg')
    return `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${url})`
  }

  get backgroundImageStyle2() {
    const url = require('~/assets/images/home/greenvinyl-home-header.jpg')
    return `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${url})`
  }

  get blueAngelImageUrl() {
    return require('~/assets/images/products/certificates/blauer-engel-uz120d.svg')
  }
}
</script>

<style>
.flickity-prev-next-button {
  width: 75px;
  height: 75px;
  background-color: transparent;
  opacity: 0.7;
}

.flickity-prev-next-button .arrow {
  fill: white;
}

.flickity-prev-next-button:hover {
  background-color: transparent;
}
</style>
