<template>
  <nav class="flex space-x-6">
    <nuxt-link class="relative flex hover:opacity-75" to="/cart/sample" title="Muster anfordern">
      <span class="bg-yellow-500 bubble">0</span>
      <svg class="w-8 h-8 text-gray-700 fill-current" xmlns="http://www.w3.org/2000/svg">
        <!-- eslint-disable max-len -->
        <path
          d="M31.93 15.87c0-.28-.16-.54-.42-.67l-4.66-2.33 4.66-2.33c.25-.13.42-.39.42-.67s-.16-.54-.42-.67l-15-7.5a.721.721 0 00-.67 0l-15 7.5c-.25.12-.41.38-.41.67s.16.54.41.67l4.66 2.33L.84 15.2c-.25.13-.41.39-.41.67s.16.54.41.67l4.66 2.33L.84 21.2c-.25.13-.41.39-.41.67s.16.54.41.67l15 7.5c.11.05.22.08.34.08s.23-.03.34-.08l15-7.5c.25-.13.42-.39.42-.67s-.16-.54-.42-.67l-4.66-2.33 4.66-2.33a.76.76 0 00.41-.67zM16.18 3.21L29.5 9.87l-13.32 6.66L2.85 9.87l13.33-6.66zM29.5 21.87l-13.32 6.66-13.33-6.66 4.32-2.16 8.66 4.33c.11.05.22.08.34.08s.23-.03.34-.08l8.66-4.33 4.33 2.16zm-13.32.66L2.85 15.87l4.32-2.16 8.66 4.33c.11.05.22.08.34.08s.23-.03.34-.08l8.66-4.33 4.32 2.16-13.31 6.66z"
        />
        <!-- eslint-enable max-len -->
      </svg>
    </nuxt-link>
    <nuxt-link class="relative flex hover:opacity-75" to="/cart/reservation" title="Produkte reservieren">
      <span class="bg-green-500 bubble">0</span>
      <svg class="w-8 h-8 text-gray-700 fill-current" xmlns="http://www.w3.org/2000/svg">
        <!-- eslint-disable max-len -->
        <path
          d="M12.578 22.483a2.638 2.638 0 102.638 2.638 2.641 2.641 0 00-2.638-2.638zm0 3.8a1.165 1.165 0 111.165-1.165 1.167 1.167 0 01-1.165 1.169zm9.255-3.8a2.638 2.638 0 102.638 2.638 2.641 2.641 0 00-2.638-2.638zm0 3.8a1.165 1.165 0 111.165-1.165 1.167 1.167 0 01-1.165 1.169zm.65-17.691H11.928a.737.737 0 000 1.473h10.556a.737.737 0 100-1.473zm-.575 3.825h-9.407a.737.737 0 100 1.473h9.407a.737.737 0 000-1.473z"
        />
        <path
          d="M29.668 5.31a1.467 1.467 0 00-1.142-.542H5.582l-.463-2.249a1.475 1.475 0 00-.856-1.054L1.03.065a.737.737 0 00-.587 1.351l3.233 1.4 3.564 17.3a1.479 1.479 0 001.443 1.176h17.646a.737.737 0 100-1.473H8.683l-.434-2.1h18.217a1.479 1.479 0 001.443-1.176l2.06-10a1.467 1.467 0 00-.301-1.233zm-3.2 10.931H7.946l-2.06-10h22.64z"
        />
        <!-- eslint-enable max-len -->
      </svg>
    </nuxt-link>
  </nav>
</template>

<script lang="ts">
// TODO: Make the bubbles dynamic
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TheHeaderCarts extends Vue {}
</script>

<style scoped>
.bubble {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  margin-right: -0.75rem;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 100%;
}
</style>
