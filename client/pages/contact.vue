<template>
  <article class="container grid gap-4 py-12 md:gap-16 lg:pt-32 gid-cols-1 lg:grid-cols-12 xl:gap-24">
    <TheContactForm />

    <TheContactSideBoxes />
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import TheContactForm from '~/components/Contact/TheContactForm.vue'
import TheContactSideBoxes from '~/components/Contact/TheContactSideBoxes.vue'

@Component({ components: { TheContactForm, TheContactSideBoxes } })
export default class Contact extends Vue {}
</script>
