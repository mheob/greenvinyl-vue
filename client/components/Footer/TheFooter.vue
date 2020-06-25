<template>
  <footer class="text-white">
    <TheFooterCallToAction />

    <section class="py-10 text-sm bg-green-900">
      <div class="container flex flex-col items-center justify-between lg:flex-row">
        <nuxt-link to="/"><BrandLogo width-class="w-56" /></nuxt-link>
        <TheFooterNavigation />
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import TheFooterCallToAction from "@/components/Footer/TheFooterCallToAction.vue"
import TheFooterNavigation from "@/components/Footer/TheFooterNavigation.vue"
import BrandLogo from "@/components/Icons/BrandLogo.vue"

@Component({ components: { TheFooterCallToAction, BrandLogo, TheFooterNavigation } })
export default class TheFooter extends Vue {}
</script>
