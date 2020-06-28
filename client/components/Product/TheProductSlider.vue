<template>
  <section class="mt-8">
    <ImageSlider :image-list="images" />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import ImageSlider from "~/components/UI/ImageSlider.vue"

@Component({ components: { ImageSlider } })
export default class TheProductSlider extends Vue {
  /* eslint-disable max-len */
  images = [
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8161&artnr=48320&rot=0&w=1920&h=1080",
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8161&artnr=48320&rot=90&w=1920&h=1080",
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8161&artnr=48320&rot=180&w=1920&h=1080",
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8060&artnr=48320&rot=0&w=1920&h=1080",
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8009&artnr=48320&rot=0&w=1920&h=1080",
    "https://classen_integrate.aocluster.com/v2.0/render_img_scene.php?cnf=int&sid=8011&artnr=48320&rot=0&w=1920&h=1080"
  ]
  /* eslint-enable max-len */
}
</script>
