<template>
  <footer
    class="absolute bottom-0 w-full p-4 text-sm text-center text-white bg-black bg-opacity-25 md:w-auto"
    :class="isRightPosition ? 'right-0' : 'left-0'"
  >
    <nuxt-link :to="to" class="block transform hover:translate-x-1"><slot></slot> &#8594;</nuxt-link>
  </footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component
export default class ProductLinkOnImage extends Vue {
  @Prop({ type: String, required: true }) readonly to!: String
  @Prop({ type: Boolean, default: false }) readonly isRightPosition!: Boolean
}
</script>
