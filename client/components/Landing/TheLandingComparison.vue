<template>
  <section
    class="relative py-20 bg-left bg-no-repeat bg-cover xl:bg-contain xl:bg-right"
    :style="`background-image: ${backgroundImageStyle};`"
  >
    <div class="container px-5 md:px-0" style="overflow-x:auto;">
      <table class="lg:w-7/12">
        <thead>
          <tr>
            <th></th>
            <th>Base</th>
            <th>Touch</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Stärke</th>
            <td>3,8 mm</td>
            <td>4 mm</td>
          </tr>
          <tr>
            <th>Dielenformat</th>
            <td>1290 x 173 mm</td>
            <td>638 x 310<br />1290 x 173 mm</td>
          </tr>
          <tr>
            <th>Umlaufende Fase</th>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
          </tr>
          <tr>
            <th>Abriebfest versiegelte ­Oberfläche</th>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
          </tr>
          <tr>
            <th>Garantie auf Abrieb</th>
            <td>10 Jahre</td>
            <td>12 Jahre</td>
          </tr>
          <tr>
            <th>VerlegeSystem EASY LOC</th>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
            <td><HeroIcons class="inline text-gray-900" :type="Icon.CHECK" width-class="w-6" /></td>
          </tr>
          <tr>
            <th>Beanspruchungsklasse</th>
            <td>
              <img class="block w-16 m-auto" :src="baseImageUrl" alt="NK31" title="NK31" />
            </td>
            <td>
              <img class="block w-16 m-auto" :src="touchImageUrl" alt="NK32" title="NK32" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <ProductLinkOnImage to="/products/base/weisseiche-48319" is-right-position>
      Vinylboden Base Weisseiche 48319
    </ProductLinkOnImage>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

import { Icon } from "@/components/Icons/HeroIcons.vue"

@Component
export default class TheLandingComparison extends Vue {
  Icon = Icon

  get backgroundImageStyle() {
    const imageUrl = require("~/assets/images/home/greenvinyl-family-2zu1.jpg")
    return `linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.01)), url(${imageUrl})`
  }

  get baseImageUrl() {
    return require("~/assets/images/products/features/ico-gv-nk-31.svg")
  }

  get touchImageUrl() {
    return require("~/assets/images/products/features/ico-gv-nk-32.svg")
  }
}
</script>

<style scoped>
th,
td {
  padding: 0.75rem;
  font-weight: normal;
  text-align: center;
  border-bottom: 1px solid #edf2f7;
}

thead th {
  color: #007d52;
  font-size: 2.25rem;
}

tbody th {
  text-align: left;
}

tbody td {
  color: #4a5568;
}
</style>
