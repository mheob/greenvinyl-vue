<template>
  <div class="bg-green-100 page">
    <TheHeader />
    <main>
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

import TheHeader from "~/components/Header/TheHeader.vue"
import TheFooter from "~/components/Footer/TheFooter.vue"

export default Vue.extend({
  components: {
    TheHeader,
    TheFooter
  }
})
</script>
