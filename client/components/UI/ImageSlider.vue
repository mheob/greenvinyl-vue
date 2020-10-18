<template>
  <section class="mt-8">
    <client-only>
      <flickity ref="flickity" class="product-carousel" :options="flickityOptions">
        <!-- eslint-disable max-len -->
        <div
          v-for="(image, index) in imageList"
          :key="index"
          class="w-5/6 mr-4 bg-center bg-cover lg:mr-8 h-70vh"
          :style="`background-image: url(${image});`"
        ></div>
        <!-- eslint-enable max-len -->
      </flickity>
    </client-only>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class ImageSlider extends Vue {
  @Prop({ type: Array, required: true }) readonly imageList!: String[]

  flickityOptions = {
    initialIndex: 3,
    prevNextButtons: true,
    pageDots: false,
    wrapAround: true
  }
}
</script>

<style>
.flickity-prev-next-button {
  width: 75px;
  height: 75px;
  background-color: transparent;
}

.flickity-prev-next-button .arrow {
  fill: white;
}

.flickity-prev-next-button:hover {
  background-color: transparent;
}
</style>
