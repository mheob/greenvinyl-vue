<template>
  <section class="px-5 text-white">
    <div
      class="relative flex flex-col items-center justify-center w-full py-12 bg-cover h-80vh"
      :style="{ backgroundImage: backgroundImageStyle }"
    >
      <div class="max-w-5xl px-5 text-center">
        <header>
          <h2 class="text-lg lg:text-xl">Für ein gesundes Wohnen</h2>
          <h1 class="mt-5 text-3xl leading-tight lg:text-6xl">Der erste Vinylboden mit dem Blauen Engel.</h1>
        </header>

        <div class="mt-10">
          <AppButton
            class="w-3/4 mt-2 md:mx-2 md:w-auto"
            to="/#greenvinyl-base"
            :brightness="Brightness.LIGHT"
            :variant="Variant.BUTTON"
          >
            Produkte anzeigen
          </AppButton>
          <AppButton
            class="w-3/4 mt-2 md:mx-2 md:w-auto"
            to="/kontakt"
            :brightness="Brightness.LIGHT"
            :variant="Variant.BUTTON"
          >
            Infos anfordern
          </AppButton>
          <!-- TODO: Use the lightbox here -->
          <AppButton
            class="w-3/4 mt-2 md:mx-2 md:w-auto"
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
        <img class="h-16 md:h-24" :src="blueAngelImageurl" alt="Blauer Engel" />
      </aside>

      <footer class="absolute bottom-0 left-0 w-full p-4 text-sm text-center bg-black bg-opacity-25 md:w-auto">
        <a href="produkte/touch/risseiche-natur-49781" class="block transform hover:translate-x-1">
          Vinylboden Touch Risseiche Natur 49781 &#8594;
        </a>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import AppButton, { Brightness, Variant } from "@/components/UI/AppButton.vue"

@Component({ components: { AppButton } })
export default class TheLandingHeader extends Vue {
  Brightness = Brightness
  Variant = Variant

  get backgroundImageStyle() {
    const url = require("~/assets/images/home/greenvinyl-home-header-2.jpg")
    return `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${url})`
  }

  get blueAngelImageurl() {
    return require("~/assets/images/products/certificates/blauer-engel-uz120d.svg")
  }
}
</script>
