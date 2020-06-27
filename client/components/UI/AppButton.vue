<template>
  <button
    v-if="isButton"
    class="btn"
    :class="[
      variantClass,
      brightnessClass,
      deactivateTransformation,
      overwriteDisplay ? overwriteDisplay : 'inline-block'
    ]"
  >
    <slot />
  </button>

  <a
    v-else-if="to && (to.startsWith('http') || to.startsWith('//'))"
    class="btn"
    :class="[
      variantClass,
      brightnessClass,
      deactivateTransformation,
      overwriteDisplay ? overwriteDisplay : 'inline-block'
    ]"
    :href="to"
    :target="openInNewTab ? '_blank' : '_self'"
  >
    <slot />
  </a>

  <nuxt-link
    v-else
    class="btn"
    :class="[
      variantClass,
      brightnessClass,
      deactivateTransformation,
      overwriteDisplay ? overwriteDisplay : 'inline-block'
    ]"
    :to="to"
  >
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator"

export enum Variant {
  BUTTON = "",
  LINK = "link",
  OUTLINE = "outline"
}

export enum Brightness {
  DEFAULT = "",
  DARK = "dark",
  LIGHT = "light"
}

@Component
export default class AppButton extends Vue {
  @Prop({ type: Boolean, default: false }) readonly isButton!: Boolean
  @Prop(String) readonly variant?: Variant
  @Prop(String) readonly brightness?: Brightness
  @Prop(String) readonly to?: String
  @Prop({ type: Boolean, default: false }) readonly noTransform!: Boolean
  @Prop({ type: Boolean, default: false }) readonly openInNewTab!: Boolean
  @Prop(String) readonly overwriteDisplay?: String

  get variantClass(): string {
    return this.variant ? "btn-" + this.variant : ""
  }

  get brightnessClass(): string {
    return !this.brightness ? "" : `btn-${this.variant ? this.variant + "-" : ""}-${this.brightness}`
  }

  get deactivateTransformation(): string {
    return this.noTransform ? "btn--no-transform" : ""
  }
}
</script>

<style scoped>
:active {
  outline: none;
}

.btn {
  padding: 0.5rem 1rem;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(1px);
}

.btn:disabled {
  cursor: not-allowed;
}

.btn--no-transform:hover,
.btn--no-transform:active {
  transform: translateY(0);
}

.btn--dark {
  color: #fff;
  background-color: #007d52;
}

.btn--dark:hover {
  background-color: #005035;
}

.btn--dark:disabled {
  /* bg-green-400 => #2e9471 */
  /* bg-green-500 => #007d52 */
  background: repeating-linear-gradient(-55deg, #2e9471, #2e9471 10px, #007d52 10px, #007d52 20px);
}

.btn--light {
  color: #007d52;
  background-color: #fff;
  border: 1px solid #fff;
}

.btn--light:hover {
  color: #fff;
  background-color: transparent;
}

.btn-outline {
  border-style: solid;
  border-width: 1px;
}

.btn-outline--dark {
  color: #007d52;
  background-color: transparent;
  border-color: #007d52;
}

.btn-outline--dark:hover {
  color: #fff;
  background-color: #007d52;
}

.btn-outline--light {
  color: #fff;
  background-color: transparent;
  border-color: #fff;
}

.btn-outline--light:hover {
  color: #007d52;
  background-color: #fff;
}

.btn-link {
  /* width: auto; */
  padding-right: 0.25rem;
  padding-bottom: 1px;
  padding-left: 0.25rem;
  border-bottom-width: 3px;
}

.btn-link--dark {
  color: #007d52;
  border-color: #007d52;
}

.btn-link--dark:hover {
  color: #005035;
  border-color: #005035;
}

.btn-link--light {
  color: #f6fbf4;
  border-color: #f6fbf4;
}

.btn-link--light:hover {
  color: #ecf6e7;
  border-color: #ecf6e7;
}

@screen md {
  .btn-lg {
    font-size: 1.5rem;
  }

  .btn-xl {
    font-size: 1.875rem;
  }
}
</style>
