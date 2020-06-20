<template>
  <article class="container grid gap-4 py-12 md:gap-16 lg:pt-32 gid-cols-1 lg:grid-cols-12 xl:gap-24">
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
          <div class="flex-1 px-3 mt-5 ">
            <label for="form-input-country" class="sr-only">Land</label>
            <select id="form-input-country" class="w-full form-select" name="country">
              <option value="">Land auswählen</option>
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
          name="productSamples"
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

    <section class="px-4 mt-16 lg:col-span-5 lg:px-0 lg:mt-0">
      <FormSideBox title="Adresse" :type="SideBoxType.LIST" :list="address" />
      <FormSideBox title="Rufen Sie uns an" :type="SideBoxType.LIST" :list="callUs" />
      <FormSideBox title="Un­ser Rück­ruf­ser­vice">
        Wir rufen Sie auch gerne zurück. Vereinbaren Sie einfach einen Zeitpunkt für unsere telefonische Beratung über
        unten stehendes Kontaktformular.
      </FormSideBox>
    </section>
  </article>
</template>

<script lang="ts">
import Vue from "vue"

import FormInput, { FormInputType } from "@/components/Form/FormInput.vue"
import FormSideBox, { SideBoxType } from "@/components/Form/FormSideBox.vue"
import { Icon } from "@/components/Icons/HeroIcons.vue"
import AppButton, { Brightness, Variant } from "@/components/UI/AppButton.vue"

export default Vue.extend({
  components: {
    AppButton,
    FormInput,
    FormSideBox
  },

  data() {
    return {
      FormInputType,
      SideBoxType,
      Brightness,
      Variant,
      address: [
        {
          id: "1",
          icon: Icon.LOCATION_MARKER,
          content:
            "W. Classen GmbH &amp; Co. KG<br />Werner-von­-Siemens­-Straße 18–20,<br />56759 Kaisersesch (Germany)"
        },
        {
          id: "2",
          icon: Icon.PHONE,
          content: "<a class='whitespace-no-wrap hover:opacity-50' href='tel:+4926539800'>+49 2653 980 0</a>"
        },
        {
          id: "3",
          icon: Icon.PRINTER,
          content: "<span class='whitespace-no-wrap'>+49 2653 980 4484</span>"
        },
        {
          id: "4",
          icon: Icon.MAIL,
          content: "<a class='hover:opacity-50' href='mailto:info@classen.de'>info@classen.de</a>"
        }
      ],
      callUs: [
        {
          id: "1",
          icon: Icon.PHONE,
          content:
            // eslint-disable-next-line max-len
            "<a class='whitespace-no-wrap hover:opacity-50' href='tel:08001133313'>0800 11 33 313</a>"
        },
        {
          id: "2",
          icon: Icon.CLOCK,
          content:
            // eslint-disable-next-line max-len
            "(Mo&ndash;Do 09:00 &ndash; 16:00 Uhr, Fr 09:00 &ndash; 12:30 Uhr)<span class='inline-block mt-2 text-xs'>Diese Rufnummer ist aus dem deutschen Festnetz kostenlos.</span>"
        }
      ]
    }
  }
})
</script>
