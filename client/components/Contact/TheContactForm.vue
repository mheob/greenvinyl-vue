<template>
  <section class="px-4 lg:col-span-7 lg:px-0">
    <h1 class="text-5xl leading-none text-green-500">Kontakt</h1>
    <p class="mt-8">
      Sie vermissen auf unserer Website Informationen rund um unsere Produkte oder haben Rückfragen zu unseren
      Produkten? Dann nennen Sie uns Ihre Kontaktdaten (Pflichtfelder sind mit einem
      <span class="text-yellow-700">*</span> markiert) und wir melden uns bei Ihnen.
    </p>

    <form class="mt-4">
      <div class="flex flex-col -mx-3 md:flex-row">
        <FormInput classes-element="flex-1 px-3 mt-5" classes-input="w-full" name="firstName" label="Vorname" />
        <FormInput
          classes-element="flex-1 px-3 mt-5"
          classes-input="w-full"
          name="lastName"
          label="Nachname"
          required
        />
      </div>

      <div class="flex flex-col -mx-3 md:flex-row">
        <FormInput
          classes-element="flex-1 px-3 mt-5"
          classes-input="w-full"
          name="email"
          label="E-Mail"
          :type="FormInputType.EMAIL"
          required
        />
        <FormInput classes-element="flex-1 px-3 mt-5" classes-input="w-full" name="companyName" label="Firma" />
      </div>

      <div class="flex flex-col -mx-3 md:flex-row">
        <div class="flex-1 px-3 mt-5">
          <label for="form-input-country" class="sr-only">Land</label>
          <select id="form-input-country" class="w-full form-select" name="country">
            <option value="">Land wählen</option>
            <option value="Germany">Deutschland</option>
            <option value="Austria">Österreich</option>
            <option value="Luxembourg">Luxemburg</option>
            <option value="Switzerland">Schweiz</option>
          </select>
        </div>
        <FormInput classes-element="flex-1 px-3 mt-5" classes-input="w-full" name="zipCode" label="PLZ" />
        <FormInput classes-element="flex-1 px-3 mt-5" classes-input="w-full" name="city" label="Ort" />
      </div>

      <div class="flex flex-col -mx-3 md:flex-row">
        <FormInput classes-element="flex-1 px-3 mt-5" classes-input="w-full" name="street" label="Straße" />
        <FormInput
          classes-element="flex-1 px-3 mt-5"
          classes-input="w-full"
          name="phone"
          label="Telefon"
          :type="FormInputType.TEL"
        />
      </div>

      <div class="mt-5">
        <label for="form-input-message" class="sr-only">Nachricht</label>
        <textarea
          id="form-input-message"
          class="w-full form-textarea"
          name="message"
          rows="5"
          placeholder="Nachricht"
          required
        ></textarea>
      </div>

      <FormInput
        classes-element="mt-5"
        classes-input="mr-3"
        name="productSample"
        label="Bitte senden Sie mir unverbindlich zwei Materialmuster zu."
        :type="FormInputType.CHECKBOX"
      />

      <p class="mt-5">
        (Wenn Sie einen bestimmten Dekorwunsch haben, dann teilen Sie uns diesen bitte im Nachrichtenfeld mit.)
      </p>

      <FormInput
        classes-element="mt-5"
        classes-input="mr-3"
        name="privacy"
        label="Datenschutz"
        :type="FormInputType.CHECKBOX"
        required
      />

      <p class="mt-5">
        Gemäß geltendem Datenschutz möchten wir Sie über unsere Datenverarbeitung aufklären. Dies entnehmen Sie bitte
        der <nuxt-link class="underline hover:opacity-50" to="/privacy">Datenschutzerklärung</nuxt-link>. Sollten Sie
        mit der Verarbeitung gemäß unserer Datenschutzerklärung einverstanden sein, aktivieren sie bitte das
        Auswahlkästchen.
      </p>

      <AppButton class="mt-5" :brightness="Brightness.DARK" is-button type="submit">Abschicken</AppButton>
    </form>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"

import FormInput, { FormInputType } from "~/components/Form/FormInput.vue"
import { Brightness, Variant } from "~/components/UI/AppButton.vue"

@Component({ components: { FormInput } })
export default class TheContactForm extends Vue {
  FormInputType = FormInputType
  Brightness = Brightness
  Variant = Variant
}
</script>
