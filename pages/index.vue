<template>
  <div class="container flex items-center justify-center py-12 text-center lg:pt-32">
    <div>
      <h1 class="title">100HERZ GmbH</h1>
      <h2 class="subtitle">My hunky-dory Nuxt.js project</h2>
      <h1 class="title">100HERZ GmbH</h1>
      <h2 class="subtitle">My hunky-dory Nuxt.js project</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class Index extends Vue {}
</script>

<style scoped>
.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
}
</style>
