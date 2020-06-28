<template>
  <section class="mt-8">
    <ImageSlider :image-list="images" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

import ImageSlider from "~/components/UI/ImageSlider.vue"

@Component({ components: { ImageSlider } })
export default class TheProductSlider extends Vue {
  @Prop({ type: String, required: true }) private sap!: string

  get images() {
    const baseUrl = "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php"
    return [
      `${baseUrl}?cnf=int&sid=8161&artnr=${this.sap}&rot=0&w=1920&h=1080`,
      `${baseUrl}?cnf=int&sid=8161&artnr=${this.sap}&rot=90&w=1920&h=1080`,
      `${baseUrl}?cnf=int&sid=8161&artnr=${this.sap}&rot=180&w=1920&h=1080`,
      `${baseUrl}?cnf=int&sid=8060&artnr=${this.sap}&rot=0&w=1920&h=1080`,
      `${baseUrl}?cnf=int&sid=8009&artnr=${this.sap}&rot=0&w=1920&h=1080`,
      `${baseUrl}?cnf=int&sid=8011&artnr=${this.sap}&rot=0&w=1920&h=1080`
    ]
  }
}
</script>
