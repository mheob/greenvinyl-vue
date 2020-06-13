<template>
  <div class="page">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import TheHeader from "~/components/Header/TheHeader.vue"
import TheFooter from "~/components/Footer/TheFooter.vue"

@Component({
  components: {
    TheHeader,
    TheFooter
  }
})
export default class DefaultLayout extends Vue {}
</script>
