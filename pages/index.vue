<template>
  <div class="lg:pt-20">
    <TheLandingHeader />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import TheLandingHeader from "@/components/Landing/TheLandingHeader.vue"

@Component({ components: { TheLandingHeader } })
export default class Index extends Vue {}
</script>
