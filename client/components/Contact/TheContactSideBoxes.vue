<template>
  <section class="px-4 mt-16 lg:col-span-5 lg:px-0 lg:mt-0">
    <FormSideBox title="Adresse" :type="SideBoxType.LIST" :list="contactData.address" />
    <FormSideBox title="Rufen Sie uns an" :type="SideBoxType.LIST" :list="contactData.callUs" />
    <FormSideBox title="Un­ser Rück­ruf­ser­vice">
      Wir rufen Sie auch gerne zurück. Vereinbaren Sie einfach einen Zeitpunkt für unsere telefonische Beratung über
      unten stehendes Kontaktformular.
    </FormSideBox>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import FormSideBox, { SideBoxType } from '~/components/Form/FormSideBox.vue'
import contactData from '~/data/contactData.json'

@Component({ components: { FormSideBox } })
export default class TheContactSideBoxes extends Vue {
  SideBoxType = SideBoxType
  contactData = contactData
}
</script>
