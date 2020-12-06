<template>
  <section class="mt-12">
    <form class="flex flex-col md:flex-row" @submit.prevent>
      <div class="flex flex-wrap w-full">
        <div
          class="flex items-center justify-end w-1/2 whitespace-no-wrap border-4 border-r-2 border-green-500 xl:w-auto"
        >
          <span class="w-20 px-0 text-xl text-right cursor-default">{{ product.basePriceGross }}</span>
          <span class="pl-2 pr-3 cursor-default">€/{{ product.basePriceUnit }}</span>
        </div>

        <div class="flex items-center w-1/2 bg-white border-4 border-l-2 border-green-500 xl:w-auto">
          <!-- eslint-disable max-len -->
          <input
            v-model="quantity"
            class="w-full pl-2 pr-0 text-xl text-right border-none shadow-none form-input hover:shadow-none focus:shadow-none"
            type="number"
            min="0"
            max="999"
            maxlength="3"
            autofocus
            @keypress="validateInput"
          />
          <!-- eslint-enable max-len -->
          <span class="pl-2 pr-3">{{ product.packagingUnitUnit }}</span>
        </div>

        <AppButton
          class="w-full px-4 py-3 text-xl whitespace-no-wrap btn btn-button-dark form-item xl:w-auto"
          :disabled="!canOrder"
          :brightness="Brightness.DARK"
          :variant="Variant.BUTTON"
          is-button
          no-transform
        >
          {{ buttonText }}
        </AppButton>
      </div>
    </form>

    <div class="mt-3 text-sm">
      {{ packagingUnit }} à {{ pricePerPackagingUnit | digits(2) }} € (ca. {{ product.packagingUnitContent }}
      {{ product.packagingUnitUnit }})
      <span v-if="priceTotalInformation" class="font-semibold">{{ priceTotalInformation }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'

import { Brightness, Variant } from '~/components/UI/AppButton.vue'
import { localeNumberFormat, validateNumericInput } from '~/utils'
import { Product } from '~/models'

@Component
export default class TheProductReservation extends Vue {
  @Prop({ type: Object, required: true }) readonly product!: Product

  Brightness = Brightness
  Variant = Variant

  quantity: number | string = ''
  isInCart = false
  canOrder = false

  get packagingUnit() {
    if (!this.product.packagingUnit) return
    return this.product.packagingUnit.split('|')[0]
  }

  get pricePerPackagingUnit() {
    if (!this.product.basePriceGross || !this.product.packagingUnitContent) return
    const basePrice = +this.product.basePriceGross.replace(/,/i, '.')
    const packagingUnitContent = +this.product.packagingUnitContent.replace(/,/i, '.')
    return basePrice * packagingUnitContent
  }

  get priceTotalInformation() {
    if (!this.quantity || this.quantity < 1 || this.quantity > 999) return
    if (!this.product.packagingUnitContent || !this.product.packagingUnit || !this.product.basePriceGross) return
    const unitContent = +this.product.packagingUnitContent.replace(/,/i, '.')
    const basePrice = +this.product.basePriceGross.replace(/,/i, '.')
    const itemOrderQuantity = Math.ceil(+this.quantity / unitContent)
    const itemUnit = this.product.packagingUnit.split('|')
    const unit = itemOrderQuantity > 1 ? itemUnit[2] : itemUnit[0]
    const contentValueTotal = localeNumberFormat(itemOrderQuantity * unitContent)
    const itemPriceTotal = localeNumberFormat(basePrice * unitContent * itemOrderQuantity)
    return ` | ${itemOrderQuantity} ${unit} (${contentValueTotal} m² / ${itemPriceTotal} €)`
  }

  get buttonText() {
    if (this.canOrder) {
      if (this.quantity! < 1) {
        return 'Aus Warenkorb entfernen'
      } else {
        return this.isInCart ? 'Menge aktualisieren' : 'In den Warenkorb'
      }
    } else {
      return 'Menge eingeben'
    }
  }

  validateInput(event: KeyboardEvent) {
    validateNumericInput(event)
  }

  @Watch('quantity') onQuantityChange() {
    // TODO: Check if the article is in cart.
    if (this.quantity === '') this.canOrder = false
    else this.canOrder = (this.quantity > 0 && this.quantity <= 999) || (this.quantity < 1 && this.isInCart)
  }
}
</script>
