<template>
  <article>
    <ContentHeader title="Gratismuster">
      Wir möchten Ihnen die Möglichkeit geben, sich unsere Produkte ganz genau ansehen zu können. Deswegen können Sie
      bei uns bis zu 3 Handmuster kostenfrei nach Hause bestellen, um diese direkt in den eigenen vier Wänden auf sich
      wirken zu lassen.
    </ContentHeader>

    <!-- TODO: Switch this to a own cart component -->
    <section id="cart-user-info" class="py-32 mt-8 bg-green-100">
      <div class="container">
        <p class="max-w-4xl text-2xl">
          Ihr Musterkorb ist leer. Sie können bis zu <strong>3 Handmuster kostenfrei</strong> nach Hause bestellen.
        </p>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import ContentHeader from "@/components/UI/ContentHeader.vue"

@Component({ components: { ContentHeader } })
export default class CartSample extends Vue {}
</script>
