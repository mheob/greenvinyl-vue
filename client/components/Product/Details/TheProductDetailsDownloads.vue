<template>
  <!-- TODO: Get the product details completely dynamic -->
  <AccordionItem>
    <template slot="accordion-trigger">
      <h3>Verlegeinformationen und Downloads</h3>
    </template>
    <template slot="accordion-content">
      <dl class="service">
        <dt class="service__label">
          CLASSEN Greenvinyl - Für gesundes Wohnen<br /><span class="service__category">Catalogue</span>
        </dt>
        <dd class="service__action">
          <AppButton
            class="w-48 text-left"
            to="https://classen-group.com/assets/mediacenter/catalogues/Greenvinyl2020.pdf"
            :variant="Variant.OUTLINE"
            :brightness="Brightness.DARK"
            open-in-new-tab
          >
            <HeroIcons class="inline-block" :type="Icon.DOCUMENT_DOWNLOAD" width-class="w-5" /> Download
          </AppButton>
        </dd>

        <dt class="service__label">
          Verlegeanleitung CLASSEN Vinyl-Bodenbeläge<br /><span class="service__category">Laying Instruction</span>
        </dt>
        <dd class="service__action">
          <AppButton
            class="w-48 text-left"
            to="https://classen-group.com/assets/mediacenter/laying-instructions/va_classen_vinylboden_02_2018.pdf"
            :variant="Variant.OUTLINE"
            :brightness="Brightness.DARK"
            open-in-new-tab
          >
            <HeroIcons class="inline-block" :type="Icon.DOCUMENT_DOWNLOAD" width-class="w-5" /> Download
          </AppButton>
        </dd>

        <dt class="service__label">
          CLASSEN Greenvinyl - Animierte Verlegeanleitung<br /><span class="service__category">Video</span>
        </dt>
        <dd class="service__action lg-video">
          <AppButton
            class="w-48 text-left"
            to="https://www.youtube.com/embed/jWp23yf0Fu4?start=3&amp;feature=oembed?"
            :variant="Variant.OUTLINE"
            :brightness="Brightness.DARK"
            open-in-new-tab
          >
            <HeroIcons class="inline-block" :type="Icon.PLAY" width-class="w-5" /> Abspielen
          </AppButton>
        </dd>

        <dt class="service__label">
          CLASSEN Greenvinyl - Verlegefilm<br /><span class="service__category">Video</span>
        </dt>
        <dd class="service__action lg-video">
          <AppButton
            class="w-48 text-left"
            to="ttps://www.youtube.com/embed/kqod3bSsdy4?feature=oembed?"
            :variant="Variant.OUTLINE"
            :brightness="Brightness.DARK"
            open-in-new-tab
          >
            <HeroIcons class="inline-block" :type="Icon.PLAY" width-class="w-5" /> Abspielen
          </AppButton>
        </dd>
      </dl>
    </template>
  </AccordionItem>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import AccordionItem from '~/components/UI/Accordion/AccordionItem.vue'
import { Variant, Brightness } from '~/components/UI/AppButton.vue'
import { Icon } from '~/components/Icons/HeroIcons.vue'

@Component({ components: { AccordionItem } })
export default class TheProductDetailsTechnical extends Vue {
  Variant = Variant
  Brightness = Brightness
  Icon = Icon
}
</script>

<style scoped>
.service {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #000000;
}

.service__label {
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
}

.service__category {
  display: inline-block;
  color: #4a5568;
  font-size: 0.75rem;
}

.service__action {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

@screen lg {
  .service {
    flex-direction: row;
  }

  .service__label {
    width: calc(100% - 16rem);
    padding: 1rem 2rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .service__action {
    width: 16rem;
    padding: 1rem 2rem;
    text-align: right;
  }
}
</style>
