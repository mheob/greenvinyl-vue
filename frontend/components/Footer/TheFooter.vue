<template>
  <footer class="py-10 text-sm text-white bg-green-900">
    <div class="container flex flex-col items-center justify-between lg:flex-row">
      <a href="/"><BrandLogo width-class="w-56"/></a>
      <TheFooterNavigation />
    </div>
  </footer>
</template>

<script>
import BrandLogo from "@/components/Icons/BrandLogo"
import TheFooterNavigation from "@/components/Footer/TheFooterNavigation"

export default {
  name: "TheFooter",
  components: {
    BrandLogo,
    TheFooterNavigation
  }
}
</script>
