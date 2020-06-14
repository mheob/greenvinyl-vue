<template>
  <div class="page">
    <TheHeader />
    <main class="py-12 bg-green-100 lg:pt-40 lg:pb-20">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import TheHeader from "@/components/Header/TheHeader.vue"
import TheFooter from "@/components/Footer/TheFooter.vue"

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter
  }
})
</script>
