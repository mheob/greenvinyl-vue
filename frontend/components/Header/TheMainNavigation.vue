<template>
  <nav class="my-5 lg:my-0">
    <ul class="flex space-x-4 text-sm lg:text-base lg:space-x-10">
      <li><a class="border-green-500 hover:border-b-3" href="/#greenvinyl-base">Produkte</a></li>
      <li><a class="border-green-500 hover:border-b-3" href="/retailer">Händlersuche</a></li>
      <li><a class="border-green-500 hover:border-b-3" href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

@Component
export default class TheMainNavigation extends Vue {}
</script>
