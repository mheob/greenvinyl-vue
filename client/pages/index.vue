<template>
  <div class="bg-white lg:pt-20^">
    <TheLandingHeader />

    <TheLandingIntro class="mt-12" />

    <LandingImageBreaker
      class="mt-12"
      :image="imageBreakerImage1"
      to="/products/base/eiche-natur-48320"
      is-right-position
    >
      Vinylboden Base Eiche Natur 48320
    </LandingImageBreaker>

    <LandingProducts class="mt-12" is-base />

    <LandingImageBreaker class="mt-12" :image="imageBreakerImage2" to="/products/touch/nimbus-beige-49784">
      Vinylboden Touch Nimbus Beige 49784
    </LandingImageBreaker>

    <LandingProducts class="mt-12" />

    <TheLandingFeatures class="mt-12" />

    <TheLandingComparison class="mt-12" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import TheLandingHeader from "~/components/Landing/TheLandingHeader.vue"
import TheLandingIntro from "~/components/Landing/TheLandingIntro.vue"
import LandingImageBreaker from "~/components/Landing/LandingImageBreaker.vue"
import LandingProducts from "~/components/Landing/LandingProducts.vue"
import TheLandingFeatures from "~/components/Landing/TheLandingFeatures.vue"
import TheLandingComparison from "~/components/Landing/TheLandingComparison.vue"

@Component({
  components: {
    TheLandingHeader,
    TheLandingIntro,
    LandingImageBreaker,
    LandingProducts,
    TheLandingFeatures,
    TheLandingComparison
  }
})
export default class Index extends Vue {
  get imageBreakerImage1() {
    return require("~/assets/images/home/greenvinyl-frau.jpg")
  }

  get imageBreakerImage2() {
    return require("~/assets/images/home/greenvinyl-mann-frau.jpg")
  }
}
</script>
