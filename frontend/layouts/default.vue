<template>
  <div class="page">
    <TheHeader />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import TheHeader from "~/components/Header/TheHeader.vue"

export default Vue.extend({
  components: {
    TheHeader
  }
})
</script>
