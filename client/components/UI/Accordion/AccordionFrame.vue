<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide } from 'nuxt-property-decorator'

@Component
export default class AccordionFrame extends Vue {
  @Provide('accordion') accordion: { count: number; active: number | null } = { count: 0, active: null }
}
</script>

<style scoped>
.accordion__item:last-child {
  border-bottom: none;
}
</style>
