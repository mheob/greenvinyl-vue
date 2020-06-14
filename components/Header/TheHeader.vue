<template>
  <header class="w-full py-5 bg-white shadow-sm lg:fixed lg:h-20">
    <div class="container flex flex-col items-center justify-between lg:flex-row">
      <nuxt-link to="/"><BrandLogo use-brand-color width-class="w-64"/></nuxt-link>
      <TheHeaderNavigation />
      <TheHeaderCarts />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue"

import BrandLogo from "@/components/Icons/BrandLogo.vue"
import TheHeaderNavigation from "@/components/Header/TheHeaderNavigation.vue"
import TheHeaderCarts from "@/components/Header/TheHeaderCarts.vue"

export default Vue.extend({
  name: "TheHeader",
  components: {
    BrandLogo,
    TheHeaderNavigation,
    TheHeaderCarts
  }
})
</script>

<style scoped>
header {
  z-index: 55;
}
</style>
