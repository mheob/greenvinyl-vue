<template>
  <div class="page">
    <TheHeader />
    <main class="py-12 bg-green-100 lg:pt-40 lg:pb-20">
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
