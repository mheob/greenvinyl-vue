<template>
  <ContentHeader title="Händlersuche">
    Finden Sie einfach und schnell einen CLASSEN Greenvinyl-Partner in Ihrer Nähe und lassen Sie sich zu dem
    umfangreichen Produktsortiment beraten. Geben Sie dazu in das Suchfeld Ihren Wohnort oder die PLZ ein.
    <div slot="additional" class="mt-10">
      <form class="flex flex-col text-black md:flex-row">
        <input
          name="zipcode"
          type="text"
          class="rounded-none form-input md:mr-px"
          placeholder="PLZ oder Ort ..."
          value="56626"
        />

        <select v-model="selected" name="range" class="rounded-none form-select md:w-auto">
          <option v-for="radius in radiuses" :key="radius" :value="radius">Umkreis {{ radius }} km</option>
        </select>

        <AppButton type="submit" is-button no-transform class="text-white bg-green-900 no-transform">
          Suchen
        </AppButton>
      </form>

      <p class="mt-5 text-sm leading-normal tracking-wide">
        Es wurden 7 CLASSEN Greenvinyl-Partner in Ihrer Nähe gefunden.
      </p>
    </div>
  </ContentHeader>
</template>

<script lang="ts">
import Vue from "vue"

import AppButton from "@/components/UI/AppButton.vue"
import ContentHeader from "@/components/UI/ContentHeader.vue"

export default Vue.extend({
  components: {
    AppButton,
    ContentHeader
  },

  data() {
    return {
      selected: "30",
      radiuses: ["10", "15", "30", "50", "75"]
    }
  }
})
</script>
