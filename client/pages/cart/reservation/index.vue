<template>
  <article>
    <ContentHeader title="Produkt-Reservierung">
      Sie können <strong>CLASSEN Greenvinyl</strong> Produkte online reservieren und diese direkt im Geschäft unserer
      Partner abholen. Dieser Service ist absolut kostenlos, die Bezahlung erfolgt im Geschäft direkt vor Ort.
    </ContentHeader>

    <!-- TODO: Switch this to a own cart component -->
    <section id="cart-user-info" class="py-32 mt-8 bg-green-100">
      <div class="container">
        <p class="max-w-4xl text-2xl">
          Ihr Warenkorb ist noch leer. Bitte fügen Sie Produkte hinzu, um diese bei einem unserer Fachhändler zu
          reservieren.
        </p>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component
export default class CartReservation extends Vue {}
</script>
