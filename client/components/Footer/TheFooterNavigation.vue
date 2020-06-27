<template>
  <nav class="flex flex-col space-x-8 lg:flex-row">
    <div class="mt-6 space-x-8 lg:mt-0">
      <nuxt-link to="/#greenvinyl-base">Produkte</nuxt-link>
      <nuxt-link to="/retailer">Händlersuche</nuxt-link>
      <nuxt-link to="/contact">Kontakt</nuxt-link>
    </div>
    <div class="mt-6 space-x-8 lg:mt-0">
      <nuxt-link to="/privacy">Datenschutz</nuxt-link>
      <nuxt-link to="/impress">Impressum</nuxt-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TheFooterNavigation extends Vue {}
</script>

<style scoped>
a:hover {
  opacity: 0.5;
}
</style>
