<!-- eslint-disable max-len -->
<template>
  <svg class="fill-current" :class="[colorClass, widthClass]" viewBox="0 0 20 20">
    <path
      v-if="type === Icon.CHECK"
      fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clip-rule="evenodd"
    ></path>

    <path
      v-if="type === Icon.CLOCK"
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11
      9.586V6z"
      clip-rule="evenodd"
    ></path>

    <path
      v-if="type === Icon.DOCUMENT_DOWNLOAD"
      fill-rule="evenodd"
      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
      clip-rule="evenodd"
    ></path>

    <path
      v-if="type === Icon.LOCATION_MARKER"
      fill-rule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clip-rule="evenodd"
    ></path>

    <path v-if="type === Icon.MAIL" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path v-if="type === Icon.MAIL" d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>

    <path
      v-if="type === Icon.PHONE"
      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
    ></path>

    <path
      v-if="type === Icon.PLAY"
      fill-rule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clip-rule="evenodd"
    ></path>

    <path
      v-if="type === Icon.PRINTER"
      fill-rule="evenodd"
      d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
      clip-rule="evenodd"
    ></path>
  </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

export enum Icon {
  CHECK,
  CLOCK,
  DOCUMENT_DOWNLOAD,
  LOCATION_MARKER,
  MAIL,
  PHONE,
  PLAY,
  PRINTER
}

@Component
export default class HeroIcons extends Vue {
  @Prop(String) readonly colorClass?: String
  @Prop({ type: Number, required: true }) readonly type!: Icon
  @Prop({ type: String, default: 'w-auto' }) readonly widthClass!: String

  Icon = Icon
}
</script>
