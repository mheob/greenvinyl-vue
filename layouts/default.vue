<template>
  <div class="page">
    <TheHeader />
    <main class="bg-green-100">
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
