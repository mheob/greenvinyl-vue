<template>
  <div class="accordion__item">
    <!-- eslint-disable max-len -->
    <div
      class="flex items-center justify-between w-full px-4 py-2 mb-px text-lg text-left text-white transition duration-300 bg-green-500 cursor-pointer accordion__trigger hover:bg-green-700 focus:outline-none"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- eslint-enable max-len -->
      <slot name="accordion-trigger" />
    </div>

    <transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
      <div v-show="visible" class="py-2 lg:py-4 accordion__content">
        <div>
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from "nuxt-property-decorator"

@Component
export default class AccordionItem extends Vue {
  @Inject("accordion") accordion!: { count: number; active: number | null }

  index: number | null = null

  get visible() {
    return this.index === this.accordion.active
  }

  open() {
    this.accordion.active = this.visible ? null : this.index
  }

  start(element: HTMLElement) {
    element.style.height = element.scrollHeight + "px"
  }

  end(element: HTMLElement) {
    element.style.height = ""
  }

  created() {
    this.index = this.accordion.count++
  }
}
</script>

<style scoped>
.accordion__trigger:after {
  float: right;
  margin-left: 0.25rem;
  color: #ffffff;
  font-size: 52px;
  line-height: 52px;
  content: "\002B";
}

.accordion__trigger_active {
  @apply bg-green-700;
}

.accordion__trigger_active:after {
  content: "\2212";
}

.accordion-enter-active,
.accordion-leave-active {
  overflow: hidden;
  transition: height 0.3s ease, opacity 0.3s ease;
  will-change: height, opacity;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
