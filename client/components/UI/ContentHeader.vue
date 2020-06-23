<template>
  <header class="py-12 bg-green-500 lg:pt-48 lg:pb-32">
    <div class="container">
      <div class="max-w-3xl text-white">
        <h1 class="text-4xl leading-tight md:text-6xl">{{ title }}</h1>
        <p class="mt-4 leading-relaxed text-white md:text-lg"><slot></slot></p>
        <slot name="additional"></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class ContentHeader extends Vue {
  @Prop({ type: String, required: true }) readonly title!: String
}
</script>
