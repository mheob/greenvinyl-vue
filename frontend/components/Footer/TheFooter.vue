<template>
  <footer class="text-white">
    <TheFooterCallToAction />

    <section class="py-10 text-sm bg-green-900">
      <div class="container flex flex-col items-center justify-between lg:flex-row">
        <a href="/"><BrandLogo width-class="w-56"/></a>
        <TheFooterNavigation />
      </div>
    </section>
  </footer>
</template>

<script>
import TheFooterCallToAction from "@/components/Footer/TheFooterCallToAction"
import BrandLogo from "@/components/Icons/BrandLogo"
import TheFooterNavigation from "@/components/Footer/TheFooterNavigation"

export default {
  components: {
    TheFooterCallToAction,
    BrandLogo,
    TheFooterNavigation
  }
}
</script>
