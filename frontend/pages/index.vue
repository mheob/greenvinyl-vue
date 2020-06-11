<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        100HERZ GmbH
      </h1>
      <h2 class="subtitle">
        My hunky-dory Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Logo from "~/components/Logo.vue"

export default Vue.extend({
  components: {
    Logo
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

.links {
  padding-top: 15px;
}
</style>
