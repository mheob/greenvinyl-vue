<template>
  <a v-if="isAnchor" class="btn" :class="[classes, buttonStyleClass, buttonBrightnessClass]" :href="to">
    <slot></slot>
  </a>
  <button v-else class="btn" :class="[classes, buttonStyleClass, buttonBrightnessClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isAnchor: {
      type: Boolean,
      default: true
    },
    classes: {
      type: String,
      default: ""
    },
    buttonStyle: {
      type: String, // (NULL, outline, link)
      default: null
    },
    buttonBrightness: {
      type: String, // (NULL, dark, light)
      default: null
    },
    // TODO: Check if the link is internal --> than "nuxt-link"
    to: {
      type: String,
      default: "/"
    }
  },

  computed: {
    buttonStyleClass() {
      return this.buttonStyle ? "btn-" + this.buttonStyle : ""
    },
    buttonBrightnessClass() {
      if (!this.buttonBrightness) {
        return
      }

      return `btn-${this.buttonStyle ? this.buttonStyle + "-" : ""}-${this.buttonBrightness}`
    }
  }
}
</script>

<style scoped>
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
