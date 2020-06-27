<template>
  <section class="container px-5 py-20 md:px-0">
    <div class="flex flex-col w-full lg:flex-row">
      <aside class="lg:w-7/12">
        <img :src="breakingImageUrl" alt="CLASSEN Greenvinyl" />
      </aside>

      <div class="lg:w-5/12 lg:flex lg:items-center lg:justify-center">
        <div class="pt-10 lg:px-10 lg:pt-0">
          <h3 class="text-xl text-green-500">Besonderheiten von Greenvinyl:</h3>
          <ul class="facts">
            <li>EasyLoc-Verlegesystem</li>
            <li>Elegante matte Struktur</li>
            <li>Soft-Touch-Oberfläche</li>
            <li>Einzigartiges Design durch Digitaldruck</li>
            <li>Wasserfest</li>
            <li>Hervorragende Reinigungs- und Pflegeeigenschaften</li>
            <li>Dimensionsstabil</li>
            <li>Vergütete, abriebfeste Oberfläche</li>
            <li>Made in Germany</li>
          </ul>

          <div class="mt-8 lightbox">
            <AppButton
              class="w-full mt-8 text-left lg:max-w-md"
              to="https://www.youtube.com/embed/jWp23yf0Fu4?start=3&amp;feature=oembed?"
              :brightness="Brightness.DARK"
              :variant="Variant.OUTLINE"
              open-in-new-tab
            >
              <HeroIcons class="inline" :type="Icon.PLAY" width-class="w-4" /> CLASSEN Greenvinyl - Animierte
              Verlegeanleitung
            </AppButton>

            <AppButton
              class="w-full mt-4 text-left lg:max-w-md"
              to="https://www.youtube.com/embed/kqod3bSsdy4?feature=oembed?"
              :brightness="Brightness.DARK"
              :variant="Variant.OUTLINE"
              open-in-new-tab
            >
              <HeroIcons class="inline" :type="Icon.PLAY" width-class="w-4" /> CLASSEN Greenvinyl - Verlegefilm
            </AppButton>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-10 text-center lg:w-3/4 lg:mt-20">
      <p class="text-4xl leading-snug text-green-500 lg:text-6xl">CLASSEN Greenvinyl – ohne PVC.</p>
    </div>

    <div class="flex flex-col w-full lg:flex-row lg:mt-20">
      <div class="lg:w-5/12 lg:flex lg:items-center lg:justify-center">
        <div class="pt-10 lg:p-10">
          <h3 class="text-xl text-green-500">Der Vinylboden, der mehr ist als Vinyl:</h3>

          <ul class="facts">
            <li>Ohne Weichmacher und Schadstoffe</li>
            <li>Frei von Chlor und PVC</li>
            <li>Emissionsarm, ohne Ausdünstungen</li>
            <li>Beste wohnraumhygienische Eigenschaften</li>
            <li>100% recycelbar</li>
            <li>Umweltfreundlich</li>
            <li>Zertifiziert mit dem Blauen Engel</li>
          </ul>

          <div class="mt-16">
            <AppButton
              class="px-4 py-2 text-xl md:text-2xl"
              to="https://classen-group.com/assets/mediacenter/laying-instructions/va_classen_vinylboden_02_2018.pdf"
              :brightness="Brightness.DARK"
              :variant="Variant.OUTLINE"
              open-in-new-tab
            >
              <HeroIcons class="inline" :type="Icon.DOCUMENT_DOWNLOAD" width-class="w-6 md:w-8" /> Verlegeanleitung
            </AppButton>
          </div>
        </div>
      </div>

      <figure class="mt-8 md:mt-0 lg:w-7/12">
        <img :src="analyticsImageUrl" alt="CLASSEN Greenvinyl" />
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import { Brightness, Variant } from "~/components/UI/AppButton.vue"
import { Icon } from "~/components/Icons/HeroIcons.vue"

@Component
export default class TheLandingFeatures extends Vue {
  Brightness = Brightness
  Variant = Variant
  Icon = Icon

  get breakingImageUrl() {
    return require("~/assets/images/home/greenvinyl-pusteblume.jpg")
  }

  get analyticsImageUrl() {
    return require("~/assets/images/home/greenvinyl-schichten-b.png")
  }
}
</script>

<style scoped>
.facts {
  margin-top: 2.5rem;
  margin-left: 1.25rem;
  color: #4a5568;
  list-style-type: disc;
}

.facts li {
  margin-top: 0.75rem;
}
</style>
