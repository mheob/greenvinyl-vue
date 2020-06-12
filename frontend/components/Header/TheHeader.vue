<template>
  <header class="w-full h-20 py-5 bg-white shadow-sm lg:fixed">
    <div class="container flex flex-col items-center justify-between lg:flex-row">
      <a class="w-64" href="/"><Brand /></a>
      <TheMainNavigation />
      <TheCarts />
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue"
import Brand from "~/components/Icons/Brand.vue"
import TheMainNavigation from "~/components/Header/TheMainNavigation.vue"
import TheCarts from "~/components/Header/TheCarts.vue"

export default Vue.extend({
  components: {
    Brand,
    TheMainNavigation,
    TheCarts
  }
})
</script>
