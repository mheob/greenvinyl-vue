<template>
  <div class="form-side-box">
    <h3 class="text-base tracking-widest text-green-500 uppercase">{{ title }}</h3>

    <p v-if="type === SideBoxType.TEXT" class="mt-4 leading-relaxed">
      <slot />
    </p>

    <div v-if="type === SideBoxType.LIST && list" class="mt-4">
      <div v-for="row in list" :key="row.id" class="flex mt-4">
        <div class="icon"><HeroIcons :type="row.icon" width-class="w-5" /></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="content" v-html="row.content"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

interface List {
  id: string
  icon: string
  content: string
}

export enum SideBoxType {
  LIST,
  TEXT
}

@Component
export default class FormInput extends Vue {
  @Prop(Array) readonly list?: List[]
  @Prop({ type: String, required: true }) readonly title!: String
  @Prop({ type: Number, default: SideBoxType.TEXT }) readonly type!: SideBoxType

  SideBoxType = SideBoxType
}
</script>

<style scoped>
a:hover {
  opacity: 0.75;
}

.form-side-box {
  margin-top: 2rem;
  padding: 2rem;
  background-color: #ecf6e7;
}

.form-side-box:first-of-type {
  margin-top: 0;
}

.icon {
  width: 2rem;
  opacity: 0.67;
}

.content {
  width: calc(100% - 2rem);
}
</style>
