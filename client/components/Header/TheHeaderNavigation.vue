<template>
  <nav class="flex my-5 space-x-4 text-sm lg:my-0 lg:text-base lg:space-x-10">
    <nuxt-link to="/#greenvinyl-base">Produkte</nuxt-link>
    <nuxt-link to="/retailer">Händlersuche</nuxt-link>
    <nuxt-link to="/contact">Kontakt</nuxt-link>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TheHeaderNavigation extends Vue {}
</script>

<style scoped>
a {
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  border-bottom-width: 3px;
  border-block-color: transparent;
}

a:hover,
.nuxt-link-active {
  border-color: #007d52;
}
</style>
