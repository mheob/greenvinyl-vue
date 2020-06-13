<template>
  <header class="w-full py-5 bg-white shadow-sm lg:fixed lg:h-20">
    <div class="container flex flex-col items-center justify-between lg:flex-row">
      <a class="w-64" href="/"><BrandLogo use-brand-color/></a>
      <TheHeaderNavigation />
      <TheHeaderCarts />
    </div>
  </header>
</template>

<script>
import BrandLogo from "@/components/Icons/BrandLogo"
import TheHeaderNavigation from "@/components/Header/TheHeaderNavigation"
import TheHeaderCarts from "@/components/Header/TheHeaderCarts"

export default {
  name: "TheHeader",
  components: {
    BrandLogo,
    TheHeaderNavigation,
    TheHeaderCarts
  }
}
</script>
