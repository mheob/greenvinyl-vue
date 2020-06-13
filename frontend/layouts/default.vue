<template>
  <div class="page">
    <TheHeader />
    <main class="pt-8 bg-green-100 lg:pt-24">
      <nuxt />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Header/TheHeader"
import TheFooter from "@/components/Footer/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
