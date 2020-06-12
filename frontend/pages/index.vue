<template>
  <main class="min-h-screen bg-green-100 lg:pt-24">
    <div class="container flex items-center justify-center text-center">
      <div>
        <Brand />
        <h1 class="h-64 title">100HERZ GmbH</h1>
        <h2 class="h-64 subtitle">My hunky-dory Nuxt.js project</h2>
        <p class="h-64 mt-16 text-4xl font-light text-indigo-700">My first Test environment.</p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue"
import Brand from "~/components/Icons/Brand.vue"

export default Vue.extend({
  components: {
    Brand
  }
})
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-weight: 300;
  font-size: 100px;
  font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
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
