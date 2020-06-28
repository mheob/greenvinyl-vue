<template>
  <AccordionItem>
    <template slot="accordion-trigger">
      <h3>Technische Daten</h3>
    </template>
    <template slot="accordion-content">
      <div class="grid gap-4 gid-cols-1 lg:grid-cols-2 lg:gap-8">
        <div class="p-4 lg:p-8">
          <dl class="datasheet">
            <dt>Art.-Nr.</dt>
            <dd>{{ product.sap }}</dd>
            <dt>Dekor</dt>
            <dd>{{ product.name }}</dd>
            <dt>Style</dt>
            <dd>{{ product.optics }}</dd>
            <dt>Abmessung</dt>
            <dd>{{ product.length }} x {{ product.width }} x {{ product.thickness }} mm</dd>
            <dt>Fase</dt>
            <dd>{{ product.fase }}</dd>
            <dt>Beanspruchungskl.</dt>
            <dd>{{ product.stressClass }}</dd>
            <dt>Kollektion</dt>
            <dd>{{ product.collection | upperFirstChar }}</dd>
          </dl>

          <!-- TODO: Get feature icons etc. from database and loop through -->
          <div class="flex flex-wrap justify-between mt-4 xl:justify-start">
            <figure class="mt-4 mr-8">
              <img
                class="h-20 m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_garantie_10jahre.svg"
                :alt="product.guarantee"
                :title="product.guarantee"
              />
              <figcaption class="mt-1 text-sm text-center">{{ product.guarantee }}</figcaption>
            </figure>
            <figure class="mt-4 mr-8">
              <img
                class="h-20 m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_fase_4v.svg"
                :alt="product.fase"
                :title="product.fase"
              />
              <figcaption class="mt-1 text-sm text-center">{{ product.fase }}</figcaption>
            </figure>
            <figure class="mt-4 mr-8">
              <img
                class="h-20 m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_nk_31.svg"
                :alt="product.stressClass"
                :title="product.stressClass"
              />
              <figcaption class="mt-1 text-sm text-center">{{ product.stressClass }}</figcaption>
            </figure>
            <figure class="mt-4 mr-8">
              <img
                class="h-20 m-auto"
                src="https://classen-group.test/assets/products/icons/features/set2/ico_gv_ohne_pvc.svg"
                :alt="product.puttingSystem"
                :title="product.puttingSystem"
              />
              <figcaption class="mt-1 text-sm text-center">{{ product.puttingSystem }}</figcaption>
            </figure>
          </div>
        </div>

        <div>
          <!-- eslint-disable max-len -->
          <img
            class="object-cover object-center w-full h-full"
            src="https://classen-group.com/assets/products/decors/_768x432_crop_center-center_90_none/48320_DK7873f01_bannette_mF_1S_df_DET.jpg"
            :alt="product.decor ? product.decor.replace(/_/g, ' ') : ''"
          />
          <!-- eslint-enable max-len -->
        </div>
      </div>
    </template>
  </AccordionItem>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

import AccordionItem from "~/components/UI/Accordion/AccordionItem.vue"
import { Product } from "~/models"

@Component({ components: { AccordionItem } })
export default class TheProductDetailsTechnical extends Vue {
  @Prop({ type: Object, required: true }) readonly product!: Product
}
</script>

<style scoped>
.datasheet {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.datasheet dt {
  padding-top: 1rem;
  color: #718096;
  font-size: 0.875rem;
}

.datasheet dd {
  padding-bottom: 1rem;
  border-bottom-width: 1px;
}

.datasheet dt,
.datasheet dd {
  padding-left: 1rem;
}

@screen lg {
  .datasheet {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .datasheet dt,
  .datasheet dd {
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 1rem;
    border-bottom-width: 1px;
  }
}
</style>
