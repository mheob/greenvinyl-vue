<template>
  <section class="py-24 bg-green-500 bg-center bg-cover lg:py-40 bg-image">
    <div class="container text-center">
      <h2 class="text-xl lg:text-3xl">
        Unsere Gratis Beratungs-Hotline:
        <a class="whitespace-no-wrap hover:opacity-75" href="tel:08001133313">0800 11 33 313</a>
      </h2>
      <p class="mt-5 font-thin lg:text-lg">(Mo-Do 09:00 &ndash; 16:00 Uhr, Fr 09:00 &ndash; 12:30 Uhr)</p>
      <div class="mt-10 space-y-4 lg:space-x-4">
        <AppButton classes="inline-block shadow-md w-3/4 lg:w-auto" button-brightness="light" to="/retailer">
          Händler suchen
        </AppButton>
        <AppButton
          classes="inline-block shadow-md w-3/4 lg:w-auto"
          button-style="outline"
          button-brightness="light"
          to="/#greenvinyl-base"
        >
          Produkte anzeigen
        </AppButton>
        <AppButton classes="inline-block shadow-md w-3/4 lg:w-auto" button-brightness="light" to="/kontakt">
          Infos anfordern
        </AppButton>
      </div>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/AppButton"

export default {
  components: {
    AppButton
  }
}
</script>

<style scoped>
.bg-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("~assets/images/ci/greenvinyl-blaetter.png");
}
</style>
