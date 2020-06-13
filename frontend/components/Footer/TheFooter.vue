<template>
  <footer class="py-10 text-sm text-white bg-green-500">
    <div class="container flex flex-col items-center justify-between lg:flex-row">
      <div class="w-56">
        <BrandLogo />
      </div>
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
