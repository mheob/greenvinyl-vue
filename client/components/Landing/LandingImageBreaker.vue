<template>
  <section class="relative">
    <div class="w-full bg-green-500 bg-center bg-cover h-70vh" :style="{ backgroundImage: backgroundImageStyle }"></div>
    <ProductLinkOnImage to="/products/base/eiche-natur-48320" :is-right-position="isRightPosition">
      <slot />
    </ProductLinkOnImage>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

@Component
export default class TheLandingImageBreaker extends Vue {
  @Prop({ type: String, required: true }) image!: string
  @Prop({ type: String, required: true }) to!: string
  @Prop({ type: Boolean, default: false }) readonly isRightPosition!: Boolean

  get backgroundImageStyle() {
    return `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${this.image})`
  }
}
</script>
