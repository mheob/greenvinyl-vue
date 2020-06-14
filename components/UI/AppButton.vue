<template>
  <button v-if="isButton" class="btn" :class="[variantClass, brightnessClass, classes]"><slot></slot></button>

  <a
    v-else-if="to.startsWith('http') || to.startsWith('//')"
    class="btn"
    :class="[variantClass, brightnessClass, classes]"
    :href="to"
  >
    <slot></slot>
  </a>

  <nuxt-link v-else class="btn" :class="[variantClass, brightnessClass, classes]" :to="to"><slot></slot></nuxt-link>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue"

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

export default Vue.extend({
  props: {
    isButton: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: ""
    } as PropOptions<Variant>,
    brightness: {
      type: String,
      default: ""
    } as PropOptions<Brightness>,
    // TODO: Check if the link is internal --> than "nuxt-link"
    to: {
      type: String,
      default: "/"
    }
  },

  computed: {
    variantClass(): string {
      return this.variant ? "btn-" + this.variant : ""
    },
    brightnessClass(): string {
      return !this.brightness ? "" : `btn-${this.variant ? this.variant + "-" : ""}-${this.brightness}`
    }
  }
})
</script>

<style scoped>
:active {
  outline: none;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-align: center;
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
