<template>
  <div class="container flex items-center justify-center text-center">
    <div>
      <BrandLogo use-brand-color />
      <h1 class="h-64 title">100HERZ GmbH</h1>
      <h2 class="h-64 subtitle">My hunky-dory Nuxt.js project</h2>
      <p class="h-64 mt-16 text-4xl font-light text-indigo-700">My first Test environment.</p>
    </div>
  </div>
</template>

<script>
import BrandLogo from "@/components/Icons/BrandLogo"
export default { components: { BrandLogo } }
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
