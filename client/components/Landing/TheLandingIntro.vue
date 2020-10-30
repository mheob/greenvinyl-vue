<template>
  <section class="px-5 mx-auto max-w-8xl">
    <div class="flex flex-col w-full lg:flex-row-reverse lg:flex-row">
      <div class="flex items-center mt-12 lg:mt-0 lg:w-6/12">
        <div class="pb-10 lg:p-20">
          <h3 class="text-xl text-green-500 lg:text-3xl">
            CLASSEN Greenvinyl bietet Ihnen alles, was Sie von einem hochwertigen Vinylboden in ­puncto Optik, Haptik
            und Elastizität erwarten.<br />Beein­druckend:
          </h3>
          <p class="mt-4 lg:mt-8">
            die brillanten Digital­dekore. Auch bei den Komfortmerkmalen Fußwärme und Gehschalldämpfung wird Sie
            ­CLASSEN Greenvinyl überzeugen. Die wirkliche ­Besonderheit jedoch: CLASSEN Green­vinyl ist der ­Vinylboden
            für gesundes Wohnen – frei von PVC und dessen umwelt­belastenden Inhaltsstoffen wie Chlor oder Weichmacher.
            ­CLASSEN Greenvinyl ­bietet Ihnen und Ihrer ­Familie unbelastete Raumluft und damit ­optimale
            wohnraumhygienische Eigen­schaften.
          </p>

          <div class="flex mt-10">
            <img class="h-24 mx-3 mt-5" :src="featureImageUrl" alt="Ohne PVC" />
            <img class="h-24 mx-3 mt-5" :src="certificateImageUrl" alt="ECO Institut" />
          </div>

          <p class="mt-4 text-xs italic font-hairline text-left">*aus umweltgerechtem Polymergemisch</p>
        </div>
      </div>

      <div class="relative self-center lg:w-6/12">
        <img
          :src="sideImageUrl"
          alt="Greenvinyl, der hochwertige Vinylboden in ­puncto Optik, Haptik und Elastizität."
        />

        <ProductLinkOnImage to="products/touch/risseiche-natur-49781" is-right-position>
          Vinylboden Touch Risseiche Natur 49781
        </ProductLinkOnImage>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TheLandingIntro extends Vue {
  get featureImageUrl() {
    return require('~/assets/images/products/features/ico-gv-ohne-pvc.svg')
  }

  get certificateImageUrl() {
    return require('~/assets/images/products/certificates/eco-institut-id-0816-33664-002.svg')
  }

  get sideImageUrl() {
    return require('~/assets/images/home/greenvinyl-sofa.jpg')
  }
}
</script>
